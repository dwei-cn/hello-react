import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import ItemCard from "../item-card"

export default function HomeShopping() {
  const username = useSelector((state) => state.shopping.username) // configureStore里面的key
  const totalScore = useSelector((state) => state.shopping.totalScore) // configureStore里面的key

  const products = useSignal([])
  const loading = useSignal(false)

  const totalItemCountLocal = useSelector(
    (state) => state.shopping.totalItemCount
  ) // configureStore里面的key

  async function fetchListOfProducts() {
    loading.value = true
    try {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()

      if (data) {
        products.value = data
        loading.value = false
        console.log(data)
      }
      // Get the navigate function from useNavigate

      // Navigate to the desired route, here is home page
      // navigate("/")

      //   console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchListOfProducts()
  }, [products])

  useSignals()

  return (
    <div>
      <h4>This is Home Page -- {username}</h4>
      <h4>Your Total Score is : {totalScore}</h4>
      <p>Added to Cart: {totalItemCountLocal}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "25px",
        }}
      >
        {products.value && products.value.length > 0 ? (
          products.value.map((item) => <ItemCard item={item} />)
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  )
}
