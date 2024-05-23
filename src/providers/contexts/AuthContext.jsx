import PropTypes from 'prop-types';
import React, { useState, useContext, createContext } from 'react';

import AuthService from 'src/services/AuthService';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(false)

  const handleLogin = ({ email, password }) => {
    setLoading(true)
    AuthService.login({
      email,
      password,
    })
      .then((res) => {
        setIsAuthenticated(res)
        localStorage.setItem('token', res.token)
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false)
      });
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, loading }}>{children}</AuthContext.Provider>
  );
}

AuthProvider.prototype = {
  children: PropTypes.any,
};

export function useAuth() {
  return useContext(AuthContext);
}
