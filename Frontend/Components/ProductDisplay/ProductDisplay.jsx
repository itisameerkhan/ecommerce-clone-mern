import "./ProductDisplay.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Context/cartSlice";

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(product.id));
  };

  return (
    <div className="product-display">
      <div className="product-display-left">
        <img src={product.image} alt="img" className="img-1" />
      </div>
      <div className="product-display-right">
        <h1 className="p-d-r-title">{product.name}</h1>
        <div className="p-d-r-rating">
          <div className="p-d-r-rating-inner">
            <p>4.1</p>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>3233 ratings</p>
        </div>
        <p className="line"></p>
        <div className="p-d-r-price">
          <p className="price1">₹{product.new_price}</p>
          <p className="price2">₹{product.old_price}</p>
        </div>
        <div className="p-d-r-size">
          <p>SELECT SIZE</p>
          <div>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
            <p>53</p>
            <p>54</p>
            <p>55</p>
            <p>56</p>
          </div>
        </div>
        <div className="p-d-r-button">
          <button className="add" onClick={handleClick}>
            <i className="fa-solid fa-bag-shopping"></i>
            ADD TO BAG
          </button>
          <button className="wishlist">
            <i className="fa-solid fa-heart"></i>
            WISHLIST
          </button>
        </div>
        <div className="p-d-r-fit">
          <p>Size & Fit</p>
          <p>Brand Fit: India Slim</p>
          <p>Fit: Oversized</p>
          <p>The model (height 6') is wearing a size 40</p>
        </div>
        <div className="p-d-r-fit">
          <p>Material & Care</p>
          <p>65% Cotton 35% Polyester</p>
          <p>Machine Wash</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
