import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard/users" className="nav-link">
            Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/products" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
