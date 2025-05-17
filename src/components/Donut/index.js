import React, {useRef, useEffect } from "react"

import "./Donut.scss"

export const Donut = ({
  dataHook,
  selectedHook
}) => {

  const [data, ] = dataHook
  const [selected, setSelected] = selectedHook

  const DONUT_SIZE = 220

  const canvasRef = useRef(null)

  useEffect(() => {
    if (data === null) {
      return
    }

    const filtered = data.progress.filter(x => x.version == "us")
    if (filtered === null || filtered.length === 0) {
      console.log("did not find requested version in data")
      return
    }
    const sections = filtered[0].sections

    if (sections.length !== 5) {
      console.log("expected 5 sections")
      return
    }

    const proportions = {
      "main": 0.2,
      "lib": 0.2,
      "overlay1": 0.15,
      "overlay2" : 0.45
    }

    const rotation_offset = Math.PI

    const colors = [
      // [filled, empty]
      ["rgb(171,38,114)", "rgb(61,11,42)"], // main
      ["rgb(1,126,180)", "rgb(3,54,74)"],   // lib
      ["rgb(0,167,0)", "rgb(0,86,0)"],      // overlay1
      ["rgb(255,255,0)", "rgb(67,67,0)"]    // overlay2
    ]

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    context.clearRect(0, 0, canvas.width, canvas.height);

    const x = DONUT_SIZE
    const y = DONUT_SIZE
    const radius = 150
    const thickness = 60

    context.lineWidth = thickness;
    context.strokeStyle = "rgba(0, 0, 0, 0)";

    var angle = rotation_offset
    for (var i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section.section === "all") {
          // skip "all" section
          continue
        }
        const name = section.section
        const bytes = section.c
        const funcs = section.c_functions
        const section_bytes = section.total
        const section_funcs = section.total_functions

        const segment_percentage = proportions[name]
        const filled_percentage_bytes = (bytes / section_bytes) * segment_percentage
        const empty_percentage_bytes = segment_percentage - filled_percentage_bytes

        var xx = x
        var yy = y

        if (name === selected) {
          const start = angle
          const end = angle + (Math.PI * 2) * segment_percentage
          const midpoint = (start + end) / 2
          const x_offset = 30 * Math.cos(midpoint)
          const y_offset = 30 * Math.sin(midpoint)
          xx += x_offset
          yy += y_offset
        }
        // filled
        context.beginPath()
        context.strokeStyle = colors[i][0]
        context.arc(xx, yy, radius, angle, angle + (Math.PI * 2) * filled_percentage_bytes)
        context.stroke()
        angle += (Math.PI * 2) * filled_percentage_bytes
        // empty

        context.beginPath()
        context.strokeStyle = colors[i][1]
        context.arc(xx, yy, radius, angle, angle + (Math.PI * 2) * empty_percentage_bytes)
        context.stroke()
        angle += (Math.PI * 2) * empty_percentage_bytes
    }

    // handle hover
    const eventListener = (e) => {
      const x = e.offsetX - DONUT_SIZE
      const y = e.offsetY - DONUT_SIZE

      const dist = (x ** 2) + (y ** 2)

      // radius is 150px, thickness is 60, so ring is 150 +-30px
      if ((dist > (180 ** 2)) || (dist < 120 ** 2)) {
        if (selected !== null) {
          setSelected(null)
        }
        return
      }

      const angle = Math.atan2(y, x)
      const rotation = (2*Math.PI) + (angle - rotation_offset)
      if (rotation < 0.2 * (2*Math.PI)) {
        // main
        if (selected !== "main") {
          setSelected("main")
        }
      } else if (rotation < 0.4 * (2*Math.PI)) {
        if (selected !== "lib") {
          setSelected("lib")
        }
      } else if (rotation < 0.55 * (2*Math.PI)) {
        if (selected !== "overlay1") {
          setSelected("overlay1")
        }
      } else {
        if (selected !== "overlay2") {
          setSelected("overlay2")
        }
      }
    }

    canvas.addEventListener("mousemove", eventListener)

    return () => canvas.removeEventListener("mousemove", eventListener);

  }, [data, selected])


  return (
    <div id="donut" className="doughnut">
      <canvas ref={canvasRef} width="440" height="440"/>
    </div>
  )
}
