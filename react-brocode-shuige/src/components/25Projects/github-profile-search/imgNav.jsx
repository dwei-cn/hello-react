import React from "react"
import { FaCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { signal, useSignal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"


export default function ImgNav({ imgData }) {
  const selectImageIndex = useSignal(0)
  // const selectImageIndexArrow = useSignal(0)

  const handleClickFaCircle = (getCurrentIndex) => {
    selectImageIndex.value = getCurrentIndex
    // selectImageIndexArrow.value = selectImageIndex.value
    // console.log(getCurrentIndex)
  }

  const handleClickArrowLeft = () => {
    if (selectImageIndex.value >= 1) {
      selectImageIndex.value -= 1
    } else if (selectImageIndex.value === 0) {
      selectImageIndex.value = imgData.length - 2
    }
    // console.log(selectImageIndex.value)
  }

  const handleClickArrowRight = () => {
    if (selectImageIndex.value < imgData.length - 2) {
      selectImageIndex.value += 1
    } else if (selectImageIndex.value === imgData.length - 2) {
      selectImageIndex.value = 0
    }

    // console.log(selectImageIndex.value)
  }

  useSignals()

  return (
    <>
      {" "}
      <img
        src={imgData[selectImageIndex.value]}
        alt="Product Picture"
        className="product-pic"
      />
      <br />
      <span className="img-nav">
        {<FaArrowLeft onClick={handleClickArrowLeft} />}{" "}
        {[...Array(imgData.length - 1)].map((_, index) => (
          <FaCircle
            className={
              selectImageIndex.value === index
                ? "active-circle"
                : "inactive-circle"
            }
            key={index}
            onClick={() => handleClickFaCircle(index)}
          />
        ))}{" "}
        {<FaArrowRight onClick={handleClickArrowRight} />}
      </span>
    </>
  )
}
