import { useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "./CartReducer";

const CartContext = createContext();
const getLocalCart = () => {
  let GetLocalData = localStorage.getItem("LocalCartData");
  if (GetLocalData === [] || GetLocalData === "null") {
    return [];
  } else {
    return JSON.parse(GetLocalData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCart(),
  total_item: "",
  total_amount: "",
  Shipping_fees: 5000,
  // console.log();
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const AddToCart = (id, color, amount, product) => {
    dispatch({ type: "Add_to_cart", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const ClearCart = () => {
    dispatch({ type: "CART_CLEAR" });
  };
  // console.log(state.cart.length);

  useEffect(() => {
    localStorage.setItem("LocalCartData", JSON.stringify(state.cart));
    console.log("getLocalCart------" + getLocalCart());
    console.log(JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, removeItem, ClearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
