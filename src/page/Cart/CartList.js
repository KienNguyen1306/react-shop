import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartList() {
  let { productsCart } = useSelector((state) => state.productsInCart);

  return (
    <>
      {productsCart.length === 0 ? (
        <p>Không có sản phẩm nào</p>
      ) : (
        <table className="cart_table">
          <tr>
            <th colSpan={2}>SẢN PHẨM</th>
            <th>GIÁ</th>
            <th>SỐ LƯỢNG</th>
            <th>TỔNG</th>
            <th>HÀNH ĐỘNG</th>
          </tr>
          {productsCart.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </table>
      )}
    </>
  );
}

export default CartList;
