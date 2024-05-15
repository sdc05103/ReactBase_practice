import React from "react";

export default function Colorbar({ colors, setActiveColor }) {
  return (
    <div style={{ display: "flex" }}>
      {colors.map((color) => (
        <div
          onClick={() => {
            setActiveColor(color);
          }}
          style={{
            backgroundColor: color,
            width: 10,
            height: 10,
            borderRadius: 10,
            margin: 10,
          }}
        ></div>
      ))}
    </div>
  );
}
