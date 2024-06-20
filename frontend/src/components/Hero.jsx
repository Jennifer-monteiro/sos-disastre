import "../styles/Hero.css";
import React from 'react';
import HeroImg from "../assets/images/hero-image1.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
    return <div className="hero">
        <div className="mask">
            <img className="hero-img"
            src={HeroImg} alt="Disaster"/>
        </div>
        <div className="content">
            <p>Olá, queremos ajudar!</p>
            <h1>SOS Disastre</h1>
            <div>
              <Link to="/project" className="btn">Projects</Link>
              <Link to="/contact" className="btn-2">Contact</Link>
            </div>
        </div>
    </div>

};

export default Hero
