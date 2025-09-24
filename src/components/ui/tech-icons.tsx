import React from 'react';
import { cn } from '@/lib/utils';
import { siInvision, siSketch, siFigma, siReact, siNextdotjs, siJavascript, siVercel, siGithub, siJira, siTrello, siNetlify } from 'simple-icons';

interface TechIconProps {
  className?: string;
  size?: number;
}

export const InVisionIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={siInvision?.hex ? `#${siInvision.hex}` : '#FF3366'}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path d={siInvision?.path || ''} />
  </svg>
);

export const SketchIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-[#F7B500] dark:text-[#F7B500] text-[#E67E22]", className)}
  >
    <path d={siSketch?.path || ''} />
  </svg>
);

export const FigmaIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-[#F24E1E] dark:text-[#F24E1E] text-[#C0392B]", className)}
  >
    <path d={siFigma?.path || ''} />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-[#61DAFB] dark:text-[#61DAFB] text-[#4A9CD1]", className)}
  >
    <path d={siReact?.path || ''} />
  </svg>
);

export const NextJSIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-white dark:text-white text-black", className)}
  >
    <path d={siNextdotjs?.path || ''} />
  </svg>
);

export const JavaScriptIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-yellow-500 dark:text-yellow-500 text-[#B7950B]", className)}
  >
    <path d={siJavascript?.path || ''} />
  </svg>
);

export const VercelIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path d={siVercel?.path || ''} />
  </svg>
);

export const GitHubIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-white dark:text-white text-black", className)}
  >
    <path d={siGithub?.path || ''} />
  </svg>
);

export const JiraIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={siJira?.hex ? `#${siJira.hex}` : '#0052CC'}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path d={siJira?.path || ''} />
  </svg>
);

export const TrelloIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={siTrello?.hex ? `#${siTrello.hex}` : '#0052CC'}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path d={siTrello?.path || ''} />
  </svg>
);

export const NetlifyIcon: React.FC<TechIconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={siNetlify?.hex ? `#${siNetlify.hex}` : '#00C7B7'}
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path d={siNetlify?.path || ''} />
  </svg>
);