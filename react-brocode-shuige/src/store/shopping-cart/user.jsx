import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  totalScore: 0,
  score: 0,
  cart: [],
  totalItemCount: 0,
  totalPrice: 0,
}

const userSlice = createSlice({
  name: "随便叫啥都行",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload
    },
    logout: (state) => {
      state.username = ""
    },
    submitScore: (state, action) => {
      state.score = parseFloat(action.payload)
    },
    calTotalScore: (state) => {
      state.totalScore += state.score
    },
    resetScore: (state) => {
      state.score = initialState.score
      state.totalScore = initialState.totalScore
    },
    resetAll: (state) => {
      Object.assign(state, initialState)
    },
    addToCart: (state, action) => {
      // Store relevant data (e.g., IDs) in the cart
      // console.log(action.payload)
      if (!state.cart[action.payload.id]) {
        state.cart.push(action.payload)
      } // Assuming action.payload is an object}
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    countItems: (state) => {
      state.totalItemCount = state.cart.length
    },
    calTotalItemPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price,
        0
      )
    },
    cleanCart: (state) => {
      state.cart = initialState.cart
    },
  },
})

export const userSliceAction = userSlice.actions

export default userSlice
