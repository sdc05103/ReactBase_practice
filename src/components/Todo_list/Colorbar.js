import React from "react";
import { useTodo } from "./TodoContext";

export default function Colorbar({}) {
  const { colors, setActiveColor } = useTodo();
  console.log(colors);

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
