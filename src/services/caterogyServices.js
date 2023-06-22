import API from "./api";

const CaterogyService = {
  getAll: function (inputParams = {}) {
    return API.get(`/api/caterogy`, {
      params: {
        ...inputParams,
      },
    });
  },
};

export default CaterogyService;
