import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import HeaderMenu from "./HeaderMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";

function HeaderMain() {
  return (
    <div className="header_main">
      <div className="container">
        <div className="body">
          <HeaderLogo />
          <HeaderMenu />
          <div className="navbar_right">
            <div className="search">
              <AiOutlineSearch className="icon" />
              <HeaderSearch />
            </div>
            <div className="icon_header-main">
              <FaUserAlt className="icon" />
              <HeaderCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
