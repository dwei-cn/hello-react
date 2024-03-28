import React, { useContext } from "react"
import { FoodRecipeContext } from "../../context"
import ItemCard from "../../itemCard"
import { useSignals } from "@preact/signals-react/runtime"

export default function HomePage() {
  const { recipeList, loading } = useContext(FoodRecipeContext)
  if (loading) {
    ;<div>Loading...Please wait.</div>
  }
  useSignals()
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "25px",
      }}
    >
      {recipeList.value && recipeList.value.length > 0 ? (
        recipeList.value.map((item) => (
          <ItemCard item={item} />
        ))
      ) : (
        <div>Nothing to show...</div>
      )}
    </div>
  )
}
