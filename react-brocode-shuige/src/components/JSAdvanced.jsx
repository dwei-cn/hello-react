import React from "react"

export default function JSAdvanced() {
  const myArray = [1, 2, 3]
  const myObject = { key: "value" }

  let firstName = "dave"
  let lastName = "wei"

  const id = 1
  const title = "product 1"
  const rating = 5

  const product = { id, title, rating } // shorthand property name

  const arr = ["john", "doe"]
  let [arrFirstElement, arrSecondElement] = arr

  function sum(num1 = 4, num2 = 3, num3 = 5) {
    return num1 + num2 + num3
  }

  const arrOne = [1, 2, 3]
  const arrTwo = [4, 5, 6]
  const defaultOptions = {
    color: "blue",
    size: "medium",
    style: "normal",
  }

    

  return (
    <div>
      <h3>Check Console</h3>
      <>{console.log("Advanced JavaScript")}</>
      <>{console.log("判断Array", Array.isArray(myArray))}</>
      <>
        {console.log(
          "判断Object", // 需要判断type为object且不为Array
          typeof myObject === "object" &&
            myObject !== null &&
            !Array.isArray(myObject)
        )}

        <>{console.log("template literals:", `${firstName} ${lastName}`)}</>
        <>{console.log(product)}</>
        <>
          {console.log(
            "Array destructuring:",
            arrFirstElement,
            arrSecondElement
          )}
        </>
        <>{console.log("default parameter", sum(), sum(1, 2, 2))}</>
        <>
          {console.log("merge two arrays", [
            ...arrOne.slice(0, 2),
            100,
            1000,
            ...arrTwo.slice(2),
          ])}
        </>
        <>{console.log("copy当前array", [...arrOne])}</>
        <>{console.log("函数参数", sum(...arrOne))}</>
        <>
          {console.log("覆盖当前属性", { ...defaultOptions, style: "hip-hop" })}
        </>
      </>
    </div>
  )
}
