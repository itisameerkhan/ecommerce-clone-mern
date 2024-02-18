import { useEffect, useState } from "react";
import "./ListProduct.scss";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/allproducts");
    const json = await data.json();
    setProducts(json);
  };

  const removeProduct = async(id) => {
    await fetch('http://localhost:8080/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id}),
    })
    await getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list-products">
      <h1>All Products List</h1>
      <table>
        <tr>
          <th>Products</th>
          <th>Title</th>
          <th>Old Price</th>
          <th>New Price</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        {products.map((data, index) => (
          <tr key={index} className="table-data">
            <td>
              <img src={data.image} alt="image" />
            </td>
            <td>{data.name}</td>
            <td>₹ {data.old_price}</td>
            <td>₹ {data.new_price}</td>
            <td>{data.category}</td>
            <td onClick={() => removeProduct(data.id)} className='remove-td'>
              <span class="material-symbols-outlined">delete</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ListProduct;
