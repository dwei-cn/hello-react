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
    add(state) {
      state.viewCount++
    },
    minus(state) {
      state.viewCount--
    },
    multiply(state, action) {
      state.viewCount *= action.payload
    },
    reset(state) {
      state.viewCount = initialState1.viewCount // Reset to the original initial state value
    },
    setDatalist(state, action) {
      state.datalist = action.payload
    },
  },
})

// action就是reducers
export const mywebActions1 = mySlice1.actions

// 导出slice
export default mySlice1 // 使用命名导出
