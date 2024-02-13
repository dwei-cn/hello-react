import React from "react"
import RatingStars from "./ratingStars" // 导入星级评分组件
import StarRating from "./starRating"
import ImgNav from "./imgNav"

import { ratingValue } from "./StarRating"


import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export const newRatingStatus = signal(false)
export const resetStatusRating = signal(false)

export default function Product({ product, resetStatusRatingGit }) {
  // 直接取productData.value里面对应的json object key
  const { brand, title, description, images, price, rating, stock } = product

  const ratingUI = useSignal(rating)
  const ratingCopy = useSignal(rating)

  const handleNewRating = () => {
    if (!newRatingStatus.value) {
      ratingUI.value = ratingCopy.value
    } else {
      ratingUI.value = ratingValue.value
    }
    ratingCopy.value = ratingUI.value
    newRatingStatus.value = !newRatingStatus.value
    resetStatusRating.value = !resetStatusRating.value

    console.log(ratingUI.value)
  
  }

  useSignals()
  return (
    <div className="product">
      {product && (
        <div>
          <ImgNav imgData={product.images} />

          <div>
            {" "}
            <div>{title}</div>
            <div>Brand: {brand}</div>
            <div>{description}</div>
            <div>
              Rating: {ratingUI.value} <RatingStars rating={ratingUI.value} />{" "}
              {newRatingStatus.value && (
                <StarRating
                  fullStars={5}
                  resetStatus={resetStatusRating.value}
                />
              )}{" "}
              <button onClick={handleNewRating}>
                {newRatingStatus.value ? "Save" : "New Rating"}
              </button>
              <button onClick={() => (ratingUI.value = rating)}>
                Reset Rating
              </button>
            </div>
            <div>Price: {price}</div>
            <div>Stock: {stock}</div>
          </div>
        </div>
      )}
    </div>
  )
}
