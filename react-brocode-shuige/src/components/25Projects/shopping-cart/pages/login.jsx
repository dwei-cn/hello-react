import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import { userSliceAction } from "../../../../store/user"
import { useSelector, useDispatch } from "react-redux"

export default function LoginShopping() {
  const userName = useSignal("")
  const dispatch = useDispatch()
  const username = useSelector((state) => state.user.value.username)

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
      <button
        onClick={() =>
          dispatch(userSliceAction.login({ username: userName.value }))
        }
      >
        Login
      </button>{" "}
      <br />
      <button onClick={() => dispatch(userSliceAction.logout())}>Logout</button>
    </div>
  )
}
