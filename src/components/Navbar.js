import "./Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom';

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
      
    </div>
  )
}

export default Navbar
