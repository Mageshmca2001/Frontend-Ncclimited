import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('authToken');
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default AppRouter;
