import "./Navbar.css"
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/About">About Us</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className ="nav-bars-icon" onClick= {handleClick}>
            {click ? (
                <FaTimes size={20} color="#fff" />
            ) : (
                <FaBars size={20} color="#fff" />
            )}
        </div>
    </div>
  )
}

export default Navbar
