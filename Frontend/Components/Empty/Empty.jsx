import './Empty.scss';
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
    <div className="empty">
        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
        <p>Cart is empty</p>
        <Link to={'/'}>
            <button>ADD TO BAG</button>
        </Link>
    </div>
  )
}

export default Empty;