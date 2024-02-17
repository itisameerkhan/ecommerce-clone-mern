import { useState } from "react";
import "./AddProduct.scss";
import axios from "axios";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    // await fetch("http:localhost:5174/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     responseData = data;
    //   });

    await axios.post('http://localhost:8080/upload', {
      body: formData
    })
    .then((res) => responseData = res)

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
    }
  };

  return (
    <div className="add-product">
      <div className="add-product-field">
        <p>Prouduct title</p>
        <input
          type="text"
          value={productDetails.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <p>price</p>
        <input
          type="number"
          name="old_price"
          value={productDetails.old_price}
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>Offer price</p>
        <input
          type="number"
          name="new_price"
          value={productDetails.new_price}
          onChange={changeHandler}
        />
      </div>
      <div>
        <p>category</p>
        <select
          name="category"
          className="category"
          onChange={changeHandler}
          value={productDetails.category}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <div className="upload-area">
            {!image && (
              <div>
                <span className="material-symbols-outlined">cloud</span>
                <p>upload or drop an image</p>
              </div>
            )}
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="uploadimage"
                className="upload-img"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imageHandler}
        />
        <button className="add-product-btn" onClick={addProduct}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
