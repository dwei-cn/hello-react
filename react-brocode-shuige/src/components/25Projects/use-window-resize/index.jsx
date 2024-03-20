import React from "react"
import useWindowResize from "./useWindowResize"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize()
  const { width, height } = windowSize

  return (
    <div>
      <h4>Use Window Resize Hook</h4>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  )
}
