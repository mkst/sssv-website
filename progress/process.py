import argparse
import csv
import json
import os
import time

from pathlib import Path
from dataclasses import dataclass, asdict


@dataclass
class Section:
    section: str
    c_bytes: int = 0
    total_bytes: int = 0
    c_functions: int = 0
    total_functions: int = 0

    @property
    def percent(self) -> float:
        if self.total_bytes == 0:
            return 0.0
        return round(100 * self.c_bytes / self.total_bytes, 4)

    # asdict does not include properties
    def to_dict(self):
        return {
            "section": self.section,
            "c": self.c_bytes,
            "total": self.total_bytes,
            "c_functions": self.c_functions,
            "total_functions": self.total_functions,
            "percent": self.percent,
        }


def build_summary(progress):
    res = []

    for version, version_sections in progress.items():
        sections = []

        summary = Section("all")
        sections.append(summary)

        for version_section in version_sections.values():
            summary.c_bytes += version_section.c_bytes
            summary.total_bytes += version_section.total_bytes
            summary.c_functions += version_section.c_functions
            summary.total_functions += version_section.total_functions
            sections.append(version_section)

        res.append({"version": version, "sections": [s.to_dict() for s in sections]})

    return res


def parse_progress_file(in_file, filter_version=None, filter_section=None):
    progress = {}

    with open(in_file, newline="") as csvfile:
        print("Parsing", in_file)
        reader = csv.DictReader(csvfile)
        # version,section,filename,function,offset,length,language
        for row in reader:
            # SANITY: protect against concatenated input
            if row["version"] == "version":
                continue
            version = row["version"]
            section = row["section"]
            # skip
            if filter_version and version != filter_version:
                continue
            if filter_section and section != filter_section:
                continue
            # setup dictionaries
            progress.setdefault(version, {}).setdefault(section, Section(section))
            # process the row data
            language = row["language"]
            length = int(row["length"])
            if language == "c":
                progress[version][section].c_bytes += length
                progress[version][section].c_functions += 1
            progress[version][section].total_bytes += length
            progress[version][section].total_functions += 1
    return progress


def parse_dir(in_dir: Path, filter_version="all", filter_section="all"):
    commits = []
    for filename in in_dir.glob("*.csv"):
        try:
            git_hash, commit_date, _ = filename.name.split(".")
            commit_date = int(commit_date)
        except ValueError:
            git_hash = "foo"
            commit_date = int(time.time())

        commits.append(
            {
                "date": commit_date,
                "hash": git_hash,
                "progress": build_summary(
                    parse_progress_file(filename, filter_version, filter_section)
                ),
            }
        )
    # sort based on date here to save doing it in javascript
    return list(sorted(commits, key=lambda x: x["date"]))


def write_badge_file(out_dir: Path, version: str, percent: float):
    version_filename = out_dir / f"{version}.json"
    print(f"Writing {version_filename}")
    with open(version_filename, "w", encoding="utf-8") as o:
        json.dump(
            {
                "label": version,
                "color": "blue",
                "message": f"{percent:.2f}%",
            },
            o,
        )


def main():
    parser = argparse.ArgumentParser(
        description="Process progress csvs into a summary json file",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Example:
python process.py progress/ output/ --version us --section main
""",
    )
    parser.add_argument(
        "in_dir", type=Path, help="source directory containing progress CSV file(s)"
    )
    parser.add_argument(
        "out_dir", type=Path, help="directory to output json summary to"
    )
    parser.add_argument(
        "--version", type=str, help="optional version filter (e.g us/eu)"
    )
    parser.add_argument(
        "--section",
        type=str,
        help="optional section filter (e.g main/lib/overlay1/overlay2)",
    )
    args = parser.parse_args()

    commits = parse_dir(args.in_dir, args.version, args.section)
    commits_filename = args.out_dir / "commits.json"
    with open(commits_filename, "w", encoding="utf-8") as o:
        print(f"Writing {commits_filename}")
        json.dump({"commits": commits}, o)

    if commits:
        latest = commits[-1]
        latest_filename = args.out_dir / "latest.json"
        print(f"Writing {latest_filename}")
        with open(latest_filename, "w", encoding="utf-8") as o:
            json.dump(latest, o)

        for entry in latest.get("progress", []):
            version = entry.get("version")
            if version is None:
                continue
            for section in entry.get("sections", []):
                if section.get("section") == "all":
                    percent = section.get("percent")
                    if percent is not None:
                        write_badge_file(args.out_dir, version, percent)


if __name__ == "__main__":
    main()
