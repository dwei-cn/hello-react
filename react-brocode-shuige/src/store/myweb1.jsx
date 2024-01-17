// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理

import { createSlice } from "@reduxjs/toolkit"

// initial state
const initialState1 = {
  sitename: "小马学react",
  viewCount: 100,
  datalist: [],
}

// add initial state to slice
// slice一般包括initial state和actions/reducers
const mySlice1 = createSlice({
  name: "myweb1",
  initialState: initialState1,
  reducers: {
    // state就是initialstate的值
    add(state) {
      state.viewCount++
    },
    minus(state) {
      state.viewCount--
    },
    multiply(state, action) {
      state.viewCount *= action.payload // use payload when your action requires additional information to perform its task. If the action doesn't need any extra data, you might not use payload.
    },
    reset(state) {
      state.viewCount = initialState1.viewCount // Reset to the original initial state value
    },
    setDatalist(state, action) {
      state.datalist = action.payload // Loaddata 功能
    },
  },
})

// action就是reducers
export const mywebActions1 = mySlice1.actions

// 导出slice
export default mySlice1 // 使用命名导出
