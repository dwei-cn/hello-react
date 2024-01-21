import React, { useEffect, useState } from "react"
import useFetch from "use-http"

export default function UseFetchComp() {
  const { get, post, response, loading, error } = useFetch(
    "https://swapi.dev/api/"
  )
  const [dataset, setDataset] = useState([])

  // 第一次启动时候加载，如果只是想手动也可以不需要这个useEffect
  useEffect(() => {
    search("films") // Make sure to pass dependencies array []
  }, [])

  async function search(presource) {
    // console.log("search", presource)
    const datalist = await get("/" + presource)
    if (response.ok) {
      setDataset(datalist.results)
    } else {
      setDataset([])
    }
  }

  const btn_click = async (pvalue) => {
    await search(pvalue)
  }

  return (
    <>
      <h4>UseFetch</h4>
      {/* button只是为了改变不同的pvalue，生成不同的dataset */}
      <button onClick={() => btn_click("films")}>电影</button>
      <button onClick={() => btn_click("people")}>人物</button>
      <button onClick={() => btn_click("aws")}>AWS</button>
      <ul>
        {dataset.map((item, index) => (
          <div key={index}>
            {index + 1}.{item.title || item.name}
          </div>
        ))}
      </ul>
    </>
  )
}
