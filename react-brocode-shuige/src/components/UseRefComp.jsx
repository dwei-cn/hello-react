// useRef主要是用于需要在后台运作，但是没必要触发render的操作，例如focus到input box，记录某个数字，你并不想这个操作又render一下界面
// 1, 管理页面焦点，文本选择，文本播放  2. 触发强制动画  3. 集成第三方DOM库
// 能用useState就用useState

import { useRef, useState } from "react"

export default function useRefComp() {
  const defaultName = "Dave"
  const [forceRender, setForceRender] = useState(false)

  const nameRef = useRef(defaultName)
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  function makeChange() {
    nameRef.current = inputRef.current.value
    console.log(nameRef.current)
  }

  function makeForcedChange() {
    nameRef.current = inputRef.current.value
    setForceRender(!forceRender)
    inputRef.current.value = ""
    console.log(nameRef.current)
  }

  function resetName() {
    nameRef.current = defaultName
    inputRef.current.value = "ALL Cleared!"
    setForceRender(!forceRender)
  }

  return (
    <>
      <h4>UseRefComp</h4>
      <p>My name is {nameRef.current}</p>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={focus}>Focus</button>
      <br />
      {/* 按按钮并不会触发re-render，所以在界面上是看不到的，除非你强制render */}
      <button onClick={makeChange}>Make change</button>
      <br />
      {/* 按按钮会触发re-render，因为我强制render了 */}
      <button onClick={makeForcedChange}>Make forced change</button>
      <button onClick={resetName}>Reset</button>
    </>
  )
}
