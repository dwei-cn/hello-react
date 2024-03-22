import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <NavLink to={"/"}>
        <h4 className="">Food Recipe</h4>
      </NavLink>

      <form action="">
        <input
          type="text"
          name="search"
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
