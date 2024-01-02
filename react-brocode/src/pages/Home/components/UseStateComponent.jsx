import React, { useState } from "react";

export default function UseStateComponent() {
  const [nameDisplay, setNameDisplay] = useState("Guest");
  const [newName, setNewName] = useState(nameDisplay); // newName的默认值直接就是name
  const [age, setAge] = useState(20);
  const [isNameEditing, setIsNameEditing] = useState(false);

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
  };

  const incAge = () => {
    setAge(age + 1);
  };

  const decAge = () => {
    setAge(age - 1);
  };

  return (
    <div className="counter-container">
      <p className="count-display">Name: {nameDisplay}</p>
      <p className="count-display">Age: {age}</p>
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

      <div>
        <button className="counter-button" onClick={incAge}>
          Younger
        </button>
        <button className="counter-button" onClick={decAge}>
          Older
        </button>
      </div>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
