import { useEffect, useReducer, createContext } from "react";
import reducer from "./FilterReducer";
import { useContext } from "react";
import contaxt from "../../../Context";

const FilterContext = createContext();

const initialState = {
  Load_Filter_Product: [],
  All_product: [],
};

export const FilterContextProvider = ({ children }) => {
  const { product } = useContext(contaxt);

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // dispatch({ type: "Load_Filter_Product" payload:products });
  });
  return (
    <FilterContext.Provider value="abc">{children}</FilterContext.Provider>
  );
};
