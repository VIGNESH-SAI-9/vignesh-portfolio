import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOnImage, setIsOnImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive =
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null;

      setIsHovering(isInteractive);

      // Disable blend mode when hovering over images
      const onImage = e.target.tagName.toLowerCase() === 'img';
      setIsOnImage(onImage);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* The tiny leading dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          mixBlendMode: isOnImage ? 'normal' : 'difference',
          backgroundColor: isOnImage ? 'rgba(255,255,255,0.5)' : '#ffffff',
        }}
      ></div>

      {/* The blend-mode expanding ring */}
      <div
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          mixBlendMode: isOnImage ? 'normal' : 'difference',
          backgroundColor: isOnImage ? 'transparent' : '#ffffff',
          border: isOnImage ? '1px solid rgba(255,255,255,0.4)' : 'none',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
