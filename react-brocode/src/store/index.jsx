// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理

import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth"
import { mySlice1, mySlice2 } from "./myweb"

const store = configureStore({
  // reducer: mywebSlice.reducer,
  reducer: {
    myweb1: mySlice1.reducer,
    myweb2: mySlice2.reducer,
    auth: authSlice.reducer,
  },
})

export default store
