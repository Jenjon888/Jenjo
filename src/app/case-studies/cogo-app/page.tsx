import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FadeContent from './FadeContent'

export default function CogoAppCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white dark:bg-black text-gray-800 dark:text-white px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Logo and Company Name */}
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xl">C</span>
              </div>
              <span className="text-4xl font-light text-gray-800 dark:text-white">CoGo</span>
            </div>
          </div>

          {/* Project Summary */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl text-gray-800 dark:text-white">
            Redesigned CoGo's mobile app to create a more intuitive platform for conscious spending.
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-[600px] md:h-[800px] relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <Image
              src="/cogo/3.jpg"
              alt="CoGo App Interface"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-black text-gray-800 dark:text-white rounded-lg p-8">
          <div className="flex flex-wrap gap-[60px]">
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Industry</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Fintech</p>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Project</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Mobile App Redesign</p>
            </div>
           
            <div>
              <h3 className="text-base font-semibold mb-1 text-gray-800 dark:text-white">Job Title</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">Product UX/UI Lead</p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">

          {/* Company Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Company:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <div className="mb-6">
                  <img 
                    src="/CoGo.png" 
                    alt="CoGo Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <p>
                  CoGo is an ethical and sustainable fintech launched in December 2018 that allows you to support companies that match your values. The platform is designed to be ethical and sustainable and aims to help consumers make better decisions about where they spend their money.
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
                  CoGo is a mobile application supporting environmentally friendly businesses. As the Product UX/UI Lead, I was responsible for all aspects of the experience strategy and design. I led all UX and UI design and worked alongside the product manager, head of data, and senior developers to develop the product.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "UX Research",
                    "UI Design", 
                    "Strategy",
                    "Prototyping",
                    "Testing"
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

                    {/* Image - Design Process Visuals */}
          <section>
            <div className="w-full h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/9.jpeg"
                alt="CoGo App Final Design - Improved User Experience"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* How CoGo Works Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">How CoGo Works:</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Supporting Values</h3>
                  <p className="pb-4">
                    When you shop with CoGo verified businesses, you earn CoGo points for each purchase. These points can then be redeemed for rewards such as free products or discounts. The more often you shop with verified businesses, the higher your CoGo score will be.
                  </p>
                  <p>
                    CoGo's mission is to provide a platform where customers can support companies who align with their values, whilst also rewarding those businesses with increased visibility through their accreditation badges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recommendation Engine</h3>
                  <p className="pb-4">
                    The engine displays previous spending choices and recommends alternative businesses supporting your values. The calculation is based on transactions occurring within 30 days from the date of the purchase.
                  </p>
                  <p>
                    You can choose to filter results by category, location, or business name. You will also be prompted to select your values (choose up to 3), which will help improve the accuracy of future recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>

                {/* Image - Between Challenge and Approach */}
                    <section className="py-8">
            <div className="w-full h-[640px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/7.jpg"
                alt="CoGo App Interface - Value Selection"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* The Challenge Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">The Challenge</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <p>
                  To coincide with Living Wage Week, our team was under extreme pressure to move fast. We were tasked to deliver the redesign of the Living Wage wallet within 5 weeks. This included working on user testing, user feedback, wireframes, final UI, and detailed functional specifications.
                </p>
                <p>
                  The combination of a fixed, tight deadline, App Store submission time, security, bug, and usability testing meant I needed to hit the ground running and get the experience right in the first couple of weeks.
                </p>
                <p>
                  One of the main issues we faced was that the app had failed to effectively communicate the benefits of CoGo, and as such, a high number of users were not fully engaging with the app. I had to rapidly discover ways to improve engagement and increase retention rates.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Increase user sign-up rates and reduce drop-off</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Improve user engagement and retention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Launch Living Wage wallet for Living Wage Week</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Build a scalable platform for ethical spending</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Goals</h3>
                    <ul className="text-base space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Easily find and support ethical businesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Get rewarded for conscious spending choices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Understand the impact of their spending</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Access a simple, trustworthy financial tool</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Research & Discovery Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left text-black dark:text-white">Research & Discovery</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Beta 1 Research</h3>
                    <p>
                      I believe that having a clear understanding of user goals from my research was key, as I was able to consider not only what the app should do, but also how it should feel, whilst also supporting user goals. I believed this would be the difference between delivering a good experience and an excellent one.
                    </p>
                    <p>
                      When you're designing a product that people interact with on a daily basis—whether it's an app or website—you want everything about it to be easy and intuitive. In order to create something that people can use without getting frustrated or confused, you need to know exactly what they want from your product.
                    </p>
                  </div>


                  {/* Key Insight Callout */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 rounded-r-lg">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Insight</h4>
                      <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                        Users didn't just want to support ethical businesses – they needed <strong>clear value communication, easy onboarding, and immediate rewards</strong>. The biggest barrier was not understanding how CoGo worked or what benefits they would receive.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Onboarding Process Analysis</h3>
                    <p className="pb-4">
                      As a user experience designer, one of my biggest responsibilities was to ensure that the app was meeting our users' needs and expectations. This meant understanding what they wanted out of the app and how they wanted to use it, then designing features that made those things happen.
                    </p>
                    
                    <p className="pb-4">
                      I started by looking at problem areas with the existing app features and thinking of ways to improve them whilst also increasing user retention rates. I discovered that our onboarding process was one of the biggest problems we were having. Many users downloaded the app but didn't sign up, so we weren't getting as much use from it as we could have been.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Competitive Analysis & User Feedback</h3>
                    <p>
                      To address this issue, I looked at what other apps were doing well in terms of onboarding and engagement. I also talked to our users who use the app regularly to find out what they liked and disliked about it so far. This helped me create an actionable plan for improving user experience with our onboarding process and also ensure we are building an app that meets their needs and expectations as best as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

                              {/* Image - Design Process Visuals */}
                              <section>
            <div className="w-full h-[680px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/6.png"
                alt="CoGo App Final Design - Improved User Experience"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <div className="w-full h-[580px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/5.png"
                alt="CoGo App Final Design - Improved User Experience"
                fill
                className="object-cover"
              />
            </div>
          </section>

                   {/* Approach Visuals - Full Width */}
                   {/* <section className="py-8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="w-full h-[480px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/cogo/1.jpg"
                    alt="Value Selection Interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full h-[480px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image
                    src="/cogo/2.jpg"
                    alt="Rewards System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section> */}

          {/* Our Approach Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Approach</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Working on New Features</h3>
                    <p>
                      The process of adding new features began with ideation workshops. I collaborated with my product manager, product owner, and main stakeholders to help evangelise ideas, gain alignment, and define the value proposition. I further defined these ideas with the product owner before creating prototypes to test our hypothesis. Once each idea was designed and approved, I began to organise one-on-one user testing sessions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Usability Testing</h3>
                    <p>
                      I conducted a range of interviews with users who had expressed an interest in participating in user testing sessions. These interviews provided valuable insights into the needs of our users and gave us greater insight into our hypothesis.
                    </p>
                    <p>
                      I worked closely with the team to help define tasks, and establish objectives for user testing sessions. To ensure the test was realistic, I created InVision prototypes and uploaded it to Lookback. Lookback is great for conducting one-on-one testing sessions. As a result of the testing sessions, we were able to find usability issues related to perceived affordances, layout, and search.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Focus Groups</h3>
                    <p>
                      Based on the results of the earlier user testing, I ran a focus group with 4 users who had previous experience using the app. They were shown a prototype version created with InVision to mimic the real experience of using the app on their phone. Several questions were asked including about the user interface, setting up, tracking, and sharing goals with either friends or other users of the app. The results were collated and presented in a report which was shared with the stakeholders and also used to inform design decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Mapping</h3>
                    <p>
                      I created a customer mapping document to show the various states of the user's journey and how we could improve their experience. This included what emotional state they were in, what point on the sales funnel they were at, and which department was responsible for creating that experience. With this, we could make better decisions about what to focus on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

 

                    {/* Image - Between Challenge and Approach */}
                    <section className="">
            <div className="w-full h-[640px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/12.png"
                alt="CoGo App Interface - Value Selection"
                fill
                className="object-cover"
              />
            </div>
          </section>

                                        {/* Image - Between Challenge and Approach */}
                                        <section className="pb-8">
            <div className="w-full h-[640px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/8.jpg"
                alt="CoGo App Interface - Value Selection"
                fill
                className="object-cover"
              />
            </div>
          </section>



          {/* Design Process Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Design Process</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Testing and Iteration</h3>
                    <p>
                      Usability testing was essential. I organised one-on-one sessions with participants using our prototypes. We asked them to sign up, set their values, explore local businesses, and complete a purchase scenario. These sessions revealed issues with perceived affordances, layout, and search functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Focus Group Validation</h3>
                    <p>
                      After initial testing, I ran a focus group with four existing users. They interacted with a high-fidelity prototype and discussed topics such as goal-setting, tracking, and sharing results with friends. Their feedback further refined our approach, prompting improvements to the goal-setting flow and clarification of ethical criteria.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Development Collaboration</h3>
                    <p className="pb-4">
                      Throughout these iterations, I maintained a detailed functional specification and collaborated closely with developers. My background in coding helped me communicate edge cases, performance considerations, and the rationale behind interaction patterns. This alignment ensured that the final implementation matched the design intent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Onboarding Implementation</h3>
                    <p>
                      The first thing I focused on was making the onboarding process more user friendly and intuitive. I made it easier for users to find their way around the app, especially after they had signed up, so they could get started using it quickly. I also looked at how we could make the app easier for new users to understand how it worked. For example, we added more 'helpful tips' throughout the app that would guide them through its features in a clear way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image - Design Process Visuals */}
          {/* <section>
            <div className="w-full h-[480px] relative overflow-hidden">
              <Image
                src="/cogo/4.jpg"
                alt="CoGo App Final Design - Improved User Experience"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

          {/* Image - Design Process Visuals */}
          {/* <section>
            <div className="w-full h-[640px] relative overflow-hidden">
              <Image
                src="/cogo/9.jpeg"
                alt="CoGo App Final Design - Improved User Experience"
                fill
                className="object-cover"
              />
            </div>
          </section> */}

                              {/* Image - Between Challenge and Approach */}
                              <section className="py-8">
            <div className="w-full h-[340px] relative overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                src="/cogo/11.jpg"
                alt="CoGo App Interface - Value Selection"
                fill
                className="object-cover"
              />
            </div>
          </section>


                    {/* Results Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-light tracking-wide text-left">Results</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Result 1 - Sign-up Conversion */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">+20%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Sign-up Conversion</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Sign-up conversion improved significantly with clearer value proposition and streamlined onboarding process.
                  </p>
                </div>

                {/* Result 2 - Daily Active Users */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">+30%</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Daily Active Users</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Daily active users increased with improved navigation and user retention through better engagement features.
                  </p>
                </div>

                {/* Result 3 - User Satisfaction */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">✓</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">User Satisfaction</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Feedback from users was overwhelmingly positive; they appreciated the clearer value proposition and smoother navigation.
                  </p>
                </div>

                {/* Result 4 - Platform Credibility */}
                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col">
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-black dark:text-white mb-1">∞</div>
                    <h3 className="text-base font-semibold text-black dark:text-white">Platform Credibility</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    The redesign positioned CoGo as a credible, user-centred platform with increased visibility for ethical businesses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          </div>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="px-4 py-8">
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
                href="/case-studies/crypto-ai-portfolio"
                className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-base font-medium group-hover:text-black dark:group-hover:text-white transition-colors">CryptoTrade</span>
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