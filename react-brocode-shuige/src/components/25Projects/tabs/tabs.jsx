import React from "react"
import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import "./styles.css"

export default function Tabs() {
  const showTab = useSignal(false)
  const currentIndex = useSignal()

  const handleClick = (getCurrentIndex) => {
    showTab.value = true
    currentIndex.value = getCurrentIndex
  }

  useSignals()

  return (
    <div className="tabs-module">
      {" "}
      <div className="tabs-container">
        {[...Array(3)].map((item, index) => (
          //   className 中不能以数字开头，因此请将 .1 改为 .tab1
          <div
            key={index}
            className={`tab tab${index + 1}`}
            onClick={() => handleClick(index)}
          >
            Tab {index + 1}
          </div>
        ))}
      </div>
      <div>
        {showTab.value && (
          <div className={`bulletin bt${currentIndex.value + 1}`}>
            Rank {currentIndex.value + 1}
          </div>
        )}
      </div>
    </div>
  )
}
