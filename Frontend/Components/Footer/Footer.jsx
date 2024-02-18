import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-1">
        <a href="https://github.com/itisameerkhan" target='_blank'>
            <img
                src="../../src/assets/ak.svg"
                alt="logo"
                className="logo"
            />
        </a>
        <p>Created By Ameer Khan</p>
        </div>
        <div className="footer-2">
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className="footer-3">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default Footer;