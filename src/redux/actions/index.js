import productsApi from "../../api/products";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await productsApi.get("/products");

    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response.data,
    });
  };
};

export const removeFromCart = (state, id) => {
  const deletedItem = state.filter((state) => {
    return state.id !== id;
  });

  return {
    type: "REMOVE_FROM_CART",
    payload: deletedItem,
  };
};

export const addToCart = (state, item) => {
  
  state.push(item);
  console.log(state);
  return {
    type: "ADD_TO_CART",
    payload: state,
  };
}


