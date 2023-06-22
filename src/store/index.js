import { combineReducers, createStore, applyMiddleware } from "redux";
import menusReducer from "./menus/menuReducer";
import products from "./products/productsReducer";
import thunk from "redux-thunk";
import productDetail from "./productDetail/productDetailReducer";
import productsInCart from "./cart/cartReducer";
const rootReducer = combineReducers({
  menusReducer,
  products,
  productDetail,
  productsInCart,
});
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
