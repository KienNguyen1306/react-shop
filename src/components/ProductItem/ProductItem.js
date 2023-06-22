import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductItem.css";
import { formattingVND } from "../../helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appCart } from "../../store/cart/action";

function ProductItem({ data }) {
  const productsInCart = useSelector((state) => state.productsInCart);
  console.log(productsInCart);
  const dispatch = useDispatch();
  function handelAppCart() {
    dispatch(appCart(data));
  }
  const notify = () => {
    toast.success("Sản phẩm đã được thêm vào giỏ", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="item">
      <div className="image">
        <img src={data.image} alt="loi" />
        {parseInt(data.sale) > 0 && (
          <div className="discount">{data.sale}%</div>
        )}
      </div>
      <div className="info_product">
        <p className="name_product line-camp">
          <Link to={`product-detail/${data.id}`}>{data.name}</Link>
        </p>
        <p className="price_product">
          <span>{data.sale * 1 > 0 && formattingVND(data.priceUp)}</span>
          {formattingVND(data.priceDown)}
        </p>
        <div>
          <p
            className="buy"
            onClick={() => {
              handelAppCart();
              notify();
            }}
          >
            Mua sản phẩm
          </p>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
