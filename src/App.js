import React from 'react';
import './App.css';
import RegisterPage from './RegisterAccount/RegisterAccount';
import LogninPage from './Account/Account';
import ProductPage from './Product/Product';
// import ProductPage from './Product1/product1';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogninPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
