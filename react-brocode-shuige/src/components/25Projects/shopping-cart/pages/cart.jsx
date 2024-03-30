import React from "react"
import ItemCard from "../item-card"

import { useSelector, useDispatch } from "react-redux"
import { userSliceAction } from "../../../../store/shopping-cart/user"

export default function CartShopping() {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.user.cart) // configureStore里面的key
  const totalItemCountLocal = useSelector((state) => state.user.totalItemCount) // configureStore里面的key
  const totalPriceLocal = useSelector((state) => state.user.totalPrice) // configureStore里面的key

  const handleCleanCart = () => {
    dispatch(userSliceAction.cleanCart())
    dispatch(userSliceAction.countItems())
    dispatch(userSliceAction.calTotalItemPrice())
    console.log(cartList, totalItemCountLocal, totalPriceLocal)
  }

  return (
    <div>
      <br />
      <span>Items: {totalItemCountLocal}</span> <br />
      <span>Total Price: {totalPriceLocal}</span> <br />
      <br />
      {cartList && cartList.length > 0 ? (
        <div>
          {cartList.map((item) => (
            <ItemCard item={item} />
          ))}
          <button onClick={handleCleanCart}>Clean Cart</button>
        </div>
      ) : (
        <div>Add some items to the cart 😁...</div>
      )}
    </div>
  )
}
