import React, { useState } from "react";

export default function Input() {
  const [kname, setKname] = useState("aaa");
  return (
    <>
      <input
        type="text"
        value={kname}
        onChange={(e) => setKname(e.target.value)}
      />
      <h1>{kname}</h1>
    </>
  );
}
