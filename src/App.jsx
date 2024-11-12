import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
//import Profile from './pages/Profile';

function AppFunction() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppFunction;