import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">03. Let's Connect</h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your next big game or cinematic experience.
        </p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
