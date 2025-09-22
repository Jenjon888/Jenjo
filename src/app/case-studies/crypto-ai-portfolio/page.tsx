import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Logo and Company Name */}
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl">C</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">Cryptfolio</span>
            </div>
          </div>

          {/* Project Summary */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Designed a innovative crypto portfolio interface with explainable AI to help investors make confident decisions.
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[500px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              src="/crypto/7.png"
              alt="Crypto Portfolio Manager Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* Project Information */}
      <section className="px-8 pb-8">
        <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-black text-gray-800 dark:text-white rounded-lg p-8">
          <div className="flex flex-wrap gap-[60px]">
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Industry</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Fintech</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Crypto Portfolio Platform</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Product UX/UI Lead</p>
            </div>
          </div>
        </div>
      </section>


      {/* Project Details */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* What We Did Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">What I did:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  The work spans research, information architecture, flows, high fidelity UI, interactive prototypes, and a lightweight design system that is ready for engineering discovery. End to end journey from connect accounts to portfolio to insights to recommendation to review.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "UX Research",
                    "UI Design", 
                    "Strategy",
                    "Information Architecture",
                    "Interactive Prototypes",
                    "Design System"
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-gray-100 dark:bg-[#2a2a2a] px-4 py-2 rounded-full text-sm text-gray-800 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between What We Did and Challenge */}
          {/* <section className="py-8">
            <div className="w-full h-[980px] relative overflow-hidden">
              <Image
                src="/crypto/6.png"
                alt="Project Overview - Initial concepts and project scope"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* The Challenge Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">The Challenge</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  Investors deal with scattered data and noisy signals. This concept shows how a calm interface and explainable intelligence can reduce effort, build trust, and help people act with confidence while staying in control.
                </p>
                <p>
                  The key challenge was creating a platform that could handle complex financial data 
                  while remaining intuitive for users with varying levels of crypto investment experience. 
                  We needed to balance advanced functionality with user-friendly design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Create a competitive AI-powered investment platform</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Increase user engagement and portfolio growth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Build trust in AI-driven financial recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Scale platform for diverse investment strategies</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Make informed investment decisions with AI insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Track portfolio performance across multiple assets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Understand complex crypto market dynamics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Access professional-grade tools with simple interface</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between Challenge and Approach */}
          {/* <section className="py-8">
            <div className="w-full h-[480px] relative overflow-hidden">
              <Image
                src="/crypto/2.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* Our Approach Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Approach</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Role</h3>
                    <p>
                I led the entire experience from strategy to pixels. I shaped the product narrative, defined the information architecture, designed interactions and visuals, and created prototypes to test comprehension and decision making. I wrapped everything into a clear handoff pack for an engineering team to pick up.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Audience and Core Jobs</h3>
                    <p>
                Two primary groups guided the design. Emerging investors want clarity and simple guidance. Active investors want deeper analytics, rules, and the ability to automate with safeguards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Core Jobs the Product Must Support</h3>
                    <p>
                • Connect exchanges and wallets using read only permissions<br/>
                • See true holdings, cost basis, and performance across time<br/>
                • Understand exposure, drawdown, and concentration risk<br/>
                • Act on recommendations with a preview of impact<br/>
                • Export reports for tax and accounting
              </p>
            </div>
          </div>
              </div>
            </div>
          </section>

                     {/* Image Placeholder - Between Challenge and Approach */}
           <section className="py-8">
             <div className="w-full h-[400px] md:h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
               <Image
                 src="/crypto/3.png"
                 alt="Problem Analysis - User pain points and market research"
                 fill
                 className="object-cover"
               />
             </div>
           </section>

          {/* Approach Visuals - Full Width */}
          {/* <section className="py-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="w-full h-[420px] relative overflow-hidden">
                  <Image
                    src="/crypto/3.png"
                    alt="Design Process - Figma wireframes and prototypes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-[420px] relative overflow-hidden">
                  <Image
                    src="/crypto/4.png"
                    alt="Development Implementation - React components and API integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section> */}

          {/* Research and Insights Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Research and Insights</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Research Methodology</h3>
                    <p>
                      I combined short interviews, competitor scans, and quick concept tests using clickable prototypes. I focused on decision moments such as checking daily risk, rebalancing, and handling alerts.
                    </p>
                    
                    {/* Key Insight Callout */}
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          Investors didn't just want data, they needed <strong>trust, transparency, and actionable insights</strong>. Most were overwhelmed by market noise and needed clear signals they could understand and act upon with confidence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">User Research Findings</h3>
                    <p>
                      Through interviews with both novice and experienced crypto investors, I discovered that trust is the primary barrier to adoption. Users need to understand not just what the AI recommends, but why it's making those recommendations and what the potential risks are.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 mt-4">Competitive Analysis</h4>
                    <p>
                      Analysis of existing platforms revealed that most focus on either simplicity (losing power users) or complexity (overwhelming beginners). The opportunity was to create a platform that could scale with user sophistication while maintaining clarity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
                    <p>
                      The crypto market's volatility creates unique challenges for portfolio management. Users need real-time insights but also want to understand the reasoning behind recommendations to build confidence in their investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Image Placeholder - Between Challenge and Approach */}
          <section className="py-8">
            <div className="w-full h-[500px] md:h-[980px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/crypto/6.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="py-8">
            <div className="w-full h-[500px] md:h-[980px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/crypto/5.png"
                alt="Problem Analysis - User pain points and market research"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Design Process Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Design Process</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Information Architecture</h3>
                    <p>
                      I centered the IA around three questions. What do I own. What should I care about right now. What can I do next.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-2 mt-4">Sections and Their Roles</h4>
                    <p>
                      • <strong>Portfolio</strong> gives the single view across exchanges and chains<br/>
                      • <strong>Insights</strong> surfaces signals such as trend shifts, funding extremes, correlation breaks, and large wallet flows<br/>
                      • <strong>Automations</strong> enables rule based actions and schedules<br/>
                      • <strong>Activity and Audit</strong> provide history for transparency and learning<br/>
                      • <strong>Settings</strong> manages connections, permissions, and exports
                    </p>
                    
                    {/* Information Architecture */}
                    {/* <div className="mt-6 w-full h-[300px] relative overflow-hidden rounded-lg">
                      <Image
                        src="/crypto/5.png"
                        alt="Information Architecture - Sitemap and user flows"
                        fill
                        className="object-cover"
                      />
                    </div> */}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
                    <p>
                      The biggest challenge was optimizing chart rendering performance for large datasets. 
                      We implemented virtual scrolling and data pagination to handle real-time updates without 
                      compromising user experience. API rate limiting required careful data caching strategies 
                      to ensure smooth interactions across all portfolio views.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Iteration & Refinement</h3>
                    <p>
                      We conducted three rounds of user testing, each revealing new insights. The first iteration 
                      focused on basic functionality, the second on performance optimization, and the third on 
                      advanced features. Each cycle helped us refine the balance between simplicity and power, 
                      ultimately creating a platform that serves both novice and experienced investors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Results Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Single Portfolio View */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">1</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Single Portfolio View</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    A unified dashboard that reconciles exchange and on-chain data, providing investors with a complete picture of their holdings across all platforms.
                  </p>
                </div>

                {/* Result 2 - Insight Cards */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">100%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Transparent Signals</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Insight cards that explain signals with confidence and risk levels, helping users understand market trends and make informed decisions.
                  </p>
                </div>

                {/* Result 3 - Automation Builder */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">∞</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Automation with Guardrails</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    An automation builder with built-in safeguards and instant pause functionality, allowing users to set rules while maintaining control.
                  </p>
                </div>

                {/* Result 4 - Design System */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Accessibility First</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    A chart-friendly design system with accessibility baked in, ensuring the platform is usable by investors of all abilities and experience levels.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="pt-8">
          <div className="flex justify-between items-center">
              {/* Back to All Case Studies */}
            <Link 
              href="/case-studies"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-black dark:group-hover:border-white transition-colors">
                  <ArrowLeft size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Back to</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">All Case Studies</span>
                </div>
            </Link>

            {/* Next Case Study */}
            <Link 
              href="/case-studies/ux-research-chatbot"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">UX Research Chatbot</span>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-black dark:group-hover:border-white transition-colors">
                  <ArrowRight size={14} />
              </div>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
