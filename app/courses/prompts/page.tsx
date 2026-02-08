import Link from "next/link";

export default function PromptsPage() {
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
                        <span className="text-5xl">💬</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Prompt Engineering: Free Mini-Course
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Learn to write prompts that get you exactly what you need from ChatGPT, Claude, and other AI tools. It's simpler than it sounds.
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

                {/* Why Prompts Matter */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Why Prompts Matter</h2>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                        <p className="text-gray-400 mb-4">
                            The difference between "write me a blog post" and a well-crafted prompt can be the difference between generic AI slop and genuinely useful content. Same AI, completely different results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-black/50 rounded p-4">
                                <p className="text-red-400 font-semibold mb-2">❌ Bad Prompt</p>
                                <p className="text-sm text-gray-400">Vague, no context, generic output</p>
                            </div>
                            <div className="bg-black/50 rounded p-4">
                                <p className="text-green-400 font-semibold mb-2">✓ Good Prompt</p>
                                <p className="text-sm text-gray-400">Specific, contextual, useful output</p>
                            </div>
                        </div>
                        <p className="text-cyan-400 text-sm mt-4">
                            Good prompting can 10x your productivity. Bad prompting wastes time.
                        </p>
                    </div>
                </section>

                {/* Course Lessons */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Course Lessons</h2>
                    <div className="space-y-4">
                        {/* Lesson 1 */}
                        <Link 
                            href="/courses/prompts/lesson-1-what-is-a-prompt"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            1
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            What is a Prompt?
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        Understand what prompts are, how AI interprets them, and why they matter for getting good results.
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
                            href="/courses/prompts/lesson-2-good-vs-bad-prompts"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            2
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            Good vs Bad Prompts
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        See real before/after examples that show the dramatic difference between vague and specific prompts.
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
                            href="/courses/prompts/lesson-3-prompt-patterns"
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm">
                                            3
                                        </div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            Prompt Patterns That Work
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-3">
                                        Learn reusable prompt patterns: role prompting, step-by-step instructions, and adding constraints.
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

                {/* Certification Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30">
                        <div className="text-center mb-6">
                            <div className="inline-block text-6xl mb-4">🎓</div>
                            <h2 className="text-3xl font-bold text-white mb-4">Get Certified</h2>
                            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                                After completing all 3 lessons, test your knowledge and earn your Prompt Engineering certificate.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">10</div>
                                    <div className="text-sm text-gray-400">Questions</div>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                                    <div className="text-sm text-gray-400">Passing Score</div>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">🎓</div>
                                    <div className="text-sm text-gray-400">Get Certificate</div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link 
                                    href="/courses/prompts/certification"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    🎯 Take Certification Test →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Start Learning CTA */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Master Prompts?</h2>
                        <p className="text-gray-400 mb-6">
                            Start with Lesson 1 and learn how to write prompts that actually work. Takes just 15 minutes.
                        </p>
                        <Link 
                            href="/courses/prompts/lesson-1-what-is-a-prompt"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Start Lesson 1 →
                        </Link>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-4">After This Course</h2>
                    <p className="text-gray-400 mb-6">
                        Continue learning with our other free tracks:
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link 
                            href="/courses/ai-basics"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all"
                        >
                            AI Basics →
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
                            Want advanced prompt mastery? We're building in-depth courses with advanced patterns, real projects, and expert feedback.
                        </p>
                        <Link 
                            href="/#waitlist"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist for Advanced Prompt Mastery
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
