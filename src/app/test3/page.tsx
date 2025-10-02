"use client"

import { useState, useRef, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion, useAnimation, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Highlighter } from '@/components/ui/highlighter'
import { MorphingText } from '@/components/ui/morphing-text'
import { HyperText } from '@/components/ui/hyper-text'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

export default function Test3() {
  const [lottieLoaded, setLottieLoaded] = useState(false)
  const [Lottie, setLottie] = useState<any>(null)
  
  // Refs for various animations
  const liquidTextRef = useRef<HTMLDivElement>(null)
  const hologramTextRef = useRef<HTMLDivElement>(null)
  const particleTextRef = useRef<HTMLDivElement>(null)
  const matrixTextRef = useRef<HTMLDivElement>(null)
  const neuralTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Dynamically import lottie-react only on client side
    import('lottie-react').then((module) => {
      setLottie(() => module.default)
      setLottieLoaded(true)
    })

    // Liquid Text Effect
    setTimeout(() => {
      if (liquidTextRef.current) {
        const letters = liquidTextRef.current.querySelectorAll('.liquid-letter')
        console.log('Found liquid letters:', letters.length)
        
        letters.forEach((letter, index) => {
          gsap.set(letter, {
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5,
            rotation: Math.random() * 5 - 2.5
          })
          
          gsap.to(letter, {
            duration: 2 + Math.random() * 2,
            y: Math.random() * 20 - 10,
            x: Math.random() * 10 - 5,
            rotation: Math.random() * 10 - 5,
            scale: 0.9 + Math.random() * 0.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.1
          })
        })
      }
    }, 500)

    // Hologram Effect
    setTimeout(() => {
      if (hologramTextRef.current) {
        console.log('Starting hologram effect')
        gsap.to(hologramTextRef.current, {
          duration: 3,
          backgroundPosition: "200% center",
          ease: "none",
          repeat: -1
        })
      }
    }, 700)

    // Neural Network Particles
    setTimeout(() => {
      if (particleTextRef.current) {
        const particles = particleTextRef.current.querySelectorAll('.particle')
        console.log('Found particles:', particles.length)
        
        particles.forEach((particle, index) => {
          gsap.set(particle, {
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: Math.random() * 0.8 + 0.2,
            scale: Math.random() * 0.5 + 0.5
          })
          
          gsap.to(particle, {
            duration: 3 + Math.random() * 2,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: Math.random() * 0.8 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.1
          })
        })
      }
    }, 800)

    // Matrix Code Rain
    setTimeout(() => {
      if (matrixTextRef.current) {
        console.log('Starting matrix rain')
        const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
        const matrixElement = matrixTextRef.current
        
        const createMatrixRain = () => {
          for (let i = 0; i < 8; i++) {
            const char = document.createElement('div')
            char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)]
            char.className = 'absolute text-orange-400 text-xs opacity-60 z-10'
            char.style.left = Math.random() * 100 + '%'
            char.style.top = '-20px'
            char.style.position = 'absolute'
            matrixElement.appendChild(char)
            
            gsap.to(char, {
              duration: 2 + Math.random() * 2,
              y: 300,
              ease: "none",
              onComplete: () => char.remove()
            })
          }
        }
        
        createMatrixRain()
        const matrixInterval = setInterval(createMatrixRain, 400)
        
        return () => {
          clearInterval(matrixInterval)
          const chars = matrixElement.querySelectorAll('div')
          chars.forEach(char => char.remove())
        }
      }
    }, 900)

    // Neural Network Connections
    setTimeout(() => {
      if (neuralTextRef.current) {
        const canvas = neuralTextRef.current.querySelector('canvas')
        if (canvas) {
          console.log('Starting neural network canvas')
          const ctx = canvas.getContext('2d')
          if (ctx) {
            canvas.width = 600
            canvas.height = 150
            canvas.style.width = '100%'
            canvas.style.height = '150px'
            
            const nodes = Array.from({ length: 8 }, () => ({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * 1.0,
              vy: (Math.random() - 0.5) * 1.0
            }))
            
            const animate = () => {
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              
              ctx.strokeStyle = 'rgba(249, 115, 22, 0.3)'
              ctx.lineWidth = 1
              for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                  const dx = nodes[i].x - nodes[j].x
                  const dy = nodes[i].y - nodes[j].y
                  const distance = Math.sqrt(dx * dx + dy * dy)
                  
                  if (distance < 100) {
                    ctx.beginPath()
                    ctx.moveTo(nodes[i].x, nodes[i].y)
                    ctx.lineTo(nodes[j].x, nodes[j].y)
                    ctx.stroke()
                  }
                }
              }
              
              ctx.fillStyle = 'rgba(249, 115, 22, 0.8)'
              nodes.forEach(node => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
                ctx.fill()
                
                node.x += node.vx
                node.y += node.vy
                
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1
              })
              
              requestAnimationFrame(animate)
            }
            
            animate()
          }
        }
      }
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      <div className="flex justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
            Revolutionary Title Animations
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            8 cutting-edge ways to emphasize "Future" - featuring official Magic UI components
          </p>

          {/* Style 1A: Fintech Focus */}
          <section className="mb-16 border border-orange-500 bg-orange-50 dark:bg-orange-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">💰 Style 1A: Fintech Revolution</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing text showcasing your fintech expertise and financial innovation focus
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <MorphingText 
                  texts={["Future", "Banking", "Payments", "Finance", "Wealth"]}
                  className="text-orange-500 dark:text-orange-500"
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-4 text-center font-medium">
              ✓ Fintech expertise - revolutionizing financial services!
            </p>
          </section>

          {/* Style 1B: Crypto & Web3 Focus */}
          <section className="mb-16 border border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">₿ Style 1B: Crypto & Web3 Innovation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing text highlighting your crypto, blockchain, and Web3 product experience
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <MorphingText 
                  texts={["Future", "Web3", "Crypto", "DeFi", "Blockchain"]}
                  className="text-orange-500 dark:text-orange-500"
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-4 text-center font-medium">
              ✓ Web3 expertise - shaping the decentralized future!
            </p>
          </section>

          {/* Style 1C: AI & Tech Focus */}
          <section className="mb-16 border border-purple-500 bg-purple-50 dark:bg-purple-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">🤖 Style 1C: AI-Powered Innovation</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing text emphasizing your AI product design and intelligent system expertise
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <MorphingText 
                  texts={["Future", "Intelligence", "Automation", "Machine Learning", "AI"]}
                  className="text-orange-500 dark:text-orange-500"
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-4 text-center font-medium">
              ✓ AI expertise - intelligent product design!
            </p>
          </section>

          {/* Style 1D: Product Design Focus */}
          <section className="mb-16 border border-green-500 bg-green-50 dark:bg-green-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">🎨 Style 1D: Product Design Mastery</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing text showcasing your UX/UI design and product development skills
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <MorphingText 
                  texts={["Future", "Design", "UX/UI", "Products", "Experiences"]}
                  className="text-orange-500 dark:text-orange-500"
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-4 text-center font-medium">
              ✓ Design expertise - crafting exceptional user experiences!
            </p>
          </section>

          {/* Style 1E: Startup & Scale Focus */}
          <section className="mb-16 border border-red-500 bg-red-50 dark:bg-red-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">🚀 Style 1E: Startup to Scale</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing text highlighting your experience scaling products from startup to global brands
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <MorphingText 
                  texts={["Future", "Startups", "Scale", "Growth", "Impact"]}
                  className="text-orange-500 dark:text-orange-500"
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-4 text-center font-medium">
              ✓ Scale expertise - from startup to global impact!
            </p>
          </section>

          {/* Style 2: Magic UI Hyper Text - Matrix Style */}
          <section className="mb-16 border border-green-500 bg-green-50 dark:bg-green-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">⚡ Style 2: Magic UI Hyper Text</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Official Magic UI component with matrix-style character scrambling
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <HyperText 
                  children="Future"
                  className="text-orange-500 dark:text-orange-500 font-bold text-5xl"
                  duration={1200}
                  delay={500}
                  animateOnHover={false}
                  startOnView={true}
                  characterSet={["0", "1", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-4 text-center font-medium">
              ✓ Matrix-style character scrambling - cyberpunk vibes!
            </p>
          </section>

          {/* Style 3: Magic UI Hyper Text - Binary Style */}
          <section className="mb-16 border border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">🔢 Style 3: Binary Hyper Text</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hyper Text with binary character set for digital effect
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <HyperText 
                  children="Future"
                  className="text-orange-500 dark:text-orange-500 font-bold text-5xl"
                  duration={1000}
                  delay={200}
                  characterSet={["0", "1"]}
                  animateOnHover={false}
                  startOnView={true}
                />
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-4 text-center font-medium">
              ✓ Binary scrambling effect - digital transformation!
            </p>
          </section>

          {/* Style 4: Magic UI Highlighter - Highlight */}
          <section className="mb-16 border border-pink-500 bg-pink-50 dark:bg-pink-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">✨ Style 4: Magic UI Highlighter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Official Magic UI Highlighter with hand-drawn marker effect
            </p>
            <div className="flex justify-center">
              <h1 className="text-5xl font-semibold tracking-tight text-center">
                <span className="text-gray-300 dark:text-gray-300">Building the</span><br />
                <Highlighter 
                  action="highlight" 
                  color="#FF9800"
                  strokeWidth={4}
                  animationDuration={1000}
                  iterations={3}
                  isView={false}
                >
                  <span className="text-orange-500 dark:text-orange-500 font-bold">Future</span>
                </Highlighter>
                <span className="text-gray-300 dark:text-gray-300"> Now</span>
              </h1>
            </div>
            <p className="text-xs text-pink-600 dark:text-pink-400 mt-4 text-center font-medium">
              ✓ Hand-drawn marker effect - authentic Magic UI!
            </p>
          </section>

          {/* Style 5: Magic UI Highlighter - Underline */}
          <section className="mb-16 border border-red-500 bg-red-50 dark:bg-red-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">📝 Style 5: Magic UI Underline</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Magic UI Highlighter with underline effect
            </p>
            <div className="flex justify-center">
              <h1 className="text-5xl font-semibold tracking-tight text-center">
                <span className="text-gray-300 dark:text-gray-300">Building the</span><br />
                <Highlighter 
                  action="underline" 
                  color="#FF6B6B"
                  strokeWidth={3}
                  animationDuration={800}
                  iterations={2}
                  isView={false}
                >
                  <span className="text-orange-500 dark:text-orange-500 font-bold">Future</span>
                </Highlighter>
                <span className="text-gray-300 dark:text-gray-300"> Now</span>
              </h1>
            </div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-4 text-center font-medium">
              ✓ Hand-drawn underline - professional annotation!
            </p>
          </section>

          {/* Style 6: Magic UI Highlighter - Circle */}
          <section className="mb-16 border border-purple-500 bg-purple-50 dark:bg-purple-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">⭕ Style 6: Magic UI Circle</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Magic UI Highlighter with circle annotation
            </p>
            <div className="flex justify-center">
              <h1 className="text-5xl font-semibold tracking-tight text-center">
                <span className="text-gray-300 dark:text-gray-300">Building the</span><br />
                <Highlighter 
                  action="circle" 
                  color="#8B5CF6"
                  strokeWidth={2.5}
                  animationDuration={900}
                  iterations={3}
                  isView={false}
                >
                  <span className="text-orange-500 dark:text-orange-500 font-bold">Future</span>
                </Highlighter>
                <span className="text-gray-300 dark:text-gray-300"> Now</span>
              </h1>
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-4 text-center font-medium">
              ✓ Hand-drawn circle - perfect emphasis!
            </p>
          </section>

          {/* Style 7: Magic UI Highlighter - Box */}
          <section className="mb-16 border border-yellow-500 bg-yellow-50 dark:bg-yellow-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">📦 Style 7: Magic UI Box</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Magic UI Highlighter with box annotation
            </p>
            <div className="flex justify-center">
              <h1 className="text-5xl font-semibold tracking-tight text-center">
                <span className="text-gray-300 dark:text-gray-300">Building the</span><br />
                <Highlighter 
                  action="box" 
                  color="#F59E0B"
                  strokeWidth={2}
                  animationDuration={700}
                  iterations={2}
                  isView={false}
                >
                  <span className="text-orange-500 dark:text-orange-500 font-bold">Future</span>
                </Highlighter>
                <span className="text-gray-300 dark:text-gray-300"> Now</span>
              </h1>
            </div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-4 text-center font-medium">
              ✓ Hand-drawn box - structured emphasis!
            </p>
          </section>

          {/* Style 8: Combined Effect - Morphing + Highlighter */}
          <section className="mb-16 border border-indigo-500 bg-indigo-50 dark:bg-indigo-950 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">🎭 Style 8: Combined Magic UI Effects</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Morphing Text combined with Highlighter for maximum impact
            </p>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="text-gray-300 dark:text-gray-300 text-2xl mb-4">Building the</div>
                <div className="relative">
                  <MorphingText 
                    texts={["Future", "Innovation", "Tomorrow"]}
                    className="text-orange-500 dark:text-orange-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Highlighter 
                      action="highlight" 
                      color="#FF9800"
                      strokeWidth={3}
                      animationDuration={1500}
                      iterations={2}
                      isView={false}
                    >
                      <span className="opacity-0">Future</span>
                    </Highlighter>
                  </div>
                </div>
                <div className="text-gray-300 dark:text-gray-300 text-2xl mt-4">Now</div>
              </div>
            </div>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-4 text-center font-medium">
              ✓ Combined effects - the ultimate title animation!
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}