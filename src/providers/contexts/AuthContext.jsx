import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom'
import React, { useState, useContext, createContext } from 'react';

import AuthService from 'src/services/AuthService';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await AuthService.login({
        email,
        password,
      });

      setIsAuthenticated(res);
      localStorage.setItem('token', res.access_token);
      navigate('/')
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false);
    }
  };

  if (!token) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.prototype = {
  children: PropTypes.any,
};

