import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Vignesh Sai. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">ArtStation</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
