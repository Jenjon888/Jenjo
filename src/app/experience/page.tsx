import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import SplitText from '@/components/SplitText'

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Section Title */}
      <div className="flex justify-center px-6 md:px-12 py-12">
        <div className="w-full max-w-6xl">
          <SplitText
            text="Experience"
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
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
         {/* Left Column - CV Info and Stats */}
         <div className="lg:w-1/3 lg:pr-12 lg:pl-8 lg:py-8 lg:fixed lg:top-20 lg:left-0 lg:h-screen lg:bg-white lg:dark:bg-black px-8 py-8 lg:px-0 lg:py-0">
           <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 lg:bg-transparent lg:dark:bg-transparent lg:rounded-none lg:p-0 pt-8 pl-5 -mt-5">
           <h2 className="text-2xl md:text-3xl font-medium text-black dark:text-white">
            Current CV
          </h2>
             <div className="flex items-center gap-3 mb-8">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               <span className="text-black dark:text-white">Available</span>
             </div>

             {/* Quick Stats */}
             <div className="space-y-6">
               <div>
                 <h2 className="text-lg font-medium text-black dark:text-white mb-4">Quick Stats</h2>
                 <div className="space-y-3 text-sm">
                   <div className="flex justify-between">
                     <span className="text-gray-600 dark:text-gray-400">Experience</span>
                     <span className="text-black dark:text-white font-medium">15+ years</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-gray-600 dark:text-gray-400">Projects</span>
                     <span className="text-black dark:text-white font-medium">50+</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-gray-600 dark:text-gray-400">Industries</span>
                     <span className="text-black dark:text-white font-medium">Fintech, EdTech, Banking</span>
                   </div>
                 </div>
               </div>

               {/* Key Achievements */}
               {/* <div>
                 <h3 className="text-lg font-medium text-black dark:text-white mb-4">Key Results</h3>
                 <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                   <li>• 40% faster component development</li>
                   <li>• 25% increase in dev efficiency</li>
                   <li>• 20% improvement in user satisfaction</li>
                   <li>• 50% reduction in navigation errors</li>
                 </ul>
               </div> */}
             </div>
           </div>
         </div>

        {/* Right Column - Professional Experience */}
        <div className="lg:w-2/3 lg:ml-[33.333333%] px-8 py-8 space-y-12 overflow-y-auto max-w-[600px]">
              
               

              {/* Experience Section */}
              <section>
                <h2 className="text-2xl font-medium mb-6">Professional Experience</h2>
                <div className="space-y-8">
                  
                  {/* AI Research and Development */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-thin text-black dark:text-white">UX/UI & Development</h3>
                      <span className="text-black dark:text-white text-sm">Present</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Independent Projects</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Conceptualised and engineered a conversational AI chatbot designed to accelerate the product design lifecycle and improve cross-team collaboration by centralising feedback.</li>
                      <li>• Architected and developed a full-stack AI-powered crypto portfolio management application, incorporating real-time sentiment analysis and predictive buy/sell signals.</li>
                      <li>• Enhanced development proficiency and accelerated project creation by integrating AI coding assistants, including Cursor and GitHub Copilot, into the workflow.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Poker Dealer Academy */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">Product Designer/Consultant</h3>
                      <span className="text-black dark:text-white text-sm">Jul 2023 – Dec 2023</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Poker Dealer Academy (PDA)</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Collaborated with lead engineering to design and launch a bespoke CMS video platform, spearheading the creation of a custom video player and interactive dashboard for over 1,000 students.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* YLD */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">Product Designer/Consultant</h3>
                      <span className="text-black dark:text-white text-sm">Jan 2023 – Jul 2023</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">YLD</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Co-led the development of a scalable, multi-brand design system for a financial services client, unifying the user experience and streamlining development across 24 distinct brands.</li>
                      <li>• Reduced component development time by an estimated 40% by creating comprehensive documentation and foundational guidelines on Supernova.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Medify */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">Product Designer</h3>
                      <span className="text-black dark:text-white text-sm">Apr 2022 – Sep 2022</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Medify</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Directed the end-to-end UX/UI redesign for a responsive learning platform, delivering a new design system that increased developer efficiency by 25% and improved user satisfaction scores by an estimated 20% post-launch.</li>
                      <li>• Validated design concepts through structured usability testing with over 30 users, leveraging high-fidelity prototypes to gather insights that reduced critical navigation errors by 50%.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Eiger Trading */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">Lead Product Designer</h3>
                      <span className="text-black dark:text-white text-sm">Sep 2021 – Feb 2022</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Eiger Trading</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Led product design for a greenfield commodities trading application, defining the platform's visual identity and user experience from initial wireframes to final UI for a Shari'ah-compliant product.</li>
                      <li>• Engineered reusable components and design patterns that standardized the design across products and accelerated development timelines.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Mortgage Gym */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">UX/UI Design Lead</h3>
                      <span className="text-black dark:text-white text-sm">Mar 2021 – May 2021</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Mortgage Gym</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Led UX/UI design for a complex mortgage fact-finder tool, translating intricate financial processes into a clear, user-friendly journey that helped customers make more informed financing decisions.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* CoGo */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">Lead Product Designer</h3>
                      <span className="text-black dark:text-white text-sm">Oct 2019 – Dec 2019</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">CoGo</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Led UX and UI for an ethical fintech app, collaborating with a cross-functional team of 10 to deliver a redesigned feature under a fixed five-week deadline.</li>
                      <li>• Investigated user engagement issues by conducting over 15 user interviews and focus groups, identifying critical pain points that led to a redesign increasing user retention by 10% in the first month.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* HSBC */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">UX Lead</h3>
                      <span className="text-black dark:text-white text-sm">Jul 2019 – Sep 2019</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">HSBC</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Shaped the UX for HSBC Kinetic's Data & Insights features, simplifying cash flow analysis and accounting software integration for small business owners.</li>
                      <li>• Organized and analyzed regular user testing sessions to refine navigation and information architecture, presenting design rationale to Heads of Design, UX, and Development.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Urbanarchive */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">UX/UI Consultant</h3>
                      <span className="text-black dark:text-white text-sm">Jan 2019 – Feb 2019</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Urbanarchive</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Shaped the design and delivery approach by gathering stakeholder requirements, creating responsive wireframes, and building HTML prototypes to validate concepts.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* New Signature */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">UX/UI Designer</h3>
                      <span className="text-black dark:text-white text-sm">Jul 2018 – Feb 2019</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">New Signature (Agency)</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Designed UX wireframes, interactive prototypes, and scalable design systems for clients including Tech Data and the British Heart Foundation.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                  {/* Open Banking */}
                  <div className="pb-1.5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-white">UX/UI Lead</h3>
                      <span className="text-black dark:text-white text-sm">Aug 2017 - Feb 2018</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">Open Banking</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Served as the sole UX/UI lead for two core development teams, designing web and mobile applications that incorporated new Open Banking API standards.</li>
                      <li>• Created and validated interactive prototypes for security models and user consent flows through regular user testing sessions to improve usability.</li>
                      <li>• Presented prototypes to over 200 industry stakeholders, including representatives from Barclays and HSBC, to communicate complex standards and drive adoption.</li>
                    </ul>
                    <div className="border-t border-gray-700 mt-4"></div>
                  </div>

                </div>
              </section>

              {/* Skills Section */}
              <section>
                <h2 className="text-2xl font-medium mb-6">Core Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Design Skills */}
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-4">Design & Research</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• User Research & Testing</li>
                      <li>• Wireframing & Prototyping</li>
                      <li>• Interaction Design</li>
                      <li>• Design Systems</li>
                      <li>• Usability Testing</li>
                      <li>• Competitive Analysis</li>
                    </ul>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-4">Technical & Tools</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Figma, Adobe Creative Suite</li>
                      <li>• React.js, Next.js, Vue.js</li>
                      <li>• HTML/CSS, Tailwind CSS</li>
                      <li>• JavaScript, TypeScript</li>
                      <li>• Git, GitHub</li>
                      <li>• AI Integration Design</li>
                    </ul>
                  </div>

                </div>
              </section>





        </div>
      </div>

      <Footer />
    </div>
  );
}
