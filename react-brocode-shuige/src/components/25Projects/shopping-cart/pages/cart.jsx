import React, { useEffect } from "react"
import ItemCard from "../item-card"
import ItemCardMUI from "../item-card-mui"

import { useSelector, useDispatch } from "react-redux"
import { shoppingSliceAction } from "../../../../store/shopping-cart/shopping"

export default function CartShopping() {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.shopping.cart) // configureStore里面的key
  const totalItemCountLocal = useSelector(
    (state) => state.shopping.totalItemCount
  ) // configureStore里面的key
  const totalPriceLocal = useSelector((state) => state.shopping.totalPrice) // configureStore里面的key

  const handleClearCart = () => {
    dispatch(shoppingSliceAction.clearCart())
    // dispatch(shoppingSliceAction.countItems())
    // dispatch(shoppingSliceAction.calTotalItemPrice())
  }



  return (
    <div>
      <br />
      <h4>Your Cart Summary</h4>
      <span>Items: {totalItemCountLocal}</span> <br />
      <span>Total Price: {totalPriceLocal}</span> <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "150px",
        }}
      >
        {cartList && cartList.length > 0 ? (
          // cartList.map((item) => <ItemCard item={item} />)
          cartList.map((item) => <ItemCardMUI item={item} />)
        ) : (
          <div>Add some items to the cart 😁...</div>
        )}
      </div>
      <br />
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}
