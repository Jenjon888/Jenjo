import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function BankingAppCaseStudy() {
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
                <span className="text-white dark:text-black font-bold text-xl">H</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">HSBC Kinetic App</span>
            </div>
          </div>

          {/* Project Summary */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Led UX design for HSBC Kinetic banking app based on real-life insights from over 2,000 UK businesses.
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-lg">
            <Image
              src="/hsbc.jpg"
              alt="Banking App Interface"
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
              <p className="text-gray-600 dark:text-gray-400 text-base">Banking & Finance</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Mobile App Redesign</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">UX Lead</p>
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
                
                <p>
                  In order to better understand its customers' needs, HSBC Kinetic engaged in field research and conducted qualitative interviews with small business owners. The insights from these interviews helped to shape the features of the app, making it more useful and relevant to small business owners.
                </p>
                <p>
                  The Kinetic app is only available to UK limited companies with a turnover of up to £2m and new customers.
                </p>
                <div className="mt-6">
                  <img 
                    src="/HSBC1a.png" 
                    alt="HSBC Logo" 
                    className="w-full h-auto"
                    style={{ filter: 'contrast(1.2) brightness(1.1) saturate(1.1)' }}
                  />
                </div>
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
                  As UX Lead, I led the UX within the Data & Insights team involving customer business accounts with the main focus on Cash Flow analysis, spending trends, and accounting software integration. I worked very closely with Business Analysts based both in London and India.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "User Stories",
                    "Wireframes", 
                    "User Flows",
                    "Prototyping",
                    "Stakeholder Management",
                    "Team Collaboration"
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
            <div className="w-full h-[680px] relative overflow-hidden">
              <Image
                src="/hsbc/3.jpg"
                alt="HSBC Kinetic App Overview - Banking interface and user flows"
                fill
                className="object-cover"
              />
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
                  The challenge was to create a banking app that could effectively serve small business owners with complex financial needs whilst maintaining simplicity and ease of use. We needed to balance sophisticated functionality with intuitive design, ensuring that users could manage their business accounts efficiently without feeling overwhelmed by complexity.
                </p>
                <p>
                  Working with Business Analysts across different time zones (London and India) required careful coordination and clear communication to ensure that user stories and requirements were properly defined and understood by all stakeholders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Create intuitive banking experience for small businesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Streamline cash flow analysis and spending trends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Integrate with accounting software seamlessly</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Support UK limited companies up to £2m turnover</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>View all accounts in one place for better oversight</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Make payments and transfers with ease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Send invoices and collect payments efficiently</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Understand cash flow and spending patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Placeholder - Between Challenge and Approach */}
          {/* <section className="py-8">
            <div className="w-full h-[680px] relative overflow-hidden">
              <Image
                src="/hsbc/2.jpg"
                alt="HSBC Kinetic Challenge Analysis - Small business banking pain points"
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
                    <h3 className="text-xl font-semibold mb-4">Starting Off</h3>
                    <p>
                      Working closely with Business Analysts and other stakeholders, I helped define user stories and requirements. I met regularly with different stakeholders to clarify details and ensure that the user stories could be created within the defined deadlines of the product roadmap. After each user story was clarified, I began designing annotated wireframes showing the navigation, content, and baseline functionality of each screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Image Placeholder - Between Challenge and Approach */}
          <section className="py-8">
            <div className="w-full h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/hsbc/4.jpg"
                alt="HSBC Kinetic Challenge Analysis - Small business banking pain points"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Data Driven Insights Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Data Driven Insights</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <p>
                  The app is designed to manage and run business accounts in a much smoother manner, including:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Account Overview</h4>
                    <p>
                      Viewing all of your accounts in one place, so you can keep track of what's going on in your business at all times.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Management</h4>
                    <p>
                      Making payments and transferring funds from one account to another with ease, so you can ensure that everything is getting paid on time and paid off as soon as possible.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Invoice & Collections</h4>
                    <p>
                      Sending invoices through the app and collecting payments right away, saving you time and energy that you can use on other things.
                    </p>
                  </div>
                </div>
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
                    <h3 className="text-xl font-semibold mb-4">User Story Development</h3>
                    <p>
                      I began by creating comprehensive user stories that captured the specific needs of small business owners. Each story was written from the user's perspective and included acceptance criteria that would guide the development team. This approach ensured that every feature was grounded in real user needs rather than assumptions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Wireframing and Prototyping</h3>
                    <p>
                      I created detailed wireframes that mapped out the user journey for each key business banking function. These wireframes were then developed into interactive prototypes using InVision, allowing stakeholders to experience the flow and provide feedback before development began.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">User Flow Design</h3>
                    <p>
                      I designed comprehensive user flows that detailed every step a business owner would take to complete critical tasks like making payments, viewing cash flow, or managing invoices. These flows were particularly important for complex scenarios like handling payment shortfalls or account reconciliation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Stakeholder Collaboration</h3>
                    <p>
                      Throughout the design process, I worked closely with business analysts in both London and India to ensure the designs met business requirements while maintaining user focus. Regular presentations to the CTO and other stakeholders helped align the team on the user experience vision.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Iteration and Refinement</h3>
                    <p>
                      The design process involved multiple rounds of iteration based on stakeholder feedback and user testing insights. Each iteration refined the user experience to better serve the needs of small business owners while maintaining the technical feasibility required for a banking application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Image Placeholder - Between Challenge and Approach */}
          <section className="py-8">
            <div className="w-full h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/hsbc/2.jpg"
                alt="HSBC Kinetic Challenge Analysis - Small business banking pain points"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* UX Work Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">UX Design</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">High Fidelity Wireframes</h3>
                    <p className="pb-4">
                      When I'm working on a project, one of the first things I do is create high fidelity wireframes. These are essentially mockups of what the page will look like and how it will function. They're basically a visual representation of the user experience.
                    </p>
                    
                    <p>
                      High fidelity wireframes help to demonstrate how the page will look and the annotations easily explain how the functionality will work. It also saves time when it comes to making changes based on stakeholder requirements or user feedback during testing sessions. Another benefit is that it shortens the time it takes to go from wireframe to UI design.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">User Flows</h3>
                    <p className="pb-4">
                      I created user flows which detail step by step screens to illustrate the process the user would take to complete a goal. For instance, in the example I have illustrated below, I show all the screens that are required in the app to be presented to the user in order for them to complete the goal of cancelling a one off payment due to a potential shortfall due to a lack of funds.
                    </p>
                    
                    <p>
                      This is particularly important as we want to ensure that our users are able to complete their goals in an efficient manner which will result in them using our product more often and thus increasing revenue for the company.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Accessibility</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Dedicated Accessibility Team</h3>
                    <p>
                      HSBC had a dedicated accessibility department that worked closely with the UX team to ensure all designs met strict accessibility standards.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Compliance Requirements</h3>
                    <p>
                      All UX designs had to fully comply with WCAG 2.1 AA standards and meet HSBC's internal accessibility guidelines. This included considerations for screen readers, keyboard navigation, colour contrast ratios, and alternative text for all visual elements. Every design decision was reviewed through an accessibility lens.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Design Integration</h3>
                    <p>
                      Accessibility was not an afterthought but was integrated into every stage of the design process. From initial wireframes through to final prototypes, I worked with the accessibility team to ensure that features like cash flow analysis, payment management, and account overview were usable by all customers regardless of their abilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Testing and Validation</h3>
                    <p>
                      The accessibility team conducted regular audits and testing sessions using assistive technologies. This included testing with screen readers, voice control software, and other assistive devices to ensure the banking app provided a seamless experience for users with disabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration & Handoff Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Collaboration & Handoff</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sign Off</h3>
                    <p>
                      Once the UX wireframes and user journeys had been created, I then presented them using an interactive InVision prototype to the main stakeholders including the CTO. I would explain the thinking behind the UX and address any concerns they may have. Once any amendments were made, I packaged up the UX and handed it over to the UI designer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Team Work</h3>
                    <p>
                      I cannot underestimate the importance of communicating with other designers, developers, and copywriters throughout the design process.
                    </p>
                    <p>
                      I've found that working in a team environment makes me a better designer because it forces me to think about other people's needs and perspectives. I also find it very helpful to have other people help me brainstorm ideas for projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Image Placeholder - Between Challenge and Approach */}
                    <section className="py-8">
            <div className="w-full h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/hsbc/3.jpg"
                alt="HSBC Kinetic Design Process - Wireframes and user flows"
                fill
                className="object-cover"
              />
            </div>
          </section>

           {/* Image Placeholder - Between Challenge and Approach */}
           {/* <section className="py-8">
            <div className="w-full h-[460px] relative overflow-hidden">
              <Image
                src="/hsbc/1.jpg"
                alt="HSBC Kinetic Final Design - Banking app interface and features"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* Results Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - User Stories Delivered */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">100%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">User Stories Delivered</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Successfully defined and delivered all user stories within the defined deadlines of the product roadmap through close collaboration with Business Analysts.
                  </p>
                </div>

                {/* Result 2 - Stakeholder Approval */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Stakeholder Sign-Off</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Achieved full stakeholder approval including CTO sign-off through interactive InVision prototypes and clear UX rationale presentation.
                  </p>
                </div>

                {/* Result 3 - Design Efficiency */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">50%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Faster Design Process</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Reduced time from wireframe to UI design through high-fidelity wireframes and clear annotations that streamlined stakeholder feedback.
                  </p>
                </div>

                {/* Result 4 - Team Collaboration */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Cross-Functional Success</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Successfully coordinated with Business Analysts across London and India time zones, ensuring seamless communication and project delivery.
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
                href="/case-studies/education-platform"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">Medify GAMSAT</span>
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
