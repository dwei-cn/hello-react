import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Rating from "@mui/material/Rating"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function ItemCardOne() {
  const [expanded, setExpanded] = React.useState(false)
  const [value, setValue] = React.useState(2)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.motor1.com/images/mgl/koW22x/s3/xiaomi-su7-2024-das-exterieur.jpg"
        alt="Xiaomi Su7"
      />
      <CardContent>
        <Typography
          variant="h5"
          color="text.primary"
          sx={{ marginBottom: "1rem" }}
        >
          Xiaomi Su7
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "0.5rem" }}
        >
          This is a nice car.
        </Typography>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ marginBottom: "0.5rem" }}
        >
          $35,000
        </Typography>
        {/* <Rating name="read-only" value={4.5} readOnly /> */}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          precision={0.5}
          max={6}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Details:</Typography>
          <Typography paragraph>
            The Xiaomi Su7 is a new electric vehicle from the tech company
            Xiaomi. It features a sleek design, advanced technology, and a
            long-range battery.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
