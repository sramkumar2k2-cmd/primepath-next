// components/MouseEffects/MouseEffects.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './MouseEffects.module.css';

const MouseEffects = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const trailRef = useRef([]);

  useEffect(() => {
    setIsMounted(true);
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
  }, []);

  const createTrail = (x, y) => {
    if (isTouch) return;
    
    const trail = document.createElement('div');
    trail.className = styles.cursorTrail;
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);
    
    trailRef.current.push(trail);
    
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
      trailRef.current = trailRef.current.filter(t => t !== trail);
    }, 600);
  };

  useEffect(() => {
    return () => {
      trailRef.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isTouch || !isMounted) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let trailTimer = null;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      mouseX = clientX;
      mouseY = clientY;
      
      if (!trailTimer) {
        trailTimer = setTimeout(() => {
          createTrail(mouseX, mouseY);
          trailTimer = null;
        }, 20);
      }
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
      
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    
    const handleMouseOver = (e) => {
      if (e.target.matches('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.matches('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (trailTimer) clearTimeout(trailTimer);
    };
  }, [isTouch, isMounted]);

  // Don't render anything until component is mounted on client
  if (!isMounted || isTouch) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isClicked ? styles.click : ''} ${isHovering ? styles.hover : ''}`}
      ></div>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isClicked ? styles.click : ''} ${isHovering ? styles.hover : ''}`}
      ></div>
    </>
  );
};

export default MouseEffects;