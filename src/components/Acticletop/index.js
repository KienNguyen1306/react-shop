import { Link } from "react-router-dom";
import "./Acticletop.css";
function Acticletop({ title, link }) {
  return (
    <div className="about_top">
      <h3>{title}</h3>
      <div className="about_link">
        <Link to="/" className="link_home">
          TRANG CHỦ
        </Link>
        <span>/</span>
        <Link to={link} className="link_about">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default Acticletop;
