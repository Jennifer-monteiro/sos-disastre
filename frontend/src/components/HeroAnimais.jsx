import "../styles/HeroAnimais.css";
import React from 'react';
import heroImage from '../assets/images/animais1.jpg'

const HeroAnimais = () => {
    return (
        <div className="hero-img-animais" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="heading">
                <h1>Animais Resgatados</h1>
                <p>Encontrou seu animalzinho? Entre em contato com o abrigo!</p>
            </div>
        </div>
    );
};

export default HeroAnimais;