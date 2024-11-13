import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componts/Login';
import ProtectedRoute from './componts/ProtectedRoute';
import Home from './componts/Home';
import SignUp from './componts/SignUp';
import ProductPage from './componts/ProductPage';
import ProductDetails from './componts/ProductDetails';
import AddProduct from './componts/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route exact path="newAddProduct" element={<AddProduct />} />
          <Route exact path="products" element={<ProductPage />} />
          <Route exact path="products-details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
