import { useParams } from "react-router-dom";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Comment from "../../components/Comment";
import "./ProductDetail.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchProductsDetailAsync } from "../../store/productDetail/action";

function ProductDetail() {
  const [loading, setLoading] = useState(true);
  let { productId } = useParams();
  let productDetail = useSelector(
    (state) => state.productDetail.productsDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchProductsDetailAsync(productId)).then(() => {
      setLoading(!loading);
    });
  }, [dispatch, productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product_detail">
      <div className="container">
        <div className="body">
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              <div className="left">
                <ProductImage image={productDetail.image} />
              </div>
              <div className="right">
                <ProductInfo info={productDetail} />
                <div className="info">
                  <ul>
                    <li>
                      <span>Country of Origin:</span>Vietnam
                    </li>
                    <li>
                      <span>Style:</span>Basic, Korean, Street Style
                    </li>
                    <li>
                      <span>Ships From:</span>Huyện Gia Lâm, Hà Nội
                    </li>
                    <li>
                      <span>Other stocks:</span>67158
                    </li>
                    <li>
                      <span>Fan Features:</span>Oscillate, Variable Speed
                      Settings
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="space"></div>
        <Comment />
      </div>
    </div>
  );
}

export default ProductDetail;
