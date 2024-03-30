import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import { shoppingSliceAction } from "../../../../store/shopping-cart/shopping"
import { useSelector, useDispatch } from "react-redux"

export default function LoginShopping() {
  const userName = useSignal("")
  const dispatch = useDispatch()
  //   const username = useSelector((state) => state.user.value.username)
  const username = useSelector((state) => state.shopping.username) // configureStore里面的key

  useSignals()

  return (
    <div>
      <h4>Welcome {username}! </h4>
      <br />
      <input
        type="text"
        onChange={(e) => (userName.value = e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={() => dispatch(shoppingSliceAction.login(userName.value))}>
        Login
      </button>{" "}
      <br />
      <button onClick={() => dispatch(shoppingSliceAction.logout())}>Logout</button>
    </div>
  )
}
