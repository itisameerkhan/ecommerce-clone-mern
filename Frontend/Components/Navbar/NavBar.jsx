import { useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import aklogo from '../../public/ak.svg';
import { removeToken } from "../../Context/authTokenSlice";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const itemsCount = useSelector(store => store.total.itemsCount);
  const authToken = useSelector(store => store.authToken.tokenId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeToken());
    navigate('/login');
  }

  return (
    <>
      <div className="nav-bar">
        <div className="nav-sec-1">
          <Link to={'/'}>
            <img
              src={aklogo}
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
          {authToken && <button onClick={handleLogout}>Logout</button>}
          {!authToken && <Link to={'/login'}><button>Login</button></Link>}
          <Link to={"/cart"}>
            <div className="nav-sec-bag">
              <span className="material-symbols-outlined">shopping_bag</span>
              <p className="nav-count">{itemsCount}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav-height"></div>
    </>
  );
};

export default NavBar;
