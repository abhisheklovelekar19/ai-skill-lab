import Link from "next/link";

export default function AIBasicsPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Courses
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-5xl">🤖</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        AI Basics
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        New to AI? Start here. This track breaks down what AI actually is, how it works, and when to use it—without the confusing jargon.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Section 1: What is AI? */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">What is AI?</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Artificial Intelligence (AI) is software that can learn and make decisions without being explicitly programmed for every scenario. Instead of following rigid rules like traditional programs, AI systems learn patterns from data.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Think of it this way: A traditional calculator needs you to tell it exactly what to calculate. An AI system can look at thousands of calculations, learn the patterns, and then solve new problems it's never seen before.
                            </p>
                            
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 my-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Real-World Example</h3>
                                <p className="text-gray-400">
                                    <strong className="text-white">Email spam filters:</strong> They don't have a list of every spam email ever sent. Instead, they learned from millions of examples to recognize patterns—suspicious words, sender behavior, link structures—and now automatically catch new spam you've never seen.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: AI vs ML vs Automation */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">AI vs ML vs Automation: What's the Difference?</h2>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">🤖 Artificial Intelligence (AI)</h3>
                                <p className="text-gray-400 mb-2">
                                    The broad concept: machines that can perform tasks requiring human-like intelligence.
                                </p>
                                <p className="text-sm text-cyan-400">
                                    Example: Chatbots, voice assistants, recommendation systems
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">🧠 Machine Learning (ML)</h3>
                                <p className="text-gray-400 mb-2">
                                    A subset of AI: systems that learn from data without explicit programming.
                                </p>
                                <p className="text-sm text-cyan-400">
                                    Example: Netflix learning what movies you like, fraud detection in banking
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">⚡ Automation</h3>
                                <p className="text-gray-400 mb-2">
                                    Following predefined rules to complete tasks automatically. May or may not use AI.
                                </p>
                                <p className="text-sm text-cyan-400">
                                    Example: Scheduled emails, auto-replies, IFTTT workflows
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30">
                                <p className="text-white font-medium mb-2">💡 The Simple Version:</p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Automation</strong> = doing repetitive tasks automatically<br />
                                    <strong className="text-white">Machine Learning</strong> = learning from data to make predictions<br />
                                    <strong className="text-white">AI</strong> = the big umbrella covering both (plus more)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Real-World Applications */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Where AI Shows Up in Real Life</h2>
                        <p className="text-gray-400 mb-6">
                            You're already using AI, even if you don't realize it. Here are some everyday examples:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">📱</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Your Phone</h3>
                                <p className="text-sm text-gray-400">Face ID, autocorrect, photo organization, voice assistants</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🎬</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Entertainment</h3>
                                <p className="text-sm text-gray-400">Netflix/Spotify recommendations, TikTok/YouTube feeds</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🛒</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Shopping</h3>
                                <p className="text-sm text-gray-400">Amazon product suggestions, dynamic pricing, chatbot support</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">✈️</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Transportation</h3>
                                <p className="text-sm text-gray-400">Google Maps traffic predictions, Uber pricing, flight delays</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">💼</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Work</h3>
                                <p className="text-sm text-gray-400">Email filtering, calendar scheduling, document suggestions</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🏥</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Healthcare</h3>
                                <p className="text-sm text-gray-400">Medical imaging analysis, symptom checkers, drug discovery</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Who Should Learn AI */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Who Should Learn AI?</h2>
                        <p className="text-gray-400 mb-6">
                            Short answer: everyone. But here's why different people find it valuable:
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-2xl flex-shrink-0">👨‍💼</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Professionals</h3>
                                    <p className="text-sm text-gray-400">
                                        AI is changing how work gets done. Understanding it helps you stay competitive, automate tedious tasks, and spot opportunities others miss.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-2xl flex-shrink-0">🎓</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Students</h3>
                                    <p className="text-sm text-gray-400">
                                        AI literacy is becoming as important as computer literacy was 20 years ago. Get ahead of the curve.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-2xl flex-shrink-0">🚀</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Entrepreneurs & Builders</h3>
                                    <p className="text-sm text-gray-400">
                                        AI opens entirely new product categories. Understanding it helps you build smarter solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-2xl flex-shrink-0">🤔</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Curious Learners</h3>
                                    <p className="text-sm text-gray-400">
                                        AI is reshaping the world. Understanding how it works helps you make better decisions and critically evaluate AI claims.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Continue Learning</h2>
                        <p className="text-gray-400 mb-6">
                            Now that you understand the basics, explore our other free tracks to build practical AI skills.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link 
                                href="/courses/prompts"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                            >
                                Prompt Engineering →
                            </Link>
                            <Link 
                                href="/courses/automation"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                            >
                                Automation Fundamentals →
                            </Link>
                        </div>

                        <div className="border-t border-cyan-500/20 pt-6">
                            <p className="text-sm text-gray-400 mb-4">
                                Want deeper, hands-on training with real projects? We're building advanced courses. Join the waitlist for early access.
                            </p>
                            <Link 
                                href="/#waitlist"
                                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
