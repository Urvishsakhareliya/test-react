import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./context/CartContext";

export default function Cart() {
  const {
    cart,
    total_item,
    total_amount,
    Shipping_fees,
    removeItem,
    ClearCart,
  } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>Cart Has Ben Empty</h1>
      ) : (
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Cart</h1>

          <ul className="CartGroup">
            {cart.map((curEle) => (
              <CartItem key={curEle.id} {...curEle} />
            ))}
          </ul>

          <div className="">
            <button
              className="btn btn-danger float-end px-5 py-3"
              onClick={ClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
