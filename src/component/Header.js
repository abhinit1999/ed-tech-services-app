import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';


const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
           <h1>Logo</h1> 
        </div>
        <ul>
          <li>
            <NavLink to="/" style={{textDecoration:'none',color:'white'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"  style={{textDecoration:'none',color:'white'}}>About</NavLink>
          </li>
          <li>
            <NavLink to="/service"  style={{textDecoration:'none',color:'white'}}>Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact"  style={{textDecoration:'none',color:'white'}}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
