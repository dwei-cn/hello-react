import { useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import Suggestions from "./suggestions"
import Product from "./product"
import "./styles.css"

export default function GithubProfileSearch() {
  const searchParam = useSignal("")
  const loadingStatus = useSignal(false)
  const errorInfo = useSignal(null)
  const productList = useSignal([])
  const productData = useSignal(null)
  const filteredProducts = useSignal([])
  const selectItemData = useSignal(null)
  const showDropdown = useSignal(false)
  const selectedItem = useSignal("")

  //   根据搜索词模糊搜索
  const fetchDummyProductDataList = async () => {
    try {
      const res = await fetch(
        // `https://dummyjson.com/products/${searchParam.value}`
        `https://dummyjson.com/products/`
      )
      const data = await res.json()

      if (data && data.products && data.products.length) {
        productData.value = data // 在搜索的时候就已经准备好了所有的product data
        productList.value = data.products.map((item) => item.title) // 准备product list
        console.log("Loading...")
        loadingStatus.value = false
      }
    } catch (error) {
      loadingStatus.value = false
      console.log(error)
      errorInfo.value = error
    }
  }

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase()

    searchParam.value = query

    if (query.length > 1) {
      const filteredData =
        productList.value && productList.value.length > 1
          ? // 使用 indexOf() 方法检查查询searchParam字符串是否存在于项目名称中。如果存在，indexOf() 方法将返回查询字符串在项目名称中的索引，否则将返回 -1。
            productList.value.filter(
              (item) => item.toLowerCase().indexOf(query) > -1
            )
          : []

      filteredProducts.value = filteredData
      console.log(filteredData)
      showDropdown.value = true
    } else showDropdown.value = false
  }

  const handleClickSuggestions = (event) => {
    showDropdown.value = false
    selectedItem.value = event.target.innerText
    filteredProducts.value = []

    // click 的时候选择product，根据product name得到数据
    if (productData.value) {
      selectItemData.value = productData.value.products.filter(
        (item) => item.title === selectedItem.value
      )
    }
    // console.log(productData.value.products)    // 全部product数据
    // console.log(selectItemData.value[0])       // 所得item的数据
  }

  const toggleShowData = () => {
    fetchDummyProductDataList()
  }

  useSignalEffect(() => {
    fetchDummyProductDataList()
  })

  useSignals()

  return (
    <>
      fake product data api: https://dummyjson.com/docs/products
      <br />
      <br />
      <div className="product-container">
        <div className="input-wrapper">
          <input
            name="search-by-username"
            placeholder="Search Username..."
            type="text"
            value={searchParam.value}
            onChange={handleInputChange}
          />{" "}
          <button onClick={toggleShowData}>Search</button>
        </div>
        eg. mac, iphone, perfume, gm, etc.
        <div>
          {/* 只有当能够搜索到才会显示dropdown */}
          <div className="suggestion-box">
            {showDropdown.value && (
              <Suggestions
                data={filteredProducts.value}
                handleClick={handleClickSuggestions}
              />
            )}
          </div>
          <div>
            {loadingStatus.value ? (
              <div>Loading...</div>
            ) : (
              selectItemData.value && (
                <Product product={selectItemData.value[0]} />
              ) // 应该传入的是.value
            )}
          </div>
        </div>
      </div>
      <br /> 大致思路：
      <ul>
        <li>先得到全部product data, 根据searchParam得到filtered data</li>
        <li>
          弹出suggestion, click一下得到candidate (往project
          component输入data和handleClickSuggestions callback function很精髓)
        </li>
        <li>根据candicate从全部product data里面选取出要渲染的data展示</li>
      </ul>
    </>
  )
}
