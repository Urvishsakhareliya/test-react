import React, { useState } from "react";

function ref(props, inputRef) {
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default forwardRef(ref);

