import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    // Use refs to store mutable values to avoid closure staleness without re-running effect
    const position = {
      mouseX: 0,
      mouseY: 0,
      followerX: 0,
      followerY: 0
    };
    
    let animationFrameId;

    const onMouseMove = (e) => {
      position.mouseX = e.clientX;
      position.mouseY = e.clientY;

      // Update main cursor instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.mouseX}px, ${position.mouseY}px, 0)`;
      }

      // Check hover state
      const target = e.target;
      // We check if the target is interactive
      const isLink = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover');
        
      setIsHovering(!!isLink);
    };

    const loop = () => {
      // Smooth follow for the larger circle
      // Lerp factor 0.15
      position.followerX += (position.mouseX - position.followerX) * 0.15;
      position.followerY += (position.mouseY - position.followerY) * 0.15;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${position.followerX}px, ${position.followerY}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array to run once

  // Don't render on touch devices
  // We use a CSS media query check in render to avoid hydration mismatch if SSR (though this is SPA)
  // But also checking here prevents React from maintaining state for touch users
  
  return (
    <>
      {/* Main dot - follows instantly */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
      />
      
      {/* Trailing circle - follows smoothly */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hidden md:block will-change-transform ${
          isHovering ? 'scale-[2.5] bg-cyan-500/10 border-cyan-400 mix-blend-screen' : 'scale-100 bg-transparent'
        }`}
      />
    </>
  );
};

export default CustomCursor;
