import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import ShopCategory from '../Pages/ShopCategory/ShopCategory';
import Shop from '../Pages/Shop/Shop';
import Product from '../Pages/Product/Product'; 
import Cart from '../Pages/Cart/Cart';
import Login from '../Pages/Login/Login';
import Footer from '../Components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='men' />} />
          <Route path='/womens' element={<ShopCategory category='women' />} />
          <Route path='/kids' element={<ShopCategory category='kid' />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;