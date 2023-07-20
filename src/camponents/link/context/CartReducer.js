const CartReducer = (state, action) => {
  if (action.type === "Add_to_cart") {
    let { id, color, amount, product } = action.payload;
    console.log(product);
  }
  return state;
};

export default CartReducer;
