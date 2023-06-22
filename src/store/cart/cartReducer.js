import {
  ACT_APP_PRODUCT,
  ACT_DELETE_PRODUCT,
  ACT_PAY_PRODUCT,
  ACT_UPDATE_PRODUCT,
} from "./action";

let local = JSON.parse(localStorage.getItem("cart"));
const initState = {
  productsCart: local ? local.productsCart : [],
  totalCount: local ? local.totalCount : 0,
  totalPrice: local ? local.totalPrice : 0,
};

function productsCartReducer(state = initState, action) {
  let products = state.productsCart;

  switch (action.type) {
    case ACT_APP_PRODUCT:
      let curentProduct = action.payload;
      let findProduct = products.find((item) => item.id === curentProduct.id);
      if (findProduct) {
        const newCart = products.map((x) =>
          x.id === curentProduct.id
            ? { ...findProduct, count: findProduct.count + 1 }
            : x
        );

        let res = {
          ...state,
          productsCart: newCart,
          totalCount: newCart.reduce((acc, item) => acc + item.count, 0),
          totalPrice: newCart.reduce(
            (acc, item) => acc + item.priceDown * item.count,
            0
          ),
        };
        localStorage.setItem("cart", JSON.stringify(res));
        return res;
      } else {
        products = [...state.productsCart, { ...curentProduct, count: 1 }];
        let totalCount = products.reduce((acc, item) => acc + item.count, 0);
        let totalPrice = products.reduce(
          (acc, item) => acc + item.priceDown,
          0
        );

        let res = {
          ...state,
          productsCart: products,
          totalCount: totalCount,
          totalPrice: totalPrice,
        };
        localStorage.setItem("cart", JSON.stringify(res));
        return res;
      }

    case ACT_DELETE_PRODUCT:
      let newCart = state.productsCart.filter(
        (item) => item.id !== action.payload
      );
      let res = {
        ...state,
        productsCart: newCart,
        totalCount: newCart.reduce((acc, item) => acc + item.count, 0),
        totalPrice: newCart.reduce(
          (acc, item) => acc + item.priceDown * item.count,
          0
        ),
      };
      localStorage.setItem("cart", JSON.stringify(res));
      return res;
    case ACT_UPDATE_PRODUCT:
      let updateCart = state.productsCart.map((cart) => {
        return cart.id === action.payload.productId
          ? { ...cart, count: action.payload.count * 1 }
          : cart;
      });
      let respon = {
        ...state,
        productsCart: updateCart,
        totalCount: updateCart.reduce((acc, item) => acc + item.count, 0),
        totalPrice: updateCart.reduce(
          (acc, item) => acc + item.priceDown * item.count,
          0
        ),
      };
      localStorage.setItem("cart", JSON.stringify(respon));
      return respon;

    case ACT_PAY_PRODUCT:
      return {
        productsCart: [],
        totalCount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
}

export default productsCartReducer;
