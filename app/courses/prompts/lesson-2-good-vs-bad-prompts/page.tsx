import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 2: Good vs Bad Prompts | Prompt Engineering | AI Skill Lab",
    description: "See real before/after examples showing the dramatic difference between vague and specific prompts.",
};

export default function Lesson2GoodVsBadPromptsPage() {
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
                    <span className="text-gray-400">Lesson 2</span>
                </div>

                {/* Lesson Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold text-sm">Lesson 2 of 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Good vs Bad Prompts
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        See real before/after examples that show the dramatic difference between vague and specific prompts.
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
                    {/* Section 1: The Pattern */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">The Pattern You'll See</h2>
                        <p className="text-gray-400 mb-6">
                            Bad prompts are vague. Good prompts are specific. Let's look at real examples across different use cases.
                        </p>
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                            <p className="text-white font-semibold mb-3">What makes a prompt "good"?</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong className="text-white">Context:</strong> What's the situation or background?</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong className="text-white">Goal:</strong> What do you want to achieve?</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong className="text-white">Constraints:</strong> Any requirements or limitations?</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 flex-shrink-0">•</span>
                                    <span><strong className="text-white">Format:</strong> How should the output look?</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Example 1: Email Writing */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Example 1: Email Writing</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-red-400 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">Vague prompt</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write an email to my client."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-red-400">Problem:</strong> No context, no tone, no goal. AI has to guess everything—what client? about what? formal or casual? The result will be generic and unusable.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-green-900/20 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-green-400 font-bold">✓ GOOD</span>
                                    <span className="text-sm text-gray-500">Specific prompt</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write a professional email to my client (a marketing director at a mid-size company) politely declining their request for a rush project due to my current workload. Keep it under 150 words, friendly but firm, and suggest we reconnect in 2 weeks."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-green-400">Why it works:</strong> Context (who the client is), goal (decline politely), constraints (150 words, 2-week timeline), tone (friendly but firm). AI has everything it needs.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Example 2: Content Creation */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Example 2: Blog Post Writing</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-red-400 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">Generic request</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write a blog post about productivity."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-red-400">Problem:</strong> "Productivity" is huge. No angle, no audience, no structure. You'll get a generic listicle that sounds like every other productivity post on the internet.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-green-900/20 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-green-400 font-bold">✓ GOOD</span>
                                    <span className="text-sm text-gray-500">Detailed prompt</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write a 500-word blog post titled '3 Productivity Mistakes Remote Workers Make (And How to Fix Them)' for remote professionals aged 25-40. Use a conversational tone, include specific examples, and structure it as: intro, mistake 1 + solution, mistake 2 + solution, mistake 3 + solution, conclusion with CTA."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-green-400">Why it works:</strong> Specific angle (3 mistakes), target audience (remote workers 25-40), length (500 words), structure (defined outline), tone (conversational), and format (examples + solutions).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Example 3: Data Analysis */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Example 3: Explaining Concepts</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-red-400 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">Too broad</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Explain blockchain."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-red-400">Problem:</strong> No indication of your knowledge level, what aspect of blockchain you care about, or how technical you want it. You might get a PhD-level explanation when you wanted ELI5.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-green-900/20 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-green-400 font-bold">✓ GOOD</span>
                                    <span className="text-sm text-gray-500">Tailored request</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Explain how blockchain works to someone who understands basic spreadsheets but has no technical background. Focus on why it's useful for security and trust, not the technical implementation. Use a simple analogy and keep it under 200 words."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-green-400">Why it works:</strong> Defines audience knowledge level (knows spreadsheets, not technical), specific focus (security/trust, not implementation), requests analogy, sets length limit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Example 4: Creative Writing */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Example 4: Social Media Content</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-red-900/20 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-red-400 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">No direction</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write a LinkedIn post."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-red-400">Problem:</strong> LinkedIn posts can be about literally anything. No topic, no goal (engagement? thought leadership? promotion?), no voice. Totally unusable.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-green-900/20 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-green-400 font-bold">✓ GOOD</span>
                                    <span className="text-sm text-gray-500">Clear parameters</span>
                                </div>
                                <div className="bg-black/50 rounded p-4 mb-4">
                                    <p className="text-sm font-mono text-white">"Write a LinkedIn post (max 150 words) sharing a lesson I learned after managing my first remote team: the importance of overcommunication. Target audience is new managers in tech. Tone should be humble and helpful, not preachy. Start with a hook about a mistake I made, then the lesson, end with a question to drive engagement."</p>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-green-400">Why it works:</strong> Specific topic (overcommunication lesson), length (150 words), audience (new managers in tech), tone (humble, helpful), structure (hook → lesson → question).
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Common Patterns */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">What All Good Prompts Have in Common</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-3">🎯 Specificity</h3>
                                <p className="text-sm text-gray-400">
                                    Instead of "write content," say "write 500 words" or "write 3 bullet points."
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-3">🎭 Context</h3>
                                <p className="text-sm text-gray-400">
                                    Who's the audience? What's the situation? Why does this matter?
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-3">📏 Constraints</h3>
                                <p className="text-sm text-gray-400">
                                    Word count, tone, format, things to avoid—boundaries help AI focus.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-white mb-3">📋 Structure</h3>
                                <p className="text-sm text-gray-400">
                                    Tell AI how to organize the output (bullets, numbered steps, sections).
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
                                <span>Bad prompts are vague; good prompts are specific</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>Always include context, goal, constraints, and format</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>The more details you provide, the better the AI's output</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>Same AI, completely different results based on your prompt</span>
                            </li>
                        </ul>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/prompts/lesson-1-what-is-a-prompt"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Previous: Lesson 1
                        </Link>
                        <Link 
                            href="/courses/prompts/lesson-3-prompt-patterns"
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
