import React, { useState } from "react";

export default function Form_Condition() {
  const [Fname, setFname] = useState("");
  const [pass, setPass] = useState("");

  function FormSubmit(e) {
    e.preventDefault();
    console.log(Fname, pass);
    if (Fname.length < 3) {
      alert();
    }
  }

  return (
    <>
      <form
        action="#"
        className="row  mt-5 justify-content-center"
        onSubmit={FormSubmit}
      >
        <div className="col-5 mt3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="col-5 mt3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className="col-11 mt-5 text-center">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>
      </form>
    </>
  );
}
