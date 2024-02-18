import "./Header.scss";
import { Link } from "react-router-dom";
import aklogo from "../../../public/ak.svg";

const Header = () => {
  return (
    <>
      <div className="header-temp"></div>
      <div className="header">
        <div>
          <Link to={"/"}>
            <img src={aklogo} alt="logo" className="logo" />
          </Link>
          <p>Admin Panel</p>
        </div>
        <div>
          <img src="https://readian.in/public/img/adminlogin.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
