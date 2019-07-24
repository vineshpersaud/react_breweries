import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';

// <NavLink to="/Breweries" exact>Breweries</NavLink>

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink to="/" exact>Home</NavLink>

    </div>
  );
};

export default NavBar;
