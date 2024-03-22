import React, { useLayoutEffect, useState } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export default function useWindowResize() {
  const windowSize = useSignal({
    width: 0,
    height: 0,
  })

  function handleResize() {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    // return windowSize.value
  }

  useLayoutEffect(() => {
    handleResize() // handleResize在窗口大小发生变化时通过 resize 事件触发再次运行
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  useSignals()
  return windowSize.value
}
