// 更加灵活的useState

import { useReducer } from "react"

export default function UseReducerComp() {
  const [count, dispatch] = useReducer((state, action) => {
    // 接受function，而不只是state数值
    console.log(state, action)
    switch (action.type) {
      case "add":
        return state + action.step
      case "minus":
        return state - action.step
      default:
        return state
    }
  }, 100) // 默认state

  return (
    <>
      <h4>useReducer</h4>
      <h5>{count}</h5>
      <button
        onClick={() => {
          dispatch({
            type: "add",
            step: 10,
          })
        }}
      >
        加击10次
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "minus",
            step: 10,
          })
        }}
      >
        减击10次
      </button>
    </>
  )
}
