import { ACT_FETCH_ALL_PRODUCT } from "./action";

const initState = {
  products: [],
};

function ProductReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_PRODUCT:
      return { ...state, products: action.payload.data };
    default:
      return state;
  }
}

export default ProductReducer;
