import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../Context";
import Image from "./Image";
import RateStar from "./RateStar";
import Color from "./Color";

export default function Service() {
  const Api = "https://api.pujakaitem.com/api/products";
  const { getSingleProduct, SET_Single_Products, SET_Single_LOADING } =
    useContext(context);
  // console.log(SET_Single_Products);
  const {
    name,
    company,
    price,
    colors,
    description,
    category,
    image,
    reviews,
    stars,
    stock,
  } = SET_Single_Products;
  console.log(stars);
  const FormatePrice = (price) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 2,
    }).format(price / 100);
  };

  useEffect(() => {
    getSingleProduct(`${Api}?id=${id}`);
  }, []);
  const { id } = useParams();

  return (
    <>
      {SET_Single_LOADING ? (
        <div className="loading">
          <img
            src="https://cdn.dribbble.com/users/68398/screenshots/3687284/loader_800.gif"
            alt=""
          />
        </div>
      ) : (
        <>
          <section className="container mt-5">
            <h1>{category}</h1>

            <div className="row mt-5">
              <div className="col-6">
                <Image image={image} />
              </div>

              <div className="col-6">
                <h4>{name}</h4>
                <RateStar star={stars} reviews={reviews} />
                <p>
                  <b>Company:</b> {company}
                </p>

                <p className="mt-2">{description}</p>
                <Color color={colors} />
                <h3>{FormatePrice(price + 250000)}</h3>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
