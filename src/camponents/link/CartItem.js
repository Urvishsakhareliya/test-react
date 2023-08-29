import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartContext } from "./context/CartContext";

function CartItem({ id, name, color, amount, image, price, max }) {
  const { removeItem } = useContext(CartContext);
  const FormatePrice = (price) => {
    // console.log(price);
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumSignificantDigits: 2,
    }).format(price / 100);
  };
  return (
    <li className="addcart_box" key={id + color}>
      <div className="imges_box">
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div>
        <ul className="cart-ul">
          <li className="item">
            <p>Product Name :</p>
            <span>{name}</span>
          </li>
          <li className="item">
            <p>Color :</p>
            <span className="color" style={{ backgroundColor: color }}></span>
          </li>
          <li className="item">
            <p>price :</p>
            <span>{FormatePrice(price)}</span>
          </li>
          <li className="item">
            <p>Quantity :</p>
            <span>{amount}</span>
          </li>
          <li className="item">
            <p>Subtotal :</p>
            <span>{FormatePrice(price * amount)}</span>
          </li>
        </ul>

        <div className="delete_icon" id="btn" onClick={() => removeItem(id)}>
          <AiFillDelete />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
