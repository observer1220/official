import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Welcome to Howl's Moving Castle</h1>
            <p className="hero-description">Explore the magical world of Miyazaki's creations.</p>
            <button className="hero-button">Get Started</button>
        </div>
    );
};

export default Hero;