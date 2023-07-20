import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./CartReducer";

const CartContext = createContext();
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  Shipping_fees: 5000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const AddToCart = (id, color, amount, product) => {
    dispatch({ type: "Add_to_cart", payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
