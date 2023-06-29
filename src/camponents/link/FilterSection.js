import React from "react";

export default function FilterSection() {
  return (
    <>
      <input type="search" className="form-control" id="Pro_serch" />

      <div className="catrgory">
        <h6>Categories</h6>
        <ul className="categories-ul">
          <li className="categories_item">All</li>
        </ul>
      </div>
    </>
  );
}
