import {
  AiFillFacebook,
  AiOutlineDown,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function HeaderTop() {
  return (
    <div className="headertop">
      <div className="container">
        <div className="body">
          <div className="left">
            <p>Welcome to Floda online store</p>
          </div>
          <div className="right">
            <div className="languages">
              <p>
                Languages <AiOutlineDown />
              </p>
              <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>French</li>
                <li>German</li>
              </ul>
            </div>
            <div className="icon_info">
              <AiFillFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillTwitterSquare className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
