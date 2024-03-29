import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: { username: "" },
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState
    },
  },
})

// action就是reducers
export const userSliceAction = userSlice.actions

// 导出slice
export default userSlice // 使用命名导出
