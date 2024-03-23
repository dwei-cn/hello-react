import React, { useContext } from "react"
import { FoodRecipeContext } from "../../context"
import ItemCard from "../../itemCard"
import { useSignals } from "@preact/signals-react/runtime"

export default function Favorites() {
  const { searchParam, recipeList, favList } = useContext(FoodRecipeContext)

  // 从recipeList中筛选出favList中包含的item
  const favoriteItems = recipeList.value.filter((item) =>
    favList.value.includes(item.id)
  )
  console.log(favoriteItems)
  // console.log(recipeList.value.data)
  useSignals()
  return (
    <div>
      Favorites
      {favoriteItems && favoriteItems.length > 0 ? (
        favoriteItems.map((item) => <ItemCard item={item} favList={favList.value}/>)
      ) : (
        <div>Nothing to show...</div>
      )}
    </div>
  )
}
