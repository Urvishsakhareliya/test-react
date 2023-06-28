import React from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export default function RateStar({ star, reviews }) {
  const RatingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <BsStarFill />
        ) : star >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  // const fillrate = (val) => {
  //   return (val * 100) / 5;
  // };

  return (
    <>
      <div className="star position-relative d-inline-block">
        {/*<div className="borderStar">
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
        </div> */}

        {RatingStar}
        <p>({reviews} Customer Reviews)</p>
      </div>
    </>
  );
}
