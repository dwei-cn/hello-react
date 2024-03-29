import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { useSignals } from "@preact/signals-react/runtime"

export default function NavbarShopping() {
  useSignals()
  return (
    <nav>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <h4>Food Recipe</h4>
      </NavLink>

      <ul>
        <li>
          {" "}
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/login"} style={{ textDecoration: "none" }}>
            Login
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
