import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useSignals } from "@preact/signals-react/runtime"
import { FoodRecipeContext } from "./context"

export default function ItemCard({ item }) {
  const { favList } = useContext(FoodRecipeContext)
  useSignals()
  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "10px",
        border: "1px solid black",
        marginBottom: "10px",
        width: "85px",
        background: "lightBlue",
        fontSize: "10px",
        padding: "10px",
      }}
    >
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.title}
          style={{ maxWidth: "80px" }}
        />
      )}
      <span>
        <p>{item.publisher}</p>
        <h3>{item.title}</h3>
        {/* {item.id.toString().slice(-5)}  */}
        {favList.value && favList.value[item.id] && "❤️"}
        <br />
        <br />
        <Link
          to={`/recipe-item/${item?.id}`}
          style={{
            border: "1px solid black", // 设置边框样式
            borderRadius: "5px",
            color: "white",
            backgroundColor: "black",
            padding: "5px",
          }}
        >
          Recipe Details
        </Link>
      </span>
    </div>
  )
}
