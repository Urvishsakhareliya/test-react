import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./productReducer";

const context = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  SET_Single_LOADING: false,
  SET_Single_Products: {},
};
const Api = "https://api.pujakaitem.com/api/products";
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "API_PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_Single_LOADING" });
    try {
      const res = await axios.get(url);
      const SingleProducts = await res.data;
      dispatch({ type: "SET_Single_Products", payload: SingleProducts });
    } catch (error) {
      dispatch({ type: "SET_Single_Error" });
    }
  };

  useEffect(() => {
    getProducts(Api);
  }, []);
  return (
    <>
      <context.Provider value={{ ...state, getSingleProduct }}>
        {children}
      </context.Provider>
    </>
  );
};
export { AppContext, context };
