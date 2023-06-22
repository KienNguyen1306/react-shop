import { ACT_FETCH_PRODUCT_DETAIL } from "./action";

const initState = {
  productsDetail: {},
};

function productDetail(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_PRODUCT_DETAIL:
      return { ...state, productsDetail: action.payload };
    default:
      return state;
  }
}

export default productDetail;
