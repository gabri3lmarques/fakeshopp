export default (state = [], action) => {
  if (action.type === "FETCH_PRODUCTS") {
    return action.payload;
  } else {
    return state;
  }
};
