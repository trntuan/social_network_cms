import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { useAuth } from 'src/providers/contexts/AuthContext';

const whileList = ['/login'];

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  if (isAuthenticated && whileList.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticated) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the Outlet to render child routes
  return <Outlet />;
}

export default ProtectedRoute;
