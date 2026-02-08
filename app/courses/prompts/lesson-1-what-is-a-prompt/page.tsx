import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 1: What is a Prompt? | Prompt Engineering | AI Skill Lab",
    description: "Learn what prompts are, how AI uses them, and why they matter for getting good results from ChatGPT and other AI tools.",
};

export default function Lesson1WhatIsAPromptPage() {
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
                    <Link href="/courses/prompts" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Prompt Engineering
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
                        What is a Prompt?
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Understand what prompts are, how AI interprets them, and why they matter for getting good results.
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
                    {/* Section 1: The Basic Definition */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">The Simple Answer</h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                A <strong className="text-white">prompt</strong> is just the text you give to an AI tool to tell it what you want it to do.
                            </p>
                            <p>
                                That's it. No magic. When you type something into ChatGPT, Claude, or any AI chatbot, that's your prompt.
                            </p>
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                                <p className="text-sm text-gray-400 mb-3">Example prompts:</p>
                                <div className="space-y-2">
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-sm font-mono text-white">"Summarize this article for me"</p>
                                    </div>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-sm font-mono text-white">"Write a professional email to decline a meeting"</p>
                                    </div>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-sm font-mono text-white">"Explain quantum computing like I'm 10 years old"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: How AI Uses Prompts */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">How AI Interprets Your Prompts</h2>
                        <p className="text-gray-400 mb-6">
                            Understanding how AI processes your prompt helps you write better ones. Here's what happens:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <span>1️⃣</span>
                                    AI reads your entire prompt
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Unlike humans who might skim, AI reads every single word. This means details matter—but so does keeping it clear and not burying important info in long paragraphs.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <span>2️⃣</span>
                                    AI looks for patterns
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    The AI has been trained on billions of examples. It recognizes patterns like "Write a [type] about [topic]" or "Explain [concept] in simple terms." Using familiar patterns helps it understand your intent better.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <span>3️⃣</span>
                                    AI predicts what you want next
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Based on your prompt, AI predicts the most likely useful response. It's not "thinking" in the human sense—it's predicting what words should come next based on patterns it learned. The clearer your prompt, the easier it is to predict what you actually want.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <span>4️⃣</span>
                                    AI fills in gaps with assumptions
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    If you're vague, AI makes assumptions. Sometimes it guesses right. Often it doesn't. The more specific you are, the less guessing it needs to do.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Why Prompts Matter */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Why This Matters</h2>
                        <p className="text-gray-400 mb-6">
                            The same AI can give you completely different results based on how you prompt it. Here's a quick example:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <p className="text-red-400 font-semibold mb-3">❌ Vague Prompt</p>
                                <div className="bg-black/50 rounded p-3 mb-3">
                                    <p className="text-sm font-mono text-white">"Write about AI"</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Result:</p>
                                <p className="text-xs text-gray-500 italic">
                                    You'll get a generic, unfocused essay that could be about anything AI-related. Not useful.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-green-900/20 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <p className="text-green-400 font-semibold mb-3">✓ Specific Prompt</p>
                                <div className="bg-black/50 rounded p-3 mb-3">
                                    <p className="text-sm font-mono text-white">"Write a 3-paragraph explanation of how ChatGPT works, for someone who isn't technical"</p>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Result:</p>
                                <p className="text-xs text-gray-500 italic">
                                    You'll get exactly what you asked for: 3 paragraphs, beginner-friendly explanation, focused topic.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Types of Prompts */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Common Types of Prompts</h2>
                        <p className="text-gray-400 mb-6">
                            Prompts generally fall into a few categories. Recognizing these helps you structure yours better:
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-2">📝 Creation Prompts</h3>
                                <p className="text-sm text-gray-400 mb-2">Asking AI to create something new</p>
                                <div className="bg-black/50 rounded p-2">
                                    <p className="text-xs font-mono text-cyan-400">"Write a product description for wireless headphones"</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-2">🔍 Analysis Prompts</h3>
                                <p className="text-sm text-gray-400 mb-2">Asking AI to analyze or explain</p>
                                <div className="bg-black/50 rounded p-2">
                                    <p className="text-xs font-mono text-cyan-400">"What are the pros and cons of remote work?"</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-2">✏️ Transformation Prompts</h3>
                                <p className="text-sm text-gray-400 mb-2">Asking AI to change existing content</p>
                                <div className="bg-black/50 rounded p-2">
                                    <p className="text-xs font-mono text-cyan-400">"Make this email more professional: [paste email]"</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-2">💡 Brainstorming Prompts</h3>
                                <p className="text-sm text-gray-400 mb-2">Asking AI for ideas or suggestions</p>
                                <div className="bg-black/50 rounded p-2">
                                    <p className="text-xs font-mono text-cyan-400">"Give me 10 blog post ideas for a fitness blog"</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Key Takeaways */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>A prompt is the text you give AI to tell it what you want</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>AI reads every word and looks for patterns it recognizes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>Vague prompts get vague results; specific prompts get specific results</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>Common prompt types: creation, analysis, transformation, brainstorming</span>
                            </li>
                        </ul>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/prompts"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Back to Course
                        </Link>
                        <Link 
                            href="/courses/prompts/lesson-2-good-vs-bad-prompts"
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
