import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { FoodRecipeContext } from "./context"
import { useSignals } from "@preact/signals-react/runtime"

export default function Navbar() {
  const { searchParam, handleSubmit } = useContext(FoodRecipeContext)

  useSignals()
  return (
    <nav>
      <NavLink to={"/"}>
        <h4 className="">Food Recipe</h4>
      </NavLink>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam.value}
          onChange={(e) => {
            searchParam.value = e.target.value
          }}
          placeholder="Enter Items..."
          className="bg-white/75"
        />
      </form>

      <ul>
        <li>
          {" "}
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}
