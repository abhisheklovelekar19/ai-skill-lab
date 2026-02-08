import Link from "next/link";

export default function PromptEngineeringBasicsPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Blog
                    </Link>
                </div>

                {/* Article Header */}
                <article>
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 font-medium">
                                Practical Skills
                            </span>
                            <span className="text-gray-500">February 2026</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">6 min read</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Prompt Engineering Basics: Get Better AI Results
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            The same AI tool can give you garbage or gold—depending on how you ask. Here's how to consistently get better results.
                        </p>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        {/* Introduction */}
                        <section>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                You've probably had this experience:
                            </p>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30 my-6">
                                <p className="text-gray-400 mb-3">
                                    <strong className="text-white">You:</strong> "Write me a blog post about AI"
                                </p>
                                <p className="text-gray-400">
                                    <strong className="text-white">ChatGPT:</strong> *Generates 500 words of generic, useless content that sounds like it was written by a robot*
                                </p>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Same person, better prompt:
                            </p>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-green-500/30 my-6">
                                <p className="text-gray-400 mb-3">
                                    <strong className="text-white">You:</strong> "Write a 300-word blog post for small business owners explaining 3 ways AI can save them time. Tone: practical and encouraging. Avoid: technical jargon and hype."
                                </p>
                                <p className="text-gray-400">
                                    <strong className="text-white">ChatGPT:</strong> *Generates focused, practical content perfectly suited to the audience*
                                </p>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Same AI. Completely different results. That's prompt engineering.
                            </p>
                        </section>

                        {/* Section 1: What is Prompt Engineering */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">What is Prompt Engineering?</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Prompt engineering is the skill of asking AI the right way. It's learning patterns and techniques that consistently get you better results from tools like ChatGPT, Claude, and Copilot.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Think of it like asking a very knowledgeable but extremely literal friend for help. The clearer and more specific you are, the better their answer.
                            </p>

                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 my-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Why It Matters</h3>
                                <p className="text-gray-300 mb-3">
                                    Most people waste hours fighting with AI tools because they don't know how to communicate effectively. Good prompting can:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 text-gray-300">
                                        <span className="text-cyan-400">•</span>
                                        <span>10x your productivity with AI tools</span>
                                    </li>
                                    <li className="flex gap-2 text-gray-300">
                                        <span className="text-cyan-400">•</span>
                                        <span>Save hours of back-and-forth revision</span>
                                    </li>
                                    <li className="flex gap-2 text-gray-300">
                                        <span className="text-cyan-400">•</span>
                                        <span>Get useful output on the first try</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: Anatomy of a Good Prompt */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Anatomy of a Good Prompt</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Every effective prompt includes these elements:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">1. Context (Who/What/Where)</h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Tell the AI what role to play and what situation you're in.
                                    </p>
                                    <p className="text-sm text-cyan-400 font-mono">
                                        "Act as a senior Python developer reviewing code for a junior developer..."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">2. Task (What you want done)</h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Be specific about the exact output you need.
                                    </p>
                                    <p className="text-sm text-cyan-400 font-mono">
                                        "...write 3 social media posts announcing our new product..."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">3. Format (How you want it structured)</h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Specify output structure: list, paragraph, table, code, etc.
                                    </p>
                                    <p className="text-sm text-cyan-400 font-mono">
                                        "...format as: hook (1 sentence), body (2 sentences), CTA..."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">4. Constraints (What to avoid/include)</h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Set boundaries and requirements to guide the output.
                                    </p>
                                    <p className="text-sm text-cyan-400 font-mono">
                                        "...Avoid: marketing jargon. Must include: specific benefit for freelancers."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">5. Tone (How it should sound)</h3>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Define the voice: casual, professional, friendly, technical, etc.
                                    </p>
                                    <p className="text-sm text-cyan-400 font-mono">
                                        "...Tone: encouraging but honest, not salesy."
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Before & After Examples */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Before & After: Real Examples</h2>
                            
                            {/* Example 1 */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Example 1: Writing an Email</h3>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-red-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-red-500 font-bold">❌ BEFORE</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Write an email to my client"
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Problem: No context, audience, or goal. AI has to guess everything.</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-green-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-green-500 font-bold">✅ AFTER</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Write a professional email to a client (marketing agency owner) explaining why our project will be 1 week late due to scope creep. Tone: apologetic but confident. Length: 3 paragraphs. Include: acknowledgment of delay, clear reason, new deadline (March 15), next steps."
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Why it works: Context, audience, tone, structure all specified.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Example 2 */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Example 2: Learning Something New</h3>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-red-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-red-500 font-bold">❌ BEFORE</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Explain machine learning"
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Problem: Too broad, no indication of knowledge level or purpose.</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-green-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-green-500 font-bold">✅ AFTER</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Explain machine learning to a complete beginner with no technical background. Use a simple analogy, avoid jargon, and give 2 real-world examples they'd encounter daily. Keep it under 150 words."
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Why it works: Audience defined, format clear, constraints set.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Example 3 */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Example 3: Brainstorming Ideas</h3>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-red-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-red-500 font-bold">❌ BEFORE</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Give me content ideas"
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Problem: What kind of content? For who? What platform?</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-green-500/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-green-500 font-bold">✅ AFTER</span>
                                        </div>
                                        <p className="text-gray-300 font-mono text-sm">
                                            "Generate 5 LinkedIn post ideas for a SaaS founder targeting startup founders. Topics: productivity, AI tools, team management. Format: 1 sentence hook + 2 sentence preview. Avoid: generic advice everyone shares."
                                        </p>
                                        <p className="text-gray-500 text-xs mt-2">Why it works: Platform, audience, topics, format all defined.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Quick Starter Prompts */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">5 Starter Prompts You Can Use Today</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Copy these templates and adapt them to your needs:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">📝 For Writing:</h3>
                                    <p className="text-sm text-cyan-400 font-mono mb-2">
                                        "Write a [type] for [audience] about [topic]. Tone: [adjective]. Length: [X words/paragraphs]. Include: [requirements]. Avoid: [constraints]."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">💡 For Learning:</h3>
                                    <p className="text-sm text-cyan-400 font-mono mb-2">
                                        "Explain [concept] to someone with [experience level]. Use [analogy/example type]. Avoid [jargon/complexity]. Format: [structure]."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🐛 For Debugging:</h3>
                                    <p className="text-sm text-cyan-400 font-mono mb-2">
                                        "I'm getting [error] in [language/tool]. Here's my code: [paste code]. What's wrong and how do I fix it? Explain like I'm [experience level]."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🎯 For Brainstorming:</h3>
                                    <p className="text-sm text-cyan-400 font-mono mb-2">
                                        "Generate [number] ideas for [goal] targeting [audience]. Each idea should [requirement]. Avoid: [constraints]."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🔄 For Improving:</h3>
                                    <p className="text-sm text-cyan-400 font-mono mb-2">
                                        "Review this [content type]: [paste content]. Improve: [aspect]. Keep: [what works]. Output: revised version with brief explanation of changes."
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Pro Tips */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Pro Tips</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">💬 Iterate</h3>
                                    <p className="text-sm text-gray-400">First answer not perfect? Ask for revisions. Treat it like a conversation.</p>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">📏 Be Specific</h3>
                                    <p className="text-sm text-gray-400">Vague prompts = vague results. More detail = better output.</p>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🎭 Set Tone</h3>
                                    <p className="text-sm text-gray-400">Casual? Professional? Funny? Say it explicitly.</p>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🚫 Use Constraints</h3>
                                    <p className="text-sm text-gray-400">Tell AI what NOT to do. Prevents generic fluff.</p>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🎯 Give Examples</h3>
                                    <p className="text-sm text-gray-400">Show AI what good looks like. "Write like this: [example]"</p>
                                </div>
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-white font-semibold mb-2">🔄 Build a Library</h3>
                                    <p className="text-sm text-gray-400">Save prompts that work. Reuse and adapt them.</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                            <h2 className="text-2xl font-bold text-white mb-3">Master Prompt Engineering</h2>
                            <p className="text-gray-400 mb-6">
                                This article covers the basics, but there's so much more. Explore our free Prompt Engineering track for advanced patterns, real-world examples, and hands-on practice.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link 
                                    href="/courses/prompts"
                                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Explore Prompt Engineering Course
                                </Link>
                                <Link 
                                    href="/blog"
                                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                                >
                                    More Articles
                                </Link>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
