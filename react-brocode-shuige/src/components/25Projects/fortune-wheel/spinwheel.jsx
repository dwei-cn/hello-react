import React, { useState } from "react"
import { Wheel } from "react-custom-roulette"
import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export default function Spinwheel({ data, query }) {
  const [mustSpin, setMustSpin] = useState(false)
  const prizeNumber = useSignal(0)
  const onStopSpinningFlag = useSignal(false)

  // const data = [
  //   { option: "0" },
  //   { option: "1" },
  //   { option: "2" },
  //   { option: "3" },
  // ]

  // 按照optionsSize计算权重
  const handleSpinClick = () => {
    onStopSpinningFlag.value = false
    if (!mustSpin) {
      // 计算总的权重
      const totalWeight = data.reduce((acc, curr) => acc + curr.optionSize, 0)

      // 生成一个随机数，范围为 [0, totalWeight)
      const randomWeight = Math.random() * totalWeight

      let cumulativeWeight = 0
      let winningOptionIndex = 0

      // 遍历每个选项，并根据累积权重确定获胜的选项索引
      for (let i = 0; i < data.length; i++) {
        cumulativeWeight += data[i].optionSize
        if (randomWeight < cumulativeWeight) {
          winningOptionIndex = i
          break
        }
      }

      // 设置获胜的选项索引
      prizeNumber.value = winningOptionIndex

      setMustSpin(true)
    }
  }
  useSignals()

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber.value}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false)
          onStopSpinningFlag.value = true
        }}
        spinDuration={0.5}
        perpendicularText={true}
        // startingOptionIndex={3}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      <br />
      {onStopSpinningFlag.value
        ? `答案是${prizeNumber}号: ${data[prizeNumber].option}！`
        : query}
    </>
  )
}
