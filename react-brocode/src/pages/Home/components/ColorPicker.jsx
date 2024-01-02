import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className="color-picker-container">
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Select Color: {color}</p>
      </div>
      <label> Select a Color:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
