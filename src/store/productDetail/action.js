import ProductsService from "../../services/productsServices";

export const ACT_FETCH_PRODUCT_DETAIL = "ACT_FETCH_PRODUCT_DETAIL";

// menu
export function actFetchProductsDetail(products) {
  return {
    type: ACT_FETCH_PRODUCT_DETAIL,
    payload: products,
  };
}

export function actFetchProductsDetailAsync(productId) {
  return async (dispatch) => {
    const response = await ProductsService.getProductDetail(productId);
    dispatch(actFetchProductsDetail(response.data.data[0]));
  };
}
