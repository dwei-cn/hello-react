// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理

import { createSlice } from "@reduxjs/toolkit"

const initialStateAuth = {
  isAuthed: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuthed = true
    },
    logout(state) {
      state.isAuthed = false
    },
  },
})

// action就是reducers
export const authActions = authSlice.actions
export default { authSlice }
