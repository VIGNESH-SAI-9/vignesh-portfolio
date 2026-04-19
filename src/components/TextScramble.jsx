import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  delay = 0,
  characterSet = defaultChars,
  className,
  as = 'h1',
  trigger = true,
  onScrambleComplete,
  ...props
}) {
  const MotionComponent = motion.create ? motion.create(as) : motion(as);
  
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  const getThreshold = (i, length) => {
    return (i + 1) / length;
  };

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        const threshold = getThreshold(i, text.length);

        if (progress >= threshold) {
          scrambled += text[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        if (onScrambleComplete) {
          onScrambleComplete();
        }
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger) return;
    let timeoutId;
    if (delay > 0) {
      timeoutId = setTimeout(() => {
        scramble();
      }, delay * 1000);
    } else {
      scramble();
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [trigger, delay]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
export default TextScramble;
