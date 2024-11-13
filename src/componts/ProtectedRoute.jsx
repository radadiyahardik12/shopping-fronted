import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken');

  useEffect(() => {
    
    if (!isAuthenticated || "undefined" == isAuthenticated || "null" == isAuthenticated ) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
