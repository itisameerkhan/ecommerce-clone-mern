import { useParams } from 'react-router-dom';
import './Product.scss';
import { useSelector } from 'react-redux';
import BreadCrums from '../../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';

const Product = () => {

  const products = useSelector((store) => store.product);
  console.log(products);
  const productId = useParams().productId;
  const product = products.find((e) => e.id == productId);

  return (
    <div className="product">
        <BreadCrums product={product} />
        <ProductDisplay product={product} />
    </div>
  )
}

export default Product;