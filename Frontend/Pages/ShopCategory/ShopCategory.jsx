import Item from '../../Components/Item/Item';
import './ShopCategory.scss';
import { useSelector } from 'react-redux';

const ShopCategory = (props) => {

  const products = useSelector((store) => store.product);

  return (
    <div className="shop-category">
        <img src={props.banner} alt="banner" className='banner' />
        <div className="desc">
          <p><span>showing 1-12</span> out of 36 products</p>
        </div>
        <div className="popular-items shop-category-list">
          {products.map((data, index) => {
            if(data.category === props.category) {
              return <Item data={data} />
            }
          })}
        </div>
    </div>
  )
}

export default ShopCategory;