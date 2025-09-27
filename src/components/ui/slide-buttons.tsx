import Link from 'next/link'

// White Background Slide Left Button
export const WhiteSlideLeftButton = ({ 
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

// Black/White Background Slide Left Button (Theme-aware)
export const BlackSlideLeftButton = ({ 
  text = "Let's work together", 
  href = "/contact",
  className = "",
  fullWidth = false
}: {
  text?: string;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}) => {
  return (
    <Link 
      href={href}
      className={`group relative inline-flex items-center justify-center ${fullWidth ? 'w-full' : 'w-full sm:w-fit'} px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black ${className}`}
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
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-orange-500 dark:bg-black border-0 outline-none"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

// Black Background Slide Left Submit Button
export const BlackSlideLeftSubmitButton = ({ 
  text = "Send Message", 
  disabled = false,
  onClick,
  children,
  className = "",
  fullWidth = false
}: {
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center ${fullWidth ? 'w-full' : 'w-full sm:w-fit'} px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-orange-500 dark:bg-black border-0 outline-none"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
        {children || text}
      </span>
    </button>
  );
};

// Black Background Slide Left Download Button
export const BlackSlideLeftDownloadButton = ({ 
  text = "Download CV", 
  disabled = false,
  onClick,
  children,
  className = "" 
}: {
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center w-full px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-black flex items-center gap-2">
        {children || text}
      </span>
    </button>
  );
};

// Orange/Black Background Slide Left Button with Icon (Theme-aware)
export const OrangeSlideLeftButton = ({ 
  text = "Start a project", 
  href = "/contact",
  onClick,
  disabled = false,
  children,
  className = "",
  iconPosition = "end" // "end" for mobile, "default" for desktop
}: {
  text?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  iconPosition?: "end" | "default";
}) => {
  const ButtonComponent = href ? Link : 'button';
  const buttonProps = href ? { href } : { onClick, disabled };
  
  return (
    <ButtonComponent
      {...buttonProps}
      className={`group relative inline-flex items-center ${iconPosition === "end" ? "justify-between" : "gap-3"} pl-6 pr-2 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-orange-500 text-orange-500 dark:text-black disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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
        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-orange-500 dark:bg-yellow-400"
        style={{ borderRadius: '9999px' }}
      />
      
      {/* Text content */}
      <span className="relative z-10 transition-colors duration-300 text-orange-500 dark:text-black group-hover:text-black">
        {children || text}
      </span>
      
      {/* Icon circle */}
      <div className="relative z-10 w-6 h-6 bg-orange-500 dark:bg-black rounded-full flex items-center justify-center group-hover:bg-black">
        <svg className="w-3 h-3 text-black dark:text-orange-500 transition-colors duration-300 group-hover:text-orange-500 dark:group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </ButtonComponent>
  );
};

// Beam Border Button Component
export const BeamBorderButton = ({ 
  text = "Schedule a call", 
  href = "https://calendly.com/jenjo700/30min",
  className = "" 
}: {
  text?: string;
  href?: string;
  className?: string;
}) => {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center sm:justify-start w-full sm:w-fit border border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 hover:text-orange-500 dark:hover:text-orange-500 hover:border-orange-500 dark:hover:border-orange-500 transition-colors ${className}`}
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
      <span className="font-medium">{text}</span>
    </Link>
  );
};
