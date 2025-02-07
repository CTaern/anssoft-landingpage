import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute component:
 * - Checks if the user is authenticated.
 * - Renders the child component if authenticated.
 * - Redirects to the login page if not authenticated.
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
