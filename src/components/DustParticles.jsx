import React, { useMemo } from 'react';
import './DustParticles.css';

const DustParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1px to 4px
      const opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        bottom: `${-10 - Math.random() * 20}%`, // Start below the screen
        animationDuration: `${Math.random() * 15 + 15}s`, // 15s to 30s
        animationDelay: `${Math.random() * -30}s`, // Negative delay so some start on screen immediately
        size: `${size}px`,
        opacity: opacity,
        xDrift: `${(Math.random() - 0.5) * 100}px` // Drift left or right up to 50px
      };
    });
  }, []);

  return (
    <div className="dust-particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            '--x-drift': p.xDrift,
            '--base-opacity': p.opacity
          }}
        />
      ))}
    </div>
  );
};

export default DustParticles;
