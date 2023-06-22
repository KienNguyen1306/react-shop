import { formattingVND } from "../../helpers";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../store/cart/action";
import { useState } from "react";

function CartItem({ item }) {
  let dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  function handleOnchange(e) {
    setNumber(e.target.value);
  }
  function handelDelete(productId) {
    dispatch(deleteCart(productId));
  }

  function handleUpdate() {
    dispatch(updateCart(item.id, number));
  }

  return (
    <tr className="item_tr">
      <td className="image">
        <img src={item.image} alt="loi" />
      </td>
      <td className="name line-camp-2">{item.name}k</td>
      <td className="price">{formattingVND(item.priceDown)}</td>
      <td>
        <div className="action">
          <input
            min={1}
            type="number"
            className="input"
            value={number !== 0 ? number : item.count}
            onChange={handleOnchange}
          />
        </div>
      </td>
      <td className="price">{formattingVND(item.priceDown * item.count)}</td>
      <td className="action_cart">
        <button className="btn_update" onClick={handleUpdate}>
          update
        </button>
        <button className="btn_delete" onClick={() => handelDelete(item.id)}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
