import React, { useContext } from "react"
import { GlobalContext } from "./index"

export default function ComponentB() {
  // 不再需要props，直接用context调用value
  const { themeColor, fontColor } = useContext(GlobalContext)

  const backgroundColor = themeColor === "dark" ? "lightBlue" : "white"
  const color = fontColor === "dark" ? "white" : "black"

  return (
    <div
      style={{
        border: "3px solid",
        borderColor: "black",
        width: "10em",
        padding: "25px",
        marginTop: "10px",
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      This is component B, theme is <b>{themeColor}</b> color.
    </div>
  )
}
