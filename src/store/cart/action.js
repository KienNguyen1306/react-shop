export const ACT_APP_PRODUCT = "ACT_APP_PRODUCT";
export const ACT_DELETE_PRODUCT = "ACT_DELETE_PRODUCT";
export const ACT_UPDATE_PRODUCT = "ACT_UPDATE_PRODUCT";
export const ACT_PAY_PRODUCT = "ACT_PAY_PRODUCT";

export function appCart(product) {
  return {
    type: ACT_APP_PRODUCT,
    payload: product,
  };
}

export function deleteCart(productID) {
  return {
    type: ACT_DELETE_PRODUCT,
    payload: productID,
  };
}

export function updateCart(productId, count) {
  return {
    type: ACT_UPDATE_PRODUCT,
    payload: { productId, count },
  };
}

export function payCart() {
  return {
    type: ACT_PAY_PRODUCT,
  };
}
