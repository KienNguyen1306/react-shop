import { mappingMenus, mappingMenusData } from "../../helpers";
import CaterogyService from "../../services/caterogyServices";

export const ACT_FETCH_ALL_MENUS = "ACT_FETCH_ALL_MENUS";

// menu
export function actFetchAllMenus(menus) {
  return {
    type: ACT_FETCH_ALL_MENUS,
    payload: menus,
  };
}

export function actFetchAllMenusAsync() {
  return async (dispatch) => {
    const response = await CaterogyService.getAll();
    const menus1 = response.data.data.map(mappingMenus);
    const menus = mappingMenusData(menus1);
    dispatch(actFetchAllMenus(menus));
  };
}
