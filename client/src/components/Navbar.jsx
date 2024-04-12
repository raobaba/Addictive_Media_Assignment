import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to='/'> <img src="./Logo.jfif" alt="logo" width={30} /></Link>
      </div>
      <div className="navbar-right">
        <Link to="/userform" className="navbar-item">UserForm</Link>
        <Link to="/addressform" className="navbar-item">AddressForm</Link>
        <Link to="/login" className="navbar-item">LogIn</Link>
        <Link to="/signup" className="navbar-item">SignUp</Link>
      </div>
    
    </div>

  );
}

export default Navbar;
