// store.js
// 命名成任何文件都可以
// 本质上讲就是比useState更高级的存在
// 分片管理，只导入slice

import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./redux-component/auth"
import mySlice1 from "./redux-component/myweb1"
import mySlice2 from "./redux-component/myweb2"
import userSlice from "./shopping-cart/user"

const store = configureStore({
  reducer: {
    myweb1: mySlice1.reducer,
    myweb2: mySlice2.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
  },
})

export default store
