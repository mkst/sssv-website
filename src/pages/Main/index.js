import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2'

import './Main.scss'



export const MainPage = () => {

  const [latestData, setLatestData] = useState(null)
  const [historicData, setHistoricData] = useState(null)

  const [progress, setProgress] = useState(null)
  const [progressChart, setProgressChart] = useState(null)

  useEffect(() => {
    fetch('/latest.json')
    .then(resp => resp.json())
    .then(setLatestData)
  }, [setLatestData])

  useEffect(() => {
    fetch('/commits.json')
    .then(resp => resp.json())
    .then(setHistoricData)
  }, [setHistoricData])

  useEffect(() => {
    if (latestData === null)
      return;

    const res = latestData.progress.map(version => {
      return (
        <div className="progress">
          <div className="heading">
            <div className="cell left-align bold narrow"></div>
            <div className="cell bold">functions</div>
            <div className="cell bold">bytes</div>
            <div className="cell bold">bytes %</div>
          </div>
        {
          version.sections.map(section => {
            return (
              <div key={section.section} className="row">
                <div className="cell bold narrow">
                  {section.section}
                </div>
                <div className="cell">
                  {section.c_functions} / {section.total_functions}
                </div>
                <div className="cell">
                  {section.c} / {section.total}
                </div>
                <div className="cell">
                  {section.percent}%
                </div>
              </div>
            )
          })
        }
        </div>)
    })
    setProgress(res)
  }, [setProgress, latestData])

  const selectedVersion = "us"

  useEffect(() => {

    if (historicData === null)
      return;

    const data = {
        "lib": [],
        "main": [],
        "overlay1": [],
        "overlay2": [],
        "all": []
    }

    const dates = []
    historicData.commits.map(commit => {
      const d = new Date(commit.date * 1000)
      dates.push(d.toISOString().slice(0, 16))
      commit.progress.map(version => {
        if (version.version === selectedVersion) {
          version.sections.map(section => {
            const name = section.section
            if (name === "all") {
              data[name].push(section.total)
            } else {
              data[name].push(section.c)
            }
          })
        }
      })
    })

    const labels = ["main", "lib", "overlay1", "overlay2"]
    const colors = ['rgba(199, 160, 221, 0.5)', 'rgba(221, 168, 160, 0.5)', 'rgba(182, 221, 160, 0.5)', 'rgba(160, 213, 221, 0.5)',]

    const plotData = {
        labels: dates,
        datasets: []
    }

    var idx = 0
    labels.map(label => {
      const d = []
      for (var i = 0; i < data[label].length; i++) {
        d.push(data[label][i] / data["all"][i] * 100)
      }
      const dataset = {
        label: label,
        data: d,
        backgroundColor: colors[idx],
      }
      if (idx == 0) {
        dataset["fill"] = 'origin'
      }
      plotData.datasets.push(dataset)
      idx++
    })

    const options = {
      scales: {
        xAxes: {
            type: 'time',
        },
        yAxes: [
          {
            stacked: true
          },
        ],
      },
      elements: {
          line: {
              fill: '-1' // by default, fill lines to the previous dataset
          }
      },
    }

    setProgressChart(<div className="chart">
      <Line data={plotData} options={options} />
    </div>)

  }, [historicData, selectedVersion])

  return <div className="container">
    <div className="title">
      Space Station Silicon Valley Decomp:
    </div>
    {progress}
    {progressChart}
  </div>
}
