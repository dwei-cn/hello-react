import { useEffect, useState } from "react"

export default function useEffectComp() {
  const [listItems, setListItems] = useState([])
  const fetchDataUrl = "https://jsonplaceholder.typicode.com/posts/"

  useEffect(() => {
    // 定义async函数，返回的是一个Promise对象
    const fetchData = async () => {
      try {
        const response = await fetch(fetchDataUrl)
        const data = await response.json()
        setListItems(data.slice(0, 3))
      } catch (error) {
        console.log(error)
      }
    }

    // 执行函数
    fetchData()

    // Cleanup function，断开数据库连接，移除监听事件，结束定时器
    // return 可以没有，有的话必须是个函数
    return () => {
      // Add cleanup logic here, if needed
      console.log("Cleanup performed")
    }
  }, []) // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <h4>useEffect (Use Fetch API)</h4>
      UseEffect主要是不阻塞渲染，可以渲染先其他的部分，这部分啥时候好(例如fetch
      data)啥时候呈现就行，但是重新渲染必定再次触发useEffect，所以它也可以拿到别的部分的渲染结果(添加dependencies)
      <br />
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
