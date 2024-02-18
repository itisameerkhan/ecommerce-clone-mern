import "./SideBar.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="side-bar-temp"></div>
      <div className="side-bar">
        <Link to={"/addproduct"}>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>add product</p>
          </div>
        </Link>
        <Link to={"/listproduct"}>
          <div className="sidebar-item">
            <span className="material-symbols-outlined">view_list</span>{" "}
            <p>list product</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
