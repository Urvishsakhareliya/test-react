import React, { useState } from "react";

export default function TextForm(props) {
  const heandleClick = () => {
    console.log("Click" + text);
    let newText = text.length;
    setText(newText);
  };
  const textareaChange = (event) => {
    console.log("textareaChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("hii");
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.label} - {text}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={textareaChange}
        ></textarea>
        <div className="text-end pe-5">
          <span>text = {text.length}</span>
          {/* <span>text = {text.split(" ").length}</span> */}
        </div>

        <button className="btn btn-secondary px-4 mt-5" onClick={heandleClick}>
          Click
        </button>
      </div>
    </div>
  );
}
