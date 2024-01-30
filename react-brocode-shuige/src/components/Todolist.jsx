import React, { useState } from "react"
import { signal } from "@preact/signals-react"
import { todos2 } from "./TodolistSignals"
// import { useSignals } from "@preact/signals-react/runtime"

export default function Todolist() {
  console.log("Rendering: todolist")

  const [todos, setTodos] = useState([
    { name: "吃饭", completed: false },
    { name: "睡觉", completed: false },
    { name: "打豆豆", completed: false },
  ])
  const [newtodo, setNewtodo] = useState("")
  const [edittodo, setEdittodo] = useState("")
  const [editFlag, setEditFlag] = useState(false)
  const [editIndex, setEditIndex] = useState(-9999)

  const addNewtodo = () => {
    setTodos([...todos, { name: newtodo, completed: false }])
    setNewtodo("")
  }

  const getEditInfo = (indexToEdit) => {
    setEdittodo(todos[indexToEdit].name) // 直接获取了当前index的name
    setEditFlag(true)
    setEditIndex(indexToEdit)
  }

  const editTodo = (indexToEdit) => {
    // edit不会修改原arr的object，他也是遍历arr添加item，发现不符合条件的，就会添加当前的item，而如果发现符合条件的，就会添加一个不同的，想要edit的item
    setTodos(
      todos.map((item, index) =>
        index === indexToEdit ? { ...item, name: edittodo } : item
      )
    )
    setEdittodo("")
    setEditIndex(-9999)
    setEditFlag(false)
  }

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove))
  }

  const toggleCompleted = (indexToToggle) => {
    // 根据 index 更新object里面的值
    setTodos(
      todos.map((item, index) =>
        index === indexToToggle ? { ...item, completed: !item.completed } : item
      )
    )
    console.log(todos)
  }

  const resetTodos = () =>
    setTodos(
      [
        { name: "吃饭", completed: false },
        { name: "睡觉", completed: false },
        { name: "打豆豆", completed: false },
      ],
      setEditFlag(false),
      setNewtodo("")
    )

  //   useSignals()

  return (
    <div>
      <input
        type="text"
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
      />{" "}
      <button onClick={addNewtodo}>Add</button>
      <br />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(index)}
            ></input>
            {/* 如果是completed状态，就显示strikethrough，都则就是一般的name */}
            {item.completed ? <s> {item.name}</s> : item.name}
            {""} <button onClick={() => removeTodo(index)}>❌</button>
            <button onClick={() => getEditInfo(index)}>✏️</button>
            {/* 当需要edit，而且edit的index和当前index相同的情况下 */}
            {/* boolean判断是否render or not */}
            {editFlag && editIndex === index && (
              <span>
                <input
                  value={edittodo}
                  onChange={(e) => setEdittodo(e.target.value)}
                />
                <button onClick={() => editTodo(editIndex)}>Done</button>
              </span>
            )}
          </li>
        ))}
      </ul>
      Completed todo items:
      {todos.filter((item) => item.completed === true).length}
      <br />
      Total todo items: {todos.length}
      <br />
      <br />
      <button onClick={resetTodos}>Reset</button>
      <br />
      <br />
      <span>
        <span>
          {" "}
          来自隔壁Todo List (signals)的数据 (需要添加useSignals(才能快速响应))
        </span>

        <br />
        <br />

        {todos2.value.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </span>
    </div>
  )
}
