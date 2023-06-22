import { useSelector, useDispatch } from "react-redux";
import { formattingVND } from "../../helpers";
import { payCart } from "../../store/cart/action";

function CartPay() {
  let { totalPrice } = useSelector((state) => state.productsInCart);
  const dispatch = useDispatch();
  function handlePayCart() {
    dispatch(payCart());
  }
  return (
    <>
      <div className="cart_list">
        <p>CỘNG GIỎ HÀNG</p>
      </div>
      <div className="cart_list">
        <p>Tạm tính</p>
        <p className="price">{formattingVND(totalPrice)}</p>
      </div>
      <div className="cart_list">
        <p>Giao hàng</p>
        <ul>
          <li>Giao hàng miễn phí</li>
          <li>
            Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh toán
          </li>
          <li>Tính phí giao hàng</li>
        </ul>
      </div>
      <div className="cart_list">
        <p>TỔNG</p>
        <p className="price">{formattingVND(totalPrice)}</p>
      </div>

      <div className="pay">
        <button className="btn-pay" onClick={handlePayCart}>
          Tiến Hành Thanh Toán
        </button>
      </div>
    </>
  );
}

export default CartPay;
