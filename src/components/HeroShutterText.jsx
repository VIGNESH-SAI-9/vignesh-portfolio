import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './HeroShutterText.css';

export default function HeroShutterText({ text = "VIGNESH SAI", className = "" }) {
  const characters = text.split("");

  return (
    <h1 className={`shutter-text-container ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div className="shutter-text-wrapper">
          {characters.map((char, i) => (
            <div key={i} className="shutter-char">
              {/* Main Character */}
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                className="shutter-main"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Top Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: "easeInOut" }}
                className="shutter-slice top-slice"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Middle Slice Layer */}
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "-100%", opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, delay: i * 0.04 + 0.1, ease: "easeInOut" }}
                className="shutter-slice middle-slice"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Bottom Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, delay: i * 0.04 + 0.2, ease: "easeInOut" }}
                className="shutter-slice bottom-slice"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </h1>
  );
}
