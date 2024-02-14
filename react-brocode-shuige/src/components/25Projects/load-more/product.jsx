import React from "react"

export default function Product({ productData }) {
  return (
    <div>
      {productData && // 一定要有这个判定，渲染之前添加了条件检查 productData.value !== null，以确保 productData.value 不为 null 才会调用 map 方法。这样就可以避免出现报错。
        productData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.thumbnail} alt={item.title} />
            <div className="product-text">
              <strong>{item.title}</strong>
              <p>Brand: {item.brand}</p>
              <div>
                Rating: {item.rating}
                {/* <RatingStars rating={item.rating} />{" "} */}
              </div>
              <p>Price: {item.price}</p>
              <p>Stock: {item.stock}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
