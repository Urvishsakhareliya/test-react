import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

export default function RateStar({ star, reviews }) {
  // console.log();
  const fillrate = (val) => {
    return (val * 100) / 5;
  };
  console.log(`${fillrate(star)}%`);

  return (
    <>
      <div className="star position-relative d-inline-block">
        <div className="borderStar">
          <div className="group d-flex">
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        </div>
        <div className="fillStar" style={{ width: `${fillrate(star)}%` }}>
          <div className="group d-flex">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
    </>
  );
}
