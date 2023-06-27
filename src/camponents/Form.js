import React, { useState } from "react";

export default function Form() {
  function FormDataSubmit(e) {
    e.preventDefault();
    alert('Form submit');
    console.log(CheckVal);
  }
  const [fname, setFname] = useState("");
  const [optValue, setOptvalue] = useState("");
  const [CheckVal, setChackval] = useState(false);

  function clearForm() {
    setFname("");
    setOptvalue("");
    setChackval(false);
    alert('clear Form');
  }
  return (
    <>
      <form
        className="row g-3 needs-validation mt-5 text-center"
        noValidate
        onSubmit={FormDataSubmit}
      >
        <h1>Form Pratice</h1>
        <div className="col-md-6 text-start">
          <label
            htmlFor="validationCustom01"
            className="form-label fs-4 fw-bold"
          >
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="col-md-6 text-start">
          <label
            htmlFor="validationCustom04"
            className="form-label fs-4 fw-bold"
          >
            State
          </label>
          <select
            className="form-select"
            required
            onChange={(e) => setOptvalue(e.target.value)}
          >
            <option disabled>Select Option</option>
            <option>OPT - 1</option>
            <option>OPT - 2</option>
            <option>OPT - 3</option>
            <option>OPT - 4</option>
            <option>OPT - 5</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="col-12 text-start fs-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck"
              onChange={(e) => setChackval(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
          <button className="btn btn-secondary mx-5" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </>
  );
}
