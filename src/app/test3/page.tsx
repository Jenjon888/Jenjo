'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Plus, Minus, Eye, EyeOff, BookOpen, GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Test3() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [visibleEducation, setVisibleEducation] = useState<boolean[]>([])
  const [activeTab, setActiveTab] = useState(0)

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Arts - Hons (2.1)",
      field: "Digital Arts and Multimedia Computing",
      year: "1999",
      institution: "University of Creative Arts",
      location: "London, UK",
      description: "Comprehensive study of digital media, computer graphics, interactive design, and multimedia technologies. Focus on creative applications of technology in art and design.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Final Year Project: Interactive Digital Art Installation",
        "Collaborated with local design agencies on real-world projects"
      ],
      skills: ["Digital Media", "Computer Graphics", "Interactive Design", "Multimedia Production"]
    },
    {
      id: 2,
      degree: "UX Design Certification",
      field: "User Experience Design",
      year: "2018",
      institution: "General Assembly",
      location: "London, UK",
      description: "Intensive program covering user research, information architecture, wireframing, prototyping, and usability testing methodologies.",
      achievements: [
        "Top 10% of cohort",
        "Capstone project featured in portfolio showcase",
        "Mentored 3 junior designers post-graduation"
      ],
      skills: ["User Research", "Information Architecture", "Wireframing", "Prototyping"]
    },
    {
      id: 3,
      degree: "Frontend Development Bootcamp",
      field: "Web Development",
      year: "2020",
      institution: "Le Wagon",
      location: "Remote",
      description: "Full-stack web development program with emphasis on modern JavaScript frameworks, responsive design, and collaborative development practices.",
      achievements: [
        "Built 5 full-stack applications",
        "Led team project that won Demo Day",
        "Contributed to open-source projects"
      ],
      skills: ["JavaScript", "React", "Node.js", "Responsive Design"]
    }
  ]

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const toggleEducationVisibility = (index: number) => {
    setVisibleEducation(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navigation />
      
      <main className="pt-20">
        <section className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Education Display Styles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              5 sophisticated ways to showcase educational background with elegant reveal mechanisms.
            </p>
          </div>
        </section>

        <section className="px-8 py-16 space-y-32">

          {/* Style 1: Accordion Cards */}
          <div>
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 1: Accordion Cards</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Clean accordion cards that expand to reveal detailed information with smooth animations.</p>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group hover:border-orange-500 transition-all duration-300"
                >
                  <div 
                    className="p-6 cursor-pointer bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-300"
                    onClick={() => toggleExpanded(edu.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="w-5 h-5 text-orange-500" />
                          <h3 className="text-xl font-semibold text-black dark:text-white">{edu.degree}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{edu.field}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edu.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-500">View Details</span>
                        {expandedItems.includes(edu.id) ? (
                          <Minus className="w-5 h-5 text-orange-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-orange-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedItems.includes(edu.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30">
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{edu.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-black dark:text-white mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4 text-orange-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-black dark:text-white mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-orange-500" />
                            Skills Gained
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Style 2: Timeline with Reveal */}
          <div>
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 2: Timeline with Reveal</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Vertical timeline with hidden details that slide in from the right on reveal.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                
                {educationData.map((edu, index) => (
                  <div key={edu.id} className="relative flex items-start gap-8 mb-12 last:mb-0">
                    {/* Timeline dot */}
                    <div className="relative z-10 w-16 h-16 bg-white dark:bg-black border-4 border-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-orange-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{edu.degree}</h3>
                            <p className="text-orange-500 font-medium mb-1">{edu.field}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                              <span>{edu.institution}</span>
                              <span>•</span>
                              <span>{edu.year}</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => toggleEducationVisibility(index)}
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
                          >
                            {visibleEducation[index] ? (
                              <>
                                <EyeOff className="w-4 h-4" />
                                Hide
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4" />
                                View Details
                              </>
                            )}
                          </button>
                        </div>
                        
                        {/* Reveal content */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          visibleEducation[index] ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{edu.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium text-black dark:text-white mb-2 text-sm">Achievements</h4>
                                <ul className="space-y-1">
                                  {edu.achievements.map((achievement, i) => (
                                    <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {achievement}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium text-black dark:text-white mb-2 text-sm">Skills</h4>
                                <div className="flex flex-wrap gap-1">
                                  {edu.skills.map((skill, i) => (
                                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Style 3: Collapsible Education Display */}
          <div>
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 3: Collapsible Education Display</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Clean, collapsible display that expands to show detailed information when clicked.</p>
            
            <div className="max-w-5xl mx-auto">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="mb-8 last:mb-0">
                  <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-[12px] overflow-hidden hover:border-orange-500 transition-all duration-300">
                    
                    {/* Collapsed Header */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-300"
                      onClick={() => toggleEducationVisibility(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-6 h-6 text-orange-500" />
                          <div>
                            <h3 className="text-xl font-semibold text-black dark:text-white">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.field} • {edu.year}</p>
                          </div>
                        </div>
                        
                        <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-[12px] hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300">
                          {visibleEducation[index] ? 'Show Less' : 'View More'}
                          {visibleEducation[index] ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      visibleEducation[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Main Info */}
                          <div className="md:col-span-2">
                            <div className="mb-4">
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 pt-4">Thames Valley University • {edu.location}</p>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{edu.description}</p>
                              
                              {/* Final Year Project - Bottom Left */}
                              <div className="pt-4">
                                <ul className="space-y-2">
                                  <li className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                    <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {edu.achievements[1]} {/* Final Year Project */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          {/* Sidebar */}
                          <div className="space-y-6">
                            <div className="pt-4">
                              <h4 className="font-medium text-black dark:text-white mb-3 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-orange-500" />
                                Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {[...edu.skills, "Full Stack Development", "Traditional Art"].map((skill, i) => (
                                  <span key={i} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Style 4: Minimalist Cards */}
          <div>
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 4: Minimalist Cards</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Ultra-clean cards with subtle hover effects and elegant content reveals.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-full hover:border-orange-500 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-1">{edu.degree}</h3>
                      <p className="text-orange-500 text-sm font-medium">{edu.field}</p>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Reveal Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{edu.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-black dark:text-white text-sm mb-2">Key Skills</h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.skills.map((skill, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-black dark:text-white text-sm mb-2">Notable Achievement</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{edu.achievements[0]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* View More Indicator */}
                    <div className={`flex items-center justify-center mt-4 transition-all duration-300 ${
                      hoveredCard === index ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <span className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1">
                        Hover for details
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Style 5: Slide-out Panel */}
          <div>
            <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 5: Slide-out Panel</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Compact list with slide-out panels that reveal detailed information.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-3">
                {educationData.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className="relative group"
                  >
                    {/* Main Row */}
                    <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors duration-300">
                            <GraduationCap className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-black dark:text-white">{edu.degree}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                              <span>{edu.field}</span>
                              <span>•</span>
                              <span>{edu.year}</span>
                              <span>•</span>
                              <span>{edu.institution}</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleEducationVisibility(index)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300"
                        >
                          {visibleEducation[index] ? 'Less' : 'More'}
                          {visibleEducation[index] ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Slide-out Panel */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      visibleEducation[index] ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg p-6 ml-14">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-black dark:text-white mb-3 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-orange-500" />
                              About This Program
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                            
                            <div>
                              <h5 className="font-medium text-black dark:text-white text-sm mb-2">Skills Developed</h5>
                              <div className="flex flex-wrap gap-2">
                                {edu.skills.map((skill, i) => (
                                  <span key={i} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-black dark:text-white mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4 text-orange-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                  <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        <div className="px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}