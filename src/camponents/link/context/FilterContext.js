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
    maxPrice: 0,
    price: 0,
    minPrice: 0,
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
  // sorting Function
  const ClearFun = (e) => {
    e.preventDefault();
    dispatch({ type: "Clear_Filters" });
  };

  // updateValueFilter Search
  const updateValueFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "Get_search_Value", payload: { name, value } });
  };

  // Sortproducts
  useEffect(() => {
    dispatch({ type: "Filter_Products" });
    dispatch({ type: "Sorting_Product" });
    // console.log(initialState.filter);
  }, [products, state.Sorting_value, state.filter]);

  useEffect(() => {
    dispatch({ type: "Load_Filter_Product", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, sorting, updateValueFilter, ClearFun }}
    >
      {children}
    </FilterContext.Provider>
  );
};
