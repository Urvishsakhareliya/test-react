const CartReducer = (state, action) => {
  if (action.type === "Add_to_cart") {
    let { id, color, amount, product } = action.payload;
    let cartProduct;
    console.log(state.cart);
    let existingProduct = state.cart.find((curEle) => {
      return curEle.id === id + color;
    });

    if (existingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount;
          if (newAmount >= curEle.max) {
            newAmount = curEle.max;
          }
          return { ...curEle, amount: newAmount };
        } else {
          return curEle;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CART_CLEAR") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default CartReducer;
