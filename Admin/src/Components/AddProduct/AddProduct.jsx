import "./AddProduct.scss";

const AddProduct = () => {
  return (
    <div className="add-product">
      <div className="add-product-field">
        <p>Prouduct title</p>
        <input type="text" />
      </div>
      <div>
        <p>price</p>
        <input type="number" />
      </div>
      <div>
        <p>Offer price</p>
        <input type="number" />
      </div>
      <div>
        <p>category</p>
        <select name="category" className="category">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <div className="upload-area">
            <span class="material-symbols-outlined">cloud</span>
            <p>upload or drop an image</p>
          </div>
        </label>
        <input type="file" name="image" id="file-input" hidden />
        <button className="add-product-btn">ADD</button>
      </div>
    </div>
  );
};

export default AddProduct;
