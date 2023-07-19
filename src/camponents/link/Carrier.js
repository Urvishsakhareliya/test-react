import React, { useState } from "react";

export default function Carrier() {
  // const [ingroup, setIngroup] = useState([
  //   { Area_Select: "1", Email: "vvv", id: 1 },
  //   { Area_Select: "3", Email: "vvv", id: 2 },
  // ]);

  const val = [
    { name: "Urvish" },
    { name: "harsh" },
    { name: "Vishal" },
    { name: "Raj" },
    { name: "Vikash" },
    { name: "Rahul" },
    { name: "Nayan" },
    { name: "Kaushik" },
    { name: "Jay" },
    { name: "Suresh" },
    { name: "Gunjan" },
    { name: "Chirag" },
    { name: "Jasmin" },
    { name: "Tilak" },
    { name: "Tulsi" },
    { name: "Divyang" },
    { name: "Dhiraj" },
    { name: "Parag" },
    { name: "Brijesh" },
    { name: "Bhavdip" },
    { name: "Mayur" },
    { name: "Lalo" },
  ];
  const [filter, setFilter] = useState(val);
  const [sval, setSval] = useState("");
  const FormDataSubmit = (e) => {
    e.preventDefault();
  };
  const Searchval = (e) => {
    setSval(e.target.value);

    let tempSortData = [...val];
    if (e.target.value === "") {
      tempSortData = [...val];
    } else {
      tempSortData = tempSortData.filter((curele) => {
        console.log(e.target.value);
        return curele.name.toLowerCase().includes(e.target.value);
      });
    }
    // console.log(tempSortData);
    setFilter(tempSortData);
  };
  // const GetVal = (e, id) => {
  //   const val = e.target.value;
  //   const name = e.target.name;

  //   const newArray = ingroup.map((item, i) => {
  //     if (id === i) {
  //       return { ...item, [name]: val };
  //     }
  //     return item;
  //   });
  //   // console.log(newArray);
  //   setIngroup(newArray);
  // };
  // const BTNclick = (e) => {
  //   setIngroup([
  //     ...ingroup,
  //     { Area_Select: "1", Email: "", id: ingroup.length + 1 },
  //   ]);
  // };
  // const remove = (id) => {
  //   const update = ingroup.filter((obj, i) => {
  //     console.log(i, id);
  //     return i !== id;
  //   });
  //   setIngroup(update);
  // };
  // console.log(ingroup);
  return (
    <>
      {/* <form className="Hero-sec needs-validation " onSubmit={FormDataSubmit}>
        {ingroup.map((item, i) => {
          return (
            <div className="row justify-content-center" key={i} id="">
              <div className="col-3">
                <select
                  className="form-select"
                  name="Area_Select"
                  onChange={(e) => GetVal(e, i)}
                  aria-label="Default select example"
                >
                  <option value="1" selected={item.Area_Select === "1"}>
                    One
                  </option>
                  <option value="2" selected={item.Area_Select === "2"}>
                    Two
                  </option>
                  <option value="3" selected={item.Area_Select === "3"}>
                    Three
                  </option>
                </select>
              </div>
              <div className="col-3">
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={item.Email}
                  onChange={(e) => GetVal(e, i)}
                />
              </div>
              <div className="col-3">
                <button onClick={() => remove(i)}>X {item.id}</button>
              </div>
            </div>
          );
        })}
        <button onClick={BTNclick}>Add</button>
      </form> */}

      <form onChange={FormDataSubmit}>
        <input
          type="search"
          name="SS"
          value={sval}
          onChange={(e) => Searchval(e)}
        />
      </form>
      <ul>
        {filter.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
