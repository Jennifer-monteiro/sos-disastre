import "./Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
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
        <div className ="nav-bars-icon">
            <FaBars size={20} style/>
        </div>
    </div>
  )
}

export default Navbar
