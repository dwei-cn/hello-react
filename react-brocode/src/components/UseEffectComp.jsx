import React from "react"
import { useEffect, useState } from "react"

export default function useEffectComp() {
  const [listItems, setListItems] = useState([])
  const fetchDataUrl = "https://jsonplaceholder.typicode.com/posts/"

  useEffect(() => {
    fetch(fetchDataUrl)
      .then((response) => response.json())
      .then((data) => {
        setListItems(data.slice(0, 3))
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h4>Use Fetch API (useEffect)</h4>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
