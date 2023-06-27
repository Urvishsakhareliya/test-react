import React, { useState } from "react";

export default function HideShow() {
  const [sh, setSH] = useState(true);
  return (
    <div className="mt-5 ">
      {sh ? <h1>HideShow</h1> : null}
      <div className="d-flex align-item-center w-25">
        <button
          className="btn btn-secondary mx-4 w-25"
          onClick={() => setSH(false)}
        >
          Hide
        </button>
        <button
          className="btn btn-secondary mx-4 w-25"
          onClick={() => setSH(true)}
        >
          Show
        </button>
      </div>
      <button
        className="btn btn-secondary mt-5 mx-4 px-5"
        onClick={() => setSH(!sh)}
      >
        Toggle
      </button>
    </div>
  );
}
