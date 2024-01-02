import React, { useState } from "react";

export default function Button() {
  const [countTime, setCountTime] = useState(0);

  const handleClickDouble = (e) => {
    e.target.textContent = "OUCH!";
  };

  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me!`);
  };

  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times!`);
    } else {
      console.log(`${name} Stop clicking me!`);
    }
  };

  const handleClickCounter = (e) => {
    setCountTime(countTime + 1);
    //console.log(`Clicked ${countTime} times!`);
    e.target.textContent = `Clicked ${countTime} times`;
  };

  return (
    <>
      <h3>Button Component</h3>
      <button
        onClick={handleClickCounter}
        onDoubleClick={(e) => handleClickDouble(e)}
      >
        Click Me! 😊
      </button>
    </>
  ); // 注意onclick里面的写法，要加上()=>，否则就会立即执行
}
