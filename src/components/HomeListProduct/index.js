import { useSelector } from "react-redux";

import ProductItem from "../ProductItem/ProductItem";

import MainTitle from "../Shared/MainTitle";
import "./HomeListProduct.css";
import { useState } from "react";
function HomeListProduct() {
  const [page, setPage] = useState(1);
  const products = useSelector((state) => state.products.products);
  function hanhelMore() {
    setPage(page + 1);
  }
  return (
    <div className="list_product">
      <div className="container">
        <div className="body">
          <MainTitle>Sản Phẩm Nỗi Bật</MainTitle>
          <p className="sub_title">
            Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới
          </p>
          <div className="spacing"></div>
          <div className="list_flex">
            {products.slice(0, page * 15).map((item, index) => {
              return <ProductItem key={index} data={item} />;
            })}
          </div>
          {Math.floor(products.length / 12) !== page && (
            <div className="see_more" onClick={hanhelMore}>
              <button className="btn_more">Xem Thêm</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeListProduct;
