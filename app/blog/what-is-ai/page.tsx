import Link from "next/link";

export default function WhatIsAIPage() {
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
                                AI Fundamentals
                            </span>
                            <span className="text-gray-500">February 2026</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">5 min read</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            What is AI? A Beginner-Friendly Explanation
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Confused by AI jargon? This article breaks down what artificial intelligence actually is, how it works, and why it matters—in plain English.
                        </p>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        {/* Introduction */}
                        <section>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                If you're feeling overwhelmed by AI terminology, you're not alone. Between "machine learning," "neural networks," and "large language models," it's easy to get lost in the jargon.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Let's cut through the noise and explain AI in a way that actually makes sense.
                            </p>
                        </section>

                        {/* Section 1: The Simple Definition */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">The Simple Definition</h2>
                            <p className="text-gray-300 leading-relaxed">
                                <strong className="text-white">Artificial Intelligence (AI)</strong> is software that can learn and make decisions without being explicitly programmed for every single scenario.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Traditional software follows strict rules: "If the user clicks button A, do action B." AI learns patterns from data and applies them to new situations it's never seen before.
                            </p>

                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 my-6">
                                <h3 className="text-xl font-semibold text-white mb-3">💡 Think of it like this:</h3>
                                <p className="text-gray-300 mb-3">
                                    <strong className="text-white">Traditional program:</strong> A recipe. Follow the exact steps, get the exact result.
                                </p>
                                <p className="text-gray-300">
                                    <strong className="text-white">AI system:</strong> A chef. Tastes thousands of dishes, learns what works, and creates new recipes based on patterns.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Real-World Examples */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">AI in Your Daily Life</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                You're already using AI, probably without realizing it:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">📧 Email Spam Filters</h3>
                                    <p className="text-sm text-gray-400">
                                        AI learns what spam looks like from millions of examples. When new email arrives, it predicts whether it's spam—even if it's never seen that exact message before.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">🎬 Netflix Recommendations</h3>
                                    <p className="text-sm text-gray-400">
                                        AI analyzes what you watch, compares it to millions of other users, and predicts what you'll enjoy next. No human manually curates your list.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">📱 Face ID</h3>
                                    <p className="text-sm text-gray-400">
                                        Your phone learns what your face looks like from different angles, lighting, and expressions. Then recognizes you instantly, even with glasses or a hat.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">🗺️ Google Maps</h3>
                                    <p className="text-sm text-gray-400">
                                        AI predicts traffic patterns based on historical data, current conditions, and millions of user locations. Suggests faster routes in real-time.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">💬 ChatGPT/Claude</h3>
                                    <p className="text-sm text-gray-400">
                                        AI trained on massive amounts of text. Predicts what words should come next based on patterns, allowing it to write, explain, and answer questions.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                    <h3 className="text-lg font-semibold text-white mb-2">🛒 Amazon Suggestions</h3>
                                    <p className="text-sm text-gray-400">
                                        "Customers who bought this also bought..." AI finds patterns in purchasing behavior across millions of shoppers to suggest relevant products.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Common Myths */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Myths vs Reality</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Let's clear up some common misconceptions:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">❌</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Myth: AI is sentient or conscious</h3>
                                            <p className="text-sm text-gray-400">
                                                <strong className="text-white">Reality:</strong> AI doesn't "think" or "feel." It's pattern matching at scale. ChatGPT doesn't understand your question—it predicts statistically likely responses based on training data.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">❌</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Myth: AI will replace all jobs</h3>
                                            <p className="text-sm text-gray-400">
                                                <strong className="text-white">Reality:</strong> AI automates specific tasks, not entire jobs. Most jobs will change, not disappear. People who use AI will replace people who don't.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">❌</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Myth: You need to be a programmer to use AI</h3>
                                            <p className="text-sm text-gray-400">
                                                <strong className="text-white">Reality:</strong> Modern AI tools like ChatGPT, Midjourney, and automation platforms require zero coding. Learning to use them effectively is more important than building them.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-red-500/30">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">❌</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Myth: AI is always right</h3>
                                            <p className="text-sm text-gray-400">
                                                <strong className="text-white">Reality:</strong> AI makes mistakes. It "hallucinates" (confidently states false information). Always verify important outputs, especially for critical decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Who Should Learn AI */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Who Should Learn About AI?</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Short answer: everyone. Here's why:
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl flex-shrink-0">👨‍💼</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Professionals</h3>
                                        <p className="text-sm text-gray-400">
                                            AI is changing how work gets done across every industry. Understanding it keeps you competitive and helps you spot opportunities to work smarter.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl flex-shrink-0">🎓</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Students</h3>
                                        <p className="text-sm text-gray-400">
                                            AI literacy is becoming as fundamental as computer literacy. Get ahead of the curve now.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl flex-shrink-0">🚀</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Entrepreneurs</h3>
                                        <p className="text-sm text-gray-400">
                                            AI enables entirely new business models and product categories. Understanding it helps you build smarter solutions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl flex-shrink-0">🤔</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Curious Learners</h3>
                                        <p className="text-sm text-gray-400">
                                            AI is reshaping society. Understanding how it works helps you make informed decisions and critically evaluate AI claims.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Key Takeaways */}
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">Key Takeaways</h2>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-gray-300">
                                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                                        <span>AI learns patterns from data instead of following rigid rules</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-300">
                                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                                        <span>You're already using AI daily—email filters, recommendations, voice assistants</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-300">
                                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                                        <span>AI isn't sentient or infallible—it's pattern matching with limitations</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-300">
                                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                                        <span>You don't need to code to use AI effectively</span>
                                    </li>
                                    <li className="flex gap-3 text-gray-300">
                                        <span className="text-cyan-400 flex-shrink-0">✓</span>
                                        <span>Understanding AI is becoming essential for everyone, not just tech professionals</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                            <h2 className="text-2xl font-bold text-white mb-3">Ready to Dive Deeper?</h2>
                            <p className="text-gray-400 mb-6">
                                This article scratches the surface. If you want to truly understand AI, explore our free AI Basics learning track with hands-on examples and real-world applications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link 
                                    href="/courses/ai-basics"
                                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Explore AI Basics Course
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
