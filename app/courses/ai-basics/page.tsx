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
                        AI Basics: Free Mini-Course
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        New to AI? Start here. This free mini-course breaks down what AI actually is, how it works, and when to use it—without the confusing jargon.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400">📚</span>
                            <span>3 Lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400">⏱️</span>
                            <span>~15 min total</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400">💯</span>
                            <span>100% Free</span>
                        </div>
                    </div>
                </div>

                {/* Who This Course Is For */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Who This Course Is For</h2>
                    <p className="text-gray-400 mb-6">
                        This mini-course is perfect for complete beginners who want to understand AI without technical jargon or complex math.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                            <div className="text-2xl flex-shrink-0">👨‍💼</div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Professionals</h3>
                                <p className="text-sm text-gray-400">
                                    Understand how AI impacts your industry and career
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                            <div className="text-2xl flex-shrink-0">🎓</div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Students</h3>
                                <p className="text-sm text-gray-400">
                                    Build AI literacy for the future job market
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                            <div className="text-2xl flex-shrink-0">🚀</div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Entrepreneurs</h3>
                                <p className="text-sm text-gray-400">
                                    Discover AI opportunities for your business
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                            <div className="text-2xl flex-shrink-0">🤔</div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Curious Learners</h3>
                                <p className="text-sm text-gray-400">
                                    Understand the technology reshaping the world
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Lessons */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Course Lessons</h2>
                    <div className="space-y-4">
                        {/* Lesson 1 */}
                        <Link 
                            href="/courses/ai-basics/lesson-1-what-is-ai"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            1
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            What is AI?
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        Learn what AI actually is, see real-world examples, and clear up common misconceptions.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <span className="text-cyan-400">⏱️</span>
                                            5 min read
                                        </span>
                                    </div>
                                </div>
                                <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                                    →
                                </div>
                            </div>
                        </Link>

                        {/* Lesson 2 */}
                        <Link 
                            href="/courses/ai-basics/lesson-2-ai-vs-ml"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            2
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            AI vs ML vs Automation
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        Understand the key differences between AI, Machine Learning, and Automation with simple comparisons.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <span className="text-cyan-400">⏱️</span>
                                            5 min read
                                        </span>
                                    </div>
                                </div>
                                <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                                    →
                                </div>
                            </div>
                        </Link>

                        {/* Lesson 3 */}
                        <Link 
                            href="/courses/ai-basics/lesson-3-real-world-uses"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            3
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            Real-World AI Use Cases
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        Discover how AI is used in business, daily life, and emerging career opportunities.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <span className="text-cyan-400">⏱️</span>
                                            5 min read
                                        </span>
                                    </div>
                                </div>
                                <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Start Learning CTA */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
                        <p className="text-gray-400 mb-6">
                            Begin with Lesson 1 and work your way through. It only takes 15 minutes.
                        </p>
                        <Link 
                            href="/courses/ai-basics/lesson-1-what-is-ai"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Start Lesson 1 →
                        </Link>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-4">After Completing This Course</h2>
                    <p className="text-gray-400 mb-6">
                        Continue learning with our other free tracks to build practical AI skills:
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link 
                            href="/courses/prompts"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all"
                        >
                            Prompt Engineering →
                        </Link>
                        <Link 
                            href="/courses/automation"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all"
                        >
                            Automation Fundamentals →
                        </Link>
                    </div>

                    <div className="border-t border-purple-500/20 pt-6">
                        <p className="text-sm text-gray-400 mb-4">
                            Want deeper, hands-on training with real projects? We're building advanced AI courses. Join the waitlist for early access.
                        </p>
                        <Link 
                            href="/#waitlist"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist for Advanced Courses
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
