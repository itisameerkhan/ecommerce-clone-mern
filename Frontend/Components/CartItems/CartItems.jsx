import './CartItems.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../Context/cartSlice';

const CartItems = ({data, count}) => {


    const products = useSelector(store => store.product);
    const product = products.find(e => data == e.id);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeItem(data))
    }


  return (
    <tr>
        <td><img src={product.image} alt="product" /></td>
        <td>{product.name}</td>
        <td> ₹ {product.new_price}</td>
        <td>{count}</td>
        <td>₹ {count * product.new_price}</td>
        <td onClick={handleClick}>
        <span class="material-symbols-outlined">delete</span>
        </td>
    </tr>
  )
}

export default CartItems