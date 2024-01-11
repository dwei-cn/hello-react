// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理

import { createSlice } from "@reduxjs/toolkit"

const initialState2 = {
  statusNow: "好烦啊!",
}

const mySlice2 = createSlice({
  name: "myweb2",
  initialState: initialState2,
  reducers: {
    updateStatus(state) {
      let extractedString = state.statusNow.slice(0, -1)
      extractedString += "啊!"
      return { ...state, statusNow: extractedString } // 更新string
    },
    resetStatus(state) {
      return { ...state, statusNow: initialState2.statusNow }
    },
  },
})

// action就是reducers
export const mywebActions2 = mySlice2.actions

// 导出slice
export default mySlice2 // 使用命名导出
