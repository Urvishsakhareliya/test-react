import React, { useState } from "react";

export default function Condition() {
  const [con, setCvon] = useState(1);
  return (
    <>
      <h1>Condition</h1>
      {con == 1 ? (
        <h2>Condition 1</h2>
      ) : con == 2 ? (
        <h2>Condition 2</h2>
      ) : con == 3 ? (
        <h2>Condition 3</h2>
      ) : con == 4 ? (
        <h2>Condition 4</h2>
      ) : con == 5 ? (
        <h2>Condition 5</h2>
      ) : con == 6 ? (
        <h2>Condition 6</h2>
      ) : con == 7 ? (
        <h2>Condition 7</h2>
      ) : con == 8 ? (
        <h2>Condition 8</h2>
      ) : con == 10 ? (
        setCvon(1)
      ) : (
        <h2>Condation False</h2>
      )}

      <button
        className="btn btn-secondary px-5 mx-5"
        onClick={() => setCvon(con + 1)}
      >
        Click
      </button>
    </>
  );
}
