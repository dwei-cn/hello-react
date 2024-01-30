import { useRef, useEffect, createContext } from "react"
import Footer from "./pages/Home/components/Footer"
import Header from "./pages/Home/components/Header"
import UserGreeting from "./pages/Home/components/UserGreeting"
import UseStateComponent from "./pages/Home/components/UseStateComponent"
import ColorPicker from "./pages/Home/components/ColorPicker"
import UpdateObjectArray from "./pages/Home/components/UpdateObjectArray"
import Tictactoe from "./pages/Home/components/Tictactoe"
import Signals1 from "./components/Signals11"
import Signals2 from "./components/Signals12"
import SignalsTodolist from "./components/Signals2"
import Todolist from "./components/Todolist"
import TodolistSignals from "./components/TodolistSignals"

import Card from "./components/Card"
import List from "./components/List"
import Button from "./components/Button"
import FetchData from "./components/FetchData"
import UseEffectComp from "./components/UseEffectComp"
import UseRefComp from "./components/UseRefComp"
import UseContextComp from "./components/UseContextComp"
import UseReducerComp from "./components/UseReducerComp"
import UseMemoComp from "./components/UseMemoComp"

import movieData from "./assets/movieData"
import movieColumns from "./assets/movieColumns"

import DataTableDIY from "./components/DataTable"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PageAbout from "./components/PageAbout"
import PageNews from "./components/PageNotFound"
import PageHome from "./components/PageHome"
import PageNotFound from "./components/PageNotFound"
import UseFormComp from "./components/UseFormComp"
import UseFetchComp from "./components/UseFetchComp"
import ReduxToolkitComp from "./components/ReduxToolkitComp"

export const ContextExample = createContext()

export default function App() {
  const bottomRef = useRef(null)

  const logInInfo = { isLoggedIn: true, name: "John Wick" }
  const name1 = { name: "John Doe", age: 30, isNewbie: true }
  const name2 = { name: "Allan Smith", age: 25, isNewbie: false }
  // const name3 = { name: "James Bond" };

  const fruits = [
    { id: 1, name: "apple", calories: 195 },
    { id: 2, name: "banana", calories: 295 },
    { id: 4, name: "kiwi", calories: 95 },
    { id: 3, name: "papaya", calories: 395 },
    { id: 5, name: "cheese", calories: 695 },
  ]

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 4, name: "carrots", calories: 25 },
    { id: 3, name: "corn", calories: 95 },
    { id: 5, name: "broccoli", calories: 50 },
  ]

  const deeplearnAWS = {
    sitename: "神学AWS",
    author: "Koma",
    sayHello: (pname) => {
      console.log(`hello${pname}.${Math.random().toString()}`)
    },
  }

  useEffect(
    () => {
      // Scroll to the bottom when the component mounts or when the content changes
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    },
    [
      /* dependencies */
    ]
  )

  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={logInInfo.isLoggedIn} name={logInInfo.name} />
      <hr />

      <Card name={name1.name} age={name1.age} isNewbie={name1.isNewbie} />
      <Card name={name2.name} age={name2.age} isNewbie={name2.isNewbie} />
      {/* <Card name={name3.name} />
      <Card /> */}

      <hr />
      {/* 只有当长度大于0才会render */}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length && <List items={vegetables} category="Vegetables" />}

      <hr />
      <Button />

      <hr />
      <h3>Delivery Info</h3>
      <UseStateComponent />

      <hr />
      <h3>Color Picker</h3>
      <ColorPicker />

      <hr />
      <h3>DataTable</h3>
      <DataTableDIY data={movieData} columns={movieColumns} />

      <hr />
      <h3>Update Objects And Array</h3>
      <UpdateObjectArray />

      <hr />
      <h3>Hooks</h3>
      <FetchData />
      <UseFetchComp />
      <UseEffectComp />
      <UseRefComp />
      <ContextExample.Provider value={deeplearnAWS}>
        <UseContextComp />
      </ContextExample.Provider>
      <UseReducerComp />
      <UseMemoComp />

      <hr />
      <h3>React Router</h3>
      <>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/news" element={<PageNews />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>

      <hr />
      <h3>React Form 进阶</h3>
      <UseFormComp />

      <h3>Redux Toolkit</h3>
      <ReduxToolkitComp />

      <hr />
      <h3>Tic-Tac-Toe</h3>
      <Tictactoe />

      <hr />
      <h3>Signals Basic 1</h3>
      <Signals1 />

      <h3>Signals Basic 2</h3>
      <Signals2 />

      <hr />
      <h3>Signals Intermediate</h3>

      <SignalsTodolist />

      <hr />
      <h3>Todo List (react hook)</h3>

      <Todolist />

      <hr />
      <h3>Todo List (signals)</h3>
      <TodolistSignals />

      <hr />
      <div ref={bottomRef} />
      <Footer />
    </>
  )
}
