import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 2: AI vs ML vs Automation | AI Basics | AI Skill Lab",
    description: "Understand the key differences between Artificial Intelligence, Machine Learning, and Automation with simple comparisons and examples.",
};

export default function Lesson2AIvsMLPage() {
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
                    <span className="text-gray-400">Lesson 2</span>
                </div>

                {/* Lesson Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold text-sm">Lesson 2 of 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        AI vs ML vs Automation
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Understand the key differences between Artificial Intelligence, Machine Learning, and Automation with simple comparisons.
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
                    {/* Section 1: The Big Picture */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">The Big Picture</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            These three terms often get used interchangeably, but they're actually different concepts. Here's the simple breakdown:
                        </p>
                        
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-white font-semibold mb-1">🤖 Artificial Intelligence (AI)</p>
                                    <p className="text-sm text-gray-400">The big umbrella: machines performing tasks that require human-like intelligence</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-1">🧠 Machine Learning (ML)</p>
                                    <p className="text-sm text-gray-400">A subset of AI: systems that learn from data without explicit programming</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-1">⚡ Automation</p>
                                    <p className="text-sm text-gray-400">Following predefined rules to complete tasks automatically (may or may not use AI)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Detailed Comparisons */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Breaking It Down</h2>

                        <div className="space-y-6">
                            {/* Artificial Intelligence */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <span>🤖</span>
                                    Artificial Intelligence (AI)
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    <strong className="text-white">What it is:</strong> The broad concept of machines that can perform tasks requiring human-like intelligence—things like understanding language, recognizing images, making decisions, or solving problems.
                                </p>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm text-cyan-400 mb-2">Examples:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>ChatGPT understanding and generating text</li>
                                        <li>Siri responding to voice commands</li>
                                        <li>Self-driving cars making driving decisions</li>
                                        <li>Recommendation systems on Netflix or Amazon</li>
                                    </ul>
                                </div>
                                <p className="text-sm text-gray-400">
                                    <strong className="text-white">Key characteristic:</strong> Performs intelligent tasks, but doesn't necessarily "learn" on its own (though it often does).
                                </p>
                            </div>

                            {/* Machine Learning */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <span>🧠</span>
                                    Machine Learning (ML)
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    <strong className="text-white">What it is:</strong> A specific type of AI where systems learn from data and improve their performance over time without being explicitly programmed. Instead of writing rules, you feed it examples.
                                </p>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm text-cyan-400 mb-2">Examples:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Email spam filters learning what's spam from examples</li>
                                        <li>Netflix learning your taste in movies</li>
                                        <li>Credit card fraud detection systems</li>
                                        <li>Image recognition (Face ID on your phone)</li>
                                    </ul>
                                </div>
                                <p className="text-sm text-gray-400">
                                    <strong className="text-white">Key characteristic:</strong> Learns patterns from data and gets better over time.
                                </p>
                            </div>

                            {/* Automation */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                    <span>⚡</span>
                                    Automation
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    <strong className="text-white">What it is:</strong> Using technology to complete tasks automatically based on predefined rules or workflows. It follows instructions you set up—no learning involved (unless you combine it with AI).
                                </p>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm text-cyan-400 mb-2">Examples:</p>
                                    <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                                        <li>Scheduled email sends</li>
                                        <li>Auto-replies when you're out of office</li>
                                        <li>IFTTT workflows ("If this happens, do that")</li>
                                        <li>Zapier connecting apps together</li>
                                    </ul>
                                </div>
                                <p className="text-sm text-gray-400">
                                    <strong className="text-white">Key characteristic:</strong> Follows rules you define. Doesn't learn or adapt.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Side-by-Side Comparison */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Quick Comparison</h2>
                        
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-cyan-500/30">
                                        <th className="text-left text-white font-semibold py-3 px-2">Aspect</th>
                                        <th className="text-left text-white font-semibold py-3 px-2">AI</th>
                                        <th className="text-left text-white font-semibold py-3 px-2">ML</th>
                                        <th className="text-left text-white font-semibold py-3 px-2">Automation</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-cyan-500/20">
                                        <td className="py-3 px-2 text-white">Learns?</td>
                                        <td className="py-3 px-2">Sometimes</td>
                                        <td className="py-3 px-2">Yes</td>
                                        <td className="py-3 px-2">No</td>
                                    </tr>
                                    <tr className="border-b border-cyan-500/20">
                                        <td className="py-3 px-2 text-white">Needs data?</td>
                                        <td className="py-3 px-2">Often</td>
                                        <td className="py-3 px-2">Always</td>
                                        <td className="py-3 px-2">No</td>
                                    </tr>
                                    <tr className="border-b border-cyan-500/20">
                                        <td className="py-3 px-2 text-white">Adapts?</td>
                                        <td className="py-3 px-2">Can adapt</td>
                                        <td className="py-3 px-2">Yes</td>
                                        <td className="py-3 px-2">No</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-2 text-white">Complexity</td>
                                        <td className="py-3 px-2">Varies</td>
                                        <td className="py-3 px-2">Complex</td>
                                        <td className="py-3 px-2">Simple</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 4: Practical Example */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Example: Email Management</h2>
                        <p className="text-gray-400 mb-6">
                            Here's how these three concepts might work in the same domain:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <p className="text-cyan-400 font-semibold mb-2">⚡ Automation</p>
                                <p className="text-sm text-gray-400">
                                    Auto-forward emails from your boss to a "Important" folder
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <p className="text-cyan-400 font-semibold mb-2">🧠 Machine Learning</p>
                                <p className="text-sm text-gray-400">
                                    Gmail learning which emails you mark as spam and catching similar ones automatically
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <p className="text-cyan-400 font-semibold mb-2">🤖 AI</p>
                                <p className="text-sm text-gray-400">
                                    Smart Reply suggesting contextual responses to your emails
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Key Takeaways */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">AI</strong> is the umbrella term for intelligent machines</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">ML</strong> is a type of AI that learns from data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">Automation</strong> follows predefined rules (no learning)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>They often work together: automation + ML = smart automation</span>
                            </li>
                        </ul>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/ai-basics/lesson-1-what-is-ai"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Previous: Lesson 1
                        </Link>
                        <Link 
                            href="/courses/ai-basics/lesson-3-real-world-uses"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Next: Lesson 3 →
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
