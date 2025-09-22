'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import SplitText from '@/components/SplitText'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import FadeContent from './FadeContent'

export default function Blog() {
  const titleRef = useRef<HTMLDivElement>(null)
  
  const blogPosts = [
    {
      id: 1,
      title: "Why Senior UX/UI Designers Still Matter in the AI Era",
      excerpt: "While AI tools are powerful assistants, senior UX/UI designers remain essential for strategic thinking, human centred design, and complex problem solving that AI cannot yet replicate.",
      date: "2025-07-15",
      readTime: "6 min read",
      category: "Design Leadership",
      slug: "why-senior-designers-still-matter-ai-era",
      image: "/blog/DL1.jpg"
    },
    {
      id: 2,
      title: "AI Adoption in Business: Real World Transformation Stories",
      excerpt: "Exploring how companies like Netflix, Amazon, and PayPal are using AI to transform their operations and drive measurable business results.",
      date: "2025-05-20",
      readTime: "8 min read",
      category: "AI & Business",
      slug: "ai-adoption-business-transformation",
      image: "/blog/AI3.jpg"
    },
    {
      id: 3,
      title: "The Future of UX Design in AI Powered Applications",
      excerpt: "Exploring how artificial intelligence is reshaping user experience design and what designers need to know to stay ahead.",
      date: "2025-03-25",
      readTime: "5 min read",
      category: "UX Design",
      slug: "future-ux-design-ai",
      image: "/blog/AI2.jpg"
    },
    {
      id: 4,
      title: "Building Design Systems That Scale",
      excerpt: "Lessons learned from creating design systems for fintech applications and how to maintain consistency across large teams.",
      date: "2025-01-30",
      readTime: "7 min read",
      category: "Design Systems",
      slug: "building-design-systems-scale",
      image: "/blog/figma-comp.png"
    },
    {
      id: 5,
      title: "User Research Methods That Actually Work",
      excerpt: "A practical guide to conducting effective user research in fast paced startup environments without breaking the budget.",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "User Research",
      slug: "user-research-methods-work",
      image: "/blog/UR1.jpg"
    },
    {
      id: 6,
      title: "From Figma to Production: Bridging the Design Development Gap",
      excerpt: "How to create handoff processes that ensure your designs are implemented exactly as intended by development teams.",
      date: "2024-10-10",
      readTime: "8 min read",
      category: "Process",
      slug: "figma-production-bridging-gap",
      image: "/blog/design3.jpg"
    },
    {
      id: 7,
      title: "The Psychology of Colour in Financial Applications",
      excerpt: "Understanding how colour choices impact user trust and behaviour in fintech products, with real world examples.",
      date: "2024-09-15",
      readTime: "4 min read",
      category: "Psychology",
      slug: "psychology-color-financial-apps",
      image: "/blog/colour1a.jpg"
    },
    {
      id: 8,
      title: "Remote Design Collaboration: Tools and Techniques",
      excerpt: "Best practices for maintaining creative collaboration and design quality when working with distributed teams.",
      date: "2024-09-01",
      readTime: "6 min read",
      category: "Collaboration",
      slug: "remote-design-collaboration",
      image: "/blog/RE1.jpg"
    }
  ]

  const categories = ["All", "Design Leadership", "AI & Business", "UX Design", "Design Systems", "User Research", "Process", "Psychology", "Collaboration"  ]

  // GSAP Animation for Blog Title
  useEffect(() => {
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
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Section Title */}
      <div className="flex justify-center px-6 md:px-12 py-12">
        <div ref={titleRef} className="w-full max-w-6xl text-center" style={{ opacity: 0 }}>
          <SplitText
            text="Blog"
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

      {/* Category Filter */}
      {/* <div className="flex justify-center px-8 pb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}

      {/* Blog Posts Grid */}
      <div className="flex justify-center px-8 pb-24">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const content = (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors h-full flex flex-col">
                      {/* Image */}
                      <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="space-y-4 flex-grow">
                          {/* Category */}
                          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                          
                          {/* Title */}
                          <h2 className="text-xl font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                            {post.title}
                          </h2>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        {/* Meta and Read More - Fixed at bottom */}
                        <div className="mt-6 space-y-4">
                          {/* Meta */}
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          {/* Read More */}
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors group">
                            <span className="pulse-orange-hover transition-all duration-300 group-hover:scale-110">
                              Read more
                            </span>
                            <ArrowRight size={14} className="pulse-orange-hover transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );

              // Apply FadeContent to all blog cards with staggered timing
              return (
                <FadeContent 
                  key={post.id} 
                  blur={true} 
                  duration={1000} 
                  easing="ease-out"
                  initialOpacity={0}
                  delay={post.id * 200} // Stagger by 200ms for each item
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
