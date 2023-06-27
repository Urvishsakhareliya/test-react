import React, { useState } from "react";

export default function InputValue() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);
  function Getvalue(TH) {
    // console.log(TH.target.value);
    setData(TH.target.value);
    setPrint(false);
  }
  return (
    <>
      <h2>InputValue</h2>
      <input type="text" onChange={Getvalue} />
      <button onClick={() => setPrint(true)}>click</button>
      {print ? <h1>{data}</h1> : null}
    </>
  );
}
