import { useEffect, useReducer, createContext } from "react";
import reducer from "./FilterReducer";
import { useContext } from "react";
import { context } from "../../../Context";

export const FilterContext = createContext();

const initialState = {
  filter_Product: [],
  all_product: [],
  Sorting_value: "lowest",
  filter: {
    SearchValue: "",
    categories: "All",
    companyName: "All",
    colorName: "All",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(context);

  const [state, dispatch] = useReducer(reducer, initialState);

  // sorting Function
  const sorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: "Get_sort_Value", payload: userValue });
  };

  // updateValueFilter Search
  const updateValueFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // state.filter.SearchValue=
    dispatch({ type: "Get_search_Value", payload: { name, value } });
  };

  // Sortproducts
  useEffect(() => {
    dispatch({ type: "Filter_Products" });
    dispatch({ type: "Sorting_Product" });
  }, [products, state.Sorting_value, state.filter]);

  useEffect(() => {
    dispatch({ type: "Load_Filter_Product", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateValueFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
