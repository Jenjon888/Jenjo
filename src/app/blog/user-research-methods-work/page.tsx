'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      {/* Back Button */}
      <div className="flex justify-center px-8 pt-24 pb-8">
        <div className="max-w-3xl w-full">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="flex justify-center px-8 pb-12">
        <div className="max-w-3xl w-full">
          <div className="space-y-6">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
              User Research
            </span>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-medium text-black dark:text-white leading-tight">
              User Research Methods That Actually Work
            </h1>
            
            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>December 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex justify-center px-8 pb-16">
        <div className="max-w-3xl w-full">
          <article className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              A practical guide to conducting effective user research in fast-paced startup environments without breaking the budget.
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="User research session with people discussing and analyzing data on a whiteboard"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                Effective user research requires the right methods and tools to uncover meaningful insights
              </p>
            </div>

            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                In the world of startups, user research often gets deprioritized in favor of shipping features quickly. But I&apos;ve learned that the most successful products are built on a foundation of understanding users deeply. Here are the research methods that have consistently delivered valuable insights without slowing down development.
              </p>

              <p>
                The key isn&apos;t conducting the most comprehensive research: it&apos;s conducting the right research at the right time. I&apos;ve seen teams spend months on elaborate studies that answer the wrong questions, while others make breakthrough discoveries with simple, focused methods.
              </p>

              <p>
                User research that works is research that leads to action. Every method I recommend here has directly influenced product decisions and improved user experiences in real applications.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Start with What You Already Have: Mining Existing Data
              </h2>

              {/* Data Analysis Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                    alt="Analytics dashboard showing user behavior data and insights from existing sources"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Existing data sources often contain valuable insights waiting to be discovered
                </p>
              </div>

              <p>
                Before planning new research, audit your existing data. Support tickets, analytics, and user feedback often contain goldmines of insights. I&apos;ve found that analyzing just 50 support tickets can reveal patterns that would take weeks of user interviews to uncover.
              </p>

              <p>
                Look for recurring themes, pain points, and feature requests. This data is free, immediate, and represents real user behavior rather than what people say they do.
              </p>

              <p>
                I&apos;ve discovered that the most valuable insights often come from the intersection of different data sources. When support tickets, analytics, and user feedback all point to the same issue, you&apos;ve found a problem worth solving. This triangulation approach saves time and provides confidence in your findings.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                The 5-User Rule: Getting the Right Users, Not Just Any Users
              </h2>

              {/* User Segments Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="User personas and segmentation analysis showing different user types and behaviors"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Understanding user segments is crucial for effective research planning
                </p>
              </div>

              <p>
                Nielsen&apos;s famous 5-user rule is often misunderstood. It doesn&apos;t mean you only need 5 users total—it means you need 5 users per user segment. For a fintech app, you might have different segments: new users, power users, and users who haven&apos;t completed onboarding.
              </p>

              <p>
                I&apos;ve found that 5 users per segment is usually enough to identify the most critical usability issues, but you&apos;ll need more to understand nuanced behaviors and preferences.
              </p>

              <p>
                The key is recruiting the right users, not just any users. I&apos;ve seen research fail because participants didn&apos;t match the actual user base. Spend time on recruitment—it&apos;s more important than the research method itself. Better to have 3 highly relevant users than 10 who don&apos;t represent your audience.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Remote Research: Making Virtual Sessions Work
              </h2>

              {/* Remote Research Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Remote user research session showing video call interface and screen sharing"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Remote research requires different techniques to maintain engagement and gather quality insights
                </p>
              </div>

              <p>
                Remote user research has become the norm, but it requires different techniques than in-person sessions. The key is making participants feel comfortable and engaged through the screen.
              </p>

              <p>
                I always start with a warm-up question that&apos;s easy to answer and helps participants feel at ease. &ldquo;Tell me about the last time you used an app like ours&rdquo; works better than jumping straight into task scenarios.
              </p>

              <p>
                The biggest challenge with remote research is maintaining engagement. I&apos;ve learned to keep sessions shorter (45 minutes max), use screen sharing to maintain visual connection, and ask participants to think aloud constantly. The goal is to recreate the natural flow of in-person research while working within the constraints of video calls.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Contextual Inquiry: Learning from Real-World Usage
              </h2>

              {/* Contextual Inquiry Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="User in their natural environment using a mobile app with real data and context"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Observing users in their natural environment reveals insights that lab studies miss
                </p>
              </div>

              <p>
                Watching users interact with your product in their natural environment reveals insights that lab studies miss. I&apos;ve conducted research where users show me their actual financial data, their real workflows, and the interruptions that happen in real life.
              </p>

              <p>
                This method is especially valuable for complex products like financial applications, where context matters enormously for decision making.
              </p>

              <p>
                I&apos;ve found that contextual inquiry works best when you&apos;re genuinely curious about the user&apos;s world, not just your product. Ask about their broader workflow, the tools they use alongside yours, and the constraints they face. This broader understanding often reveals opportunities that product focused research misses.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Making Research Actionable: From Insights to Impact
              </h2>

              <p>
                The best research is useless if it doesn&apos;t lead to action. I always end research sessions with a clear summary of findings and specific recommendations. Each finding should be tied to a potential design or product decision.
              </p>

              <p>
                Share findings immediately with the team, not in a report that sits in a folder. The goal is to create a culture where user insights drive decisions, not just inform them.
              </p>

              <p>
                I&apos;ve learned that the most effective way to ensure research leads to action is to involve stakeholders throughout the process. When product managers and engineers see the research happening, they&apos;re more likely to act on the findings. Research that happens in isolation rarely influences decisions.
              </p>

              <p>
                The goal isn&apos;t to conduct perfect research: it&apos;s to conduct research that improves your product and helps your users. Focus on methods that fit your timeline, budget, and team capabilities, and always prioritize actionable insights over comprehensive documentation.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center px-8 pb-24">
        <div className="max-w-3xl w-full">
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/blog/building-design-systems-scale" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Previous Post</span>
            </Link>
            
            <Link 
              href="/blog/figma-production-bridging-gap" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <span>Next Post</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
