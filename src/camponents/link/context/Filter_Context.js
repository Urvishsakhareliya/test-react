import { useEffect, useReducer, createContext } from "react";
import reducer from "./FilterReducer";
import { useContext } from "react";
import { context } from "../../../Context";

export const FilterContext = createContext();

const initialState = {
  filter_Product: [],
  all_product: [],
  Sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(context);

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "Sorting_Product", payload: products });
  }, [state.Sorting_value]);

  useEffect(() => {
    dispatch({ type: "Load_Filter_Product", payload: products });
  }, [products]);

  // sorting Function
  const sorting = (e) => {
    dispatch({ type: "Get_sort_Value" });
  };

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};
