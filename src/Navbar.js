import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="navbar">
    <h1>E-Store</h1>
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>Cart</li>
      <li>Contact</li>
    </ul>
    </div>
    // <nav className="navbar">
    //   <h1 className="navbar__title">E-Store</h1>
    //   <ul className="navbar__links">
    //     <li className="navbar__item">
    //       <Link to="/" className="navbar__link">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link to="/about" className="navbar__link">
    //         Shop
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link to="/projects" className="navbar__link">
    //         Checkout
    //       </Link>
    //     </li>
    //     <li className="navbar__item">
    //       <Link to="/contact" className="navbar__link">
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    //   <div className="navbar__bar"></div>
    // </nav>
  );
}

export default Navbar;
