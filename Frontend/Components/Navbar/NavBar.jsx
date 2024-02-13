import { useState } from 'react';
import './NavBar.scss';

const NavBar = () => {

    const [menu, setMenu] = useState('shop');

    return (
        <>
        <div className="nav-bar">
            <div className="nav-sec-1">
                <img src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg" alt="logo" className='logo' />
                <nav className='nav-bar-n'>
                    <ul>
                        <li 
                            onClick={() => setMenu('shop')}
                            className={`${menu == 'shop' ? 'active' : 'inactive'}`}>
                            SHOP
                        </li>
                        <li 
                            onClick={() => setMenu('men')}
                            className={`${menu == 'men' ? 'active' : 'inactive'}`}>
                            MEN
                        </li>
                        <li 
                            onClick={() => setMenu('women')}
                            className={`${menu == 'women' ? 'active' : 'inactive'}`}>
                            WOMEN
                        </li>
                        <li 
                            onClick={() => setMenu('kids')}
                            className={`${menu == 'kids' ? 'active' : 'inactive'}`}>
                            KIDS
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nav-sec-2">
                <button className="login">Login</button>
                <div className="nav-sec-bag">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <p className="nav-count">0</p>
                </div>
            </div>
        </div>
        <div className="nav-height"></div>
        </>
    )
}

export default NavBar;