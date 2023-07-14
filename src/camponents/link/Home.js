import React, { useContext, useEffect, useState } from "react";
import { context } from "../../Context";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { isLoading, products } = useContext(context);
  // console.log(products);

  const FormatePrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 2,
    }).format(price / 100);
  };
  const [formvalues, setFormValues] = useState({
    PropertyType_two: "OpenPlot",
    PropertyType_three: "Agri_land",
    City_Name: [
      { A: "a", id: 1 },
      { B: "b", id: 2 },
    ],
    ProjectBuilding_Name: "",
  });

  useEffect(() => {
    setFormValues({
      ...formvalues,
      City_Name: [
        ...formvalues.City_Name,
        { ...formvalues.City_Name[0], A: "c" },
      ],
    });
  }, []);

  console.log(formvalues);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <img
            src="https://cdn.dribbble.com/users/68398/screenshots/3687284/loader_800.gif"
            alt=""
          />
        </div>
      ) : (
        <ul className="product-ul mt-5">
          {products.map((item, i) => {
            return (
              <li key={i}>
                <div className="images">
                  <img src={item.image} />
                </div>

                <h5>{item.name}</h5>
                <h3>{FormatePrice(item.price)}</h3>
                <p>{item.description}</p>

                <NavLink className="theme-btn" to={`/Services/${item.id}`}>
                  Add To Cart
                </NavLink>
                <button>buy Now</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
