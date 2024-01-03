import React, { useState } from "react";

export default function UseStateComponent() {
  // Using the state hook with updater function
  const [nameDisplay, setNameDisplay] = useState("Guest");
  const [newName, setNewName] = useState(nameDisplay); // newName的默认值直接就是name
  const [age, setAge] = useState(20);
  const [comment, setComment] = useState("无可奉告");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [showAllData, setShowAllData] = useState(false);

  const updateName = () => {
    setIsNameEditing(true);
  };

  const saveNewName = () => {
    setNameDisplay(newName);
    setIsNameEditing(false);
  };

  const reset = () => {
    setNameDisplay("Guest");
    setNewName("Guest");
    setAge(20);
    setPayment("");
    setComment("");
    setShipping("");
  };

  const handleShowAllData = () => {
    setShowAllData(true);
  };

  const incAge = () => {
    // Using updater function to get the previous state
    setAge((age) => age + 1);
    setAge((age) => age + 1);
  };

  const decAge = () => {
    setAge((age) => age - 1);
    setAge((age) => age - 1);
  };

  return (
    <div className="counter-container">
      <p className="count-display">Name: {nameDisplay}</p>
      <div>
        <button className="counter-button" onClick={updateName}>
          Update Name
        </button>
        {isNameEditing && (
          <div>
            <input
              type="text"
              placeholder="Please enter a name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)} // change之后运行setNewName,设置新的newName为输入值
            />
            <button className="counter-button" onClick={saveNewName}>
              save
            </button>
          </div>
        )}
      </div>
      <p className="count-display">Age: {age}</p>
      <div>
        <button className="counter-button" onClick={incAge}>
          Younger
        </button>
        <button className="counter-button" onClick={decAge}>
          Older
        </button>
      </div>
      <br />
      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option value=""> Select an option</option>
        <option value="Visa"> Visa</option>
        <option value="Mastercard"> Mastercard</option>
        <option value="Gift Card"> Gift Card</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={(e) => setShipping(e.target.value)}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"} // 规定动作，只有当shipping === "Delivery"才会被check
          onChange={(e) => setShipping(e.target.value)}
        />
        Delivery
      </label>
      <p>Shipping Method: {shipping}</p>
      <p>Comments:</p>
      <textarea
        placeholder="Enter more comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br />
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <br />

      <button
        className="show-all-button"
        onClick={handleShowAllData}
        onDoubleClick={() => setShowAllData(false)}
      >
        Show all data (double-click to hide)
      </button>
      {showAllData && (
        <div className="summary-container">
          <h4>Summary of delivery info: </h4>
          <ul>
            <li>Name: {nameDisplay}</li>
            <li>Age: {age}</li>
            <li>Payment: {payment}</li>
            <li>Shipping Method: {shipping}</li>
            <li>Comments: {comment}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
