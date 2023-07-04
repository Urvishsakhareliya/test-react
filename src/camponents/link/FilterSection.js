import React, { useContext } from "react";
import { FilterContext } from "./context/FilterContext";
import Sort from "./Sort";

export default function FilterSection() {
  const {
    filter: { SearchValue, categories, companyName },
    updateValueFilter,
    all_product,
  } = useContext(FilterContext);
  // console.log(all_product);

  const getUniqueData = (data, Property) => {
    let newVal = data.map((curEle) => {
      return curEle[Property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoriesData = getUniqueData(all_product, "category");
  const companyData = getUniqueData(all_product, "company");
  console.log();

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
      </form>
    </>
  );
}
