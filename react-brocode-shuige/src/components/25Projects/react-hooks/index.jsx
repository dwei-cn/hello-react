import React, { useMemo } from "react"
import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useRef,
  useReducer,
  useLayoutEffect,
} from "react"
import { signal, useSignal, useSignalEffect } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import ComponentB from "./componentB"
import MemoChild from "./child"

export const GlobalContext = createContext(null)

const initialState = {
  count: 0,
  showCountFlag: false,
  reachMaxError: false,
}

function reducerFun(state, action) {
  const { count } = state
  console.log(state)

  switch (action.type) {
    case "add":
      const newCount = count + 1
      const reachMaxError = newCount > 4
      return { ...state, count: newCount, reachMaxError } // 更新state这个array of objects里面的value，

    case "minus":
      const newCount2 = count - 1
      const reachMaxError2 = newCount2 > 4
      return { ...state, count: newCount2, reachMaxError: reachMaxError2 }

    case "reset":
      return { ...state, count: 0, reachMaxError: false }

    case "showcount":
      return { ...state, showCountFlag: !state.showCountFlag }

    default:
      return state
  }
}

export default function ReactHooksExplained() {
  const timestamp = Date.now()
  useEffect(() =>
    console.log(`ReactHooksExplained component re-rendered! @${timestamp}`)
  )

  const counter = useSignal(0)
  const counterButton1 = useSignal(0)
  const counterButton2 = useSignal(0)
  const showCounterText = useSignal(false)
  const themeColor = useSignal("light")
  const fontColor = useSignal("light")
  const data = useSignal([])
  const [inputValueState, setInputValueState] = useState("")
  const inputValueRef = useRef("")
  const [state, dispatch] = useReducer(reducerFun, initialState) // usestate中的setxx就是dispatch的一种

  const [number, setNumber] = useState(0)
  const [sectionStyle, setSectionStyle] = useState({})
  const sectionRef = useRef()

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
    // console.log(themeColor.value)
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
    const random = Math.floor(Math.random() * 50)

    /* loop is just to make the changes in this example slow enough to be observable */
    for (let i = 0; i <= 1000000000; i++) {
      if (i === 1000000000) setSectionStyle({ paddingTop: `${random}px` })
    }
  }, [number])

  useEffect(() => {
    fetchData()
  }, [])

  function filterProductsByPrice(getProducts) {
    console.log("this is getting called")
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : []
  }

  //   const noMemorizeFilterProductsByPrice = filterProductsByPrice(data.value)   //就算不使用这个他也是会运行的

  const memorizeFilterProductsByPrice = useMemo(
    () => filterProductsByPrice(data.value), // useEffect每次还是会运行，但是如果data不变的话，useMemo里面的方程也就不会运行
    [data.value]
  )

  const memoSetCount1Func = useCallback(
    () => (counterButton1.value += 1),
    [counterButton1.value]
  )
  const memoSetCount2Func = useCallback(
    () => (counterButton2.value += 1),
    [counterButton2.value]
  )

  const handleInputChange = (e) => {
    // setInputValueState(e.target.value)
    // console.log(inputValueState)

    inputValueRef.current = e.target.value
    console.log(inputValueRef.current)
  }

  useSignals()
  return (
    <div>
      <details>
        <summary>Check React Hooks</summary>
        <q> check bellow</q>
      </details>
      <h4>UseState</h4>
      <p>
        最为常规的储存state的方式，但是有一个问题是{" "}
        <b>每次改变useState的状态，整个component都会re-render</b>,
        这就极大地影响了效率。所以我们就会考虑useRef或者useSignals
      </p>
      <h4>UseRef</h4>
      避免了UseState反复渲染的问题，UseRef状态更新不会引起整个component的re-render。
      <input type="text" ref={inputValueRef} onChange={handleInputChange} />
      {/* <input type="text" value={inputValueState} onChange={handleInputChange} /> */}
      <button onClick={() => setInputValueState(inputValueRef.current)}>
        Click to setInputValueState
      </button>{" "}
      <br />
      通过这个例子可以看到每次setInputValueState都会引起全局的渲染，而inputValueRef则不会，see
      console。
      <h4>UseEffect</h4>
      <p>进行side effect 监听</p>
      counter: {counter.value} <br />
      {showCounterText.value && <div>Bingo!</div>}
      <br />
      <button onClick={handleAddButton}>click to add</button>
      <h4>useLayoutEffect</h4>
      useEffect和useLayoutEffect在function里面的运行是一模一样的，两者的不同主要是function与组件渲染之间的同步和异步，先更新数据再渲染组件，还是先渲染组件再更新数据.
      <li>
        {" "}
        <b>先更新数据再渲染组件</b>
        <br />
        useEffect是异步执行的(asynchronous)，它会在组件渲染完成后才会执行。这意味着当状态发生变化时，useEffect中的操作可能会在DOM更新之前执行，因此你会在DOM中看到数字变化，然后再看到样式变化。
      </li>
      <li>
        {" "}
        <b>先渲染组件再更新数据</b>
        <br />
        useLayoutEffect是同步执行的(synchronous)，它会在DOM更新之前立即执行。这意味着当状态发生变化时，useLayoutEffect中的操作会在DOM更新之前执行，因此你会先看到样式变化，然后再看到数字变化。
      </li>
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
        </div>
      </section>
      <h4>UseContext</h4>
      <p>
        解决 <b> props过多</b>
        的问题。取代props，避免props drilling，可以直接从children
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
        从<b>data</b>层面优化不必要的子组件的 <b>渲染</b>。一般可能搭配{" "}
        <mark>useEffect</mark> 使用，先fetch
        data，然后对data进行process，如果fetch的data，那么后面的useMemo也就不会运行。
      </p>
      <p>
        见console，<code>memorizeFilterProductsByPrice</code>
        里面不再重复渲染，如果data不变的话。
      </p>
      <p>
        {memorizeFilterProductsByPrice.map((item) => (
          <li>{item.title}</li>
        ))}
      </p>
      <h4>UseCallback</h4>从<b>function</b>层面优化不必要的子组件的 <b>渲染</b>
      。
      <p>
        将function的props都wrap好，再将Child component也用memo
        wrap好，这样component之间就相对独立了起来，每家就只渲染自己，否则的话每次变动其中一个children
        component，别的children component也全都会重新render (详见 console)。
      </p>
      <br />
      <button onClick={handleAddButton}>
        Parent Button: Click to add
      </button>{" "}
      {counter + 100}
      <br />
      <MemoChild text={"Children Button 1"} onClick={memoSetCount1Func} />{" "}
      {counterButton1.value} <br />
      <MemoChild text={"Children Button 2"} onClick={memoSetCount2Func} />{" "}
      {counterButton2.value}
      <h4>UseReducer</h4>
      <p>
        主要为了为了集中处理较为复杂的state逻辑，和useState只管自己的state不同，useReducer通常可以在一个较大型项目帮助更好的处理多个子值之间的关系或需要根据先前状态计算下一个状态的状态
      </p>
      <p>
        callback
        function里面都是dispatch，然后直接给定义的switch里面的type，需要引用state就加上state.
      </p>
      <button onClick={() => dispatch({ type: "add" })}>Increase Count</button>{" "}
      <button onClick={() => dispatch({ type: "minus" })}>
        Decrease Count
      </button>{" "}
      <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>{" "}
      <button onClick={() => dispatch({ type: "showcount" })}>
        Show Count
      </button>{" "}
      <br />
      {state.showCountFlag && <p>Current count state: {state.count}</p>}
      {state.reachMaxError && <p>count 超出了限制！</p>}
    </div>
  )
}
