import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout'
import Home from './pages/Home'
import MyCart from './pages/MyCart'
import CustomLists from './pages/CustomLists'
import SavedCarts from './pages/SavedCarts'
import PurchaseHistory from './pages/PurchaseHistory'
import AccountSettings from './pages/AccountSettings'
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src="images/logo.jpeg" alt="" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='my-cart' element={<MyCart />}/>
            <Route path='custom-lists' element={<CustomLists />}/>
            <Route path='saved-carts' element={<SavedCarts />}/>
            <Route path='purchase-history' element={<PurchaseHistory />}/>
            <Route path='account-settings' element={<AccountSettings />}/>
            <Route path='*' element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>Footer content</footer>
    </div>
  );
}

export default App;
