import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainPage from './containers/MainPage';
import OneProductPage from './containers/OneProductPage';
import ProductPage from './containers/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<ProductPage />} />
        <Route path="/characters/:id" element={<OneProductPage />} />
        <Route path="*" element={<h1>ОШИБОЧКА 404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
