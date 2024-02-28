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

  // object其实就是hashmap，下面就是an array of objects/maps
  const personsArray = [
    {
      name: "Alex",
      age: "10",
      city: "Bei Jing",
    },
    {
      name: "David",
      age: "20",
      city: "Seattle",
    },
    {
      name: "Mia",
      age: "20",
      city: "Tokyo",
    },
    {
      name: "Sean",
      age: "25",
      city: "Seattle",
    },
  ]

  let personName = personsArray.map((person, index) => {
    return `${person.name}-${index}` // 记住要加return
  })

  let personFromSeattle = personsArray.filter((person) => {
    return person.city === "Seattle" // 符合判别式的
  })

  // object查找是否存在，返回true or false，类似array里面的includes
  let checkSomeMethod = personsArray.some((person) => {
    return person.age === "20"
  })

  // 是否全部符合，返回true or false
  let checkEveryMethod = personsArray.every((person) => {
    return person.age === "20"
  })

  const arrThree = [1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]

  // 找到是否存在某元素，会返回第一个
  let checkFindMethod = arrThree.find((item) => {
    return item === 2
  })

  let init = 100
  let checkReduceMethod = arrThree.reduce((acc, curr, index, array) => {
    console.log(acc, curr, index)
    return acc + curr
  }, init)

  // async + await
  // async代表异步，会生成promise，await则是确保等一个接一个promise完成才进行下一步
  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products/2")
      const result = await response.json() // 加await，确保上一步完成了才会走这一步

      console.log(result)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  fetchData()

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
        <>
          {console.log(personName)}
          {console.log(personFromSeattle)}
          {console.log(checkSomeMethod)}
          {console.log(checkEveryMethod)}
          {console.log(checkFindMethod, "find")}
          {console.log(checkReduceMethod, "reduce")}
          {console.log(arrThree.includes(10), "includes")}
          {console.log(arrThree.indexOf(4), "indexOf")}
          {console.log(arrThree.indexOf(100), "indexOf")}{" "}
          {/* 输出-1，如果元素不存在 */}
          {console.log(
            arrThree.findIndex((item) => item === 4),
            "findIndex"
          )}{" "}
          {/* 输出-1，如果元素不存在 */}
          {/* {console.log(fetchData(), "fetch data async await")} */}
        </>
      </>
    </div>
  )
}
