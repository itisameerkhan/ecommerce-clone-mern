import CartItems from '../../Components/CartItems/CartItems';
import Empty from '../../Components/Empty/Empty';
import './Cart.scss';
import { useSelector } from 'react-redux';

const Cart = () => {


  const cartCount = useSelector(store => store.cart);

  let val = 0;
  cartCount.map((data) => {
    val += data;
  });

  if(val === 0) return <Empty />

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
              if(data > 0) {
                return <CartItems data={index} count={data} key={index} />
              }
            })}
        </table>
    </div>
  )
}

export default Cart;