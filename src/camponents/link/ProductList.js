import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductList({ product }) {
  const FormatePrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 2,
    }).format(price / 100);
  };
  return (
    <>
      <ul className="product-ul mt-5 product_list">
        {product.map((item, i) => {
          return (
            <li key={i}>
              <div className="images">
                <img src={item.image} alt="Abc" />
              </div>

              <h6 className="mt-2">{item.name}</h6>
              <h5 className="my-2">{FormatePrice(item.price)}</h5>
              {/* <p>{item.description}</p> */}

              <NavLink className="theme-btn" to={`/Services/${item.id}`}>
                Add To Cart
              </NavLink>
              <button>buy Now</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
