import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 3: Real-World AI Use Cases | AI Basics | AI Skill Lab",
    description: "Discover how AI is used in business, daily life, and emerging career opportunities with practical examples.",
};

export default function Lesson3RealWorldUsesPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm">
                    <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Courses
                    </Link>
                    <span className="text-gray-600">/</span>
                    <Link href="/courses/ai-basics" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        AI Basics
                    </Link>
                    <span className="text-gray-600">/</span>
                    <span className="text-gray-400">Lesson 3</span>
                </div>

                {/* Lesson Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold text-sm">Lesson 3 of 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Real-World AI Use Cases
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Discover how AI is used in business, daily life, and emerging career opportunities with practical examples.
                    </p>
                    <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <span className="text-cyan-400">⏱️</span>
                            5 min read
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    {/* Section 1: AI in Business */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">AI in Business</h2>
                        <p className="text-gray-400 mb-6">
                            Companies across industries are using AI to work smarter, faster, and more efficiently. Here are some common applications:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">💬</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Customer Service Chatbots</h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            AI chatbots handle common customer questions 24/7, freeing up human agents for complex issues.
                                        </p>
                                        <p className="text-cyan-400 text-xs">
                                            Examples: Intercom, Zendesk AI, ChatGPT for customer support
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">📊</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Sales & Marketing</h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            AI predicts which leads are most likely to convert, personalizes marketing messages, and optimizes ad spend.
                                        </p>
                                        <p className="text-cyan-400 text-xs">
                                            Examples: HubSpot AI, Salesforce Einstein, Google Ads Smart Bidding
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">🔒</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Fraud Detection</h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            Banks and payment processors use AI to detect suspicious transactions in real-time.
                                        </p>
                                        <p className="text-cyan-400 text-xs">
                                            Examples: PayPal fraud detection, credit card monitoring systems
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">📝</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Content Creation</h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            AI helps create blog posts, social media content, product descriptions, and marketing copy.
                                        </p>
                                        <p className="text-cyan-400 text-xs">
                                            Examples: ChatGPT, Jasper AI, Copy.ai, Midjourney for images
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">🏭</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Supply Chain Optimization</h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            AI predicts demand, optimizes inventory levels, and routes deliveries efficiently.
                                        </p>
                                        <p className="text-cyan-400 text-xs">
                                            Examples: Amazon warehouse automation, UPS route optimization
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: AI in Daily Life */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">AI You Use Every Day</h2>
                        <p className="text-gray-400 mb-6">
                            Even if you don't work in tech, you're likely using AI daily without realizing it:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">📱</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Your Phone</h3>
                                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                    <li>Face ID / fingerprint unlock</li>
                                    <li>Autocorrect and predictive text</li>
                                    <li>Photo organization and search</li>
                                    <li>Voice assistants (Siri, Google Assistant)</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🎬</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Entertainment</h3>
                                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                    <li>Netflix / Spotify recommendations</li>
                                    <li>TikTok / YouTube "For You" feed</li>
                                    <li>Video game AI opponents</li>
                                    <li>Personalized playlists</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🏠</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Smart Home</h3>
                                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                    <li>Alexa / Google Home voice control</li>
                                    <li>Smart thermostats learning your schedule</li>
                                    <li>Security cameras with person detection</li>
                                    <li>Ring doorbells recognizing faces</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">✈️</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Travel & Transportation</h3>
                                <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                    <li>Google Maps traffic predictions</li>
                                    <li>Uber / Lyft dynamic pricing</li>
                                    <li>Flight delay predictions</li>
                                    <li>Hotel / restaurant recommendations</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Career Relevance */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">AI and Your Career</h2>
                        <p className="text-gray-400 mb-6">
                            AI is creating new opportunities and changing existing roles across industries. Here's how it affects different career paths:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-lg p-6 border border-purple-500/30">
                                <h3 className="text-xl font-semibold text-white mb-3">💼 Non-Technical Professionals</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    You don't need to be a programmer to use AI. Tools like ChatGPT, Notion AI, and Midjourney are designed for everyone.
                                </p>
                                <div className="bg-black/50 rounded p-4">
                                    <p className="text-cyan-400 text-sm mb-2">Common AI use cases:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Drafting emails and documents</li>
                                        <li>Summarizing meeting notes</li>
                                        <li>Creating presentations and graphics</li>
                                        <li>Researching topics quickly</li>
                                        <li>Analyzing data and finding insights</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-lg p-6 border border-purple-500/30">
                                <h3 className="text-xl font-semibold text-white mb-3">👩‍💻 Developers & Tech Roles</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    AI is becoming a core skill for developers, data analysts, and product managers.
                                </p>
                                <div className="bg-black/50 rounded p-4">
                                    <p className="text-cyan-400 text-sm mb-2">In-demand AI skills:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Using AI code assistants (GitHub Copilot)</li>
                                        <li>Building AI-powered features</li>
                                        <li>Prompt engineering for better results</li>
                                        <li>Integrating AI APIs (OpenAI, Anthropic)</li>
                                        <li>Understanding AI capabilities and limitations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-lg p-6 border border-purple-500/30">
                                <h3 className="text-xl font-semibold text-white mb-3">🚀 Entrepreneurs & Founders</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    AI enables solo founders and small teams to build products that previously required large teams.
                                </p>
                                <div className="bg-black/50 rounded p-4">
                                    <p className="text-cyan-400 text-sm mb-2">Opportunities:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Building AI-native products</li>
                                        <li>Automating business processes</li>
                                        <li>Creating content at scale</li>
                                        <li>Personalizing customer experiences</li>
                                        <li>Reducing operational costs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-purple-900/20 to-black/50 rounded-lg p-6 border border-purple-500/30">
                                <h3 className="text-xl font-semibold text-white mb-3">🎓 Students & Career Switchers</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    AI is creating entirely new career paths that didn't exist a few years ago.
                                </p>
                                <div className="bg-black/50 rounded p-4">
                                    <p className="text-cyan-400 text-sm mb-2">Emerging roles:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Prompt Engineer</li>
                                        <li>AI Trainer / Fine-tuner</li>
                                        <li>AI Product Manager</li>
                                        <li>AI Ethics Specialist</li>
                                        <li>AI Content Strategist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Key Takeaways */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>AI is used across all industries for customer service, marketing, fraud detection, and more</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>You're already using AI daily in your phone, entertainment, and transportation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>AI skills are valuable for both technical and non-technical professionals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>New AI-focused career paths are emerging across all industries</span>
                            </li>
                        </ul>
                    </section>

                    {/* Congratulations Section */}
                    <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h2 className="text-2xl font-bold text-white mb-4">Congratulations!</h2>
                        <p className="text-gray-400 mb-6">
                            You've completed the AI Basics mini-course. You now understand what AI is, how it differs from ML and automation, and where it's used in the real world.
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-white font-semibold mb-3">What's Next?</p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link 
                                        href="/courses/prompts"
                                        className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all"
                                    >
                                        Learn Prompt Engineering →
                                    </Link>
                                    <Link 
                                        href="/courses/automation"
                                        className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all"
                                    >
                                        Explore Automation →
                                    </Link>
                                </div>
                            </div>

                            <div className="border-t border-purple-500/20 pt-6 mt-6">
                                <p className="text-sm text-gray-400 mb-4">
                                    Want to go deeper? We're building advanced AI courses with hands-on projects, real-world case studies, and expert guidance.
                                </p>
                                <Link 
                                    href="/#waitlist"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Join Waitlist for Advanced Courses
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/ai-basics/lesson-2-ai-vs-ml"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Previous: Lesson 2
                        </Link>
                        <Link 
                            href="/courses/ai-basics"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            Back to Course Overview
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
