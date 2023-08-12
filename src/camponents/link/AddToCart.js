import React, { useState, useContext } from "react";
// import Color from "./Color";
import { BsCheck } from "react-icons/bs";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { CartContext } from "./context/CartContext";

export default function AddToCart({ product }) {
  const { colors = [""], stock, id } = product;
  const [color, SetColor] = useState(colors[0]);
  const [amount, SetAmount] = useState(1);
  const { AddToCart } = useContext(CartContext);

  const setDecrease = () => {
    amount > 1 ? SetAmount(amount - 1) : SetAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? SetAmount(amount + 1) : SetAmount(stock);
  };

  return (
    <>
      <p className="color_ul d-flex my-3 align-items-center gap-1">
        Color:
        {colors.map((CurrentColor, i) => {
          <button
            key={i}
            className={
              color === CurrentColor
                ? "radioDiv btn rounded-circle active"
                : "radioDiv btn rounded-circle"
            }
            style={{ backgroundColor: CurrentColor }}
            onClick={() => SetColor(CurrentColor)}
          >
            {color === CurrentColor ? <BsCheck className="text-white" /> : ""}
          </button>;
        })}
      </p>
      {/* add to cart  */}
      {stock > 0 ? (
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      ) : (
        ""
      )}
      <NavLink
        to="/Cart"
        className="AddToCart"
        onClick={() => AddToCart(id, color, amount, product)}
      >
        Add To Cart
      </NavLink>
    </>
  );
}
