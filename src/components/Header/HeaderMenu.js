import { AiOutlineDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  let menus = useSelector((state) => state.menusReducer.menus);

  

  function renderMenu(array) {
    let res = array.map((item, index) => {
      return (
        <NavLink to={item.link} key={index} className="manu_item" end>
          {item.title}
          {item.Children.length > 0 && <AiOutlineDown />}
          {item.Children.length > 0 && (
            <ul className="sub_menu">{renderMenu(item.Children)}</ul>
          )}
        </NavLink>
      );
    });
    return res;
  }

  return (
    <div className="navbar">
      <ul className="manus">{renderMenu(menus)}</ul>
    </div>
  );
}

export default HeaderMenu;
