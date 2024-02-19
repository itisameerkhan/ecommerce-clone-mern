import './NewCollections.scss';
import collections from '../assets/new_collections';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const NewCollections = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  const getData = async() => {
    const data = await fetch('http://localhost:8080/newcollections');
    const json = await data.json();
    setProducts(json);
  }

  return (
    <div className="new-collections">
        <h1 className="sub-heading">New Collections</h1>
        <div className="popular-items">
            {products.map((data, index) => (
                <Item key={index} data={data} />
            ))}
        </div>
    </div>
  )
}

export default NewCollections;