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
import JSAdvanced from "./components/JSAdvanced"

import Accordion from "./components/25Projects/accordian/accordion"
import GithubProfileSearch from "./components/25Projects/github-profile-search/githubProfileSearch"
import Loadmore from "./components/25Projects/load-more/loadmore"
import Tabs from "./components/25Projects/tabs/tabs"
import FortuneWheel from "./components/25Projects/fortune-wheel/fortuneWheel"
import Modalpopups from "./components/25Projects/modal-popups/modalPopups"
import UseFetchHookTest from "./components/25Projects/use-fetch/test"
import ReactHooksExplained from "./components/25Projects/react-hooks"
import UseOnclickOutsideTest from "./components/25Projects/use-outsite-click-hook"
import UseWindowResizeTest from "./components/25Projects/use-window-resize"
import ScrollUpDown from "./components/25Projects/scroll-top-bottom"

import Navbar from "./components/25Projects/food-recipe"
import HomePage from "./components/25Projects/food-recipe/pages/home"
import Favorites from "./components/25Projects/food-recipe/pages/favorites"
import Details from "./components/25Projects/food-recipe/pages/details"
import FoodRecipeState from "./components/25Projects/food-recipe/context"

import NavbarShopping from "./components/25Projects/shopping-cart"
import HomeShopping from "./components/25Projects/shopping-cart/pages/home"
import LoginShopping from "./components/25Projects/shopping-cart/pages/login"
import CartShopping from "./components/25Projects/shopping-cart/pages/cart"
import ContactShopping from "./components/25Projects/shopping-cart/pages/contact"
import Score from "./components/25Projects/shopping-cart/pages/score"

import AutoComplete from "./components/material-ui/auto-complete"

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

import PageAbout from "./components/PageAbout"
import PageNews from "./components/PageNotFound"
import PageHome from "./components/PageHome"
import PageNotFound from "./components/PageNotFound"
import UseFormComp from "./components/UseFormComp"
import UseFetchComp from "./components/UseFetchComp"
import ReduxToolkitComp from "./components/ReduxToolkitComp"

import { Routes, Route, Link } from "react-router-dom"
// import { Provider } from "react-redux"
// import { store } from "./components/25Projects/shopping-cart/store"

import { Typography } from "@mui/material"

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

      const scrollToFooter = () => {
        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }

      // Add a delay before scrolling to allow time for DOM update
      const timeout = setTimeout(scrollToFooter, 1000)

      return () => clearTimeout(timeout) // Clear timeout on component unmount
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
      <h2>25 React JS Component Projects</h2>
      <h3>1. Accordion</h3>
      <Accordion />
      <h3>2. Tabs</h3>
      <Tabs />
      <h3>3. Load More</h3>
      <Loadmore />
      <h3>4. Fortune Wheel</h3>
      <FortuneWheel />
      <h3>5. Modal Popups</h3>
      <Modalpopups />
      <h3>6. Github Profile Search (Dummy Products Search)</h3>
      <GithubProfileSearch />
      <h3>7. Use Fetch</h3>
      <UseFetchHookTest url={"https://dummyjson.com/products"} preview={true} />
      <h3>8. UseOnClickOutside</h3>
      利用useEffect监听ref.current的位置
      <UseOnclickOutsideTest />
      <h3>9. UseWindowResize</h3>
      利用useEffect监听window.innerWidth和window.innerHeight的值
      <UseWindowResizeTest />
      <h3>10. Scroll To Particular Section</h3>
      <p>埋下useRef然后利用ref.current.scrollIntoView在不同的ref之间跳转</p>
      <details>
        <summary>展开全部</summary>
        <ScrollUpDown />
      </details>
      <h3>11. Food Recipe</h3>
      <div>
        <li>Router: 创建router</li>
        <li>NavLink: 创建Nav bar</li>
        <li>
          createContext / useContext:
          各个component之间共享state，各自按需useContext
        </li>
        <li>
          useParam: 用于获取当前路由参数的值，用来访问和使用URL中的动态参数。
        </li>
        <li>useNavigate: 用来自动跳转到某个界面</li>
        <li>Link: 创建link</li>
        <FoodRecipeState>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/recipe-item/:id" element={<Details />} />
            </Routes>
          </div>
        </FoodRecipeState>
      </div>
      <h3>12. Shopping Cart (Redux Toolkit)</h3>
      <li>configureStore配置reducer, 然后将在main.jsx中将APP包裹住</li>
      <li>
        单独每个file createSlice，定义initialState,
        创建reducers，在redux中，任何改变state的function就叫reducer
      </li>
      <li>state就是每个initial state定义的那些全局状态</li>
      <li>action.payload可以理解为参数</li>
      <li>需要userSliceAction来引入reducer</li>
      <li>需要useSelector，useDispatch来引入state和reducer</li>
      <br />
      <div>
        {/* <Provider store={store}> */}
        {/* <NavbarShopping /> */}
        {/* 当然用navbar效果更好 */}
        <Link to="/home">Home </Link> <br />
        <Link to="/login">Login</Link> <br />
        <Link to="/score">Score</Link> <br />
        {/* <Link to="/contact">Contact</Link> <br /> */}
        <Link to="/cart">Cart</Link> <br />
        <Routes>
          <Route path="/home" element={<HomeShopping />} />
          <Route path="/login" element={<LoginShopping />} />
          <Route path="/score" element={<Score />} />
          {/* <Route path="/contact" element={<ContactShopping />} /> */}
          <Route path="/cart" element={<CartShopping />} />
        </Routes>
        {/* </Provider> */}
      </div>
      <h2>Advanced JavaScript</h2>
      <details>
        {" "}
        <summary>展开全部</summary>
        <JSAdvanced />
      </details>
      <h2>
        React Hooks Explained <i>by Sangam Mukherjee</i>
      </h2>
      <details>
        <summary>展开全部</summary>
        <ReactHooksExplained />
      </details>
      <h2>Material UI</h2>
      <Typography variant="h5">Hello MUI!</Typography>
      <AutoComplete />
      <hr />
      <div ref={bottomRef} />
      <Footer />
    </>
  )
}
