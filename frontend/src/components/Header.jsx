import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components.css';

function Header() {
  return (
    <header>
    <h1>Pet Store</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;