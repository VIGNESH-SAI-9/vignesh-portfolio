import React, { useRef, useEffect } from 'react';
import './WaveDivider.css';

export function WaveDivider({ className = '' }) {
  const pathRef = useRef(null);
  const state = useRef({
    progress: 0,
    x: 0.5,
    time: Math.PI / 2,
    reqId: null,
  });

  const getWidth = () => window.innerWidth * 0.7;

  const setPath = (progress) => {
    const width = getWidth();
    if (pathRef.current) {
      pathRef.current.setAttributeNS(
        null,
        'd',
        `M0 100 Q${width * state.current.x} ${100 + progress * 0.6}, ${width} 100`
      );
    }
  };

  useEffect(() => {
    setPath(0);
  }, []);

  const lerp = (a, b, t) => a * (1 - t) + b * t;

  const handleMouseEnter = () => {
    const s = state.current;
    if (s.reqId) {
      cancelAnimationFrame(s.reqId);
      s.time = Math.PI / 2;
      s.progress = 0;
    }
  };

  const handleMouseMove = (e) => {
    const s = state.current;
    const { movementY, clientX } = e;
    if (pathRef.current) {
      const bound = pathRef.current.getBoundingClientRect();
      s.x = (clientX - bound.left) / bound.width;
      s.progress += movementY;
      setPath(s.progress);
    }
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const s = state.current;
    const newProgress = s.progress * Math.sin(s.time);
    s.progress = lerp(s.progress, 0, 0.025);
    s.time += 0.2;
    setPath(newProgress);
    if (Math.abs(s.progress) > 0.75) {
      s.reqId = requestAnimationFrame(animateOut);
    } else {
      s.time = Math.PI / 2;
      s.progress = 0;
    }
  };

  return (
    <div className={`wave-divider-wrapper ${className}`}>
      <div
        className="wave-divider-hitbox"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <svg className="wave-divider-svg">
        <path
          ref={pathRef}
          className="wave-divider-path"
          strokeWidth={1.5}
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
