import React, { useState } from "react";

export default function UseStateComponent() {
  const [name, setName] = useState("Guest");
  const [newName, setNewName] = useState(name);    // newName的默认值直接就是name
  const [age, setAge] = useState(20);
  const [isNameEditing, setIsNameEditing] = useState(false);

  const updateName = () => {
    setIsNameEditing(true);
  };

  const saveNewName = () => {
    setName(newName);
    setIsNameEditing(false);
  };

  const resetName = () => {
    setName("Guest");
  };

  const IncAge = () => {
    setAge(age + 1);
  };

  const DecAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateName}>Update Name</button>
      {isNameEditing && (
        <div>
          <input
            type="text"
            placeholder="Please enter a name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={saveNewName}>save</button>
        </div>
      )}
      <button onClick={resetName}>Reset</button>

      <div>
        <button onClick={IncAge}>Younger</button>
        <button onClick={DecAge}>Older</button>
      </div>
    </div>
  );
}
