import './RelatedProducts.scss';
import products from '../assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="related-prod">
        <h1 className='sub-heading'>Related Products</h1>
        <div className="popular-items">
            {products.map((data, index) => (
                <Item data={data} key={index} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts