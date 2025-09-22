'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import SplitText from '@/components/SplitText'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentSectionRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsSectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const clientFeedbackTitleRef = useRef<HTMLHeadingElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Mark van Harmelen",
      role: "Provides strategy, value and solutions / PhD in Computer Architecture",
      content: "Jen's ability as a UX designer to understand users, produce high-quality responsive UI designs, and extend system usefulness is exceptional. Her skill in writing functional specifications that aid developers and her positive contribution to team social dynamics makes her invaluable. I would readily employ her again."
    },
    {
      id: 2,
      name: "Paul Hopley",
      role: "Product Manager at Backbase.com",
      content: "Jen worked with us on a really complicated project and consistently delivered above and beyond our expectations. She is fast, detailed and well documented. I would be happy to recommend Jen for any UX project."
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Senior Software Developer at MSD",
      content: "Jen is hard working, passionate and strives for perfection. She works well with developers in an agile environment and can deliver to tight deadlines."
    },
    {
      id: 4,
      name: "Rachel Fournier",
      role: "Director at Initialize",
      content: "Jen is a fantastic UX Consultant. A client was extremely satisfied with the quality of her work, professionalism, flexibility and work ethic, and her brilliant personality."
    },
    {
      id: 5,
      name: "Nick Grantham",
      role: "Associate Director at Zebra People",
      content: "Jen is most definitely on my A-team of UX freelancers! I have worked with her multiple times and she is reliable, creative, hard working and has a fantastic personality. Clients would gladly have her back."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  // GSAP Animations for About Page
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Tag Fade In Effect
    if (tagRef.current) {
      gsap.set(tagRef.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(tagRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1
      })
    }

    // Title Fade In Effect
    if (titleRef.current) {
      gsap.set(titleRef.current, { 
        opacity: 0
      })
      
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2
      })
    }


    // Content Section Fade In Effect
    if (contentRef.current && contentSectionRef.current) {
      gsap.set(contentRef.current, { 
        opacity: 0,
        y: 50
      })
      
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Client Feedback Title Fade In Effect
    if (clientFeedbackTitleRef.current && testimonialsSectionRef.current) {
      gsap.set(clientFeedbackTitleRef.current, { 
        opacity: 0,
        y: 30
      })
      
      gsap.to(clientFeedbackTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Testimonials Section Fade In Effect
    if (testimonialsRef.current && testimonialsSectionRef.current) {
      gsap.set(testimonialsRef.current, { 
        opacity: 0,
        y: 50
      })
      
      gsap.to(testimonialsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsSectionRef.current,
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

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Page Title */}

      {/* Availability Badge */}
      <div className="flex justify-center px-8 pt-8 pb-4">
        <div ref={tagRef} className="flex items-center gap-3" style={{ opacity: 0, transform: "translateY(30px)" }}>
          <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm font-medium">Open to new opportunities</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">London-based, open to remote</span>
        </div>
      </div>


      {/* Content Sections - Minimal Layout */}
      {/* Section Title */}
      <div className="flex justify-center px-6 md:px-12 py-12">
        <div ref={titleRef} className="w-full max-w-6xl text-center" style={{ opacity: 0 }}>
          <SplitText
            text="About"
            tag="h1"
            className="text-2xl md:text-3xl font-medium text-black dark:text-white"
            splitType="chars"
            delay={50}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 50, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </div>
      </div>

      <div ref={contentSectionRef} className="flex justify-center px-8 pb-16">
        <div className="max-w-3xl w-full space-y-16">
          
          {/* My Story Section */}
          <section ref={contentRef} className="space-y-6" style={{ opacity: 0, transform: "translateY(50px)" }}>
            
            <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p>
                I've worked in the industry for over 15 years, across all sectors including advertising agencies, fintech, banking, hedge funds, education, and charity, working with startups and large corporations alike. I am able to fully adjust to whatever size team I'm in. Comfortable working by myself or within a team, I also have experience creating my own startups including an award-winning digital magazine and innovative social media app. I thrive in environments where I can work on projects from scratch or get involved in redesign projects. My interests include art, writing and coding.
              </p>
              <p>
                I've learnt so much over the years including trials and errors, but I'm a natural geek at heart and a tech nerd. Every day you will find me researching, designing, animating or coding. I like to be kept busy as I'm always full of ideas and like to get things done after finding out how to do it. With the advent of AI agents, I am finding it a great assistant when it comes to transitioning my own projects from design to code and I absolutely love it.
              </p>
              <p>
                After taking some time to work on a few AI-related projects, I am now available for contract and full-time opportunities.
              </p>
            </div>
          </section>


          {/* Client Feedback Section */}
          <section ref={testimonialsSectionRef} className="space-y-6">
            <h2 ref={clientFeedbackTitleRef} className="text-3xl font-medium text-black dark:text-white" style={{ opacity: 0, transform: "translateY(30px)" }}>Client Feedback</h2>
            
            <div ref={testimonialsRef} className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 space-y-6" style={{ opacity: 0, transform: "translateY(50px)" }}>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>
              
              <div className="space-y-1">
                <p className="font-medium text-black dark:text-white">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>

              {/* Simple Navigation */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={prevTestimonial}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial 
                          ? 'bg-gray-600 dark:bg-gray-400' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>


      <Footer />
    </div>
  );
}
