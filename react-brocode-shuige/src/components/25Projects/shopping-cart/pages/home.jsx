import React from "react"
import { useSelector, useDispatch } from "react-redux"

export default function HomeShopping() {
  const username = useSelector((state) => state.user.value.username)
  return (
    <>
      <h4>This is home page -- {username}</h4>
    </>
  )
}
