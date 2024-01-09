// 全局变量，输出给子组件

import { useContext } from "react"
import { ContextExample } from "../App"

export default function UseContextComp() {
  const DeeplearnAWS = useContext(ContextExample)
  return (
    <>
      <h4>UseContextComp</h4>
      <p>sitename: {DeeplearnAWS.sitename}</p>
      <p>author: {DeeplearnAWS.author}</p>
      {/* <p>sitename: {DeeplearnAWS.sitename}</p><br /> */}
      <button onClick={() => DeeplearnAWS.sayHello("world")}>sayHello</button>
    </>
  )
}
