import React, { useEffect, useState } from 'react'

import './Info.scss'

export const InfoPanel = ({ dataHook, selectedHook }) => {
  const [data] = dataHook
  const [selected] = selectedHook

  const [info, setInfo] = useState(null)
  const [description, setDescription] = useState(null)

  useEffect(() => {
    if (data === null) {
      return
    }

    const desired_section = selected === null ? 'all' : selected

    const filtered = data.progress.filter((x) => x.version == 'us')
    if (filtered === null || filtered.length === 0) {
      console.log('Did not find requested version in data')
      return
    }
    const sections = filtered[0].sections

    const section = sections.filter((x) => x.section === desired_section)
    if (section === null || section.length === 0) {
      console.log('Could not find section', desired_section)
      return
    }

    const funcs = section[0].c_functions
    const total_funcs = section[0].total_functions
    const code = section[0].c
    const total_code = section[0].total

    const funcs_percentage = (funcs / total_funcs) * 100
    const code_percentage = (code / total_code) * 100

    setInfo(
      <div>
        <div className="info-panel-entry">
          Functions: {funcs} / {total_funcs} ({funcs_percentage.toFixed(2)}%)
        </div>
        <div className="info-panel-entry">
          Bytes: {code} / {total_code} ({code_percentage.toFixed(2)}%)
        </div>
      </div>
    )
  }, [data, selected])

  useEffect(() => {
    var desc = ''
    if (selected === 'main') {
      desc = 'Initialisation logic'
    } else if (selected === 'lib') {
      desc = 'Library code inc libultra'
    } else if (selected === 'overlay1') {
      desc = 'Introduction code'
    } else if (selected === 'overlay2') {
      desc = 'Core game logic'
    } else {
      desc = 'Total decomp progress'
    }
    setDescription(desc)
  }, [selected])

  const capitalise = (s) => {
    return s && s[0].toUpperCase() + s.slice(1)
  }

  return (
    <div id="info" className="info-panel comic-sans">
      <div className="info-panel-heading comic-sans-bold">
        {selected === null ? 'Overview' : capitalise(selected)}
      </div>
      <div className="info-panel-description">{description}</div>
      <div className="info-panel-data">{info}</div>
    </div>
  )
}
