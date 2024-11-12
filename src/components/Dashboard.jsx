import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
