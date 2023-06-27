import React from "react";

export default function Color({ color = [""] }) {
  // console.log(color);
  return (
    <div className="color_ul d-flex">
      {color.map((color, i) => (
        <div className="radioDiv" key={i}>
          <input
            type="radio"
            name="proColor"
            id={`color-${i}`}
            className="d-none"
            defaultChecked={i === 0 ? true : ""}
          />
          <label htmlFor={`color-${i}`} className="li_item">
            <span style={{ backgroundColor: color }}></span>
          </label>
        </div>
      ))}
    </div>
  );
}
