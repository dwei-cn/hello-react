import React from "react"
import StarRating from "./StarRating" // 导入星级评分组件

export default function Product({ product }) {
  // 直接取productData.value里面对应的json object key
  const { brand, title, description, images, price, rating, stock } = product

  return (
    <div className="product">
      {product && (
        <div>
          <img src={images[0]} alt="Product Picture" className="product-pic" />
          <div>
            {" "}
            <div>Name: {title}</div>
            <div>Description: {description}</div>
            <div>Rating: {rating}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Stock: {stock}</div>
          </div>
        </div>
      )}
    </div>
  )
}
