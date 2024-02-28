import React from "react"
import useFetch from "."

export default function UseFetchHookTest({ url, preview }) {
  const { data, pending, error } = useFetch(url, {}, preview)

//   console.log(data, pending, error)

  return (
    <div>
      <h4>Use Fetch Hook</h4>
      {pending ? <h5>Pending</h5> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  )
}
