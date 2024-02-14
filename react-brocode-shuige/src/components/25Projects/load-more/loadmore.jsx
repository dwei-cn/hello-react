import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
// import { RatingStars } from "../githubProfileSearch/ratingStars" // 导入星级评分组件

import "./styles.css"

export default function Loadmore() {
  const errorInfo = useSignal(null)
  const loadingStatus = useSignal(false)
  const productData = useSignal([])
  const selectedOption = useSignal(9)
  const count = useSignal(0)
  const tooManyPicsFlag = useSignal(false)
  const tooManyPicsFlag2 = useSignal(false)

  //   根据搜索词模糊搜索
  const fetchDummyProductDataList = async () => {
    try {
      const res = await fetch(
        // `https://dummyjson.com/products/${searchParam.value}`
        `https://dummyjson.com/products?limit=${
          // count.value === 0 ? 3 : selectedOption.value
          selectedOption.value
          // }&skip=${count.value === 0 ? 0 : count.value * selectedOption.value}`     // 初始化显示的是
        }&skip=${count.value * selectedOption.value}` // 初始化显示的是
      )
      const result = await res.json()

      if (result && result.products && result.products.length) {
        productData.value = [...productData.value, ...result.products] //合并array，两者都是array
        console.log("Loading...")
        loadingStatus.value = false
      }
    } catch (error) {
      loadingStatus.value = false
      console.log(error)
      errorInfo.value = error
    }

    // console.log(count.value)
    // console.log(productData.value)
  }

  const handleOptionChange = (event) => {
    selectedOption.value = event.target.value
    count.value = 0
    productData.value = []
  }

  const handleReset = () => {
    productData.value = []
    tooManyPicsFlag.value = false
    count.value = 0
    selectedOption.value = 9
  }

  useSignalEffect(() => {
    fetchDummyProductDataList()
  }, [count.value])

  useSignalEffect(() => {
    if (productData && productData.value.length > 20) {
      tooManyPicsFlag.value = true
    }
  }, [productData.value])

  useSignals()
  return (
    <div className="gallery">
      Show pictures:{" "}
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="18">18</option>
      </select>
      <div className="load-more-product-container">
        {productData.value && // 一定要有这个判定，渲染之前添加了条件检查 productData.value !== null，以确保 productData.value 不为 null 才会调用 map 方法。这样就可以避免出现报错。
          productData.value.map((item, index) => (
            <div key={index} className="card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="product-text">
                <strong>{item.title}</strong>
                <p>Brand: {item.brand}</p>
                <div>
                  Rating: {item.rating}
                  {/* <RatingStars rating={item.rating} />{" "} */}
                </div>
                <p>Price: {item.price}</p>
                <p>Stock: {item.stock}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        {" "}
        {/* <button onClick={() => (count.value -= 1)}>Load Fewer</button>{" "} */}
        <button
          onClick={() => (count.value += 1)}
          disabled={tooManyPicsFlag.value}
        >
          Load More
        </button>
        {tooManyPicsFlag.value && (
          <>
            <p>You have reached to 20 products and can't load any more.</p>
            <button onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    </div>
  )
}
