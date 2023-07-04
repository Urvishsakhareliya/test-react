import React, { useContext } from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { FilterContext } from "./context/FilterContext";

export default function Product() {
  const { filter_Product } = useContext(FilterContext);

  return (
    <>
      <section className="container-xl mt-5 p-0">
        <h1 className="text-center">Products</h1>
        <div className="row mt-5">
          <div className="col-2">
            <FilterSection />
          </div>
          <div className="col-10">
            <div className="sort_sec">
              <Sort />
            </div>
            <div className="products_list mt-s">
              <ProductList product={filter_Product} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
