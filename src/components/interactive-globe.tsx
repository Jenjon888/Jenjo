'use client';

import { useEffect, useRef } from 'react';
import cobe from 'cobe';

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = cobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.5, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Add some sample markers for visual interest
        { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.03 }, // New York
        { location: [51.5074, -0.1278], size: 0.03 }, // London
        { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
      <canvas
        ref={canvasRef}
        className="object-contain"
        style={{ 
          width: '600px', 
          height: '600px',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
    </div>
  );
}
