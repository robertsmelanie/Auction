import React from 'react';
// import "../styles/style.css";
import '../styles/Components.css';

function Footer() {
  return (
    <footer className='footer-custom'>
      <p>&copy; {new Date().getFullYear()} The Mighty Mouser Pet Store</p>
    </footer>
  );
}

export default Footer;
