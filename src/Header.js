import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 id="headerTitle">RESTy</h1>
      <nav id="navbar">
        <ul id="navLinks">
        <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/history">History</Link>
          </li>
          <li>
            <Link className="link" to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;