import React from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

import { FaStar } from "react-icons/fa"
import "./styles.css"
import GithubProfileSearch from "./GithubProfileSearch"

// Define rating signal outside the component
export const ratingValue = signal(0)

export default function StarRating({ fullStars = 5, resetStatus }) {
  const hover = useSignal(0)

  const handleClick = (getCurrentIndex) => {
    ratingValue.value = getCurrentIndex
  }

  const handleDoubleClick = () => {
    ratingValue.value = 0
  }

  const handleMouseEnter = (getCurrentIndex) => {
    hover.value = getCurrentIndex
  }

  const handleMouseExit = () => {
    hover.value = ratingValue.value
  }

  useSignalEffect(() => {
    if (resetStatus) {
      // Reset ratingValue and hover to initial state
      ratingValue.value = 0
      hover.value = 0
    }
  })

  return (
    <span className="start-rating-container">
      {[...Array(fullStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            className={
              (ratingValue.value || hover.value) >= index
                ? "active"
                : "inactive"
            }
            onClick={() => handleClick(index)}
            onDoubleClick={handleDoubleClick}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseExit(index)}
          />
        )
      })}{" "}
      <span className="new-rating">
        {hover && ratingValue.value !== 0 && `New Rating: ${ratingValue.value}`}
      </span>
    </span>
  )
}
