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

        if (data?.data) {
          recipeDetailsData.value = data?.data
          console.log(recipeDetailsData.value)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getRecipeDetails()
  }, [id])

  useSignals()
  return (
    <div>
      <div>
        <img src={recipeDetailsData?.value.recipe.image_url}></img>
      </div>
      <div>{recipeDetailsData?.value.recipe.publisher}</div>
      <div>{recipeDetailsData?.value.recipe.title}</div>{" "}
      {favList.value[id] ? "❤️" : null} <br />
      {!favList.value[id] ? (
        <button
          onClick={() => handleAddFavList(recipeDetailsData?.value.recipe)}
        >
          Save as favorite
        </button>
      ) : (
        <button onClick={() => handleRemoveFromFavList(id)}>
          Remove favorite
        </button>
      )}
    </div>
  )
}
