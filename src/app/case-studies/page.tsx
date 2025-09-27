'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeContent from './FadeContent'
import SplitText from '@/components/SplitText'

export default function CaseStudies() {

  const highlights = [
    {
      id: 1,
      title: "Crypto Portfolio Platform",
      description: "Launching a premium crypto portfolio management platform with focus on performance and scalability.",
      metric: "40%",
      metricDescription: "increase in task completion after onboarding redesign",
      link: "/case-studies/crypto-ai-portfolio",
      image: "/charts.png",
      year: "2024"
    },
    {
      id: 2,
      title: "UX Research Chatbot",
      description: "A distinctive and immersive AI-powered chatbot for user research and design insights",
      metric: "1",
      metricDescription: "Awwwards nomination",
      link: "/case-studies/ux-research-chatbot",
      image: "/chatbot.jpg",
      year: "2025"
    },
    {
      id: 3,
      title: "Banking App",
      description: "Boosting user engagement for a major banking app with a user-first design approach",
      metric: "+20",
      metricDescription: "dynamic features for enhanced user experience",
      link: "/case-studies/banking-app",
      image: "/hsbc.jpg",
      year: "2019"
    },
    {
      id: 4,
      title: "Education Platform",
      description: "How do we build a strong and engaging learning platform for students and educators?",
      metric: "90+",
      metricDescription: "students onboarded in the first month",
      link: "/case-studies/education-platform",
      image: "/medify.jpg",
      year: "2022"
    },
    {
      id: 5,
      title: "YLD Design System",
      description: "Creating a comprehensive design system for YLD to ensure consistency and scalability across all digital products",
      metric: "50+",
      metricDescription: "components designed and documented",
      link: "/case-studies/yld-design-system",
      image: "/DS1.png",
      year: "2023"
    },
    {
      id: 6,
      title: "Cogo App",
      description: "Building a sustainable lifestyle app that helps users track and reduce their carbon footprint through smart insights",
      metric: "2.5k",
      metricDescription: "users actively reducing their carbon footprint",
      link: "/case-studies/cogo-app",
      image: "/1m_8.jpg",
      year: "2019"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Section Title */}
      <div className="flex justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-6xl">
          <SplitText
            text="Case Studies"
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

      {/* Case Studies Grid */}
      <div className="flex justify-center px-4 md:px-12 pb-20">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {highlights.map((item) => {
            const content = (
              <div key={item.id} className="group">
                {/* Image */}
                <Link href={item.link} className="block">
                  <div className="relative w-full h-96 md:h-96 overflow-hidden rounded-xl cursor-pointer">
                    <Image
                      src={item.image || "/20.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Title and Year - Below Image, Above Description */}
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-xl font-light text-black dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {item.year}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-base text-black dark:text-white leading-relaxed">
                  {item.description}
                </p>

                {/* Read Case Link */}
                <div className="flex justify-start border-t border-gray-300 dark:border-gray-700 mt-6 pt-4">
                  <Link
                    href={item.link}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors group"
                  >
                    <span className="pulse-orange-hover transition-all duration-300 group-hover:scale-110">
                      Read case
                    </span>
                    <ArrowRight size={16} className="pulse-orange-hover transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );

            // Apply FadeContent to all case studies with staggered timing
            return (
              <FadeContent 
                key={item.id} 
                blur={true} 
                duration={1000} 
                easing="ease-out" 
                initialOpacity={0}
                delay={item.id * 200} // Stagger by 200ms for each item
              >
                {content}
              </FadeContent>
            );
          })}
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}
