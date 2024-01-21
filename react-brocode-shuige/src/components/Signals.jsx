// tutorial: https://www.youtube.com/watch?v=CFuQA_dxhLc

import React, { useState } from "react"
import { signal, effect, batch, computed } from "@preact/signals-react"
import { countSignal } from "../pages/Home/components/Tictactoe"

export default function Signals() {
  console.log("Global Render")

  const base = signal(20)

  const [count, setCount] = useState(0)
  //   const countSignal = signal(10)

  // computed准确来说是computed signal，可以根据signal之间的依赖关系创建signal
  // const countSignalDouble = computed(() => countSignal.value * 2) // 在一个signal的基础上创建另一个signal
  const countSignalDouble = computed(() => countSignal.value * 2) // 在一个signal的基础上创建另一个signal
  const countSignalSum = computed(() => countSignal + countSignalDouble) // 在一个signal的基础上创建另一个signal

  // effect准确来说是创建side effect，不只是signal
  effect(() => {
    // 如果effect内部检测不到改变的signal，就不会render
    // const randomNumber = name1.value + base   // 会render，因为countSignal改变
    const example1 = base.value //不render, 因为base不改变
    console.log("Exmple1 updated:", example1)
  })

  effect(() => {
    // 如果effect内部检测不到改变的signal，就不会render
    // const randomNumber = name1.value + base   // 会render，因为countSignal改变
    const example2 = countSignal + countSignalDouble //不render, 因为base不改变
    console.log("Example2 updated:", example2)
  })

  // 当需要运行多个function
  // batch(() => {
  //   base.value += 2
  //   countSignal.value ** 2
  // })

  return (
    <>
      Signals可以精准re-render, 而不是动不动就全局rerender.
      @preact/signals-react 提供了以下工具：
      <br />
      <ul>
        <li>signal: 创建状态变量</li>
        <li>computed: 根据signal创建相互关联的状态变量</li>
        <li>effect: 创建side effect，检测状态变量触发</li>
        <li>batch: 创建多个运算</li>
      </ul>
      <br />
      Count: {countSignal}
      <br />
      Double Count: {countSignalDouble}
      <br />
      <br />
      <button onClick={() => countSignal.value++}>
        Increment (signal method)
      </button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>
        Increment (react hook method)
      </button>
      <br />
      <br />
      溅射伤害1: {countSignal + countSignalDouble}
      <br />
      溅射伤害2: {countSignalSum}
      <br />
      <br />
      溅射伤害2来自于computed signal, 所以可以实时更新
    </>
  )
}
