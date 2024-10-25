// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
