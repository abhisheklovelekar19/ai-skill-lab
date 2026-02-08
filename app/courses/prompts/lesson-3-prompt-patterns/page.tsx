import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lesson 3: Prompt Patterns That Work | Prompt Engineering | AI Skill Lab",
    description: "Learn reusable prompt patterns including role prompting, step-by-step instructions, and adding constraints for better AI results.",
};

export default function Lesson3PromptPatternsPage() {
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
                    <span className="text-gray-400">Lesson 3</span>
                </div>

                {/* Lesson Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-cyan-400 font-semibold text-sm">Lesson 3 of 3</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Prompt Patterns That Work
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Learn reusable prompt patterns: role prompting, step-by-step instructions, and adding constraints for better results.
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
                    {/* Section 1: Introduction */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Reusable Patterns</h2>
                        <p className="text-gray-400 mb-6">
                            You don't need to reinvent the wheel every time you write a prompt. Certain patterns work consistently well across different tasks. Learn these, and you'll write better prompts faster.
                        </p>
                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                            <p className="text-white font-semibold mb-2">The 3 patterns you'll learn:</p>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">1.</span>
                                    <span><strong className="text-white">Role Prompting:</strong> Tell AI who to be</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">2.</span>
                                    <span><strong className="text-white">Step-by-Step:</strong> Break down complex tasks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400">3.</span>
                                    <span><strong className="text-white">Constraints:</strong> Add boundaries and structure</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Pattern 1: Role Prompting */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Pattern 1: Role Prompting</h2>
                        <p className="text-gray-400 mb-6">
                            Give AI a specific role or persona. This helps it understand the perspective, expertise level, and tone you want.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Start your prompt with "You are a [role]..." or "Act as a [expert]..."
                                </p>
                                <div className="bg-black/50 rounded p-4 mb-3">
                                    <p className="text-sm font-mono text-cyan-400 mb-2">Template:</p>
                                    <p className="text-sm font-mono text-white">"You are a [role]. [Task description]."</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">Examples:</h3>
                                
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For marketing copy:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"You are an experienced copywriter specializing in SaaS products. Write a compelling homepage headline for a project management tool aimed at remote teams. Keep it under 10 words and focus on the main benefit: staying aligned without endless meetings."</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For technical explanation:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"You are a patient teacher explaining computer science concepts to beginners. Explain what an API is using a real-world analogy that doesn't require technical knowledge. Keep it to 3 short paragraphs."</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For business advice:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"You are a business consultant with 20 years of experience helping startups. I'm launching a subscription box service for coffee enthusiasts. What are the 3 biggest mistakes I should avoid in my first year? Be direct and practical."</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/30">
                                <p className="text-sm text-purple-400 font-semibold mb-2">💡 Pro Tip:</p>
                                <p className="text-sm text-gray-400">
                                    The more specific the role, the better. Instead of "You are a writer," try "You are a technical writer who specializes in API documentation for developers."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pattern 2: Step-by-Step */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Pattern 2: Step-by-Step Instructions</h2>
                        <p className="text-gray-400 mb-6">
                            For complex tasks, break them into numbered steps. This gives AI a clear process to follow.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Use numbered steps to guide AI through a process. Works great for analysis, writing workflows, or multi-part tasks.
                                </p>
                                <div className="bg-black/50 rounded p-4 mb-3">
                                    <p className="text-sm font-mono text-cyan-400 mb-2">Template:</p>
                                    <p className="text-sm font-mono text-white">"[Task description]. Follow these steps:<br/>1. [First step]<br/>2. [Second step]<br/>3. [Third step]"</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">Examples:</h3>
                                
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For content analysis:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"Analyze this product review. Follow these steps:<br/>1. Summarize the main complaint in one sentence<br/>2. Identify what the customer actually wanted<br/>3. Suggest one specific product improvement<br/>4. Draft a customer service response (under 100 words)"</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For writing process:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"Help me write a LinkedIn post about a career lesson. Follow this process:<br/>1. Ask me 3 questions to understand the lesson<br/>2. Based on my answers, suggest a compelling hook<br/>3. Write the full post (150 words max)<br/>4. Add 3 relevant hashtags"</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">For problem solving:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"I need to improve my email marketing open rates. Help me by:<br/>1. Listing 5 common reasons for low open rates<br/>2. For each reason, give one specific fix I can implement this week<br/>3. Prioritize them by potential impact"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/30">
                                <p className="text-sm text-purple-400 font-semibold mb-2">💡 Pro Tip:</p>
                                <p className="text-sm text-gray-400">
                                    Step-by-step prompts work especially well when you want AI to think through a problem methodically rather than jumping straight to an answer.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Pattern 3: Constraints */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Pattern 3: Add Constraints & Structure</h2>
                        <p className="text-gray-400 mb-6">
                            Constraints aren't limitations—they're focus tools. They help AI understand exactly what you want (and don't want).
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">Types of Constraints</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-cyan-400 flex-shrink-0">📏</span>
                                        <div>
                                            <p className="text-white font-semibold">Length:</p>
                                            <p className="text-gray-400">"Keep it under 200 words" or "Write exactly 5 bullet points"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-cyan-400 flex-shrink-0">🎨</span>
                                        <div>
                                            <p className="text-white font-semibold">Tone:</p>
                                            <p className="text-gray-400">"Professional but friendly" or "Technical but accessible"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-cyan-400 flex-shrink-0">📋</span>
                                        <div>
                                            <p className="text-white font-semibold">Format:</p>
                                            <p className="text-gray-400">"Use bullet points" or "Structure as: intro, 3 sections, conclusion"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-cyan-400 flex-shrink-0">🚫</span>
                                        <div>
                                            <p className="text-white font-semibold">Exclusions:</p>
                                            <p className="text-gray-400">"Don't use jargon" or "Avoid clichés like 'game-changer'"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">Examples:</h3>
                                
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">Multiple constraints combined:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"Write a product description for noise-canceling headphones.<br/>- Max 100 words<br/>- Conversational tone (avoid corporate speak)<br/>- Focus on benefits, not specs<br/>- Target audience: remote workers<br/>- Don't use these words: revolutionary, game-changing, innovative"</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">Format constraints:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"Explain the benefits of meditation in this exact format:<br/>- Opening hook (1 sentence)<br/>- Benefit 1 with example<br/>- Benefit 2 with example<br/>- Benefit 3 with example<br/>- Call to action (1 sentence)<br/>Total: 150 words max"</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <p className="text-sm text-gray-400 mb-3">Exclusion constraints:</p>
                                    <div className="bg-black/50 rounded p-3">
                                        <p className="text-xs font-mono text-white">"Write a cold email to potential podcast guests.<br/>Requirements:<br/>- Under 120 words<br/>- Personalized (mention their recent work)<br/>- Clear ask in first paragraph<br/>Don't:<br/>- Use 'I hope this email finds you well'<br/>- Make it about me—focus on value for them<br/>- Sound salesy or desperate"</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/30">
                                <p className="text-sm text-purple-400 font-semibold mb-2">💡 Pro Tip:</p>
                                <p className="text-sm text-gray-400">
                                    Constraints don't limit creativity—they channel it. The more specific your boundaries, the more useful the output.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Combining Patterns */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Combining Patterns</h2>
                        <p className="text-gray-400 mb-6">
                            The real power comes from combining these patterns. Here's a prompt using all three:
                        </p>

                        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                            <p className="text-sm text-cyan-400 mb-3">Full Example:</p>
                            <div className="bg-black/50 rounded p-4">
                                <p className="text-sm font-mono text-white">
                                    <span className="text-purple-400">// Role</span><br/>
                                    "You are a career coach specializing in tech industry transitions.<br/><br/>
                                    
                                    <span className="text-purple-400">// Task + Step-by-Step</span><br/>
                                    Help me prepare for a career switch from marketing to product management. Follow these steps:<br/>
                                    1. Identify 3 transferable skills from marketing<br/>
                                    2. Suggest specific product management concepts I should learn<br/>
                                    3. Recommend one concrete action I can take this week<br/><br/>
                                    
                                    <span className="text-purple-400">// Constraints</span><br/>
                                    - Keep total response under 250 words<br/>
                                    - Be specific, not generic<br/>
                                    - Focus on practical steps, not theory<br/>
                                    - Don't suggest I need an MBA"
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Takeaways */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">Role Prompting:</strong> Give AI a specific perspective or expertise</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">Step-by-Step:</strong> Break complex tasks into numbered steps</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span><strong className="text-white">Constraints:</strong> Add boundaries (length, tone, format, exclusions)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 flex-shrink-0">✓</span>
                                <span>Combine patterns for best results</span>
                            </li>
                        </ul>
                    </section>

                    {/* Congratulations */}
                    <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h2 className="text-2xl font-bold text-white mb-4">You Did It!</h2>
                        <p className="text-gray-400 mb-6">
                            You've completed the Prompt Engineering mini-course. You now know how to write prompts that get you better results from any AI tool.
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-white font-semibold mb-3">🎓 Ready to Get Certified?</p>
                                <p className="text-gray-400 text-sm mb-4">
                                    You've completed all 3 lessons! Test your knowledge and earn your Prompt Engineering certificate.
                                </p>
                                <div className="flex justify-center mb-6">
                                    <Link 
                                        href="/courses/prompts/certification"
                                        className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                                    >
                                        🎯 Take Certification Test →
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="border-t border-purple-500/20 pt-6 mt-6">
                                <p className="text-white font-semibold mb-3">Continue Learning:</p>
                                <div className="flex flex-wrap gap-4 justify-center">
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
                                        Automation →
                                    </Link>
                                </div>
                            </div>

                            <div className="border-t border-purple-500/20 pt-6 mt-6">
                                <p className="text-sm text-gray-400 mb-4">
                                    Ready for advanced prompt mastery? We're building in-depth courses with advanced patterns, real-world projects, and expert feedback.
                                </p>
                                <Link 
                                    href="/#waitlist"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Join Waitlist for Advanced Prompt Mastery
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Navigation */}
                    <section className="flex justify-between items-center pt-8 border-t border-cyan-500/20">
                        <Link 
                            href="/courses/prompts/lesson-2-good-vs-bad-prompts"
                            className="px-6 py-3 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            ← Previous: Lesson 2
                        </Link>
                        <Link 
                            href="/courses/prompts"
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
