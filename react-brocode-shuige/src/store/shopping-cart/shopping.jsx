import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  totalScore: 0,
  score: 0,
  cart: [],
  totalItemCount: 0,
  totalPrice: 0,
}

const shoppingSlice = createSlice({
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
      state.cart.push(action.payload)
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
      state.totalPrice = state.totalPrice.toFixed(2)
    },
    clearCart: (state) => {
      state.cart = initialState.cart
    },
  },
})

export const shoppingSliceAction = shoppingSlice.actions

export default shoppingSlice
