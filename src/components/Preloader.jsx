import React, { useState, useEffect } from 'react';
import TextScramble from './TextScramble';
import './Preloader.css';

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 1. Initial State
    const t1 = setTimeout(() => setStep(1), 800);
    // 2. Compiling State
    const t2 = setTimeout(() => setStep(2), 1600);
    // 3. Fade Out sequence
    const t3 = setTimeout(() => setComplete(true), 2500);
    // 4. Safely Unmount from DOM completely
    const t4 = setTimeout(() => setUnmount(true), 3300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (unmount) return null;

  return (
    <div className={`preloader ${complete ? 'fade-out' : ''}`}>
      <div style={{ height: '24px', display: 'flex', alignItems: 'center' }}>
        {step === 0 && (
          <TextScramble as="span" className="preloader-text" duration={0.6} speed={0.03} characterSet="01">
            INITIALIZING ENGINE
          </TextScramble>
        )}
        {step === 1 && (
          <TextScramble as="span" className="preloader-text" duration={0.6} speed={0.03} characterSet="01">
            COMPILING SHADERS
          </TextScramble>
        )}
        {step === 2 && (
          <TextScramble as="span" className="preloader-text" style={{ color: '#ffffff', fontWeight: '600' }} duration={0.8} speed={0.02} characterSet="XQKWZPBRTM">
            VIGNESH SAI
          </TextScramble>
        )}
      </div>
      <div className="preloader-loader"></div>
    </div>
  );
}

export default Preloader;
