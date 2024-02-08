import React from "react"

export default function StarRating({ rating }) {
  // 将评分数四舍五入到最接近的0.5的倍数
  const roundedRating = Math.round(rating * 2) / 2
  const starPercentage = (roundedRating / 5) * 100

  return (
    <div className="star-rating" style={{ fontSize: "16px" }}>
      <span style={{ width: `${starPercentage}%` }}>★★★★★</span>
      <span style={{ width: `${100 - starPercentage}%` }}>☆☆☆☆☆</span>
    </div>
  )
}
