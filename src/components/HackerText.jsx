import React, { useState, useEffect, useRef, useCallback } from 'react';

const HackerText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>/[]{}";

  const animate = useCallback(() => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    animate();
    return () => clearInterval(intervalRef.current);
  }, [animate]);

  return (
    <span 
      className={`font-mono cursor-default inline-block ${className}`}
      onMouseEnter={animate}
    >
      {displayText}
    </span>
  );
};

export default HackerText;
