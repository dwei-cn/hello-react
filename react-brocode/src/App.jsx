import { useRef, useEffect } from "react";
import Footer from "./pages/Home/components/Footer";
import Header from "./pages/Home/components/Header";
import UserGreeting from "./pages/Home/components/UserGreeting";
import UseStateComponent from "./pages/Home/components/UseStateComponent/";

import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

export default function App() {
  const bottomRef = useRef(null);

  const logInInfo = { isLoggedIn: true, name: "John Wick" };
  const name1 = { name: "John Doe", age: 30, isNewbie: true };
  const name2 = { name: "Allan Smith", age: 25, isNewbie: false };
  // const name3 = { name: "James Bond" };

  const fruits = [
    { id: 1, name: "apple", calories: 195 },
    { id: 2, name: "banana", calories: 295 },
    { id: 4, name: "kiwi", calories: 95 },
    { id: 3, name: "papaya", calories: 395 },
    { id: 5, name: "cheese", calories: 695 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 4, name: "carrots", calories: 25 },
    { id: 3, name: "corn", calories: 95 },
    { id: 5, name: "broccoli", calories: 50 },
  ];

  useEffect(
    () => {
      // Scroll to the bottom when the component mounts or when the content changes
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    },
    [
      /* dependencies */
    ]
  );

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
      <UseStateComponent />

      <hr />
      <div ref={bottomRef} />
      <Footer />
    </>
  );
}
