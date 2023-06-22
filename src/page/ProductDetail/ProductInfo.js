import { formattingVND } from "../../helpers";

function ProductInfo({ info }) {
  return (
    <>
      <h3 className="name">{info.name}</h3>
      <div className="small"></div>
      <p className="price">{formattingVND(info.priceDown)}</p>
      <div className="action">
        <div className="count">
          <button> - </button>
          <button type="number" className="input_number">
            1
          </button>
          <button> + </button>
        </div>
        <button className="btn_buy">Mua sản phẩm</button>
      </div>
    </>
  );
}

export default ProductInfo;
