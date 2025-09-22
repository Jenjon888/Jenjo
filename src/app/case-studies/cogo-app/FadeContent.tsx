'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  initialOpacity?: number;
}

export default function FadeContent({ 
  children, 
  blur = false, 
  duration = 1000, 
  easing = "ease-out", 
  initialOpacity = 0 
}: FadeContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state
    gsap.set(container, {
      opacity: initialOpacity,
      filter: blur ? 'blur(10px)' : 'none',
      y: 20
    });

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(container, {
              opacity: 1,
              filter: 'none',
              y: 0,
              duration: duration / 1000,
              ease: easing
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [blur, duration, easing, initialOpacity]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}





