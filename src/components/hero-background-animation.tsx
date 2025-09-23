'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '@/contexts/ThemeContext';

export function HeroBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear existing waves
    container.innerHTML = '';
    const waves: HTMLDivElement[] = [];

    // Create gradient waves
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'absolute w-full h-full';
      
      // Create gradient background based on theme
      const isDark = theme === 'dark';
      console.log('Theme:', theme, 'isDark:', isDark); // Debug log
      
      const gradient = isDark 
        ? `radial-gradient(ellipse at ${50 + i * 20}% ${30 + i * 20}%, 
            rgba(0, 255, 255, ${0.15 + i * 0.05}) 0%, 
            rgba(138, 43, 226, ${0.12 + i * 0.03}) 30%, 
            rgba(255, 20, 147, ${0.08 + i * 0.02}) 60%, 
            transparent 100%)`
        : `radial-gradient(ellipse at ${50 + i * 20}% ${30 + i * 20}%, 
            rgba(30, 58, 138, ${0.08 + i * 0.03}) 0%, 
            rgba(88, 28, 135, ${0.06 + i * 0.02}) 30%, 
            rgba(180, 83, 9, ${0.05 + i * 0.015}) 60%, 
            transparent 100%)`;
      
      wave.style.background = gradient;
      wave.style.borderRadius = '50%';
      wave.style.filter = 'blur(40px)';
      
      container.appendChild(wave);
      waves.push(wave);
    }

    // Animate waves
    waves.forEach((wave, index) => {
      const duration = 8 + index * 2; // 8-12 seconds
      const delay = index * 1;
      
      gsap.set(wave, {
        scale: 0.5,
        opacity: 0,
        rotation: 0,
      });

      // Entrance animation
      gsap.to(wave, {
        scale: 1,
        opacity: 1,
        duration: 2,
        delay: delay,
        ease: "power2.out"
      });

      // Floating wave animation
      gsap.to(wave, {
        x: 100 - index * 50,
        y: -50 + index * 30,
        rotation: 180 + index * 90,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true,
      });

      // Breathing animation
      gsap.to(wave, {
        scale: 1.2 + index * 0.1,
        opacity: 0.6 + index * 0.15,
        duration: 4 + index,
        delay: delay,
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true,
      });
    });

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
