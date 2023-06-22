import API from "./api";

const ProductsService = {
  getAll: function (inputParams = {}) {
    return API.get(`/api/products`, {
      params: {
        ...inputParams,
      },
    });
  },
  getProductDetail: function (productId) {
    return API.get(`/api/products/${productId}`, {});
  },
};

export default ProductsService;
