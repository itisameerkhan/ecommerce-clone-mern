import { useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className="nav-bar">
        <div className="nav-sec-1">
          <Link to={'/'}>
            <img
              src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg"
              alt="logo"
              className="logo"
            />
          </Link>
          <nav className="nav-bar-n">
            <ul>
              <Link to={"/"}>
                <li
                  onClick={() => setMenu("shop")}
                  className={`${menu == "shop" ? "active" : "inactive"}`}
                >
                  SHOP
                </li>
              </Link>
              <Link to={"/mens"}>
                <li
                  onClick={() => setMenu("men")}
                  className={`${menu == "men" ? "active" : "inactive"}`}
                >
                  MEN
                </li>
              </Link>
              <Link to={"/womens"}>
                <li
                  onClick={() => setMenu("women")}
                  className={`${menu == "women" ? "active" : "inactive"}`}
                >
                  WOMEN
                </li>
              </Link>
              <Link to={"/kids"}>
                <li
                  onClick={() => setMenu("kids")}
                  className={`${menu == "kids" ? "active" : "inactive"}`}
                >
                  KIDS
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="nav-sec-2">
          <Link to={"/login"}>
            <button className="login-btn">Login</button>
          </Link>
          <Link to={"/cart"}>
            <div className="nav-sec-bag">
              <span className="material-symbols-outlined">shopping_bag</span>
              <p className="nav-count">0</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav-height"></div>
    </>
  );
};

export default NavBar;
