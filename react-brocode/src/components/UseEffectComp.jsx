import { useEffect, useState } from "react"

export default function useEffectComp() {
  const [listItems, setListItems] = useState([])
  const fetchDataUrl = "https://jsonplaceholder.typicode.com/posts/"

  // useEffect用于side effect, 也就是不影响主function render进行
  // useEffect最好搭配useState使用
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
