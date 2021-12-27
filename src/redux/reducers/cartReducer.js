export default (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return action.payload;
  } else {
    return state;
  }
};
