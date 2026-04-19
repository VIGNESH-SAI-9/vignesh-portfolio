import React from 'react';
import TextScramble from './TextScramble';
import HeroShutterText from './HeroShutterText';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content">
        <h2 className="hero-greeting">Hi, I'm</h2>
        <HeroShutterText text="VIGNESH SAI" className="hero-name" />
        
        <div className="role-container">
          <TextScramble as="span" className="role" duration={1.5} delay={3.0} characterSet="XQKWZPBRTM">UNREAL ENGINE GAME DEV</TextScramble>
          <span className="separator">•</span>
          <TextScramble as="span" className="role" duration={1.5} delay={3.1} characterSet="XQKWZPBRTM">ANIMATION</TextScramble>
          <span className="separator">•</span>
          <TextScramble as="span" className="role" duration={1.5} delay={3.2} characterSet="XQKWZPBRTM">ENVIRONMENT DESIGNER</TextScramble>
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
