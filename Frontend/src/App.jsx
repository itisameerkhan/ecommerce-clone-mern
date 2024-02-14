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
import banner_kids from  '../Components/assets/banner_kids.png'
import banner_mens from  '../Components/assets/banner_mens.png'
import banner_womens from  '../Components/assets/banner_women.png'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={banner_mens} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={banner_womens} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kid' />} />
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