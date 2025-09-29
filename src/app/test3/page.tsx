'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '@/contexts/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export default function Test3Page() {
  const { theme, toggleTheme } = useTheme()
  
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Interactive state
  const [quizQuestion, setQuizQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizTime, setQuizTime] = useState(0)
  const [isQuizActive, setIsQuizActive] = useState(false)
  const [quizHistory, setQuizHistory] = useState<Array<{question: number, answer: number, correct: boolean, time: number}>>([])

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isQuizActive) {
      interval = setInterval(() => {
        setQuizTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isQuizActive])

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30
    })

    // Animate elements
    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    })

    // Scroll-triggered animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Quiz functions
  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return
    
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    
    const isCorrect = answerIndex === quizQuestions[quizQuestion].correct
    const questionTime = quizTime
    
    setQuizHistory(prev => [...prev, {
      question: quizQuestion,
      answer: answerIndex,
      correct: isCorrect,
      time: questionTime
    }])
    
    if (isCorrect) {
      setQuizScore(prev => prev + 1)
    }
    
    // Auto advance after showing feedback
    setTimeout(() => {
      setQuizQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setQuizTime(0)
    }, 2000)
  }

  const startQuiz = () => {
    setQuizQuestion(0)
    setQuizScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setQuizTime(0)
    setIsQuizActive(true)
    setQuizHistory([])
  }

  const resetQuiz = () => {
    setQuizQuestion(0)
    setQuizScore(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setQuizTime(0)
    setIsQuizActive(false)
    setQuizHistory([])
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }


  // Quiz questions
  const quizQuestions = [
    {
      question: "What is my educational background?",
      options: ["Computer Science Degree", "Graphic Design Degree", "UX Design Bootcamp", "Self-taught"],
      correct: 1
    },
    {
      question: "Which of these is NOT one of my core skills?",
      options: ["User Research", "Visual Design", "Backend Development", "Prototyping"],
      correct: 2
    },
    {
      question: "What design methodology do I primarily follow?",
      options: ["Design Thinking", "Lean UX", "Agile Design", "Waterfall Design"],
      correct: 0
    },
    {
      question: "Which technical skill am I most proficient in?",
      options: ["JavaScript", "Python", "HTML/CSS", "SQL"],
      correct: 2
    },
    {
      question: "What type of user research do I specialize in?",
      options: ["Quantitative Analysis", "Qualitative Interviews", "A/B Testing", "All of the above"],
      correct: 3
    },
    {
      question: "Which design principle do I prioritize most?",
      options: ["Aesthetic Appeal", "User Accessibility", "Brand Consistency", "Technical Feasibility"],
      correct: 1
    },
    {
      question: "What is my approach to design systems?",
      options: ["Component-based", "Page-based", "Feature-based", "Brand-based"],
      correct: 0
    },
    {
      question: "Which tool do I use for user flow mapping?",
      options: ["Miro", "Whimsical", "Figma", "All of the above"],
      correct: 3
    },
    {
      question: "What is my preferred method for usability testing?",
      options: ["Remote Testing", "In-person Sessions", "Moderated Testing", "All of the above"],
      correct: 3
    },
    {
      question: "Which industry experience do I have the most expertise in?",
      options: ["Healthcare", "Financial Services", "Education", "E-commerce"],
      correct: 1
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ opacity: 0 }}
            >
              About Me Quiz
            </h1>
            <p 
              ref={subtitleRef}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              style={{ opacity: 0 }}
            >
              Test your knowledge about Jenjo
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section ref={contentRef} className="px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Style 1: Enhanced Yellow Banner Style */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 1: Enhanced Yellow Banner Style</h2>
              
              {!isQuizActive && quizQuestion === 0 ? (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="border border-black dark:bg-yellow-900/20 p-8 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Ready to test your knowledge?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      This quiz has {quizQuestions.length} questions about Jenjo's background and expertise.
                    </p>
                    <button
                      onClick={startQuiz}
                      className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 ease-out overflow-hidden bg-yellow-500 text-black"
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
                      {/* Black slide effect */}
                      <div 
                        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-black border-0 outline-none"
                        style={{ borderRadius: '9999px' }}
                      />
                      
                      {/* Text content */}
                      <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
                        Start Quiz
                      </span>
                    </button>
                  </div>
                </div>
              ) : quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto border border-black dark:border-gray-700 rounded-xl p-8">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-px">
                      <div 
                        className="bg-yellow-500 h-px transition-all duration-500 ease-out"
                        style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-8 leading-relaxed">
                    {quizQuestions[quizQuestion].question}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quizQuestions[quizQuestion].options.map((option, index) => {
                      const isSelected = selectedAnswer === index
                      const isCorrect = index === quizQuestions[quizQuestion].correct
                      const showCorrect = showFeedback && isCorrect
                      const showIncorrect = showFeedback && isSelected && !isCorrect
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={showFeedback}
                          className={`group px-6 py-4 border transition-all duration-300 text-left rounded-xl ${
                            showCorrect 
                              ? 'border-green-500 dark:bg-green-900/20 shadow-lg shadow-green-500/50' 
                              : showIncorrect 
                              ? 'border-red-500 dark:bg-red-900/20'
                              : 'border-gray-300 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500'
                          } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-lg transition-colors ${
                              'text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white'
                            }`}>
                              {option}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="border border-black dark:bg-gray-900 p-8 rounded-xl mb-8">
                    <h3 className="text-2xl font-medium text-black dark:text-white mb-6">Completed!</h3>
                    
                    {/* Styled score display */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-4 px-6 py-3 bg-yellow-500 rounded-xl">
                        <span className="text-sm text-black">Your Score</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-black">{quizScore}</span>
                          <span className="text-black">/</span>
                          <span className="text-2xl font-bold text-black">{quizQuestions.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Personal message from Jenjo */}
                    <div className="mb-8">
                      {quizScore >= 9 && (
                        <div className="mb-6">
                          <p className="text-gray-600 dark:text-gray-400">
                            You clearly understand UX design. 15+ years experience across startups to hedge funds - I can tell when someone gets it. Let's talk about your project.
                          </p>
                        </div>
                      )}
                      {quizScore >= 7 && quizScore <= 8 && (
                        <div className="mb-6">
                          <p className="text-gray-600 dark:text-gray-400">
                            Solid foundation. 15+ years across different industries - I can help you level up. What are you working on?
                          </p>
                        </div>
                      )}
                      {quizScore >= 5 && quizScore <= 6 && (
                        <div className="mb-6">
                          <p className="text-gray-600 dark:text-gray-400">
                            That's why you need someone like me. Award-winning products across fintech, banking, and startups. Let's work together.
                          </p>
                        </div>
                      )}
                      {quizScore < 5 && (
                        <div className="mb-6">
                          <p className="text-gray-600 dark:text-gray-400">
                            Why I love what I do. 15+ years turning ideas into successful products. I can help you create something amazing. Let's chat.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={resetQuiz}
                        className="group relative inline-flex items-center justify-center px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black"
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
                        <div 
                          className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-yellow-500 dark:bg-black border-0 outline-none"
                          style={{ borderRadius: '9999px' }}
                        />
                        <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
                          Try Again
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Style 1B: Coffee Quiz Style */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 1B: Coffee Quiz Style</h2>
              
              {quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto">
                  {/* Coffee Quiz Style Intro */}
                  <div 
                    className="w-full py-16 px-8"
                    style={{ backgroundColor: '#F9C233' }}
                  >
                    <div className="max-w-4xl mx-auto">
                      {/* Main Heading */}
                      <h1 
                        className="font-extrabold text-black leading-tight mb-6"
                        style={{ 
                          fontSize: 'clamp(36px, 6vw, 72px)',
                          fontFamily: 'Poppins, Montserrat, sans-serif',
                          lineHeight: '0.9'
                        }}
                      >
                        <div>
                          <span className="font-extrabold">Do</span>{' '}
                          <span 
                            className="font-extrabold"
                            style={{ 
                              WebkitTextStroke: '1px black',
                              WebkitTextFillColor: 'transparent'
                            }}
                          >You</span>
                        </div>
                        <div>
                          <span className="font-extrabold">Know</span>{' '}
                          <span className="font-extrabold">Me?</span>
                        </div>
                      </h1>
                      
                      {/* Subtext */}
                      <p 
                        className="text-black mb-8 max-w-2xl"
                        style={{ 
                          fontSize: 'clamp(16px, 2vw, 18px)',
                          fontFamily: 'Poppins, Montserrat, sans-serif',
                          fontWeight: '400',
                          lineHeight: '1.4'
                        }}
                      >
                        Think you know Jenjo well?<br />
                        Let's test your knowledge about my work and interests!
                      </p>
                      
                      {/* CTA Button */}
                      <button
                        onClick={() => setQuizQuestion(0)}
                        className="bg-white text-black px-8 py-4 font-medium hover:shadow-lg hover:text-gray-800 transition-all duration-300"
                        style={{ 
                          borderRadius: '9999px',
                          fontSize: '18px',
                          fontFamily: 'Poppins, Montserrat, sans-serif',
                          fontWeight: '600'
                        }}
                      >
                        <span className="font-bold">Take Quiz</span> - It's free
                      </button>
                    </div>
                  </div>
                  
                  {quizQuestion > 0 && (
                    <>
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-px">
                          <div 
                            className="bg-yellow-500 h-px transition-all duration-500 ease-out"
                            style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-medium text-black dark:text-white mb-8 text-center leading-relaxed">
                        {quizQuestions[quizQuestion].question}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {quizQuestions[quizQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (index === quizQuestions[quizQuestion].correct) {
                                setQuizScore(quizScore + 1)
                              }
                              setQuizQuestion(quizQuestion + 1)
                            }}
                            className="group p-6 border border-black dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 text-left"
                          >
                            <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                              {option}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-medium text-black dark:text-white mb-6">Quiz Complete!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Your score: <span className="font-medium text-black dark:text-white">{quizScore}</span> out of <span className="font-medium text-black dark:text-white">{quizQuestions.length}</span>
                  </p>
                  
                  <button
                    onClick={() => {
                      setQuizQuestion(0)
                      setQuizScore(0)
                    }}
                    className="group relative inline-flex items-center justify-center w-full sm:w-fit px-6 py-2 font-medium transition-all duration-300 ease-out overflow-hidden bg-black dark:bg-white text-white dark:text-black"
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
                    <div 
                      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-yellow-500 dark:bg-black border-0 outline-none"
                      style={{ borderRadius: '9999px' }}
                    />
                    <span className="relative z-10 transition-colors duration-300 text-white dark:text-black group-hover:text-black dark:group-hover:text-white">
                      Try Again
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Quiz Example - Matching Image Format */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Quiz Example - Matching Image Format</h2>
              
              <div className="max-w-3xl mx-auto border border-black dark:border-gray-700 p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Question 1 of 5</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Score: 0</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-px">
                    <div 
                      className="bg-yellow-500 h-px transition-all duration-500 ease-out"
                      style={{ width: '20%' }}
                    />
                  </div>
                </div>
                
                {/* Question */}
                <h3 className="text-2xl font-medium text-black dark:text-white mb-8 leading-relaxed">
                  Who invented the word "vomit"?
                </h3>
                
                {/* Answer Options - 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Option 1 - Selected (Wrong) */}
                  <div className="border border-black dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-gray-700 dark:text-gray-300">Napoleon</span>
                      <div className="w-6 h-6 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Option 2 - Not Selected */}
                  <div className="border border-black dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-gray-700 dark:text-gray-300">George Washington</span>
                      <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Option 3 - Not Selected */}
                  <div className="border border-black dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-gray-700 dark:text-gray-300">Aristotle</span>
                      <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Option 4 - Correct Answer */}
                  <div className="border border-black dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 p-6 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-gray-700 dark:text-gray-300">William Shakespeare</span>
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feedback Section */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    The correct answer is William Shakespeare
                  </p>
                </div>
              </div>
            </div>

            {/* Style 2: Card-Based */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 2: Card-Based</h2>
              
              {quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto">
                  <div className="border border-black dark:bg-gray-900 p-8 mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="dark:bg-gray-800 border border-black dark:border-gray-700 p-8">
                    <h3 className="text-2xl font-medium text-black dark:text-white mb-8 text-center leading-relaxed">
                      {quizQuestions[quizQuestion].question}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizQuestions[quizQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (index === quizQuestions[quizQuestion].correct) {
                              setQuizScore(quizScore + 1)
                            }
                            setQuizQuestion(quizQuestion + 1)
                          }}
                          className="group p-4 dark:bg-gray-900 hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-all duration-300 text-left rounded-lg"
                        >
                          <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="dark:bg-gray-800 border border-black dark:border-gray-700 p-8">
                    <h3 className="text-3xl font-medium text-black dark:text-white mb-6">Quiz Complete!</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      Your score: <span className="font-medium text-black dark:text-white">{quizScore}</span> out of <span className="font-medium text-black dark:text-white">{quizQuestions.length}</span>
                    </p>
                    
                    <button
                      onClick={() => {
                        setQuizQuestion(0)
                        setQuizScore(0)
                      }}
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Style 3: Numbered Steps */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 3: Numbered Steps</h2>
              
              {quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-center mb-8">
                    {Array.from({ length: quizQuestions.length }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          i <= quizQuestion 
                            ? 'bg-yellow-500 text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        }`}>
                          {i + 1}
                        </div>
                        {i < quizQuestions.length - 1 && (
                          <div className={`w-12 h-px mx-2 ${
                            i < quizQuestion ? 'bg-yellow-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-8 text-center leading-relaxed">
                    {quizQuestions[quizQuestion].question}
                  </h3>
                  
                  <div className="space-y-4">
                    {quizQuestions[quizQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (index === quizQuestions[quizQuestion].correct) {
                            setQuizScore(quizScore + 1)
                          }
                          setQuizQuestion(quizQuestion + 1)
                        }}
                        className="group w-full p-4 border-l-4 border-gray-300 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 text-left rounded-lg"
                      >
                        <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-medium text-black dark:text-white mb-6">Quiz Complete!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Your score: <span className="font-medium text-black dark:text-white">{quizScore}</span> out of <span className="font-medium text-black dark:text-white">{quizQuestions.length}</span>
                  </p>
                  
                  <button
                    onClick={() => {
                      setQuizQuestion(0)
                      setQuizScore(0)
                    }}
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* Style 4: Rounded Cards */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 4: Rounded Cards</h2>
              
              {quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Question {quizQuestion + 1} of {quizQuestions.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-yellow-500 h-1 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-8 text-center leading-relaxed">
                    {quizQuestions[quizQuestion].question}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[quizQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (index === quizQuestions[quizQuestion].correct) {
                            setQuizScore(quizScore + 1)
                          }
                          setQuizQuestion(quizQuestion + 1)
                        }}
                        className="group p-6 dark:bg-gray-900 rounded-xl hover:bg-yellow-500 dark:hover:bg-yellow-500 transition-all duration-300 text-left hover:scale-105"
                      >
                        <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="dark:bg-gray-900 rounded-xl p-8">
                    <h3 className="text-3xl font-medium text-black dark:text-white mb-6">Quiz Complete!</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      Your score: <span className="font-medium text-black dark:text-white">{quizScore}</span> out of <span className="font-medium text-black dark:text-white">{quizQuestions.length}</span>
                    </p>
                    
                    <button
                      onClick={() => {
                        setQuizQuestion(0)
                        setQuizScore(0)
                      }}
                      className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-white px-6 py-3 rounded-xl hover:from-yellow-600 hover:to-yellow-600 transition-all duration-300"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Style 5: Animated Interactive Quiz */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-8 text-center">Style 5: Animated Interactive Quiz</h2>
              
              {!isQuizActive && quizQuestion === 0 ? (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="border border-black dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl mb-8">
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Interactive Knowledge Test</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Challenge yourself with {quizQuestions.length} questions about Jenjo's expertise. 
                      Get instant feedback and track your progress!
                    </p>
                    <button
                      onClick={startQuiz}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Start Interactive Quiz
                    </button>
                  </div>
                </div>
              ) : quizQuestion < quizQuestions.length ? (
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8">
                    <div className="text-center mb-6">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {quizQuestion + 1} / {quizQuestions.length}
                      </span>
                    </div>
                    <div className="flex justify-center space-x-2">
                      {Array.from({ length: quizQuestions.length }, (_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i <= quizQuestion ? 'bg-yellow-500' : 'bg-gray-200 dark:bg-gray-700'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-12 text-center leading-relaxed">
                    {quizQuestions[quizQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {quizQuestions[quizQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (index === quizQuestions[quizQuestion].correct) {
                            setQuizScore(quizScore + 1)
                          }
                          setQuizQuestion(quizQuestion + 1)
                        }}
                        className="group w-full p-4 text-left dark:hover:bg-gray-900 transition-all duration-300 rounded-lg"
                      >
                        <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors">
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-medium text-black dark:text-white mb-6">Quiz Complete!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                    Your score: <span className="font-medium text-black dark:text-white">{quizScore}</span> out of <span className="font-medium text-black dark:text-white">{quizQuestions.length}</span>
                  </p>
                  
                  <button
                    onClick={() => {
                      setQuizQuestion(0)
                      setQuizScore(0)
                    }}
                    className="text-yellow-500 hover:text-yellow-600 transition-colors text-lg font-medium"
                  >
                    Try Again
                  </button>
                </div>
              )}
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
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
