import './Popular.scss';
import dataProduct from '../assets/data';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const Popular = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  const getData = async() => {
    const data = await fetch('http://localhost:8080/popularinwomen');
    const json = await data.json();
    setProducts(json);
  }

  return (
    <div className="popular">
        <h1 className="sub-heading">Popular in Women</h1>
        <div className="popular-items">
          {products.map((data, index) => (
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