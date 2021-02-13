import React, {useState, useEffect} from 'react'

import './Main.scss'

export const MainPage = () => {

  const [latestData, setLatestData] = useState(null)
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    fetch('/latest.json')
    .then(resp => resp.json())
    .then(setLatestData)
  }, [setLatestData])

  useEffect(() => {
    if (latestData === null)
      return;

    const res = latestData.progress.map(version => {
      return (
        <div className="progress">
          <div className="heading">
            <div className="cell left-align bold"></div>
            <div className="cell bold">functions</div>
            <div className="cell bold">bytes</div>
            <div className="cell bold">bytes %</div>
          </div>
        {
          version.sections.map(section => {
            return (
              <div key={section.section} className="row">
                <div className="cell bold">
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

  return <div>
    <div className="title">
      Space Station Silicon Valley Decomp:
    </div>
    {progress}
  </div>
}
