import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-greeting">Hi, I'm</h2>
        <h1 className="hero-name">VIGNESH SAI</h1>
        
        <div className="role-container">
          <span className="role">UNREAL ENGINE GAME DEV</span>
          <span className="dot">•</span>
          <span className="role">ANIMATION</span>
          <span className="dot">•</span>
          <span className="role">ENVIRONMENT DESIGNER</span>
        </div>
        
        <p className="hero-description">
          Crafting immersive worlds and cinematic experiences. I blend technical prowess with creative vision to build high-quality, interactive environments and games.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      
      {/* Abstract background element to simulate 3D/Cinematic lighting */}
      <div className="ambient-light"></div>
    </section>
  );
};

export default Hero;
