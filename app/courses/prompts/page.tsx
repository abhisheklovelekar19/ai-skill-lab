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
                        Prompt Engineering
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Learn to write prompts that get you exactly what you need from ChatGPT, Claude, and other AI tools. It's simpler than it sounds.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Section 1: What is Prompt Engineering */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">What is Prompt Engineering?</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Prompt engineering is just a fancy term for "asking AI the right way." Instead of random questions, you learn patterns and techniques that consistently get better results.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Think of it like asking a very knowledgeable but literal friend for help. The clearer and more specific you are, the better their answer will be.
                            </p>
                            
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 my-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Why It Matters</h3>
                                <p className="text-gray-400 mb-3">
                                    The difference between "write me a blog post" and a well-crafted prompt can be the difference between generic AI slop and genuinely useful content. Same AI, completely different results.
                                </p>
                                <p className="text-sm text-cyan-400">
                                    Good prompting can 10x your productivity with AI tools. Bad prompting wastes time and gives you garbage output.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Good vs Bad Prompts */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Good vs Bad Prompts: Real Examples</h2>
                        <p className="text-gray-400 mb-6">
                            Let's look at actual examples. Same goal, very different results.
                        </p>

                        {/* Example 1: Email Writing */}
                        <div className="space-y-6 mb-8">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-red-500 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">Vague prompt</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "Write an email to my client."
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Problem: No context, no tone, no goal. AI has to guess everything.
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-green-500 font-bold">✅ GOOD</span>
                                    <span className="text-sm text-gray-500">Clear & specific</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "Write a professional email to a client explaining a 2-week project delay due to scope changes. Tone: apologetic but confident. Length: 3 paragraphs. Include: acknowledgment of delay, clear reason, new timeline, and next steps."
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Why it works: Context, tone, structure, and expectations are crystal clear.
                                </p>
                            </div>
                        </div>

                        {/* Example 2: Code Help */}
                        <div className="space-y-6 mb-8">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-red-500 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">No details</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "Help me with this code error."
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Problem: What code? What error? What language? What have you tried?
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-green-500 font-bold">✅ GOOD</span>
                                    <span className="text-sm text-gray-500">Detailed context</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "I'm getting a 'TypeError: Cannot read property of undefined' in JavaScript. Here's the code: [paste code]. I'm trying to fetch user data from an API and display it. The error happens on line 23. What's causing this and how do I fix it?"
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Why it works: Language specified, error message included, code provided, goal stated.
                                </p>
                            </div>
                        </div>

                        {/* Example 3: Content Creation */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-red-500 font-bold">❌ BAD</span>
                                    <span className="text-sm text-gray-500">Generic request</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "Write a blog post about AI."
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Problem: AI is massive. What aspect? For who? What angle?
                                </p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-green-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-green-500 font-bold">✅ GOOD</span>
                                    <span className="text-sm text-gray-500">Targeted & structured</span>
                                </div>
                                <p className="text-gray-300 font-mono text-sm bg-black/50 p-4 rounded">
                                    "Write a 500-word blog post for small business owners explaining how AI chatbots can reduce customer service costs. Tone: practical and encouraging, not technical. Include: 3 specific use cases, ballpark cost savings, and 1 getting-started tip. Avoid: hype and unrealistic claims."
                                </p>
                                <p className="text-gray-500 text-sm mt-3">
                                    Why it works: Audience defined, angle clear, structure outlined, tone specified.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Common Prompt Patterns */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Common Prompt Patterns That Work</h2>
                        <p className="text-gray-400 mb-6">
                            These are reusable templates you can adapt for almost anything.
                        </p>

                        <div className="space-y-6">
                            {/* Pattern 1: Role-Playing */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">1. Role-Playing Pattern</h3>
                                <p className="text-gray-400 mb-3">
                                    Tell the AI to act as an expert in a specific field.
                                </p>
                                <div className="bg-black/50 p-4 rounded font-mono text-sm text-cyan-400 mb-3">
                                    "Act as a [role]. [Task]. [Context/constraints]."
                                </div>
                                <p className="text-sm text-gray-500">
                                    Example: "Act as a senior Python developer. Review this code for bugs and suggest improvements. Focus on readability and performance."
                                </p>
                            </div>

                            {/* Pattern 2: Step-by-Step */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">2. Step-by-Step Pattern</h3>
                                <p className="text-gray-400 mb-3">
                                    Ask AI to break down complex tasks into steps.
                                </p>
                                <div className="bg-black/50 p-4 rounded font-mono text-sm text-cyan-400 mb-3">
                                    "Explain [topic] step-by-step. Start with basics, then build up."
                                </div>
                                <p className="text-sm text-gray-500">
                                    Example: "Explain how to deploy a Next.js app to Vercel step-by-step. Assume I've never deployed anything before."
                                </p>
                            </div>

                            {/* Pattern 3: Context + Task + Format */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">3. Context + Task + Format</h3>
                                <p className="text-gray-400 mb-3">
                                    The most reliable pattern for consistent results.
                                </p>
                                <div className="bg-black/50 p-4 rounded font-mono text-sm text-cyan-400 mb-3">
                                    "Context: [situation]<br/>Task: [what you want]<br/>Format: [how you want it]"
                                </div>
                                <p className="text-sm text-gray-500">
                                    Example: "Context: I'm launching a productivity app for freelancers. Task: Write 5 social media post ideas. Format: Each post should be 1-2 sentences, include a hook, and end with a question."
                                </p>
                            </div>

                            {/* Pattern 4: Iterative Refinement */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">4. Iterative Refinement</h3>
                                <p className="text-gray-400 mb-3">
                                    Start broad, then narrow down with follow-ups.
                                </p>
                                <div className="bg-black/50 p-4 rounded font-mono text-sm text-cyan-400 mb-3">
                                    First: "Give me 10 ideas for [topic]"<br/>
                                    Then: "Expand on idea #3 with more details"<br/>
                                    Finally: "Turn that into a 3-paragraph explanation"
                                </div>
                                <p className="text-sm text-gray-500">
                                    Pro tip: Treat it like a conversation, not a one-shot question.
                                </p>
                            </div>

                            {/* Pattern 5: Constraints & Guardrails */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-3">5. Constraints & Guardrails</h3>
                                <p className="text-gray-400 mb-3">
                                    Tell AI what NOT to do. Prevents generic output.
                                </p>
                                <div className="bg-black/50 p-4 rounded font-mono text-sm text-cyan-400 mb-3">
                                    "[Task]. Avoid: [things to avoid]. Must include: [requirements]."
                                </div>
                                <p className="text-sm text-gray-500">
                                    Example: "Write a product description for noise-canceling headphones. Avoid: generic marketing speak, technical jargon. Must include: specific use case, one unexpected benefit."
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Pro Tips */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Quick Pro Tips</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">✨ Be Specific</h3>
                                <p className="text-sm text-gray-400">Vague prompts = vague answers. The more detail, the better.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">🎯 Define Output Format</h3>
                                <p className="text-sm text-gray-400">Want a list? Table? Paragraph? Say so upfront.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">🔄 Iterate & Refine</h3>
                                <p className="text-sm text-gray-400">First answer not perfect? Ask for revisions.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">🚫 Set Boundaries</h3>
                                <p className="text-sm text-gray-400">Tell it what to avoid. Prevents AI rambling.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">📏 Specify Length</h3>
                                <p className="text-sm text-gray-400">Word count, paragraph count, or sentence count.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h3 className="text-white font-semibold mb-2">🎭 Define Tone</h3>
                                <p className="text-sm text-gray-400">Casual? Professional? Funny? Say it explicitly.</p>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Continue Learning</h2>
                        <p className="text-gray-400 mb-6">
                            Now that you know how to prompt AI effectively, explore automation to multiply your results.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link 
                                href="/courses/ai-basics"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                            >
                                AI Basics →
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
                                Want advanced prompt engineering with real-world projects and workflows? Join the waitlist for our upcoming courses.
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
