import ProductsService from "../../services/productsServices";

export const ACT_FETCH_ALL_PRODUCT = "ACT_FETCH_ALL_PRODUCT";

// menu
export function actFetchAllProducts(products) {
  return {
    type: ACT_FETCH_ALL_PRODUCT,
    payload: products,
  };
}

export function actFetchAllProductsAsync() {
  return async (dispatch) => {
    const response = await ProductsService.getAll();
    dispatch(actFetchAllProducts(response.data));
  };
}
