import "./CartItems.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Context/cartSlice";
import { addTotal, removeCount, removeTotal } from "../../Context/totalSlice";
import { useEffect } from "react";

const CartItems = ({ data, count }) => {
  const products = useSelector((store) => store.product);
  const product = products.find((e) => data == e.id);
  const authToken = useSelector((store) => store.authToken.tokenId);
  const cartItems = useSelector(store => store.cart)

  const updateCartDB = async () => {
    if (authToken) {
      console.log('insider cart functionb');
      const response = await fetch("http://localhost:8080/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });
      const json = await response.json();
      console.log(json);
      console.log('insider cart functionb executed');
    }
  };

  useEffect(() => {
    updateCartDB();
  },[]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeItem(data));
    dispatch(removeTotal(product.new_price));
    dispatch(removeCount(1));
    updateCartDB();
  };

  useEffect(() => {
    dispatch(addTotal(count * product.new_price));
  }, []);

  return (
    <tr>
      <td>
        <img src={product.image} alt="product" />
      </td>
      <td>{product.name}</td>
      <td> ₹ {product.new_price}</td>
      <td>{count}</td>
      <td>₹ {count * product.new_price}</td>
      <td onClick={handleClick}>
        <span className="material-symbols-outlined">delete</span>
      </td>
    </tr>
  );
};

export default CartItems;
