import React, { memo } from "react"

function MemoChild({ text, onClick }) {
  const timestamp = Date.now()
  console.log(`${text} component is rendered! ${timestamp}`)
  return <button onClick={onClick}>{text}</button>
}

export default memo(MemoChild) // 需要用memo wrap component function
