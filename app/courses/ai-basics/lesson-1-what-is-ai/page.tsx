import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 1: What is AI? | AI Basics | AI Skill Lab",
    description: "Learn what AI actually is with simple explanations, real-world examples, and common misconceptions debunked.",
};

export default function Lesson1WhatIsAIPage() {
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
                    <span className="text-gray-400">Lesson 1</span>
                </div>

                {/* Lesson Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold text-sm">Lesson 1 of 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        What is AI?
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Learn what Artificial Intelligence actually is, see real-world examples, and clear up common misconceptions.
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
                    {/* Section 1: The Simple Definition */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">The Simple Definition</h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                <strong className="text-white">Artificial Intelligence (AI)</strong> is software that can learn and make decisions without being explicitly programmed for every scenario. Instead of following rigid, predefined rules like traditional programs, AI systems learn patterns from data.
                            </p>
                            <p>
                                Think of it this way:
                            </p>
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                                <p className="text-white font-medium mb-2">Traditional Software</p>
                                <p className="text-sm mb-4">
                                    You tell it: "If the user clicks this button, do that action." Every scenario must be programmed manually.
                                </p>
                                <p className="text-white font-medium mb-2">AI Software</p>
                                <p className="text-sm">
                                    You show it thousands of examples. It learns patterns and figures out what to do in new situations it's never seen before.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Real-World Examples */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Real-World Examples You Use Every Day</h2>
                        <p className="text-gray-400 mb-6">
                            You're probably already using AI without realizing it. Here are some examples:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">📧</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Email Spam Filters</h3>
                                        <p className="text-gray-400 text-sm">
                                            Gmail doesn't have a list of every spam email ever sent. Instead, it learned from millions of examples to recognize patterns—suspicious words, sender behavior, link structures. Now it automatically catches new spam you've never seen.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">🎬</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Netflix Recommendations</h3>
                                        <p className="text-gray-400 text-sm">
                                            Netflix doesn't randomly suggest shows. It analyzes what you watched, how long you watched, what you liked, and compares that to millions of other users to predict what you'll enjoy next.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">📱</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Face ID on Your Phone</h3>
                                        <p className="text-gray-400 text-sm">
                                            Your phone wasn't pre-programmed to recognize your specific face. It learned what your face looks like from multiple angles and lighting conditions, and now it can identify you instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0">🗣️</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Voice Assistants (Siri, Alexa, Google)</h3>
                                        <p className="text-gray-400 text-sm">
                                            These assistants weren't programmed with every possible sentence you could say. They learned from millions of voice samples to understand natural human speech, different accents, and what you're asking for.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Common Misconceptions */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Common Misconceptions</h2>
                        <p className="text-gray-400 mb-6">
                            Let's clear up some myths about AI:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <p className="text-red-400 font-semibold mb-2">❌ Myth: AI is like human intelligence</p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Reality:</strong> AI is great at specific tasks (like recognizing faces or recommending movies), but it doesn't "think" like humans. It's pattern recognition, not consciousness.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <p className="text-red-400 font-semibold mb-2">❌ Myth: AI will take all our jobs</p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Reality:</strong> AI is changing how we work, not eliminating work. It automates repetitive tasks, allowing humans to focus on creative, strategic, and interpersonal work. New types of jobs are also being created.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <p className="text-red-400 font-semibold mb-2">❌ Myth: You need to be a programmer to use AI</p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Reality:</strong> You can use AI tools without writing a single line of code. Tools like ChatGPT, Midjourney, and Notion AI are designed for everyone, not just developers.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <p className="text-red-400 font-semibold mb-2">❌ Myth: AI is perfect and never makes mistakes</p>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">Reality:</strong> AI makes mistakes. It can be biased (based on the data it learned from), hallucinate false information, or misunderstand context. Always verify important AI outputs.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Key Takeaways */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>AI is software that learns patterns from data instead of following rigid rules</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>You're already using AI daily (email filters, recommendations, voice assistants)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>AI excels at specific tasks but doesn't "think" like humans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>You don't need to be technical to use AI tools effectively</span>
                            </li>
                        </ul>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/ai-basics"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Back to Course
                        </Link>
                        <Link 
                            href="/courses/ai-basics/lesson-2-ai-vs-ml"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Next: Lesson 2 →
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
