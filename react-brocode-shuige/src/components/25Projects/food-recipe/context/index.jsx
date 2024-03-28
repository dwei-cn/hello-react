import { useState, createContext } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import { useNavigate } from "react-router-dom"

export const FoodRecipeContext = createContext(null)

export default function FoodRecipeState({ children }) {
  const searchParam = useSignal("apple")
  const loading = useSignal("")
  const recipeList = useSignal([])
  const recipeDetailsData = useSignal(null)
  const favList = useSignal([])
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam.value}`
      )
      const data = await res.json()

      if (data?.data?.recipes) {
        recipeList.value = data?.data?.recipes
        loading.value = false
        searchParam.value = ""

        // Get the navigate function from useNavigate

        // Navigate to the desired route, here is home page
        navigate("/")
      }
      //   console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  //   const handleAddFavList = (itemId) => {
  //     // 使用Set来存储favList.value中的唯一元素
  //     const uniqueItems = new Set(favList.value)
  //     // 添加新元素到Set中
  //     uniqueItems.add(itemId)
  //     // 将Set转换回数组形式
  //     const updatedFavList = Array.from(uniqueItems)
  //     // 更新favList.value
  //     favList.value = updatedFavList
  //   }

  const handleAddFavList = (recipeDetailsData) => {
    // 使用对象来存储favList.value，以id作为键
    const updatedFavList = { ...favList.value }

    // 添加新元素到对象中，以recipeDetailsData的id作为键
    updatedFavList[recipeDetailsData.id] = recipeDetailsData

    // 更新favList.value
    favList.value = updatedFavList

    console.log(favList.value)
  }

  const handleRemoveFromFavList = (id) => {
    // 使用对象来存储favList.value，以id作为键
    const updatedFavList = { ...favList.value }

    // 从对象中移除指定id的元素
    delete updatedFavList[id]

    // 更新favList.value
    favList.value = updatedFavList
  }

  useSignals()
  return (
    <FoodRecipeContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        favList,
        handleSubmit,
        handleAddFavList,
        handleRemoveFromFavList,
      }}
    >
      {children}
    </FoodRecipeContext.Provider>
  )
}
