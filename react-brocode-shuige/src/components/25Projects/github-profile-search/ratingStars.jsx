import React from "react"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

export default function RatingStars({ rating }) {
  const fullRating = 5
  const fullStars = Math.floor(rating)
  const decimalPart = rating - fullStars
  const remainingStars =
    fullRating -
    fullStars -
    (decimalPart < 0.25 ? 0 : decimalPart > 0.75 ? 0 : 1) //只有decimal介于0.25和0.75之间才需要半颗星

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {decimalPart >= 0.25 &&
        decimalPart <= 0.75 && ( //只有decimal介于0.25和0.75之间才需要半颗星
          <FaStarHalfAlt key="half-star" />
        )}
      {[...Array(remainingStars)].map((_, index) => (
        <FaRegStar key={`empty-star-${index}`} />
      ))}
    </div>
  )
}
