const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_PRODUCT_DATA":
      const featureData = action.payload.filter((curEle) => {
        return curEle.featured === "true";
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_Single_LOADING":
      return {
        ...state,
        SET_Single_LOADING: true,
      };

    case "SET_Single_Products":
      return {
        ...state,
        SET_Single_LOADING: false,
        SET_Single_Products: action.payload,
      };

    case "SET_Single_Error":
      return {
        ...state,

        SET_Single_LOADING: false,
        isLoading: true,
      };

    default:
      return state;
  }
};
export default ProductReducer;
