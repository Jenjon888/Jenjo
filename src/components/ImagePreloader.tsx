'use client'
import { useEffect } from 'react'

export function ImagePreloader() {
  useEffect(() => {
    const imageUrls = [
      // Homepage images
      '/desk.jpg',
      '/charts.png',
      
      // Navigation logos
      '/blk-logo2.png',
      '/wht-logo2.png',
      
      // Client logos (all variants)
      '/client_logos/AM-blk.png',
      '/client_logos/AM-wht.png',
      '/client_logos/BAR-blk.png',
      '/client_logos/BAR-wht.png',
      '/client_logos/BH-blk.png',
      '/client_logos/BH-wht.png',
      '/client_logos/HSBC-blk.png',
      '/client_logos/HSBC-wht.png',
      '/client_logos/KON-blk.png',
      '/client_logos/KON-wht.png',
      '/client_logos/MP-blk.png',
      '/client_logos/MP-wht.png',
      '/client_logos/OB-blk.png',
      '/client_logos/OB-wht.png',
      '/client_logos/OG-blk.png',
      '/client_logos/OG-wht.png',
      '/client_logos/RI-blk.png',
      '/client_logos/RI-wht.png',
      '/client_logos/SiM-blk.png',
      '/client_logos/SiM-wht.png',
      
      // Skills page images
      '/skills/research.jpg',
      '/skills/strategy1.jpg',
      '/skills/design2.jpg',
      '/skills/dev1.jpg',
      '/skills/testing.jpg',
      '/skills/launch.jpg',
      
      // Blog images
      '/blog/DL1.jpg',
      '/blog/AI3.jpg',
      '/blog/figma-comp.png',
      '/blog/AI2.jpg',
      '/blog/blue-bank.jpg',
      '/blog/red-bank.jpg',
      '/blog/gray.jpg',
      '/blog/green_bank.jpg',
      '/blog/figmadev.png',
      '/blog/P-1-1.jpg',
      '/blog/AI-human.jpg',
      '/blog/complex.jpg',
      '/blog/complex3.jpg',
      '/blog/binary.jpg',
      '/blog/erica1a.jpg',
      '/blog/netflix.jpg',
      '/blog/amazon.jpg',
      '/blog/paypal.jpg',
      
      // Case study hero images
      '/hsbc.jpg',
      '/medify.jpg',
      '/YLD.jpg',
      '/CoGo.png',
      '/chatbot.jpg',
      '/DS1.png',
      '/logom.jpg',
      '/20.jpg',
      '/1m_8.jpg',
      
      // Banking app case study
      '/HSBC1a.png',
      '/hsbc/1.jpg',
      '/hsbc/2.jpg',
      '/hsbc/3.jpg',
      '/hsbc/4.jpg',
      
      // UX Research Chatbot case study
      '/20.jpg',
      
      // YLD Design System case study
      '/YLD1.webp',
      '/yld/2.jpg',
      '/yld/3.png',
      '/yld/6.png',
      '/yld/8.png',
      '/yld/9.png',
      '/yld/11.png',
      '/yld/12.png',
      '/yld/13.png',
      
      // Education Platform case study
      '/Medify1a.jpg',
      '/medify/1.jpg',
      '/medify/2.jpg',
      '/medify/3.jpg',
      '/medify/4.jpg',
      '/medify/5.jpg',
      '/medify/6.jpg',
      
      // CoGo App case study
      '/cogo/1.jpg',
      '/cogo/2.jpg',
      '/cogo/3.jpg',
      '/cogo/4.jpg',
      '/cogo/5.png',
      '/cogo/6.png',
      '/cogo/7.jpg',
      '/cogo/8.jpg',
      '/cogo/9.jpeg',
      '/cogo/11.jpg',
      '/cogo/12.png',
      
      // Crypto AI Portfolio case study
      '/crypto/2.png',
      '/crypto/3.png',
      '/crypto/4.png',
      '/crypto/5.png',
      '/crypto/6.png',
      '/crypto/7.png'
    ]
    
    // Preload all images for smooth loading across the entire website
    imageUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }, [])

  return null
}
