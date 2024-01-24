import { signal } from "@preact/signals-react"

export default function SignalsTodolist() {
  const todos = signal(["吃饭", "睡觉", "打游戏"])
  const newTodo = signal("")

  const addNewTodo = (e) => {
    e.preventDefault()
    todos.value = [...todos.value, newTodo.value]
    console.log("Todos updated:", todos.value)
    newTodo.value = ""
  }

  return (
    <div>
      使用signal创建一个todo list。
      <br />
      <br />
      <input
        value={newTodo.value}
        onChange={(e) => (newTodo.value = e.target.value)}
        placeholder="Type to add..."
      />
      <button type="submit" onClick={addNewTodo}>
        add new todo
      </button>
      <ul>
        {todos.value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
