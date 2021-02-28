import React, {useState, useEffect} from 'react'

import {Header} from '../../components/Header'
import {Donut} from '../../components/Donut'
import {InfoPanel} from '../../panels/Info'

import './Main.scss'


export const MainPage = () => {

  const [latestData, setLatestData] = useState(null)
  const [selected, setSelected] = useState(null)

  // const [historicData, setHistoricData] = useState(null)

  useEffect(() => {
    fetch('/latest.json')
    .then(resp => resp.json())
    .then(setLatestData)
  }, [setLatestData])

  // useEffect(() => {
  //   fetch('/commits.json')
  //   .then(resp => resp.json())
  //   .then(setHistoricData)
  // }, [setHistoricData])

  return (
    <div>
    <div className='wrapper'>
      <div className='stars' />
      <div className='container'>
        <Header />
        <div className='progress'>
          <Donut dataHook={[latestData,]} selectedHook={[selected, setSelected]} />
          <InfoPanel dataHook={[latestData,]} selectedHook={[selected,]} />
        </div>
      </div>
    </div>
    <div className='footer'>
      <a href='https://www.github.com/mkst/sssv/' target='_blank'>GitHub</a>
    </div>
    </div>
  )
}
