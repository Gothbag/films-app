import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Wish List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
