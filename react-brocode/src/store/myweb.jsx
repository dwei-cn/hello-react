// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理

import { createSlice } from "@reduxjs/toolkit"

// initial state
const initialState1 = {
  sitename: "小马学react",
  viewCount: 100,
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
  },
})

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
export const mywebActions1 = mySlice1.actions
export const mywebActions2 = mySlice2.actions

export default { mySlice1, mySlice2 } // 使用命名导出
