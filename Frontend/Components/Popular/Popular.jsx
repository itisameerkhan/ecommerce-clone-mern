import './Popular.scss';
import dataProduct from '../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  console.log(dataProduct);
  return (
    <div className="popular">
        <h1 className="sub-heading">Popular in Women</h1>
        <div className="popular-items">
          {dataProduct.map((data, index) => (
            <Item 
              key={index} 
              data={data} 
            />
          ))}
        </div>
    </div>
  )
}

export default Popular;