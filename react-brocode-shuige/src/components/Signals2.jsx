import { useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import { todos2 } from "./TodolistSignals"
import { useState } from "react"

export default function SignalsTodolist() {
  console.log("Rendering: signals2")
  // const todos = signal([
  //   { text: "eat" },
  //   { text: "sleep" },
  //   { text: "play video game" },
  // ])

  const todos = useSignal(["eat", "sleep", "play video game"])
  const newTodo = useSignal("")
  const count = useSignal(0)
  const [countHook, setCountHook] = useState(0)

  const addNewTodo = (e) => {
    e.preventDefault()
    // todos.value = [...todos.value, { text: newTodo.value }]
    todos.value = [...todos.value, newTodo.value]
    // console.log(todos.value)
    newTodo.value = "" // Clear the input field
  }

  const onInput = (event) => (newTodo.value = event.currentTarget.value)

  // const resetToto = () => {
  //   newTodos(["eat", "sleep", "play video game"])
  // }

  useSignals()

  return (
    <div>
      Create a simple counter <br />
      Count (signal): {count}{" "}
      <button onClick={() => count.value++}>Click me! (signal)</button>
      <br />
      Count (hook): {countHook}{" "}
      <button onClick={() => setCountHook(countHook + 1)}>
        Click me! (hook)
      </button>
      <br />
      <br />
      <br /> <br />
      <br />
      Create a todo list with signals. <br />
      <br />
      <em>
        <s>
          signal貌似还是有挺多问题, 感觉一碰到UI就无法render,
          无法触发todos的re-render, 暂时无解
        </s>
        <br />
        加入了useSignal() + useSignals()问题就解决了...
      </em>
      <br />
      <br />
      <input
        type="text"
        value={newTodo}
        onInput={onInput}
        placeholder="Type to add..."
      />
      <button onClick={addNewTodo}>add new todo</button>
      <br />
      {newTodo}
      {JSON.stringify(todos)}
      <ul>
        {todos.value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <span>
        <span> 来自隔壁Todo List (signals)的数据</span>

        <br />
        <br />

        {todos2.value.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </span>
    </div>
  )
}
