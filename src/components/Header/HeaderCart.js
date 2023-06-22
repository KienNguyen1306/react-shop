import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderCart() {
  let { totalCount } = useSelector((state) => state.productsInCart);
  return (
    <div className="cart_icon">
      <p className="count_cart">{totalCount}</p>
      <Link to="/cart">
        <AiOutlineShoppingCart className="icon" />
      </Link>
    </div>
  );
}

export default HeaderCart;
