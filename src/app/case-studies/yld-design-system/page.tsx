import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function YLDDesignSystemCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl">Y</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">YLD - Design System</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Developed a scalable multi-brand design system that maintains consistency whilst preserving unique brand identities.
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              src="/DS1.png"
              alt="Multi-Brand Design System Components"
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
              <p className="text-gray-600 dark:text-gray-400 text-base">Design Systems</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Multi-Brand Design System</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Design System Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Company Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Company:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <div className="mb-6">
                  <img 
                    src="/YLD1.webp" 
                    alt="YLD Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <p>
                  YLD is a leading software consultancy and development company based in London, specialising in helping organisations transform their digital capabilities. Founded in 2013, YLD works with clients across various industries including financial services, healthcare, and e-commerce. The company is known for its expertise in modern software development practices, user experience design, and creating scalable digital solutions that drive business growth and innovation.
                </p>
              </div>
            </div>
          </section>

          {/* What We Did Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">What I did:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  In collaboration with another product designer, I developed a new multi-brand design system for a financial client, creating foundations, components, and comprehensive documentation to ensure consistency and scalability across various brands within the client's portfolio whilst preserving each brand's unique identity.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Design",
                    "System Design", 
                    "Documentation",
                    "Workshops",
                    "Training",
                    "Brand Theming"
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

          {/* Design System Overview */}
          {/* <section className="px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-[480px] relative overflow-hidden rounded-lg">
                <Image
                  src="/yld/2.jpg"
                  alt="Design System Overview - Multi-brand architecture and component structure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section> */}

          {/* The Challenge Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">The Challenge</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  This project was divided into three key stages: <strong>Discovery</strong>, <strong>Foundations</strong>, and <strong>Components</strong>. The challenge was to create a design system that could support multiple brands within a financial client's portfolio whilst maintaining each brand's unique identity and ensuring consistency across all touchpoints.
                </p>
                <p>
                  The system needed to be comprehensive enough to handle various use cases whilst remaining flexible enough to accommodate future brand additions and evolving requirements. Each brand required its own visual identity whilst sharing common interaction patterns and accessibility standards.
                </p>
                <p>
                  The financial industry's strict compliance requirements and the need for consistent user experiences across different products added complexity to the design system architecture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Create scalable multi-brand design system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Reduce design and development time across brands</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Ensure brand consistency whilst preserving unique identities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Meet financial industry compliance requirements</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Experience consistent interactions across all brands</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Access accessible and inclusive financial services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Navigate familiar patterns across different products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Trust in professional and polished interfaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Discovery Process Visual */}
          {/* <section className="px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="w-full h-[880px] relative overflow-hidden rounded-lg">
                <Image
                  src="/yld/9.png"
                  alt="Discovery Process - Stakeholder interviews and UI audit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section> */}

                    {/* Discovery Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Discovery</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Extensive User Research</h3>
                    <p className="pb-4">
                      We spent a significant amount of time conducting individual interviews with over 30 people working across different teams. This included designers, developers, product managers, account managers, and team leaders. It was important to understand their current ways of working and identify pain points in their existing processes.
                    </p>
                    
                    <p className="pb-4">
                      Discovery also involved taking a look at existing brand guidelines to ensure this information was not only up to date but it was considered when making the design systems using Figma design tokens. This comprehensive review helped us understand the current state of brand consistency and identify opportunities for improvement.
                    </p>
                    
                    <p className="pb-4">
                      It was interesting to discover that even people within the same team were using different design assets, components, and tools, which led to various inconsistencies in the design across web pages, forms, and other digital products.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Findings</h3>
                    <p className="pb-4">
                      Through our research, we discovered what was already working well and what wasn't. This was crucial for us to create a unified and consistent global design system that could support around 26 different brands whilst maintaining their unique identities.
                    </p>
                    
                    {/* Key Insight Callout */}
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          Even people within the same team were using different design assets, components, and tools, which led to various inconsistencies across web pages, forms, and other digital products. This fragmentation was the core challenge that our unified design system needed to solve.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Component Library & Training Visuals */}
          {/* <section className="px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-[420px] relative overflow-hidden rounded-lg">
                  <Image
                    src="/yld/12.png"
                    alt="Component Library - Brand theming kits and reusable patterns"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-[420px] relative overflow-hidden rounded-lg">
                  <Image
                    src="/yld/13.png"
                    alt="Workshops & Training - Interactive sessions and collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section> */}

                    <section className="py-8">
            <div className="w-full">
              <div className="w-full h-[880px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src="/yld/9.png"
                  alt="Discovery Process - Stakeholder interviews and UI audit"
                  fill
                  className="object-cover"
                />
              </div>
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
                    <h3 className="text-xl font-semibold mb-4">Research & Analysis</h3>
                    <p className="pb-4">
                      In depth UI audit and analysis of existing interfaces, user experience and visual design assessment, requirements gathering and prioritisation, and competitive analysis of other financial design systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Foundations Development</h3>
                    <p className="pb-4">
                      Authored the foundational elements and guidelines for the design system on Supernova. This included creating detailed documentation and compiling a comprehensive set of assets including colour systems, typography scales, spacing grids, and icon libraries. These foundations served as the blueprint for consistency and scalability across various brands within the client's portfolio.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Component Building & Training</h3>
                    <p className="pb-4">
                      Built core components for the design system, meticulously incorporating brand theming kits to ensure each brand's unique identity was preserved whilst maintaining overall cohesion. Created comprehensive asset library with brand theming kits, and blueprint for consistency and scalability across the organisation.
                    </p>
                    
                    <p className="pb-4">
                      Conducted interactive workshops covering design system principles and component usage. Hands on training sessions with real project examples using Figjam and Figma collaboration tools for team alignment. Created video tutorials and written guides for ongoing reference.
                    </p>
                    
                    <p className="pb-4">
                      Throughout the project, we held weekly presentations to explain findings, answer questions, and discuss next steps. The presentations involved a mixture of people in the office and remote workers, ensuring everyone stayed informed and engaged throughout the process.
                    </p>
                    
                    <p>
                      All user testing sessions were recorded and compiled into comprehensive reports to share with stakeholders, providing clear documentation of our findings and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

           <section className="">
              <div className="w-full">
                <div className="w-full h-[420px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/yld/6.png"
                    alt="Discovery Process - Stakeholder interviews and UI audit"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

                     <section className="">
             <div className="w-full">
               <div className="w-full h-[740px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                 <Image
                   src="/yld/3.png"
                   alt="Discovery Process - Stakeholder interviews and UI audit"
                   fill
                   className="object-cover"
                 />
               </div>
             </div>
           </section>

          <section className="pb-8">
            <div className="w-full">
              <div className="w-full h-[580px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src="/yld/11.png"
                  alt="Discovery Process - Stakeholder interviews and UI audit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Design Process Visuals */}
          <section className="pb-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-[480px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/yld/12.png"
                    alt="Design System Components - Multi-brand theming and patterns"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-[480px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/yld/13.png"
                    alt="Training & Adoption - Team workshops and implementation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Design Council Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Organisational Impact</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  Our research and work have also led to the company creating their own design council. This council ensures ongoing improvement and adaptation, keeping the design system up-to-date with emerging trends and technologies.
                </p>
                <p>
                  The establishment of this council represents a significant organisational commitment to design excellence and systematic thinking. It provides a structured approach to design system governance, decision-making, and continuous evolution.
                </p>
                <p>
                  The design council includes representatives from different brands and departments, ensuring that the system continues to meet diverse needs whilst maintaining consistency and quality standards across all touchpoints.
                </p>
              </div>
            </div>
          </section>

                              {/* Design Council Visual */}
                               <section className="py-8">
            <div className="w-full">
              <div className="w-full h-[460px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src="/yld/8.png"
                  alt="Design Council - Organisational impact and governance structure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Brand Coverage */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">100%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Brand Coverage</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Multi-brand support ensuring each brand's unique identity is preserved whilst maintaining overall system cohesion and consistency.
                  </p>
                </div>

                {/* Result 2 - Components Built */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">50+</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Components Built</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Comprehensive component library with reusable design patterns and brand theming kits integration for cross-project consistency.
                  </p>
                </div>

                {/* Result 3 - Design Council */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Design Council Established</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Organisational commitment to design excellence with ongoing improvement and adaptation to emerging trends and technologies.
                  </p>
                </div>

                {/* Result 4 - Training Success */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">∞</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Training Success</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Comprehensive training program with interactive workshops and hands-on sessions ensuring effective adoption across all teams.
              </p>
            </div>
          </div>
            </div>
          </section>

        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="px-8 py-4">
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
              href="/case-studies/cogo-app"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">Cogo App</span>
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