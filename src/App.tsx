import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './containers/MainPage';
import ProductPage from './containers/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="*" element={<h1>ОШИБОЧКА 404</h1>} />
    </Routes>
  );
};

export default App;
