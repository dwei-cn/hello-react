// tutorial: https://www.youtube.com/watch?v=CFuQA_dxhLc

import React, { useState } from "react"
import { signal, effect, batch, computed } from "@preact/signals-react"

export default function Signals2() {
  const arr = signal(["吃饭", "睡觉", "打游戏"])

  const addItem = () => {
    arr.value = [...arr.value, "睡觉"]
    console.log(arr.value)
  }

  return (
    <div>
      <ul>
        {arr.value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}> add an item</button>
    </div>
  )
}
