"use client"

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { TrendingUp, TrendingDown, Users, Target, Shield, Zap, Calendar, BarChart3, PieChart, Activity } from 'lucide-react'

export default function UXVisualsPage() {
  const [activeTab, setActiveTab] = useState('sitemap')

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Cryptfolio UX Visuals</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Supporting UX documentation and visuals for the crypto AI portfolio case study
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-800">
          {[
            { id: 'sitemap', label: 'Sitemap' },
            { id: 'userflow', label: 'User Flow' },
            { id: 'swot', label: 'SWOT Analysis' },
            { id: 'metrics', label: 'Metrics' },
            { id: 'personas', label: 'User Personas' },
            { id: 'ia', label: 'Info Architecture' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sitemap */}
        {activeTab === 'sitemap' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sitemap</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Complete information architecture showing all pages and navigation structure
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              {/* Level 0 - Home */}
              <div className="flex flex-col items-center mb-8">
                <div className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg">
                  Home Dashboard
                </div>
              </div>

              {/* Level 1 - Main Sections */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {[
                  { name: 'Portfolio Overview', children: ['Holdings', 'Performance', 'Allocation'] },
                  { name: 'Market Pulse', children: ['Live Prices', 'Market Events', 'Trending'] },
                  { name: 'Insight Center', children: ['AI Insights', 'Opportunities', 'Risk Analysis'] },
                  { name: 'News & Media', children: ['News Feed', 'Influencers', 'Social Sentiment'] },
                  { name: 'Scenario Lab', children: ['What-If Analysis', 'Historical Data', 'Predictions'] },
                ].map((section, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Connector Line */}
                    <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                    
                    {/* Section Box */}
                    <div className="bg-white dark:bg-gray-900 border-2 border-blue-500 px-4 py-3 rounded-lg text-center w-full shadow-md">
                      <div className="font-semibold text-sm mb-3">{section.name}</div>
                      
                      {/* Sub-pages */}
                      <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        {section.children.map((child, childIdx) => (
                          <div key={childIdx} className="text-xs bg-gray-50 dark:bg-gray-800 px-2 py-1.5 rounded text-gray-700 dark:text-gray-300">
                            {child}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Level 2 - Supporting Pages */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                {['Settings', 'Notifications', 'Account', 'Help & Support'].map((page, idx) => (
                  <div key={idx} className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg text-center text-sm font-medium">
                    {page}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Flow */}
        {activeTab === 'userflow' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">User Flow: First-Time Portfolio Setup</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Journey from landing to first portfolio insights
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-6">
                {[
                  { step: '1', title: 'Landing Page', desc: 'User discovers Cryptfolio', color: 'bg-green-500' },
                  { step: '2', title: 'Sign Up / Login', desc: 'Email or social authentication', color: 'bg-green-500' },
                  { step: '3', title: 'Onboarding', desc: 'Learn about read-only security', color: 'bg-blue-500' },
                  { step: '4', title: 'Connect Exchanges', desc: 'Add API keys (read-only)', color: 'bg-blue-500' },
                  { step: '5', title: 'Data Sync', desc: 'Portfolio data imported', color: 'bg-orange-500' },
                  { step: '6', title: 'Dashboard View', desc: 'See unified portfolio + AI insights', color: 'bg-orange-500' },
                  { step: '7', title: 'First Insight', desc: 'User receives personalized AI recommendation', color: 'bg-purple-500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Step Number */}
                    <div className={`${item.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg`}>
                      {item.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>

                    {/* Arrow */}
                    {idx < 6 && (
                      <div className="text-gray-300 dark:text-gray-700 text-2xl">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Flows */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-xl border border-yellow-200 dark:border-yellow-900">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Alternative Flow: Connection Error
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Step 4 fails → Show troubleshooting tips</li>
                  <li>• Offer manual portfolio entry option</li>
                  <li>• Contact support for API assistance</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-900">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">✨</span> Power User Flow
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Skip onboarding → Quick connect</li>
                  <li>• Multiple exchange connections</li>
                  <li>• Custom notification settings</li>
                  <li>• Advanced scenario modeling</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SWOT Analysis */}
        {activeTab === 'swot' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">SWOT Analysis</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Strategic analysis of Cryptfolio's position in the market
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-2 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 text-white p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Strengths</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Unified Platform:</strong> All-in-one solution for portfolio, news, and AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Read-Only Security:</strong> Zero trading permissions reduces risk significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>AI-Powered Insights:</strong> Transforms complex data into actionable guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Real-Time Data:</strong> Live price feeds and instant portfolio updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Beautiful UX:</strong> Clean, intuitive interface with smooth animations</span>
                  </li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500 text-white p-2 rounded-lg">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">Weaknesses</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span><strong>New Entrant:</strong> No existing user base or brand recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span><strong>API Dependencies:</strong> Relies on third-party data providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span><strong>Limited Features:</strong> MVP scope - some advanced features pending</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span><strong>No Trading:</strong> Users must go elsewhere to execute trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span><strong>Solo Founder:</strong> Limited bandwidth for rapid scaling</span>
                  </li>
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 text-white p-2 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Opportunities</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">↗</span>
                    <span><strong>Growing Market:</strong> Crypto adoption continues to expand globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">↗</span>
                    <span><strong>AI Trend:</strong> Increasing demand for AI-powered financial tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">↗</span>
                    <span><strong>Premium Tiers:</strong> Subscription model with advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">↗</span>
                    <span><strong>B2B Partnerships:</strong> White-label solutions for exchanges/wallets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">↗</span>
                    <span><strong>Community Building:</strong> Merchandise, events, educational content</span>
                  </li>
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 text-white p-2 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">Threats</h3>
                </div>
                <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span><strong>Established Competitors:</strong> CoinMarketCap, CoinGecko have massive user bases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span><strong>Exchange Features:</strong> Exchanges adding portfolio analytics in-house</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span><strong>Market Volatility:</strong> Crypto bear markets reduce user engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span><strong>Regulatory Changes:</strong> Government restrictions could impact operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">⚡</span>
                    <span><strong>AI Commoditization:</strong> AI features becoming standard everywhere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Metrics & Analytics */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Metrics & Success Criteria</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Measurable goals and performance indicators for Cryptfolio
              </p>
            </div>

            {/* Current Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="text-3xl font-bold mb-1">1</div>
                <div className="text-xs text-gray-500">MVP Testing Phase</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Features Shipped</div>
                </div>
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-xs text-gray-500">Core MVP Complete</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Data Sources</div>
                </div>
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-xs text-gray-500">APIs Integrated</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <div className="text-sm text-gray-600 dark:text-gray-400">Update Speed</div>
                </div>
                <div className="text-3xl font-bold mb-1">&lt;1s</div>
                <div className="text-xs text-gray-500">Real-time Refresh</div>
              </div>
            </div>

            {/* Growth Projections */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">3-Year Growth Projections</h3>
              
              <div className="space-y-6">
                {/* Year 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">Year 1: Foundation</h4>
                    <span className="text-sm text-gray-500">2025</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-indigo-500">1,000</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Beta Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-500">$50K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue Target</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-500">15%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">MoM Growth Rate</div>
                    </div>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">Year 2: Scale</h4>
                    <span className="text-sm text-gray-500">2026</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">25,000</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">$500K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue Target</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">10%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Paid Conversion Rate</div>
                    </div>
                  </div>
                </div>

                {/* Year 3 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">Year 3: Maturity</h4>
                    <span className="text-sm text-gray-500">2027</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-purple-500">100,000</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-500">$2M</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue Target</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-500">20%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Paid Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Key Performance Indicators (KPIs)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-4 text-lg">User Engagement</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Daily Active Users (DAU)</span>
                      <span className="font-bold text-green-500">Target: 60%</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Avg. Session Duration</span>
                      <span className="font-bold text-green-500">Target: 8 min</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Sessions per Week</span>
                      <span className="font-bold text-green-500">Target: 5+</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Feature Adoption Rate</span>
                      <span className="font-bold text-green-500">Target: 75%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4 text-lg">Business Metrics</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Customer Acquisition Cost</span>
                      <span className="font-bold text-blue-500">Target: &lt;$20</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Lifetime Value (LTV)</span>
                      <span className="font-bold text-blue-500">Target: $300</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Churn Rate</span>
                      <span className="font-bold text-blue-500">Target: &lt;5%</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Net Promoter Score (NPS)</span>
                      <span className="font-bold text-blue-500">Target: 70+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Personas */}
        {activeTab === 'personas' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">User Personas</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Primary user segments and their needs
              </p>
            </div>

            <div className="space-y-12">
              {/* Persona 1: Drew - Crypto Investor */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Drew</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Crypto investor</p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Image and About Side by Side */}
                    <div className="flex gap-6">
                      {/* Persona Image */}
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">D</div>
                      </div>
                      
                      {/* About */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>Age 38</li>
                          <li>£75K-150K</li>
                          <li>High Tech Proficiency</li>
                        </ul>
                      </div>
                    </div>

                    {/* Trading Behaviour */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Trading behaviour</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Active trader and long-term hodler, checks portfolio multiple times daily, prefers to diversify across major exchanges, and stays updated on market trends and news
                      </p>
                    </div>

                    {/* Investment Considerations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment considerations</h4>
                      <div className="space-y-3">
                        {[
                          { label: 'Market Analysis', value: 95 },
                          { label: 'Crypto News', value: 90 },
                          { label: 'Technical Charts', value: 75 },
                          { label: 'Social Media', value: 70 },
                          { label: 'YouTube/Podcasts', value: 50 },
                          { label: 'Friends/Network', value: 35 },
                          { label: 'Reddit/Discord', value: 30 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-24 text-sm text-gray-700 dark:text-gray-300">{item.label}</div>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${item.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Motivations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Motivations</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Motivated to build long-term wealth through strategic crypto investments, stay ahead of market trends, optimise portfolio performance, and maintain organised tracking across multiple exchanges.
                      </p>
                    </div>

                    {/* Core Needs */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Core needs</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Real-time portfolio tracking across multiple exchanges</li>
                        <li>• Comprehensive P&L analysis</li>
                        <li>• Market alerts and price notifications</li>
                        <li>• Tax reporting capabilities</li>
                        <li>• Easy-to-understand performance metrics</li>
                      </ul>
                    </div>

                    {/* Pain Points */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pain points</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Managing portfolios across multiple exchanges manually, tracking cost basis and tax implications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona 2: Sarah - The Curious Beginner */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Sarah</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Crypto beginner</p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Image and About Side by Side */}
                    <div className="flex gap-6">
                      {/* Persona Image */}
                      <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-6xl font-bold text-green-600 dark:text-green-400">S</div>
                      </div>
                      
                      {/* About */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>Age 28</li>
                          <li>£40K-60K</li>
                          <li>Medium Tech Proficiency</li>
                        </ul>
                      </div>
                    </div>

                    {/* Trading Behaviour */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Trading behaviour</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        New to crypto investing, holds Bitcoin and Ethereum on Coinbase, checks portfolio weekly, interested in learning but overwhelmed by complexity.
                      </p>
                    </div>

                    {/* Investment Considerations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment considerations</h4>
                      <div className="space-y-3">
                        {[
                          { label: 'Crypto News', value: 85 },
                          { label: 'Friends/Network', value: 80 },
                          { label: 'YouTube/Podcasts', value: 75 },
                          { label: 'Market Analysis', value: 60 },
                          { label: 'Social Media', value: 55 },
                          { label: 'Reddit/Discord', value: 45 },
                          { label: 'Technical Charts', value: 25 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-24 text-sm text-gray-700 dark:text-gray-300">{item.label}</div>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${item.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Motivations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Motivations</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Wants to understand if her portfolio is performing well, learn about market trends in simple terms, and feel confident about investment decisions without making costly mistakes.
                      </p>
                    </div>

                    {/* Core Needs */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Core needs</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Simple, clear explanations of market movements</li>
                        <li>• Beginner-friendly portfolio overview</li>
                        <li>• Trusted news sources and guidance</li>
                        <li>• Educational content about crypto basics</li>
                        <li>• Security reassurance and peace of mind</li>
                      </ul>
                    </div>

                    {/* Pain Points */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pain points</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Too much information without context, doesn't know which news sources to trust, afraid of making costly mistakes, finds technical analysis intimidating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona 3: Marcus - The Active Trader */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Marcus</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Active trader</p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Image and About Side by Side */}
                    <div className="flex gap-6">
                      {/* Persona Image */}
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">M</div>
                      </div>
                      
                      {/* About */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">About</h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          <li>Age 35</li>
                          <li>£100K-200K</li>
                          <li>Very High Tech Proficiency</li>
                        </ul>
                      </div>
                    </div>

                    {/* Trading Behaviour */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Trading behaviour</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Trading crypto for 4 years, portfolio spread across 5 exchanges, trades 20+ cryptocurrencies, follows macro events closely, checks portfolio multiple times daily.
                      </p>
                    </div>

                    {/* Investment Considerations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Investment considerations</h4>
                      <div className="space-y-3">
                        {[
                          { label: 'Technical Charts', value: 95 },
                          { label: 'Market Analysis', value: 90 },
                          { label: 'Crypto News', value: 85 },
                          { label: 'Social Media', value: 70 },
                          { label: 'Reddit/Discord', value: 65 },
                          { label: 'YouTube/Podcasts', value: 60 },
                          { label: 'Friends/Network', value: 30 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-24 text-sm text-gray-700 dark:text-gray-300">{item.label}</div>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${item.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Motivations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Motivations</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Wants to see all holdings in one unified view, get alerts for major market-moving events, identify opportunities before they peak, and track portfolio performance in real-time.
                      </p>
                    </div>

                    {/* Core Needs */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Core needs</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Unified view across all exchanges and wallets</li>
                        <li>• Real-time alerts for market-moving events</li>
                        <li>• Advanced charting and technical indicators</li>
                        <li>• AI-powered opportunity identification</li>
                        <li>• Fast, responsive interface for quick decisions</li>
                      </ul>
                    </div>

                    {/* Pain Points */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Pain points</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Constantly switching between platforms, missing important news while sleeping, hard to see total portfolio picture, information overload from too many sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Information Architecture */}
        {activeTab === 'ia' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Information Architecture</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                How information is organized and structured within Cryptfolio
              </p>
            </div>

            {/* Main Dashboard Structure */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Dashboard Layout Hierarchy</h3>
              
              <div className="space-y-6">
                {/* Primary Layer */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-indigo-500">
                  <h4 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Primary Layer (Always Visible)</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2">Top Navigation</div>
                      <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Logo / Home</li>
                        <li>• Main Menu</li>
                        <li>• Notifications</li>
                        <li>• Account Settings</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2">Portfolio Summary</div>
                      <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Total Value</li>
                        <li>• 24h Change</li>
                        <li>• Top Performer</li>
                        <li>• Worst Performer</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2">Quick Actions</div>
                      <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Refresh Data</li>
                        <li>• Add Asset</li>
                        <li>• Filter View</li>
                        <li>• Export Report</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Secondary Layer */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-blue-500">
                  <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Secondary Layer (Main Content)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg mb-4">
                        <div className="font-bold mb-2">Left Column (60%)</div>
                        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• <strong>Holdings Table</strong> - All assets with prices, changes, allocation</li>
                          <li>• <strong>Portfolio Chart</strong> - Historical performance graph</li>
                          <li>• <strong>Allocation Breakdown</strong> - Pie chart by asset type</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                        <div className="font-bold mb-2">Right Column (40%)</div>
                        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• <strong>AI Insight Feed</strong> - Latest recommendations</li>
                          <li>• <strong>Market Pulse</strong> - Key events and news</li>
                          <li>• <strong>Watchlist</strong> - Tracked assets not in portfolio</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tertiary Layer */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-purple-500">
                  <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Tertiary Layer (Deep Dive)</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2 text-sm">Asset Detail</div>
                      <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Price charts</li>
                        <li>• Transaction history</li>
                        <li>• News & sentiment</li>
                        <li>• Technical indicators</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2 text-sm">Insight Details</div>
                      <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Full analysis</li>
                        <li>• Data sources</li>
                        <li>• Confidence score</li>
                        <li>• Related insights</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2 text-sm">News Article</div>
                      <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Full content</li>
                        <li>• Source credibility</li>
                        <li>• Related assets</li>
                        <li>• Social reactions</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                      <div className="font-bold mb-2 text-sm">Scenario Lab</div>
                      <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• What-if modeling</li>
                        <li>• Historical patterns</li>
                        <li>• Projection charts</li>
                        <li>• Risk assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Data Flow & Integration</h3>
              
              <div className="space-y-8">
                {/* External Data Sources */}
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    External Data Sources
                  </h4>
                  <div className="grid md:grid-cols-5 gap-3 ml-10">
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-900 text-center text-sm">
                      <div className="font-bold mb-1">Price APIs</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CoinGecko, CoinMarketCap</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-900 text-center text-sm">
                      <div className="font-bold mb-1">Exchanges</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Binance, Coinbase, Kraken</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-900 text-center text-sm">
                      <div className="font-bold mb-1">News APIs</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">CryptoPanic, NewsAPI</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-900 text-center text-sm">
                      <div className="font-bold mb-1">Social Data</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Twitter, Reddit, Discord</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-900 text-center text-sm">
                      <div className="font-bold mb-1">Macro Events</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Fed Calendar, Economic Data</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-2xl text-gray-400">↓</div>

                {/* Processing Layer */}
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    Processing & AI Layer
                  </h4>
                  <div className="grid md:grid-cols-4 gap-3 ml-10">
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-900 text-center text-sm">
                      <div className="font-bold mb-1">Data Cleaning</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Normalize & validate</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-900 text-center text-sm">
                      <div className="font-bold mb-1">AI Analysis</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Pattern recognition</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-900 text-center text-sm">
                      <div className="font-bold mb-1">Sentiment Scoring</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">NLP processing</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-900 text-center text-sm">
                      <div className="font-bold mb-1">Insight Generation</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Recommendations</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-2xl text-gray-400">↓</div>

                {/* User Interface */}
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    User Interface Components
                  </h4>
                  <div className="grid md:grid-cols-6 gap-3 ml-10">
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">Dashboard</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">Charts</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">Tables</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">Insights Cards</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">News Feed</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-900 text-center text-xs">
                      <div className="font-bold">Alerts</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-2xl text-gray-400">↓</div>

                {/* User Actions */}
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    User Actions & Decisions
                  </h4>
                  <div className="grid md:grid-cols-4 gap-3 ml-10">
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-200 dark:border-orange-900 text-center text-sm">
                      <div className="font-bold mb-1">Monitor</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Track portfolio health</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-200 dark:border-orange-900 text-center text-sm">
                      <div className="font-bold mb-1">Analyze</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Deep dive insights</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-200 dark:border-orange-900 text-center text-sm">
                      <div className="font-bold mb-1">Learn</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Understand markets</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg border border-orange-200 dark:border-orange-900 text-center text-sm">
                      <div className="font-bold mb-1">Act</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Make informed decisions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Prioritization */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Content Prioritization Matrix</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-red-100 dark:bg-red-950/50 p-4 rounded-lg border-2 border-red-500 mb-4">
                    <h4 className="font-bold text-lg mb-3 text-red-900 dark:text-red-100">Critical (Always Visible)</h4>
                    <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Portfolio total value & 24h change</li>
                      <li>• Major price alerts (&gt;10% moves)</li>
                      <li>• System/security notifications</li>
                      <li>• Critical market events (Fed, regulation)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-950/50 p-4 rounded-lg border-2 border-orange-500">
                    <h4 className="font-bold text-lg mb-3 text-orange-900 dark:text-orange-100">High Priority (Above Fold)</h4>
                    <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Holdings table with top assets</li>
                      <li>• Latest AI insights (top 3)</li>
                      <li>• Performance chart (7d view)</li>
                      <li>• Breaking news headlines</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-yellow-100 dark:bg-yellow-950/50 p-4 rounded-lg border-2 border-yellow-500 mb-4">
                    <h4 className="font-bold text-lg mb-3 text-yellow-900 dark:text-yellow-100">Medium Priority (Scroll)</h4>
                    <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Full holdings list</li>
                      <li>• Allocation breakdown charts</li>
                      <li>• Watchlist & trending assets</li>
                      <li>• Historical performance data</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-950/50 p-4 rounded-lg border-2 border-green-500">
                    <h4 className="font-bold text-lg mb-3 text-green-900 dark:text-green-100">Low Priority (On Demand)</h4>
                    <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Older news articles (&gt;3 days)</li>
                      <li>• Detailed technical indicators</li>
                      <li>• Transaction history archives</li>
                      <li>• Account settings & preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
        )}

      </div>

      <Footer />
    </div>
  )
}
