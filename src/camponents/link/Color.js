import React from "react";

export default function Color({ color = [""] }) {
  // console.log(color);
  return (
    <p className="color_ul d-flex my-3">
      Color:
      {color.map((color, i) => (
        <button
          className="radioDiv"
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </p>
  );
}
