import React, { useRef } from "react"
import useFetch from "../use-fetch"

export default function ScrollUpDown() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=50",
    {},
    false
  )

  const topSecRef = useRef(null)
  const bottomSecRef = useRef(null)
  const listRef = useRef(null)
  const refs = Array.from({ length: 5 }, () => useRef(null)) // 创建包含5个不同的 useRef 的数组,每个ref是真的可以埋
  const colors = ["red", "blue", "green", "purple", "orange"]

  if (error) {
    return <mark>Error occured! Please try again.</mark>
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  //   const handleScrollToBot = () => {
  //     if (bottomSecRef.current) {
  //       bottomSecRef.current.scrollIntoView({ behavior: "smooth" })
  //     }
  //   }

  //   const handleScrollToSection = () => {
  //     let pos = listRef.current.getBoundingClientRect().top
  //     window.scrollTo({
  //       top: pos,
  //       behavior: "smooth",
  //     })
  //   }

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        //   block: "start"
      })
    }
  }

  return (
    <div>
      <h4 ref={topSecRef}>This is the top section</h4> {/*在div中埋入ref*/}
      <button onClick={() => handleScrollToSection(bottomSecRef)}>
        Scroll To Bottom
      </button>{" "}
      <button onClick={() => handleScrollToSection(listRef)}>
        Scroll To Section
      </button>
      {pending ? <h5>Loading, please wait.</h5> : null}
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li key={item.id} ref={item.id % 20 === 0 ? listRef : null}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
      {data &&
        data.products &&
        data.products.length &&
        `Total Item Count: ${data.products.length}`}{" "}
      <br />
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      {/* <button onClick={() => handleScrollToSection(topSecRef)}>
        Scroll To Top
      </button> */}
      <h4 ref={bottomSecRef}>This is the bottom section</h4>
      点击每个box之间循环
      <div>
        {refs.map((ref, index) => (
          <div
            key={index}
            ref={ref}
            style={{
              color: "white",
              fontSize: "16px",
              border: "1px solid black", // 设置边框样式
              marginTop: "10px",
              marginBottom: "10px",
              width: "20em",
              height: "40em",
              backgroundColor: colors[index], // 设置背景颜色
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column", // 设置垂直排列
            }}
          >
            <div
              style={{
                marginTop: "5em",
                marginBottom: "5em",
                border: "1px", // 设置边框样式
                padding: "20px",
                backgroundColor: "white", // 设置背景颜色
                color: "black",
                borderRadius: "10px",
              }}
              onClick={() => {
                const targetIndex = index === 0 ? refs.length - 1 : index - 1
                handleScrollToSection(refs[targetIndex])
              }}
            >
              {" "}
              Click To Last Box
            </div>
            <br />
            <div
              style={{
                marginTop: "5em",
                marginBottom: "5em",
                border: "1px", // 设置边框样式
                padding: "20px",
                backgroundColor: "white", // 设置背景颜色
                color: "black",
                borderRadius: "10px",
              }}
              onClick={() => {
                const targetIndex = index === refs.length - 1 ? 0 : index + 1
                handleScrollToSection(refs[targetIndex])
              }}
            >
              {" "}
              Click To Next Box
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => handleScrollToSection(refs[4])}>
        Scroll To Box
      </button>
    </div>
  )
}
