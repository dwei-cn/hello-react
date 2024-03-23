import React from "react"
import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { FoodRecipeContext } from "../../context"
import { useSignals } from "@preact/signals-react/runtime"

export default function Details() {
  const { id } = useParams()
  const {
    recipeDetailsData,
    favList,
    handleAddFavList,
    handleRemoveFromFavList,
  } = useContext(FoodRecipeContext)

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        )
        const data = await res.json()
        // console.log(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        // console.log(recipeDetailsData.value)
        // console.log("current id: " + favList.value)

        if (data?.data) {
          recipeDetailsData.value = data?.data
          console.log(recipeDetailsData.value)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getRecipeDetails()
    // return () => {
    //   // 在这里执行清除操作，例如重置数据
    //   recipeDetailsData.value = null
    // }
  }, [id])

  // console.log(recipeDetailsData.value)
  useSignals()
  return (
    <div>
      <div>
        <img src={recipeDetailsData?.value.recipe.image_url}></img>
      </div>
      <div>{recipeDetailsData?.value.recipe.publisher}</div>
      <div>{recipeDetailsData?.value.recipe.title}</div>{" "}
      {favList.value.includes(id) ? "❤️" : null} <br />
      <button onClick={() => handleAddFavList(id)}>
        Save as favorite
      </button>{" "}
      <br />
      <button onClick={() => handleRemoveFromFavList(id)}>
        Remove favorite
      </button>
    </div>
  )
}
