import React from "react"
import AutoComplete from "./components/auto-complete"
import BasicButtons from "./components/button"
import ItemCard from "./components/item-card"
import DataGridDemo from "./components/data-grid"
import ListDemo from "./components/list-demo"

import { Typography } from "@mui/material"

export default function MUIComponents() {
  return (
    <div>
      <Typography variant="h5">Hello MUI!</Typography>
      <h4>auto-complete</h4>
      <AutoComplete />
      <h4>buttons</h4>
      <BasicButtons />
      <h4>Card</h4>
      <ItemCard />
      <h4>Data Grid</h4>
      <DataGridDemo />
      <h4>List Demo</h4>
      <ListDemo />
    </div>
  )
}
