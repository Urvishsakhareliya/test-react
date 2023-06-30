import React, { useContext } from "react";
import { FilterContext } from "./context/Filter_Context";

export default function FilterSection() {
  const { filter_Product } = useContext(FilterContext);
  console.log(filter_Product);

  return (
    <>
      <input type="search" className="form-control" id="Pro_serch" />

      <div className="category">
        <h6>Categories</h6>
        <ul className="categories-ul">
          <li className="categories_item">All</li>
        </ul>
      </div>
    </>
  );
}
