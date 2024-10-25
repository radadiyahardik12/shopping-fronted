// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componts/Login';
import ProtectedRoute from './componts/ProtectedRoute';
import Home from './componts/Home';
import SignUp from './componts/SignUp';
import CardPage from './componts/CartPage';
import OrderPage from './componts/OrderPage';
import CheckoutPage from './componts/CheckoutPage';
import ProductPage from './componts/ProductPage';
import ProductDetails from './componts/ProductDetails';
import AddProduct from './componts/AddProduct';

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderpage"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newAddProduct"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cardpage"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CheckoutPage />
          </ProtectedRoute>
          } 
        />

        <Route path="/products" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProductPage />
          </ProtectedRoute>
          } 
        />

        <Route path='/products-details' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProductDetails />
          </ProtectedRoute >
            }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
