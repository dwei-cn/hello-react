import React, { useContext } from "react"
// import { Link } from "react-router-dom"
import { useSignals } from "@preact/signals-react/runtime"

import { shoppingSliceAction } from "../../../store/shopping-cart/shopping"
import { useSelector, useDispatch } from "react-redux"

export default function ItemCard({ item }) {
  const dispatch = useDispatch()
  const cartList = useSelector((state) => state.shopping.cart) // configureStore里面的key
  const totalItemCountLocal = useSelector((state) => state.shopping.totalItemCount) // configureStore里面的key
  const totalPriceLocal = useSelector((state) => state.shopping.totalPrice) // configureStore里面的key

  const handleAddToCart = (item) => {
    dispatch(shoppingSliceAction.addToCart(item))
    dispatch(shoppingSliceAction.countItems())
    dispatch(shoppingSliceAction.calTotalItemPrice())
    console.log(cartList, totalItemCountLocal, totalPriceLocal)
  }

  const handleRemoveFromCart = (item) => {
    dispatch(shoppingSliceAction.removeFromCart(item))
    dispatch(shoppingSliceAction.countItems())
    dispatch(shoppingSliceAction.calTotalItemPrice())
    console.log(cartList, totalItemCountLocal, totalPriceLocal)
  }

  useSignals()
  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "10px",
        border: "1px solid black",
        marginBottom: "10px",
        width: "85px",
        background: "lightBlue",
        fontSize: "10px",
        padding: "10px",
      }}
    >
      {item.image && (
        <img src={item.image} alt={item.title} style={{ maxWidth: "80px" }} />
      )}
      <span>
        <p>{item.category}</p>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        {/* {item.id.toString().slice(-5)}  */}
        {/* {favList.value && favList.value[item.id] && "❤️"} */}
        <br />
        <br />
        {/* 查看item.id是否在cartList中，判断是否已经存在于cart */}{" "}
        {cartList.some((cartItem) => cartItem.id === item.id) ? (
          <button onClick={() => handleRemoveFromCart(item)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
        )}
        {/* <Link
          to={`/recipe-item/${item?.id}`}
          style={{
            border: "1px solid black", // 设置边框样式
            borderRadius: "5px",
            color: "white",
            backgroundColor: "black",
            padding: "5px",
          }}
        >
          Recipe Details
        </Link> */}
      </span>
    </div>
  )
}
