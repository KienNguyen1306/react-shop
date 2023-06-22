import "./footer.css";
import { AiFillPhone, AiOutlineHeatMap, AiFillMail } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="body">
          <div className="colum">
            <h3 className="title">Liên hệ</h3>
            <ul className="footer_list">
              <li className="footer_list0-item">
                <AiOutlineHeatMap className="footer_icon" />
                Địa chỉ: 261 Đình Phong Phú, Quận 9, Tp.HCM
              </li>
              <li className="footer_list0-item">
                <AiFillPhone className="footer_icon" />
                Điện Thoại: (+84) 382185674
              </li>
              <li className="footer_list0-item">
                <AiFillMail className="footer_icon" />
                Mail: kienndk09@gmail.com
              </li>
            </ul>
          </div>
          <div className="colum">
            <h3 className="title">Danh Mục</h3>
            <ul className="footer_list">
              <li className="footer_list0-item">Máy tính</li>
              <li className="footer_list0-item">Điện thoại</li>
              <li className="footer_list0-item">túi sách</li>
              <li className="footer_list0-item">Loa điện thoại</li>
            </ul>
          </div>
          <div className="colum">
            <h3 className="title">Mục Lục</h3>
            <ul className="footer_list">
              <li className="footer_list0-item">Trang Chủ</li>
              <li className="footer_list0-item">giới Thiệu</li>
              <li className="footer_list0-item">Liên Kết</li>
              <li className="footer_list0-item">Giao dịch</li>
              <li className="footer_list0-item">Vận chuyển</li>
            </ul>
          </div>
          <div className="colum">
            <h3 className="title">Liên hệ</h3>
            <ul className="footer_list">
              <li className="footer_list0-item">Tài Khoản</li>
              <li className="footer_list0-item">Địa Chỉ Cửa Hàng</li>
              <li className="footer_list0-item">Theo Dõi Đơn Hàng</li>
              <li className="footer_list0-item">Hướng Dẫn</li>
              <li className="footer_list0-item">Liên Hệ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
