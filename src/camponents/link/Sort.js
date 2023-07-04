import React, { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Sort() {
  const { filter_Product, sorting } = useContext(FilterContext);

  return (
    <>
      <div className="row align-items-center">
        <div className="col-9">
          <h6>{filter_Product.length} products</h6>
        </div>

        <div className="col-3">
          <select className="form-select" id="sort_select" onChange={sorting}>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">price(a-z)</option>
            <option value="z-a">price(z-a)</option>
          </select>
        </div>
      </div>
    </>
  );
}
