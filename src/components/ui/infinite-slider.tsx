'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  // Convert speed to duration (higher speed = shorter duration)
  const duration = 100 / speed;
  const hoverDuration = speedOnHover ? 100 / speedOnHover : duration;

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        animate={{
          x: direction === 'horizontal' ? (reverse ? '100%' : '-100%') : 0,
          y: direction === 'vertical' ? (reverse ? '100%' : '-100%') : 0,
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        whileHover={speedOnHover ? {
          transition: {
            duration: hoverDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }
        } : undefined}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
