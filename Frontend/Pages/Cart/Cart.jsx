import { useEffect, useState } from "react";
import CartItems from "../../Components/CartItems/CartItems";
import "./Cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartCount = useSelector((store) => store.cart);
  const cartTotal = useSelector((store) => store.total.value);
  const authToken = useSelector(store => store.authToken.tokenId);


  const updateCartDB = async() => {
    if(authToken) {
      console.log('inside function');
      const response = await fetch('http://localhost:8080/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          // "auth-token": authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartCount),
      });
      const json = await response.json();
      console.log(json);
      console.log('function executed');
    }
  }

  return (
    <div className="cart">
      <table>
        <tr>
          <th>Products</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        {cartCount.map((data, index) => {
          if (data > 0) {
            console.log(index);
            updateCartDB();
            return <CartItems data={index} count={data} key={index} />;
          }
        })}
      </table>
      <div className="cart-total">
        <div className="cart-total-left">
          <h1>Cart Total</h1>
          <div>
            <p>Subtotal</p>
            <p>₹ {cartTotal}</p>
          </div>
          <div>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div>
            <p>Total</p>
            <p>₹ {cartTotal}</p>
          </div>
        </div>
        <div className="cart-total-right">
          <p>If you have a promo code, Enter it here</p>
          <div>
            <input type="text" placeholder="promo code" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <button className="proceed-btn">proceed to checkout</button>
    </div>
  );
};

export default Cart;
