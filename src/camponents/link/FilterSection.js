import React, { useContext } from "react";
import { FilterContext } from "./context/FilterContext";
import Sort from "./Sort";
import { propTypes } from "react-bootstrap/esm/Image";

export default function FilterSection() {
  const {
    filter: {
      SearchValue,
      categories,
      companyName,
      colorName,
      maxPrice,
      price,
      minPrice,
    },
    updateValueFilter,
    all_product,
    ClearFun,
  } = useContext(FilterContext);

  const FormatePrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 2,
    }).format(price / 100);
  };
  const getUniqueData = (data, Property) => {
    let newVal = data.map((curEle) => {
      // console.log(curEle[Property]);
      return curEle[Property];
    });

    if (Property === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoriesData = getUniqueData(all_product, "category");
  const companyData = getUniqueData(all_product, "company");
  const colorData = getUniqueData(all_product, "colors");
  const priceData = getUniqueData(all_product, "price");
  // console.log(priceData);
  return (
    <>
      <form
        onChange={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          className="form-control"
          name="SearchValue"
          id="Pro_serch"
          value={SearchValue}
          onChange={updateValueFilter}
        />

        <div className="category">
          <h6>Categories</h6>
          <ul className="categories-ul">
            {categoriesData.map((item, i) => {
              return (
                <button
                  className={`categories_Item ${
                    categories === item ? "active" : ""
                  }`}
                  type="button"
                  name="categories"
                  key={i}
                  onClick={updateValueFilter}
                  value={item}
                >
                  {item}
                </button>
              );
            })}
          </ul>
        </div>
        <div className="category">
          <h6>Company</h6>

          <select
            className="form-select mt-3"
            id="sort_select"
            name="companyName"
            onChange={updateValueFilter}
          >
            {companyData.map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="category">
          <h6>Colors</h6>

          <ul className="colors-ul">
            {colorData.map((item, i) => {
              return (
                <button
                  className={`categories_Item ${
                    colorName === item ? "active" : ""
                  }`}
                  type="button"
                  name="colorName"
                  key={i}
                  onClick={updateValueFilter}
                  value={item}
                  style={{ backgroundColor: item }}
                >
                  {item === "All" ? "All" : ""}
                </button>
              );
            })}
          </ul>
        </div>
        <div className="category">
          <h6>Price</h6>

          <div>
            <label className="d-block">{FormatePrice(price)}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              step="10"
              onChange={updateValueFilter}
            />
          </div>

          {/* <p>{FormatePrice(price)}</p> */}
        </div>
        <div className="category">
          <button className="btn btn-secondary" onClick={ClearFun}>
            Clear filters
          </button>
        </div>
      </form>
    </>
  );
}
