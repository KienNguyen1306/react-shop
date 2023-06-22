import { BiMap } from "react-icons/bi";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

function ContactInfo() {
  return (
    <div className="right_info">
      <ul>
        <li>
          <BiMap />
          261 Đường Đình Phong Phú, quận 9, Tp.Hồ Chí
        </li>
        <li>
          <AiFillPhone />
          0382185674
        </li>
        <li>
          <AiOutlineMail />
          kienndk09@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
