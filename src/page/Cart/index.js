import CartList from "./CartList";

import "./Cart.css";
import CartPay from "./CartPay";
function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="body">
          <div className="left">
            <CartList />
          </div>
          <div className="right">
            <CartPay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
