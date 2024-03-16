import React, { useMemo } from "react"
import { useState, useEffect, createContext } from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import ComponentB from "./componentB"

export const GlobalContext = createContext(null)

export default function ReactHooksExplained() {
  const counter = useSignal(0)
  const showCounterText = useSignal(false)
  const themeColor = useSignal("light")
  const fontColor = useSignal("light")
  const data = useSignal([])

  const handleAddButton = () => {
    counter.value += 1
  }

  useEffect(() => {
    counter.value === 5
      ? (showCounterText.value = true)
      : (showCounterText.value = false)

    // 在组件卸载时执行 cleanup
    return () => {
      console.log("Cleanup...")
      // 在这里可以进行一些清理工作，比如取消订阅、清除定时器等
    }
  }, [])

  const handleThemeButton = () => {
    if (themeColor.value === "light") {
      themeColor.value = "dark"
    } else {
      themeColor.value = "light"
    }
    console.log(themeColor.value)
  }

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products/")
      const result = await response.json() // 加await，确保上一步完成了才会走这一步

      if (result && result.products) {
        data.value = result.products
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
    console.log("useMemo fetch data")
  }

  useEffect(() => {
    fetchData()
  }, [])

  function filterProductsByPrice(getProducts) {
    console.log("this is getting called")
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : []
  }

  const noMemorizeFilterProductsByPrice = filterProductsByPrice(data.value)

  //   const memorizeFilterProductsByPrice = useMemo(
  //     () => filterProductsByPrice(data.value),
  //     [data.value]
  //   )

  useSignals()
  return (
    <div>
      <h4>UseEffect</h4>
      counter: {counter.value} <br />
      {showCounterText.value && <div>Bingo!</div>}
      <br />
      <button onClick={handleAddButton}>click to add</button>
      <h4>UseContext</h4>
      <p>
        取代props，避免props drilling，可以直接从children
        component可以直接import parent
        component定义的context，所以适合创建类似于theme这样的global context
      </p>
      <div
        style={{
          border: "3px solid",
          borderColor: "black",
          width: "20em",
          padding: "25px",
        }}
      >
        This Component A , theme is <b>{themeColor.value}</b> <br />
        <button onClick={handleThemeButton}>Change theme</button>
        <GlobalContext.Provider
          value={{ themeColor: themeColor.value, fontColor: fontColor.value }}
        >
          {" "}
          <ComponentB />{" "}
          {/*不再需要props, ComponentB可以直接import useContext */}
        </GlobalContext.Provider>
      </div>
      <h4>UseMemo</h4>
      <p>
        {noMemorizeFilterProductsByPrice.map((item) => (
          <li>{item.title}</li>
        ))}
      </p>
    </div>
  )
}
