import * as React from "react"
import Stack from "@mui/material/Stack"

import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import AlarmIcon from "@mui/icons-material/Alarm"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import SendIcon from "@mui/icons-material/Send"

export default function BasicButtons() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="go to shopping"
          href="http://localhost:5173/shop"
          size="large"
        >
          <ShoppingBasketIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={5}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </>
  )
}
