import { ACT_FETCH_ALL_MENUS } from "./action";
import { menus } from "../../assets/datas/menus";
const initState = {
  menus: menus,
};

function menusReducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_MENUS:
      return { ...state, menus: action.payload };
    default:
      return state;
  }
}





export default menusReducer;
