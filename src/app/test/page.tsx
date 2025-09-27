'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '@/contexts/ThemeContext'
import { BlackSlideLeftButton, BeamBorderButton } from '@/components/ui/slide-buttons'
import { 
  InVisionIcon,
  SketchIcon,
  FigmaIcon, 
  ReactIcon,
  NextJSIcon, 
  JavaScriptIcon,
  VercelIcon,
  GitHubIcon,
  JiraIcon, 
  TrelloIcon,
  NetlifyIcon
} from '@/components/ui/tech-icons'
// Spline integration temporarily disabled due to package issues
// import dynamic from 'next/dynamic'
// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false,
//   loading: () => <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
// })

gsap.registerPlugin(ScrollTrigger)

// BlobButton Component
const BlobButton = ({ 
  text = "View our Work", 
  onClick = () => {},
  className = "" 
}: {
  text?: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-3 pl-4 pr-2 py-2 font-medium text-black transition-all duration-300 ease-out hover:-translate-y-1 bg-[#c6ff4d] hover:bg-[#b2ff00] rounded-full ${className}`}
    >
      <span>{text}</span>
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <ArrowUpRight className="w-3 h-3 text-[#c6ff4d]" />
      </div>
    </button>
  );
};

// Slide Effect Button Components
const SlideLeftButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  variant = "primary",
  className = "" 
}: {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        backgroundColor: isPrimary ? '#000000' : 'transparent',
        color: isPrimary ? '#ffffff' : '#374151',
        border: isPrimary ? 'none' : '1px solid #6b7280'
      }}
    >
      {/* Slide left effect */}
      <div 
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundColor: isPrimary ? '#ffffff' : '#f97316',
          borderRadius: '9999px'
        }}
      />
      
      {/* Text content */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isPrimary ? '#ffffff' : '#374151'
        }}
      >
        {text}
      </span>
      
      {/* Hover text color change */}
      <style jsx>{`
        .group:hover span {
          color: ${isPrimary ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
    </Link>
  );
};

const SlideRightButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  variant = "primary",
  className = "" 
}: {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        backgroundColor: isPrimary ? '#000000' : 'transparent',
        color: isPrimary ? '#ffffff' : '#374151',
        border: isPrimary ? 'none' : '1px solid #6b7280'
      }}
    >
      {/* Slide right effect */}
      <div 
        className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundColor: isPrimary ? '#ffffff' : '#f97316',
          borderRadius: '9999px'
        }}
      />
      
      {/* Text content */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isPrimary ? '#ffffff' : '#374151'
        }}
      >
        {text}
      </span>
      
      {/* Hover text color change */}
      <style jsx>{`
        .group:hover span {
          color: ${isPrimary ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
    </Link>
  );
};

const SlideUpButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  variant = "primary",
  className = "" 
}: {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        backgroundColor: isPrimary ? '#000000' : 'transparent',
        color: isPrimary ? '#ffffff' : '#374151',
        border: isPrimary ? 'none' : '1px solid #6b7280'
      }}
    >
      {/* Slide up effect */}
      <div 
        className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundColor: isPrimary ? '#ffffff' : '#f97316',
          borderRadius: '9999px'
        }}
      />
      
      {/* Text content */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isPrimary ? '#ffffff' : '#374151'
        }}
      >
        {text}
      </span>
      
      {/* Hover text color change */}
      <style jsx>{`
        .group:hover span {
          color: ${isPrimary ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
    </Link>
  );
};

const SlideDownButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  variant = "primary",
  className = "" 
}: {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        backgroundColor: isPrimary ? '#000000' : 'transparent',
        color: isPrimary ? '#ffffff' : '#374151',
        border: isPrimary ? 'none' : '1px solid #6b7280'
      }}
    >
      {/* Slide down effect */}
      <div 
        className="absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundColor: isPrimary ? '#ffffff' : '#f97316',
          borderRadius: '9999px'
        }}
      />
      
      {/* Text content */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isPrimary ? '#ffffff' : '#374151'
        }}
      >
        {text}
      </span>
      
      {/* Hover text color change */}
      <style jsx>{`
        .group:hover span {
          color: ${isPrimary ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
    </Link>
  );
};

const SlideCenterButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  variant = "primary",
  className = "" 
}: {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const isPrimary = variant === "primary";
  
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        backgroundColor: isPrimary ? '#000000' : 'transparent',
        color: isPrimary ? '#ffffff' : '#374151',
        border: isPrimary ? 'none' : '1px solid #6b7280'
      }}
    >
      {/* Slide center effect */}
      <div 
        className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"
        style={{ 
          backgroundColor: isPrimary ? '#ffffff' : '#f97316',
          borderRadius: '9999px'
        }}
      />
      
      {/* Text content */}
      <span 
        className="relative z-10 transition-colors duration-300"
        style={{ 
          color: isPrimary ? '#ffffff' : '#374151'
        }}
      >
        {text}
      </span>
      
      {/* Hover text color change */}
      <style jsx>{`
        .group:hover span {
          color: ${isPrimary ? '#000000' : '#ffffff'} !important;
        }
      `}</style>
    </Link>
  );
};

// White Background Slide Effect Buttons
const WhiteSlideLeftButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-white text-black border border-gray-200 ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide left effect */}
      <div 
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

const WhiteSlideRightButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-white text-black border border-gray-200 ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide right effect */}
      <div 
        className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

const WhiteSlideUpButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-white text-black border border-gray-200 ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide up effect */}
      <div 
        className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

const WhiteSlideDownButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-white text-black border border-gray-200 ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide down effect */}
      <div 
        className="absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

const WhiteSlideCenterButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-white text-black border border-gray-200 ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide center effect */}
      <div 
        className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center bg-black"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};


const BlackSlideRightButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black text-white ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide right effect */}
      <div 
        className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black">
        {text}
      </span>
    </Link>
  );
};

const BlackSlideUpButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black text-white ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide up effect */}
      <div 
        className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black">
        {text}
      </span>
    </Link>
  );
};

const BlackSlideDownButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black text-white ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide down effect */}
      <div 
        className="absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black">
        {text}
      </span>
    </Link>
  );
};

const BlackSlideCenterButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black text-white ${className}`}
      style={{ 
        borderRadius: '9999px',
        WebkitBorderRadius: '9999px',
        MozBorderRadius: '9999px',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    >
      {/* Slide center effect */}
      <div 
        className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center bg-white"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black">
        {text}
      </span>
    </Link>
  );
};


export default function TestPage() {
  const { theme, toggleTheme } = useTheme()
  
  // Theme transition state
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentTransition, setCurrentTransition] = useState<string>('fade')
  const [previousTheme, setPreviousTheme] = useState(theme)
  
  // Refs for theme transition elements
  const transitionOverlayRef = useRef<HTMLDivElement>(null)
  const pageContentRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  
  // Refs for CTA buttons
  const ctaButtonsRef1 = useRef<HTMLDivElement>(null)
  const ctaButtonsRef2 = useRef<HTMLDivElement>(null)
  const ctaButtonsRef3 = useRef<HTMLDivElement>(null)

  // Initialize scroll-triggered effects
  useEffect(() => {
    // Parallax slide effect
    const parallaxContainer = document.querySelector('.parallax-slide-container')
    const parallaxBg = document.querySelector('.parallax-slide-bg')

    if (parallaxContainer && parallaxBg) {
      gsap.fromTo(parallaxBg, 
        { 
          scale: 1.2,
          y: -50
        },
        {
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: parallaxContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      )
    }

    // Image overlay effects
    // Vertical overlay effect
    const overlayContainer = document.querySelector('.image-overlay-container')
    const overlayTop = document.querySelector('.image-overlay-top')

    if (overlayContainer && overlayTop) {
      // Set initial state for the overlay image
      gsap.set(overlayTop, { 
        clipPath: "inset(0% 0% 100% 0%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(overlayTop, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Horizontal overlay effect
    const horizontalContainer = document.querySelector('.image-overlay-horizontal-container')
    const horizontalTop = document.querySelector('.image-overlay-horizontal-top')

    if (horizontalContainer && horizontalTop) {
      // Set initial state for the overlay image
      gsap.set(horizontalTop, { 
        clipPath: "inset(0% 100% 0% 0%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(horizontalTop, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: horizontalContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Diagonal overlay effect
    const diagonalContainer = document.querySelector('.image-overlay-diagonal-container')
    const diagonalTop = document.querySelector('.image-overlay-diagonal-top')

    if (diagonalContainer && diagonalTop) {
      // Set initial state for the overlay image
      gsap.set(diagonalTop, { 
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(diagonalTop, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: diagonalContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Circle reveal overlay effect
    const circleContainer = document.querySelector('.image-overlay-circle-container')
    const circleTop = document.querySelector('.image-overlay-circle-top')

    if (circleContainer && circleTop) {
      // Set initial state for the overlay image
      gsap.set(circleTop, { 
        clipPath: "circle(0% at 50% 50%)" 
      })

      // Animate the overlay image as user scrolls
      gsap.to(circleTop, {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circleContainer,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      })
    }

    // Auto image effect - 3 image sequence
    const autoContainer = document.querySelector('.auto-image-container')
    const autoImage1 = document.querySelector('.auto-image-1')
    const autoImage2 = document.querySelector('.auto-image-2')
    const autoImage3 = document.querySelector('.auto-image-3')

    if (autoContainer && autoImage1 && autoImage2 && autoImage3) {
      // Set initial states - all images start hidden
      gsap.set(autoImage1, { 
        clipPath: "inset(0% 0% 0% 0%)" // Image 1 visible initially
      })
      gsap.set(autoImage2, { 
        clipPath: "inset(100% 0% 0% 0%)" // Hidden at top
      })
      gsap.set(autoImage3, { 
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" // Hidden as center line
      })

      // Create timeline for auto sequence
      const autoTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (slide down) → Image 3 (circle reveal) → Image 1 (diagonal reveal)
      autoTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (slide down)
        .to(autoImage2, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (split reveal outward)
        .to(autoImage2, {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(autoImage3, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        }, "<")
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 1 (diagonal reveal from top-left)
        .to(autoImage1, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power2.inOut"
        })
        
        // Reset for next cycle - prepare for smooth loop
        .set(autoImage1, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }) // Hide image 1 diagonally
        .set(autoImage2, { clipPath: "inset(100% 0% 0% 0%)" })
        .set(autoImage3, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" })
    }

    // Auto image effect - blur transitions
    const blurContainer = document.querySelector('.blur-image-container')
    const blurImage1 = document.querySelector('.blur-image-1')
    const blurImage2 = document.querySelector('.blur-image-2')
    const blurImage3 = document.querySelector('.blur-image-3')

    if (blurContainer && blurImage1 && blurImage2 && blurImage3) {
      // Set initial states - all images start with different blur levels
      gsap.set(blurImage1, { 
        filter: "blur(0px)",
        opacity: 1
      })
      gsap.set(blurImage2, { 
        filter: "blur(20px)",
        opacity: 0
      })
      gsap.set(blurImage3, { 
        filter: "blur(20px)",
        opacity: 0
      })

      // Create timeline for blur sequence
      const blurTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (blur transition) → Image 3 (blur transition) → Image 1 (blur transition)
      blurTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (blur out image 1, blur in image 2)
        .to(blurImage1, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage2, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (blur out image 2, blur in image 3)
        .to(blurImage2, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage3, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 1 (blur out image 3, blur in image 1)
        .to(blurImage3, {
          filter: "blur(20px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(blurImage1, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Reset for next cycle
        .set(blurImage2, { filter: "blur(20px)", opacity: 0 })
        .set(blurImage3, { filter: "blur(20px)", opacity: 0 })
    }

    // Auto image effect - combined clip-path & blur
    const combinedContainer = document.querySelector('.combined-image-container')
    const combinedImage1 = document.querySelector('.combined-image-1')
    const combinedImage2 = document.querySelector('.combined-image-2')
    const combinedImage3 = document.querySelector('.combined-image-3')
    const combinedImage4 = document.querySelector('.combined-image-4')

    if (combinedContainer && combinedImage1 && combinedImage2 && combinedImage3 && combinedImage4) {
      // Set initial states - combine clip-path and blur effects
      gsap.set(combinedImage1, { 
        clipPath: "inset(0% 0% 0% 0%)",
        filter: "blur(0px)",
        opacity: 1
      })
      gsap.set(combinedImage2, { 
        clipPath: "inset(100% 0% 0% 0%)", // Hidden at top
        filter: "blur(15px)",
        opacity: 0
      })
      gsap.set(combinedImage3, { 
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", // Hidden as center line
        filter: "blur(15px)",
        opacity: 0
      })
      gsap.set(combinedImage4, { 
        clipPath: "inset(100% 0% 0% 0%)", // Hidden at top
        filter: "blur(15px)",
        opacity: 0
      })

      // Create timeline for combined sequence
      const combinedTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 1 // 1 second pause between cycles
      })

      // Sequence: Image 1 → Image 2 (slide down + blur) → Image 3 (slide up + blur) → Image 4 (slide down + blur) → Image 1 (slide up + blur)
      combinedTimeline
        // Show image 1 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 1: Image 1 to Image 2 (slide down + blur transition)
        .to(combinedImage1, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage2, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 2 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 2: Image 2 to Image 3 (split reveal + blur transition)
        .to(combinedImage2, {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage3, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 3 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 3: Image 3 to Image 4 (slide down + blur transition)
        .to(combinedImage3, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage4, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Show image 4 for 2 seconds
        .to({}, { duration: 2 })
        
        // Transition 4: Image 4 to Image 1 (slide up + blur transition)
        .to(combinedImage4, {
          filter: "blur(15px)",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut"
        })
        .to(combinedImage1, {
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }, "<") // Start at the same time as previous animation
        
        // Reset for next cycle - prepare for smooth loop
        .set(combinedImage2, { clipPath: "inset(100% 0% 0% 0%)", filter: "blur(15px)", opacity: 0 })
        .set(combinedImage3, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", filter: "blur(15px)", opacity: 0 })
        .set(combinedImage4, { clipPath: "inset(100% 0% 0% 0%)", filter: "blur(15px)", opacity: 0 })
    }

    // Auto image effect - 15 image showcase with mixed transitions
    const showcaseContainer = document.querySelector('.showcase-image-container')
    const showcaseImages = document.querySelectorAll('[class*="showcase-image-"]')

    console.log('Showcase container found:', !!showcaseContainer)
    console.log('Showcase images found:', showcaseImages.length)

    if (showcaseContainer && showcaseImages.length >= 15) {
      // Set initial states - all images hidden except the first
      showcaseImages.forEach((img, index) => {
        if (index === 0) {
          gsap.set(img, { 
            opacity: 1,
            zIndex: 15
          })
        } else {
          gsap.set(img, { 
            opacity: 0,
            zIndex: index
          })
        }
      })

      // Create timeline for showcase sequence with mixed transitions
      const showcaseTimeline = gsap.timeline({ 
        repeat: -1, // Infinite loop
        repeatDelay: 0.5 // Short pause between cycles
      })

      // Define transition types for variety
      const transitions = ['slideDown', 'slideUp', 'split', 'circle', 'diagonal']

      // Create sequence for all 15 images
      for (let i = 0; i < 15; i++) {
        const currentImg = showcaseImages[i]
        const nextImg = showcaseImages[(i + 1) % 15]
        const transitionType = transitions[i % transitions.length]

        // Show current image for 1.5 seconds
        showcaseTimeline.to({}, { duration: 1.5 })

        // Transition to next image based on type
        if (transitionType === 'slideDown') {
          gsap.set(nextImg, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "inset(0% 0% 100% 0%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'slideUp') {
          gsap.set(nextImg, { clipPath: "inset(0% 0% 100% 0%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "inset(100% 0% 0% 0%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'split') {
          gsap.set(nextImg, { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'circle') {
          gsap.set(nextImg, { clipPath: "circle(0% at 50% 50%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "circle(0% at 50% 50%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "circle(100% at 50% 50%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        } else if (transitionType === 'diagonal') {
          gsap.set(nextImg, { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 1, zIndex: 16 })
          showcaseTimeline
            .to(currentImg, {
              clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            })
            .to(nextImg, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.2,
              ease: "power2.inOut"
            }, "<")
        }
      }

      // Reset all images for next cycle
      showcaseTimeline.set(showcaseImages[0], { opacity: 1, zIndex: 15 })
      showcaseImages.forEach((img, index) => {
        if (index !== 0) {
          gsap.set(img, { opacity: 0, zIndex: index })
        }
      })
    }

    // CTA Buttons Fade In Effects
    if (ctaButtonsRef1.current) {
      gsap.set(ctaButtonsRef1.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(ctaButtonsRef1.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButtonsRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    if (ctaButtonsRef2.current) {
      gsap.set(ctaButtonsRef2.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(ctaButtonsRef2.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButtonsRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    if (ctaButtonsRef3.current) {
      gsap.set(ctaButtonsRef3.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(ctaButtonsRef3.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaButtonsRef3.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Theme transition functions
  const transitionEffects = {
    fade: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        opacity: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { opacity: 0, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { opacity: 1, duration: 0.2, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .to(content, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    swipe: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        x: '-100%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { x: '-100%', duration: 0.4, ease: "power2.inOut" })
      .to(overlay, { x: '0%', duration: 0.3, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
        gsap.set(content, { x: '100%' })
      })
      .to(overlay, { x: '100%', duration: 0.3, ease: "power2.out" })
      .to(content, { x: '0%', duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    circle: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scale: 0.8, opacity: 0.7, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scale: 0, duration: 0.4, ease: "power2.inOut" })
      .to(content, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    ripple: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scale: 0.95, duration: 0.2, ease: "power2.out" })
      .to(overlay, { scale: 3, opacity: 0.8, duration: 0.6, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scale: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" })
      .to(content, { scale: 1, duration: 0.3, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    particles: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current || !particlesRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      const particles = particlesRef.current
      
      // Create particle elements
      const particleCount = 20
      particles.innerHTML = ''
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'absolute w-2 h-2 rounded-full'
        particle.style.backgroundColor = theme === 'dark' ? '#ffffff' : '#000000'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particles.appendChild(particle)
      }
      
      gsap.set(overlay, { 
        opacity: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { opacity: 0.3, duration: 0.2, ease: "power2.out" })
      .to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to(particles.children, { 
        scale: 0, 
        rotation: 360, 
        duration: 0.8, 
        ease: "power2.out",
        stagger: 0.05
      })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .to(content, { opacity: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    morph: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scale: 0,
        borderRadius: '0%',
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { 
        scale: 0.9, 
        rotation: 5, 
        duration: 0.3, 
        ease: "power2.inOut" 
      })
      .to(overlay, { 
        scale: 1, 
        borderRadius: '50%', 
        duration: 0.5, 
        ease: "back.out(1.7)" 
      })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { 
        scale: 0, 
        borderRadius: '0%', 
        duration: 0.4, 
        ease: "power2.inOut" 
      })
      .to(content, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      })
      .call(() => setIsTransitioning(false))
    },

    curtain: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        scaleY: 0,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { scaleY: 0.8, duration: 0.3, ease: "power2.inOut" })
      .to(overlay, { scaleY: 1, duration: 0.4, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
      })
      .to(overlay, { scaleY: 0, duration: 0.3, ease: "power2.inOut" })
      .to(content, { scaleY: 1, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    },

    flip3d: () => {
      if (!transitionOverlayRef.current || !pageContentRef.current) return
      
      const overlay = transitionOverlayRef.current
      const content = pageContentRef.current
      
      gsap.set(overlay, { 
        rotationY: 90,
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff'
      })
      
      const tl = gsap.timeline()
      tl.to(content, { rotationY: 90, duration: 0.4, ease: "power2.inOut" })
      .to(overlay, { rotationY: 0, duration: 0.3, ease: "power2.out" })
      .call(() => {
        toggleTheme()
        setPreviousTheme(theme)
        gsap.set(content, { rotationY: -90 })
      })
      .to(overlay, { rotationY: -90, duration: 0.3, ease: "power2.out" })
      .to(content, { rotationY: 0, duration: 0.4, ease: "power2.out" })
      .call(() => setIsTransitioning(false))
    }
  }

  const handleThemeToggle = (transitionType: string) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentTransition(transitionType)
    
    const effect = transitionEffects[transitionType as keyof typeof transitionEffects]
    if (effect) {
      effect()
    }
  }

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Theme Transition Overlay */}
      <div 
        ref={transitionOverlayRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ 
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      />
      
      {/* Particles Container */}
      <div 
        ref={particlesRef}
        className="fixed inset-0 z-40 pointer-events-none"
      />
      
      <Navigation />
      
      {/* 3D Hero Section - CSS Animation Demo */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Animated background with CSS */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(119,198,255,0.2),transparent_50%)] animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400/20 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-400/20 rounded-lg animate-bounce" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CSS Animation Demo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Beautiful animated background with floating shapes - ready for Spline integration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Explore Projects
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* CTA Buttons Section 1 - After Hero */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={ctaButtonsRef1} className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: 0, transform: "translateY(30px)" }}>
            <BlackSlideLeftButton 
              text="Let's work together"
              href="/contact"
            />
            <BeamBorderButton 
              text="Schedule a call"
              href="https://calendly.com/jenjo700/30min"
            />
          </div>
        </div>
      </section>
      
      {/* Spline Examples Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">3D Integration Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Example 1: Portfolio Showcase */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Portfolio Showcase</h3>
              <div className="h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="text-center text-white z-10">
                  <p className="text-lg font-semibold mb-2">3D Device Mockups</p>
                  <p className="text-sm opacity-80">Floating phones, laptops, tablets</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Create floating 3D mockups of phones, laptops, and tablets showcasing your actual project interfaces.
              </p>
            </div>
            
            {/* Example 2: Skills Visualization */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Skills Visualization</h3>
              <div className="h-64 bg-gradient-to-br from-green-900 to-blue-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="text-center text-white z-10">
                  <p className="text-lg font-semibold mb-2">Interactive Tech Stack</p>
                  <p className="text-sm opacity-80">3D icons with hover effects</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Interactive 3D icons for each technology with hover effects showing proficiency levels.
              </p>
            </div>
          </div>
          
          {/* Code Example */}
          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Code Example</h3>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// Replace the CSS background with your Spline scene:
<Spline 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  onLoad={() => console.log('3D scene loaded!')}
  style={{ 
    width: '100%', 
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }}
/>`}</code>
            </pre>
          </div>
          
          {/* Implementation Guide */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">How to Create Your Own 3D Scenes</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <p className="font-semibold">Visit Spline.design</p>
                  <p className="text-gray-600 dark:text-gray-400">Create a free account and start building your 3D scene</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <p className="font-semibold">Design Your Scene</p>
                  <p className="text-gray-600 dark:text-gray-400">Add 3D models, materials, lighting, and animations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <p className="font-semibold">Export & Integrate</p>
                  <p className="text-gray-600 dark:text-gray-400">Get your scene URL and replace the placeholder in the code above</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Buttons Section 2 - After Showcase */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={ctaButtonsRef2} className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: 0, transform: "translateY(30px)" }}>
            <BlackSlideLeftButton 
              text="Let's work together"
              href="/contact"
            />
            <BeamBorderButton 
              text="Schedule a call"
              href="https://calendly.com/jenjo700/30min"
            />
          </div>
        </div>
      </section>
      
      {/* Back Button */}
      <div className="px-8 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Homepage
        </Link>
      </div>

      {/* Theme Transition Controls */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🎨 Creative Theme Transitions</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Click any button below to see amazing theme switching effects!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => handleThemeToggle('fade')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                ✨ Fade
              </button>
              
              <button
                onClick={() => handleThemeToggle('swipe')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🌊 Swipe
              </button>
              
              <button
                onClick={() => handleThemeToggle('circle')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                ⭕ Circle
              </button>
              
              <button
                onClick={() => handleThemeToggle('ripple')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                💫 Ripple
              </button>
              
              <button
                onClick={() => handleThemeToggle('particles')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🎆 Particles
              </button>
              
              <button
                onClick={() => handleThemeToggle('morph')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🔄 Morph
              </button>
              
              <button
                onClick={() => handleThemeToggle('curtain')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🎭 Curtain
              </button>
              
              <button
                onClick={() => handleThemeToggle('flip3d')}
                disabled={isTransitioning}
                className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium transform"
              >
                🔄 3D Flip
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Current theme: <span className="font-semibold">{theme}</span> | 
                Transition: <span className="font-semibold">{currentTransition}</span>
                {isTransitioning && <span className="ml-2 text-orange-500">⏳ Transitioning...</span>}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BlobButton Component Showcase */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🟢 BlobButton Component</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              A reusable React component that matches the organic blob design from the screenshot
            </p>
            
            <div className="flex flex-col items-center space-y-8">
              {/* Default BlobButton */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Default BlobButton</h3>
                <BlobButton />
              </div>
              
              {/* Custom Text BlobButton */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Custom Text</h3>
                <BlobButton text="Start a Project" />
              </div>
              
              {/* Multiple BlobButtons */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">Multiple Buttons</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <BlobButton text="View our Work" />
                  <BlobButton text="Get in Touch" />
                  <BlobButton text="See Portfolio" />
                </div>
              </div>
              
              {/* With Click Handler */}
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">With Click Handler</h3>
                <BlobButton 
                  text="Click Me!" 
                  onClick={() => alert('BlobButton clicked!')} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Availability Badge - Exact Copy from About Page */}
            <div className="flex justify-center px-4 pt-8 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                <div className="flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full w-full sm:w-auto">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm font-medium">Open to new opportunities</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">London-based, open to remote</span>
              </div>
            </div>

            {/* CTA Button Testing Section */}
            <div className="px-8 py-4">
              <div className="max-w-6xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-center">🎯 CTA Button Style Tests</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    Different button styles for the hero section - test which ones work best!
                  </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Original Lime Green */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Lime Green</h4>
                <BlobButton />
              </div>

              {/* Orange */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Orange</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-orange-500 hover:bg-orange-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-orange-500" />
                  </div>
                </button>
              </div>

              {/* Blue */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Blue</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-blue-500 hover:bg-blue-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-blue-500" />
                  </div>
                </button>
              </div>

              {/* Deep Yellow */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Deep Yellow</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-black transition-all duration-300 ease-out hover:-translate-y-1 bg-yellow-400 hover:bg-yellow-500 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-yellow-400" />
                  </div>
                </button>
              </div>

              {/* Burnt Orange */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Burnt Orange</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-orange-700 hover:bg-orange-800 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-orange-700" />
                  </div>
                </button>
              </div>

              {/* Purple */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Purple</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-purple-500 hover:bg-purple-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-purple-500" />
                  </div>
                </button>
              </div>

              {/* Teal */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Teal</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-teal-500 hover:bg-teal-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-teal-500" />
                  </div>
                </button>
              </div>

              {/* Red */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Red</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-red-500 hover:bg-red-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-red-500" />
                  </div>
                </button>
              </div>

              {/* Pink */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Pink</h4>
                <button
                  className="relative inline-flex items-center gap-3 px-4 py-2 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 bg-pink-500 hover:bg-pink-600 rounded-full"
                >
                  <span>View our Work</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-pink-500" />
                  </div>
                </button>
              </div>


              {/* Test 10: Icon Circle Changes to White */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Test 10: Icon Circle → White</h4>
                <button
                  className="relative inline-flex items-center gap-3 pl-4 pr-2 py-2 font-medium text-black transition-all duration-300 ease-out overflow-hidden group active:scale-95"
                  style={{ 
                    backgroundColor: '#ff8c00',
                    borderRadius: '9999px',
                    WebkitBorderRadius: '9999px',
                    MozBorderRadius: '9999px',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  } as React.CSSProperties}
                >
                  <span className="relative z-10">View our Work</span>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ borderRadius: '9999px' }}></div>
                  <div className="relative z-10 w-6 h-6 bg-black rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                    <ArrowUpRight className="w-3 h-3 transition-colors duration-300 group-hover:text-black" style={{ color: '#ff8c00' }} />
                  </div>
                </button>
              </div>

              {/* Test 2: Keep Black Circle - Icon → Yellow */}
              <div className="flex flex-col items-center space-y-2">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Test 2: Keep Black Circle - Icon → Yellow</h4>
                <button
                  className="relative inline-flex items-center gap-3 pl-4 pr-2 py-2 font-medium text-black transition-all duration-300 ease-out overflow-hidden group active:scale-95"
                  style={{ 
                    backgroundColor: '#ff8c00',
                    borderRadius: '9999px',
                    WebkitBorderRadius: '9999px',
                    MozBorderRadius: '9999px',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  } as React.CSSProperties}
                >
                  <span className="relative z-10">View our Work</span>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ borderRadius: '9999px' }}></div>
                  <div className="relative z-10 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-orange-500 transition-colors duration-300 group-hover:text-yellow-400" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Effect Button Showcase */}
      <div className="px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">🎯 Slide Effect Button Showcase</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Different slide effects with various color combinations - hover to see the animations!
            </p>
            
            {/* Original Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Original Variants (Primary/Secondary)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Left</h4>
                  <SlideLeftButton 
                    text="Let's work together"
                    href="/contact"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Right</h4>
                  <SlideRightButton 
                    text="Let's work together"
                    href="/contact"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Up</h4>
                  <SlideUpButton 
                    text="Let's work together"
                    href="/contact"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Down</h4>
                  <SlideDownButton 
                    text="Let's work together"
                    href="/contact"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Center</h4>
                  <SlideCenterButton 
                    text="Let's work together"
                    href="/contact"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Beam Border</h4>
                  <BeamBorderButton 
                    text="Schedule a call"
                    href="https://calendly.com/jenjo700/30min"
                  />
                </div>
              </div>
            </div>

            {/* White Background Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">White Background Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Slide Left</h4>
                  <WhiteSlideLeftButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Slide Right</h4>
                  <WhiteSlideRightButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Slide Up</h4>
                  <WhiteSlideUpButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Slide Down</h4>
                  <WhiteSlideDownButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Slide Center</h4>
                  <WhiteSlideCenterButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">White Variants</h4>
                  <div className="flex flex-col gap-2">
                    <WhiteSlideLeftButton 
                      text="Small"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                    <WhiteSlideRightButton 
                      text="Medium"
                      href="/contact"
                      className="px-6 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Black Background Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">Black Background Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Slide Left</h4>
                  <BlackSlideLeftButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Slide Right</h4>
                  <BlackSlideRightButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Slide Up</h4>
                  <BlackSlideUpButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Slide Down</h4>
                  <BlackSlideDownButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Slide Center</h4>
                  <BlackSlideCenterButton 
                    text="Let's work together"
                    href="/contact"
                  />
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Black Variants</h4>
                  <div className="flex flex-col gap-2">
                    <BlackSlideLeftButton 
                      text="Small"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                    <BlackSlideRightButton 
                      text="Medium"
                      href="/contact"
                      className="px-6 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">All Variants Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Left Comparison</h4>
                  <div className="flex flex-col gap-2">
                    <SlideLeftButton 
                      text="Original"
                      href="/contact"
                      variant="primary"
                      className="px-4 py-1 text-sm"
                    />
                    <WhiteSlideLeftButton 
                      text="White BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                    <BlackSlideLeftButton 
                      text="Black BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Right Comparison</h4>
                  <div className="flex flex-col gap-2">
                    <SlideRightButton 
                      text="Original"
                      href="/contact"
                      variant="primary"
                      className="px-4 py-1 text-sm"
                    />
                    <WhiteSlideRightButton 
                      text="White BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                    <BlackSlideRightButton 
                      text="Black BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Slide Center Comparison</h4>
                  <div className="flex flex-col gap-2">
                    <SlideCenterButton 
                      text="Original"
                      href="/contact"
                      variant="primary"
                      className="px-4 py-1 text-sm"
                    />
                    <WhiteSlideCenterButton 
                      text="White BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                    <BlackSlideCenterButton 
                      text="Black BG"
                      href="/contact"
                      className="px-4 py-1 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Content Area */}
      <main ref={pageContentRef} className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8 text-center">Image Effects Testing</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Test different image hover effects and animations
          </p>

          {/* Auto Image Effect - 15 Image Showcase with Mixed Transitions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - 15 Image Showcase with Mixed Transitions</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 showcase-image-container">
                {/* All 15 images stacked */}
                <img src="/show/P1.jpg" alt="Showcase Image 1" className="absolute inset-0 w-full h-full object-cover showcase-image-1" />
                <img src="/show/P2.jpg" alt="Showcase Image 2" className="absolute inset-0 w-full h-full object-cover showcase-image-2" />
                <img src="/show/P3.png" alt="Showcase Image 3" className="absolute inset-0 w-full h-full object-cover showcase-image-3" />
                <img src="/show/P4.jpg" alt="Showcase Image 4" className="absolute inset-0 w-full h-full object-cover showcase-image-4" />
                <img src="/show/P5.jpeg" alt="Showcase Image 5" className="absolute inset-0 w-full h-full object-cover showcase-image-5" />
                <img src="/show/P6.jpg" alt="Showcase Image 6" className="absolute inset-0 w-full h-full object-cover showcase-image-6" />
                <img src="/show/P7.jpeg" alt="Showcase Image 7" className="absolute inset-0 w-full h-full object-cover showcase-image-7" />
                <img src="/show/P8.jpg" alt="Showcase Image 8" className="absolute inset-0 w-full h-full object-cover showcase-image-8" />
                <img src="/show/P9.png" alt="Showcase Image 9" className="absolute inset-0 w-full h-full object-cover showcase-image-9" />
                <img src="/show/P10.jpg" alt="Showcase Image 10" className="absolute inset-0 w-full h-full object-cover showcase-image-10" />
                <img src="/show/P11.jpg" alt="Showcase Image 11" className="absolute inset-0 w-full h-full object-cover showcase-image-11" />
                <img src="/show/P12.jpg" alt="Showcase Image 12" className="absolute inset-0 w-full h-full object-cover showcase-image-12" />
                <img src="/show/P13.jpg" alt="Showcase Image 13" className="absolute inset-0 w-full h-full object-cover showcase-image-13" />
                <img src="/show/P14.jpg" alt="Showcase Image 14" className="absolute inset-0 w-full h-full object-cover showcase-image-14" />
                <img src="/show/P15.jpg" alt="Showcase Image 15" className="absolute inset-0 w-full h-full object-cover showcase-image-15" />
              </div>
            </div>
          </div>

          {/* Parallax Slide Effect */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Parallax Slide Effect</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 parallax-slide-container">
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="w-full h-full object-cover parallax-slide-bg"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Vertical */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Vertical</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-container">
                {/* First image - base layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="w-full h-full object-cover image-overlay-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/hsbc.jpg" 
                  alt="HSBC Banking Solution" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Horizontal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Horizontal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-horizontal-container">
                {/* First image - base layer */}
                <img 
                  src="/YLD.jpg" 
                  alt="YLD Design System" 
                  className="w-full h-full object-cover image-overlay-horizontal-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/cogo/1.jpg" 
                  alt="CoGo Sustainability App" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-horizontal-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Diagonal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Diagonal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-diagonal-container">
                {/* First image - base layer */}
                <img 
                  src="/crypto/1.jpeg" 
                  alt="Crypto Trading Platform" 
                  className="w-full h-full object-cover image-overlay-diagonal-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-diagonal-top"
                />
              </div>
            </div>
          </div>

          {/* Scroll Image Overlay Effect - Circle Reveal */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Scroll Image Overlay Effect - Circle Reveal</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 image-overlay-circle-container">
                {/* First image - base layer */}
                <img 
                  src="/blog/AI2.jpg" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover image-overlay-circle-base"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/uxchat/chatbot.avif" 
                  alt="AI Chatbot Interface" 
                  className="absolute inset-0 w-full h-full object-cover image-overlay-circle-top"
                />
              </div>
            </div>
          </div>

          {/* Auto Image Effect - 3 Image Sequence */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - 3 Image Sequence</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 auto-image-container">
                {/* First image - base layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="w-full h-full object-cover auto-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/hsbc.jpg" 
                  alt="HSBC Banking Solution" 
                  className="absolute inset-0 w-full h-full object-cover auto-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/YLD.jpg" 
                  alt="YLD Design System" 
                  className="absolute inset-0 w-full h-full object-cover auto-image-3"
                />
              </div>
            </div>
          </div>

          {/* Auto Image Effect - Blur Transitions */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - Blur Transitions</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 blur-image-container">
                {/* First image - base layer */}
                <img 
                  src="/cogo/1.jpg" 
                  alt="CoGo Sustainability App" 
                  className="w-full h-full object-cover blur-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/crypto/1.jpeg" 
                  alt="Crypto Trading Platform" 
                  className="absolute inset-0 w-full h-full object-cover blur-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/skills/design2.jpg" 
                  alt="Design Process" 
                  className="absolute inset-0 w-full h-full object-cover blur-image-3"
                />
              </div>
            </div>
          </div>

          {/* Tech Icons Section - Moved from Hero */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">🛠️ Tech Icons (From Hero Section)</h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                These tech icons were previously in the hero section. You can experiment with different layouts, animations, and styles here.
              </p>
              
              {/* Tech Icons Grid */}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 opacity-60">
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <FigmaIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">Figma</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <ReactIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">React</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <NextJSIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <SketchIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">Sketch</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <JavaScriptIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-4 transition-all duration-300">
                      <GitHubIcon size={32} />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-400 group-hover:text-orange-500 transition-colors">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Image Effect - Combined Clip-Path & Blur */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Auto Image Effect - Combined Clip-Path & Blur</h2>
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 combined-image-container">
                {/* First image - base layer */}
                <img 
                  src="/blog/AI2.jpg" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover combined-image-1"
                />
                
                {/* Second image - overlay layer */}
                <img 
                  src="/uxchat/chatbot.avif" 
                  alt="AI Chatbot Interface" 
                  className="absolute inset-0 w-full h-full object-cover combined-image-2"
                />
                
                {/* Third image - overlay layer */}
                <img 
                  src="/medify.jpg" 
                  alt="Medify Healthcare App" 
                  className="absolute inset-0 w-full h-full object-cover combined-image-3"
                />
                
                {/* Fourth image - overlay layer */}
                <img 
                  src="/blk-logo2.png" 
                  alt="Jenjo Logo" 
                  className="absolute inset-0 w-full h-full object-contain bg-white combined-image-4"
                />
              </div>
            </div>
          </div>


        </div>
      </main>

      {/* CTA Buttons Section 3 - After Image Effects */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={ctaButtonsRef3} className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: 0, transform: "translateY(30px)" }}>
            <BlackSlideLeftButton 
              text="Let's work together"
              href="/contact"
            />
            <BeamBorderButton 
              text="Schedule a call"
              href="https://calendly.com/jenjo700/30min"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}