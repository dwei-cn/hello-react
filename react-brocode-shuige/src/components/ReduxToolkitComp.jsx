import React from "react"
import { useSelector, useDispatch } from "react-redux" // 用俩hook来调取state和functions
import { mywebActions1 } from "../store/redux-component/myweb1" // 调取reducers/actions
import { mywebActions2 } from "../store/redux-component/myweb2" // 调取reducers/actions
import { authActions } from "../store/redux-component/auth" // 非default export而是named exports，要用{}
import { loadData } from "../store/redux-component/asyncDemo"

export default function ReduxToolkitComp() {
  // 调用state
  const sitename = useSelector((state) => state.myweb1.sitename)
  const viewCount = useSelector((state) => state.myweb1.viewCount)
  const datalist = useSelector((state) => state.myweb1.datalist)

  const isAuthed = useSelector((state) => state.auth.isAuthed)

  const statusNow = useSelector((state) => state.myweb2.statusNow)

  // 调用/dispatch functions
  const dispatch = useDispatch()

  const btn_add_click = () => {
    dispatch(mywebActions1.add())
  }
  const btn_min_click = () => {
    dispatch(mywebActions1.minus())
  }

  const btn_multiply_click = () => {
    dispatch(mywebActions1.multiply(10))
  }

  const btn_reset_click = () => {
    dispatch(mywebActions1.reset(10))
  }

  const btn_auth_login_click = () => {
    dispatch(authActions.login())
  }
  const btn_auth_logout_click = () => {
    dispatch(authActions.logout())
  }

  const btn_update_status_click = () => {
    dispatch(mywebActions2.updateStatus())
  }

  const btn_reset_status_click = () => {
    dispatch(mywebActions2.resetStatus())
  }

  const btn_loaddata_click = async () => {
    dispatch(loadData())
  }

  return (
    <React.Fragment>
      <p>Site Name: {sitename}</p>
      <p>View Count: {viewCount}</p>
      <p>Log in Status: {String(isAuthed)}</p>

      <div>
        {/* login status为false才会出现login button，true的时候出现logout button */}
        {!isAuthed && <button onClick={btn_auth_login_click}>Login</button>}
        {isAuthed && <button onClick={btn_auth_logout_click}>Logout</button>}
        <br />
        <button onClick={btn_add_click}>Add</button>
        <button onClick={btn_min_click}>Minus</button>

        {/* 只有当login的时候才会show Multiply button */}
        {isAuthed && <button onClick={btn_multiply_click}>Multiply</button>}

        <button onClick={btn_reset_click}>Reset</button>
      </div>

      <p>Status: {statusNow}</p>
      <div>
        <button onClick={btn_update_status_click}>Update status</button>
        <button onClick={btn_reset_status_click}>Reset</button>
      </div>
      <br />

      <button onClick={btn_loaddata_click}>Load Data</button>
      <ul>
        {datalist.map((item) => (
          <li key={item.episode_id}>{item.title}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

