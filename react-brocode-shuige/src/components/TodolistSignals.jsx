import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export const todos2 = signal([
  { name: "吃饭", completed: false },
  { name: "睡觉", completed: false },
  { name: "打豆豆", completed: false },
])

export default function TodolistSignals() {
  console.log("Rendering: todolistsignals")
  // const [todos, setTodos] = signal([
  //   { name: "吃饭", completed: false },
  //   { name: "睡觉", completed: false },
  //   { name: "打豆豆", completed: false },
  // ])
  // const [newtodo, setNewtodo] = signal("")
  // const [edittodo, setEdittodo] = signal("")
  // const [editFlag, setEditFlag] = signal(false)
  // const [editIndex, setEditIndex] = signal(-9999)

  const newtodo2 = useSignal("")
  const edittodo2 = useSignal("")
  const editFlag2 = useSignal(false)
  const editIndex2 = useSignal(-9999)

  const addNewtodo = (e) => {
    e.preventDefault()
    todos2.value = [...todos2.value, { name: newtodo2.value, completed: false }]
    newtodo2.value = ""
  }

  const getEditInfo = (indexToEdit) => {
    edittodo2.value = todos2.value[indexToEdit].name // 直接获取了当前index的name
    editFlag2.value = true
    editIndex2.value = indexToEdit
  }

  const editTodo = (indexToEdit) => {
    // edit不会修改原arr的object，他也是遍历arr添加item，发现不符合条件的，就会添加当前的item，而如果发现符合条件的，就会添加一个不同的，想要edit的item
    todos2.value = todos2.value.map((item, index) =>
      index === indexToEdit ? { ...item, name: edittodo2.value } : item
    )
    edittodo2.value = ""
    editIndex2.value = -9999
    editFlag2.value = false
  }

  const removeTodo = (indexToRemove) => {
    todos2.value = todos2.value.filter((_, index) => index !== indexToRemove)
  }

  const toggleCompleted = (indexToToggle) => {
    // 根据 index 更新object里面的值
    todos2.value = todos2.value.map((item, index) =>
      index === indexToToggle ? { ...item, completed: !item.completed } : item
    )
    console.log(todos2)
  }

  const resetTodos = () =>
    (todos2.value =
      ([
        { name: "吃饭", completed: false },
        { name: "睡觉", completed: false },
        { name: "打豆豆", completed: false },
      ],
      (editFlag2.value = false),
      (newtodo2.value = "")))

  useSignals()

  return (
    <div>
      <input
        type="text"
        value={newtodo2.value}
        onChange={(e) => (newtodo2.value = e.target.value)}
      />{" "}
      <button onClick={addNewtodo}>Add</button>
      <br />
      <ul>
        {todos2.value.map((item, index) => (
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
            {editFlag2.value && editIndex2.value === index && (
              <span>
                <input
                  value={edittodo2}
                  onChange={(e) => (edittodo2.value = e.target.value)}
                />
                <button onClick={() => editTodo(editIndex2.value)}>Done</button>
              </span>
            )}
          </li>
        ))}
      </ul>
      Completed todo items:
      {todos2.value.filter((item) => item.completed === true).length}
      <br />
      Total todo items: {todos2.value.length}
      <br />
      <br />
      <button onClick={resetTodos}>Reset</button>
    </div>
  )
}
