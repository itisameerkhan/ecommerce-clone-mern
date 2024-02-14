import "./BreadCrums.scss";

const BreadCrums = (props) => {
    const {product} = props;
    console.log(product);
  return (
    <div className="bread-crums">
        <p>Home</p>
        <span class="material-symbols-outlined">chevron_right</span>
        <p>{product.category}</p>
        <span class="material-symbols-outlined">chevron_right</span>
        <p className="p-name">{product.name}</p>
    </div>
  )
};

export default BreadCrums;
