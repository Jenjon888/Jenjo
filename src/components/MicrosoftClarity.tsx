'use client'

import { useEffect } from 'react'

export function MicrosoftClarity() {
  useEffect(() => {
    // Initialize Microsoft Clarity using the script tag method
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
    
    if (clarityId && typeof window !== 'undefined') {
      // Check if Clarity is already loaded
      if (!(window as any).clarity) {
        // Load Clarity script
        const script = document.createElement('script')
        script.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `
        document.head.appendChild(script)
        
        // Make trackEvent available globally for custom tracking
        const trackEvent = (eventName: string, data?: any) => {
          if ((window as any).clarity) {
            (window as any).clarity(eventName, data)
          }
        }
        
        (window as any).clarityTrack = trackEvent
      }
    }
  }, [])

  return null
}
