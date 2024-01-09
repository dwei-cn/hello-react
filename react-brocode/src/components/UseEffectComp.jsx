import { useEffect, useState } from "react"

export default function useEffectComp() {
  const [listItems, setListItems] = useState([])
  const fetchDataUrl = "https://jsonplaceholder.typicode.com/posts/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchDataUrl)
        const data = await response.json()
        setListItems(data.slice(0, 3))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    // Cleanup function
    return () => {
      // Add cleanup logic here, if needed
      console.log("Cleanup performed")
    }
  }, []) // Empty dependency array means the effect runs once after the initial render

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
