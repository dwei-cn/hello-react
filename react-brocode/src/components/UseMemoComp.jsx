import React, { useState, useMemo } from "react"

export default function UseMemoComp() {
  const [x, setX] = useState(10)
  const [y, setY] = useState(10)

  // useMemo 储存昂贵的运算
  console.time("xxx")
  let a = useMemo(() => {
    let res = 10
    for (let j = 3; j < 100000000; j++) {
      res += j
    }
    return res
  }, [x])

  // let a = 10
  // for (let j = 3; j < 100000000; j++) {
  //   a += j
  // }

  console.timeEnd("xxx")

  return (
    <>
      <h4>UseMemo</h4>
      <p>x: {x}</p>
      <p>y: {y}</p>
      <p>a: {a}</p>

      <button onClick={() => setX(x + 1)}>x + 1</button>
      <button onClick={() => setY(y + 1)}>y + 1</button>
    </>
  )
}
