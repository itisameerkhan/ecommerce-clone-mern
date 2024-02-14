import './Item.scss';

const Item = ({ data }) => {
  
  const { id, name, image, new_price, old_price} = data;

  return (
    <div className="item">
        <img src={image} alt="" />
        <p className="name">{name}</p>
        <div className="price">
          <p className="new-price">₹{new_price}</p>
          <p className="old-price">₹{old_price}</p>
        </div>
        <div className="hover-div">
        <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="material-symbols-outlined">report</span>
        </div>
    </div>
  )
}

export default Item;