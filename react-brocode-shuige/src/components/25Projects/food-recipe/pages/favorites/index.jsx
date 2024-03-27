import React, { useContext } from "react"
import { FoodRecipeContext } from "../../context"
import ItemCard from "../../itemCard"
import { useSignals } from "@preact/signals-react/runtime"

export default function Favorites() {
  const {  favList } = useContext(FoodRecipeContext)

  // 从recipeList中筛选出favList中包含的item
  const favoriteItems = Object.values(favList.value)

  useSignals()
  return (
    <div>
      Favorites
      {favoriteItems && favoriteItems.length > 0 ? (
        favoriteItems.map((value) => (
          <ItemCard item={value} favList={favList.value} />
        ))
      ) : (
        <div>Nothing to show...</div>
      )}
    </div>
  )
}
