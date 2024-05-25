import React from 'react';
import { Navigate } from 'react-router-dom';

// import AuthService from 'src/services/AuthService';

// const whileList = ['/login'];

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  // const location = useLocation();
  const token = localStorage.getItem('token');

  // if (token && whileList.includes(location.pathname)) {
  //   return AuthService.refresh(token)
  // }

  if (!token) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the Outlet to render child routes
  return <>{children}</>;
}

export default ProtectedRoute;
