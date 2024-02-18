import React from "react"
import { signal, useSignal } from "@preact/signals-react"
import { useSignals, useSignalEffect } from "@preact/signals-react/runtime"

import Spinwheel from "./spinwheel"
import TodolistSignals, { updateEvents, todos2 } from "../../TodolistSignals"

const newEvents = [
  { name: "越南菜", completed: false, optionSize: 1 },
  { name: "墨西哥菜", completed: false, optionSize: 1 },
  { name: "韩国菜", completed: false, optionSize: 1 },
  { name: "小火锅", completed: false, optionSize: 1 },
  { name: "烧烤", completed: false, optionSize: 1 },
  { name: "早茶", completed: false, optionSize: 1 },
  { name: "意大利菜", completed: false, optionSize: 1 },
]

updateEvents(newEvents)
console.log(todos2.value)

export default function FortuneWheel() {
  const todos = useSignal(todos2.value)
  const res = useSignal(null)

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const index = Math.floor(Math.random() * (max - min + 1)) + min
    return index
  }

  function getFoodName(min, max) {
    const index = getRandomIntInclusive(min, max)
    res.value = todos2.value[index].name
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  // 订阅另一个component的signals
  useSignalEffect(() => {
    const unsubscribe = todos2.subscribe((newTodos) => {
      todos.value = newTodos.map((event) => ({
        option: event.name,
        optionSize: event.optionSize,
        // completed: event.completed,
        style: {
          backgroundColor: getRandomColor(),
          //   textColor: getRandomColor(),
          textColor: "white",
        },
      }))
      console.log(todos.value)
    })

    return unsubscribe
  })

  useSignals()

  return (
    <div>
      <TodolistSignals />
      <br />
      <button onClick={() => getFoodName(0, todos2.value.length - 1)}>
        Turn the wheel
      </button>{" "}
      <br />
      {res.value && `今天吃: ${res.value}`}
      {<Spinwheel data={todos.value} query={`明天吃什么呢？？？`} />}
    </div>
  )
}
