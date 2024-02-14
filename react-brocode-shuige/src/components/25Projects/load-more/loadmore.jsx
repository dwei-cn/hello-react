import React, { useEffect } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import Product from "./product"
// import { RatingStars } from "../githubProfileSearch/ratingStars" // 导入星级评分组件

import "./styles.css"
export default function Loadmore() {
  const errorInfo = useSignal(null)
  const loadingStatus = useSignal(false)
  const productData = useSignal([])
  const selectedOption = useSignal(9)
  const count = useSignal(0)
  const tooManyPicsFlag = useSignal(false)

  // 根据搜索词模糊搜索
  const fetchDummyProductDataList = async () => {
    try {
      const limit = 1 * selectedOption.value
      const skip = count.value * selectedOption.value
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      )
      const result = await res.json()

      // 每次用prevData合并新的result.products
      if (result && result.products && result.products.length) {
        productData.value = [...productData.value, ...result.products] //每一把合并array，两者都是array
        console.log("Loading...")
        loadingStatus.value = false
      }
    } catch (error) {
      loadingStatus.value = false
      console.log(error)
      errorInfo.value = error
    }
  }

  const handleOptionChange = (event) => {
    selectedOption.value = event.target.value
    count.value = 0
    productData.value = []
  }

  const handleReset = () => {
    // 使用对象分解重置多个状态变量
    productData.value = []
    tooManyPicsFlag.value = false
    count.value = 0
    // selectedOption.value = 9
  }

  useSignalEffect(() => {
    fetchDummyProductDataList()
  })

  useSignalEffect(() => {
    // 简化判断条件
    tooManyPicsFlag.value = productData.value.length > 20
  })

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
        <Product productData={productData.value} />
      </div>
      <div>
        <button
          onClick={() => (count.value += 1)}
          disabled={tooManyPicsFlag.value}
        >
          Load More
        </button>
        {tooManyPicsFlag.value && (
          <>
            <p>You have reached 20 products and can't load anymore.</p>
            <button onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    </div>
  )
}
