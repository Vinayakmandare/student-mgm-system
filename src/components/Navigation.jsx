import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Student Management</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Student List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register Student</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

