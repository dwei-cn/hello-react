import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import ItemCard from "../item-card"

export default function HomeShopping() {
  const username = useSelector((state) => state.user.username) // configureStore里面的key
  const totalScore = useSelector((state) => state.user.totalScore) // configureStore里面的key

  const products = useSignal([])
  const loading = useSignal(false)

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
      <div
        style={{
          display: "flex",
        //   gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        //   gap: "25px",
        }}
      >
        {products.value && products.value.length > 0 ? (
          <div>
            {" "}
            {products.value.map((item) => (
              <ItemCard item={item} />
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  )
}
