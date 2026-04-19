import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { AnimatedInput } from './AnimatedInput';
import { AnimatedTextarea } from './AnimatedTextarea';
import './Contact.css';

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className={`contact-container reveal-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">03. Let's Connect</h2>
        <p className="contact-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your next big game or cinematic experience.
        </p>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <AnimatedInput 
              id="name" 
              label="Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <AnimatedInput 
              id="email" 
              type="email"
              label="Email Address" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <AnimatedTextarea 
              id="message" 
              label="Message" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
