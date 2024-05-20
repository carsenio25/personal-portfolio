import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    };

export default Navbar;
