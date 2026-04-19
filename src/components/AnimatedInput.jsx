import React, { useState } from "react";
import { motion } from "motion/react";
import "./AnimatedInput.css";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    y: 0,
    color: "inherit",
  },
  animate: {
    y: "-120%",
    color: "rgba(255, 255, 255, 0.4)", // cinematic zinc-500 equivalent
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const AnimatedInput = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || (value && value.length > 0);

  return (
    <div className="animated-input-wrapper">
      <motion.div
        className="animated-label"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="animated-character"
            variants={letterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className="animated-input-element"
      />
    </div>
  );
};
