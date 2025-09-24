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
      <div className="flex justify-center px-4 pt-24 pb-8">
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
      <div className="flex justify-center px-4 pb-12">
        <div className="max-w-3xl w-full">
          <div className="space-y-6">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
              Psychology
            </span>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-medium text-black dark:text-white leading-tight">
              The Psychology of Color in Financial Applications
            </h1>
            
            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>September 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex justify-center px-4 pb-16">
        <div className="max-w-3xl w-full">
          <article className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Understanding how colour choices impact user trust and behaviour in fintech products, with real world examples.
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <div className="w-full h-80 md:h-[28rem] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial dashboard with colorful charts and data visualization showing color psychology in fintech"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                Color choices in financial interfaces can significantly impact user trust and behavior
              </p>
            </div>

            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Colour in financial design is never just about aesthetics. The shades chosen for dashboards, charts, and buttons directly influence how people feel about their money and the decisions they make. Users often don&apos;t realize it, but their perception of trust, risk, and stability can shift dramatically based on colour psychology.
              </p>

              <p>
                After working on multiple fintech products, I&apos;ve seen how even subtle changes in a colour system can either build confidence or create doubt. Something as simple as making red slightly less saturated can reduce user anxiety, while the right shade of blue can increase trust in a brand.
              </p>

             

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                The Trust Factor: Why Blue Dominates Finance
              </h2>

              {/* Trust Factor Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/blog/blue-bank.jpg"
                    alt="Professional banking interface with blue color scheme showing trust and reliability"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Blue color schemes in financial interfaces convey trust and stability
                </p>
              </div>

              <p>
                Blue is the most common color in financial applications, and with good reason. Across cultures, blue is associated with honesty, stability, and professionalism. These are exactly the qualities people want when they&apos;re managing their savings, checking transactions, or making investment decisions.
              </p>

              <p>
                But not all blues have the same effect. Darker blues are perceived as more authoritative and stable, which makes them ideal for primary actions or high-priority data points. Lighter blues, on the other hand, feel approachable and are better suited for backgrounds or secondary information.
              </p>

              <p>
                Consistency is just as important as the shades themselves. If one blue is used for trust building elements and another for casual highlights, the hierarchy becomes unclear and users may subconsciously feel less secure. In financial design, clarity and predictability always strengthen user trust.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Red and Green: More Than Gains and Losses
              </h2>

              {/* Red and Green Psychology Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/blog/red-bank.jpg"
                    alt="Financial charts showing red and green color psychology in investment interfaces"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Red and green colors in financial charts influence user emotions and decision-making
                </p>
              </div>

              <p>
                In most financial interfaces, red is used to signal losses and green to indicate gains. While this seems straightforward, the emotional impact runs deeper.
              </p>

              <p>
                Bright, intense reds can trigger feelings of alarm and cause users to avoid interacting with parts of the interface where losses are shown. Softer reds, or even a shift toward orange, can still signal &ldquo;negative&rdquo; without sparking the same level of stress.
              </p>

              <p>
                Green has the opposite effect. It is often linked with growth, prosperity, and optimism. But too much bright green can actually encourage overconfidence. I&apos;ve seen users take unnecessary risks when positive financial data was displayed in vibrant greens. By using muted or darker greens, designers can maintain the association with positive performance while encouraging more thoughtful decision making.
              </p>

              <p>
                This is a reminder that colour is never neutral. Even widely accepted conventions can push users toward certain behaviours that may or may not align with their financial goals.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                The Role of Neutrals in Financial Interfaces
              </h2>

              {/* Neutral Palette Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/blog/gray.jpg"
                    alt="Clean financial dashboard with neutral gray color palette showing professional design"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Neutral color palettes create professional and trustworthy financial interfaces
                </p>
              </div>

              <p>
                Behind the primary colors, neutrals carry the weight of structure and readability in fintech products. Gray, black, and white form the backbone of most financial interfaces, and their tone dramatically changes the overall feel.
              </p>

              <p>
                Cool grays communicate professionalism and authority, which helps users feel the platform is reliable. Warm grays feel more personal and approachable, but they can sometimes reduce the sense of seriousness needed in a financial context.
              </p>

              <p>
                Hierarchy is key. I often use dark gray for primary text, medium gray for secondary labels, and light gray for backgrounds or dividers. This layered approach makes information easier to scan while creating visual breathing room. Neutrals aren&apos;t flashy, but they&apos;re the foundation of clarity and trust.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Cultural Considerations in Color Meaning
              </h2>

              {/* Cultural Considerations Image */}
              <div className="mb-8">
                <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/blog/green_bank.jpg"
                    alt="Global financial app interfaces showing different color schemes for different cultures"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3 text-center italic">
                  Color meanings vary across cultures - important consideration for global financial apps
                </p>
              </div>

              <p>
                Colour associations are not universal, and in fintech this becomes critical because financial platforms often serve global audiences.
              </p>

              <p>
                In Western cultures, red typically signals loss or danger. In many Asian cultures, however, red represents prosperity and luck. A design system that works well in New York may not translate effectively in Singapore.
              </p>

              <p>
                This is why I always recommend testing with real users from different cultural backgrounds. Relying on colour as the only indicator of meaning can lead to serious miscommunication. Supporting indicators like icons, patterns, and clear text ensure that important information remains accessible no matter the cultural context.
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Testing the Impact of Colour
              </h2>

              <p>
                The most reliable way to understand how colours affect trust and behaviour is through user research. I&apos;ve run A/B tests on dashboards and call to action elements where the only variable was colour, and the results were striking.
              </p>

              <p>
                For example, a darker blue button increased user confidence in confirming transactions, while a brighter variant of the same blue led to hesitation. Similarly, slightly softening the shade of red in a portfolio chart reduced the avoidance behaviour some users showed when reviewing losses.
              </p>

              <p>
                Colour testing should measure not just visual preference but also emotional response and behavioural outcomes. Do users feel more confident making decisions with one palette over another? Do they take fewer risks when gains are presented in muted tones rather than bright ones? These insights are more valuable than opinions about which colour &ldquo;looks good.&rdquo;
              </p>

              <h2 className="text-2xl font-medium text-black dark:text-white mt-12 mb-6">
                Conclusion
              </h2>

              <p>
                In fintech, where user trust is fragile and decisions carry real financial consequences, colour is one of the most powerful tools designers have. The right palette can make a user feel secure, confident, and in control. The wrong palette can create anxiety or encourage risky behaviour.
              </p>

              <p>
                There is no single formula for success, but there is a process: research cultural associations, build hierarchy with neutrals, balance emotional triggers in red and green, and always test with real users.
              </p>

              <p>
                Colour in fintech is not decoration. It is psychology, trust, and behaviour woven into the interface itself.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center px-4 pb-24">
        <div className="max-w-3xl w-full">
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/blog/figma-production-bridging-gap" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Previous Post</span>
            </Link>
            
            <Link 
              href="/blog/remote-design-collaboration" 
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
