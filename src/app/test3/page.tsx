import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ChevronRight, ExternalLink } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Test3Page() {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of UX Design in AI-Driven Products",
      excerpt: "Exploring how artificial intelligence is reshaping user experience design and what designers need to know.",
      author: "Jen Jones",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "UX Design",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Building Scalable Design Systems",
      excerpt: "A comprehensive guide to creating design systems that grow with your product and team.",
      author: "Jen Jones",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Design Systems",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "User Research Methods That Actually Work",
      excerpt: "Proven techniques for gathering meaningful insights from your users and applying them to design decisions.",
      author: "Jen Jones",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Research",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "From Figma to React: Bridging the Design-Development Gap",
      excerpt: "How to create seamless handoffs between design and development teams using modern tools and processes.",
      author: "Jen Jones",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "The Psychology of Color in Digital Products",
      excerpt: "Understanding how color choices impact user behavior and emotional responses in digital interfaces.",
      author: "Jen Jones",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Accessibility First: Designing for Everyone",
      excerpt: "Why accessibility should be at the core of every design decision and how to implement it effectively.",
      author: "Jen Jones",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      category: "Accessibility",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Blog Post Layout Examples
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              6 different ways to display and link to blog posts
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* Style 1: Horizontal Scroll */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 1: Horizontal Scroll</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Perfect for showcasing multiple posts in limited vertical space. Users can scroll horizontally to see all available content.</p>
              
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                  {blogPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="flex-shrink-0 w-80 group">
                      <div className="bg-white dark:bg-[#1f1f1f] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                        <div className="p-6">
                          <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                          <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Style 2: Grid with View All */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-medium text-black dark:text-white">Style 2: Grid with View All</h2>
                <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2">
                  View All Posts
                  <ChevronRight size={16} />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Clean grid layout highlighting key content with a "View All Posts" link for easy navigation to the full blog archive.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors h-full">
                      <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                      <div className="p-6">
                        <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                        <h3 className="text-lg font-semibold text-black dark:text-white mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Style 3: List with Excerpts */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 3: List with Excerpts</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Vertical list format with thumbnails and full excerpts. Great for detailed previews and easy scanning of content.</p>
              
              <div className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-black dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {post.excerpt}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Style 4: Featured + Grid */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 4: Featured + Grid</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Large featured post with smaller sidebar posts. Perfect for highlighting one key article while showing additional content.</p>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Featured Post */}
                <div className="lg:col-span-2">
                  <Link href={`/blog/${blogPosts[0].id}`} className="block group">
                    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                      <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
                      <div className="p-8">
                        <span className="text-sm text-orange-500 font-medium">{blogPosts[0].category}</span>
                        <h3 className="text-2xl font-bold text-black dark:text-white mt-2 mb-4 group-hover:text-orange-500 transition-colors">
                          {blogPosts[0].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>{blogPosts[0].date}</span>
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Side Posts */}
                <div className="space-y-4">
                  {blogPosts.slice(1, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <div className="bg-white dark:bg-[#1f1f1f] rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                        <div className="flex gap-3">
                          <div className="w-16 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-orange-500 font-medium">{post.category}</span>
                            <h4 className="text-sm font-semibold text-black dark:text-white mt-1 group-hover:text-orange-500 transition-colors">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Style 5: Minimal Cards */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 5: Minimal Cards</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Compact, space-efficient design showing all posts with essential information. Ideal for displaying many articles in a clean format.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.slice(0, 6).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div className="bg-white dark:bg-[#1f1f1f] rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-orange-500 font-medium">{post.category}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-base font-semibold text-black dark:text-white group-hover:text-orange-500 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Style 6: Timeline Style */}
            <div>
              <h2 className="text-3xl font-medium text-black dark:text-white mb-4">Style 6: Timeline Style</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Chronological timeline with numbered progression. Great for showing a series of posts or demonstrating content evolution over time.</p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-8">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="bg-white dark:bg-[#1f1f1f] rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Back Button */}
        <div className="px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}