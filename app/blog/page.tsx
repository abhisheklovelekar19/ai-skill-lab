import Link from "next/link";

export default function BlogPage() {
    const articles = [
        {
            id: 1,
            title: 'What is AI? A Beginner-Friendly Explanation',
            slug: 'what-is-ai',
            description: 'Confused by AI jargon? This article breaks down what artificial intelligence actually is, how it works, and why it matters—in plain English.',
            date: 'February 2026',
            readTime: '5 min read',
            category: 'AI Fundamentals'
        },
        {
            id: 2,
            title: 'AI vs Automation: What\'s the Difference?',
            slug: 'ai-vs-automation',
            description: 'People often confuse AI with automation. Learn the key differences, when to use each, and how they work together to make your work easier.',
            date: 'February 2026',
            readTime: '4 min read',
            category: 'AI Fundamentals'
        },
        {
            id: 3,
            title: 'Prompt Engineering Basics: Get Better AI Results',
            slug: 'prompt-engineering-basics',
            description: 'Writing better prompts can 10x your AI results. Learn simple patterns that work with ChatGPT, Claude, and other AI tools.',
            date: 'February 2026',
            readTime: '6 min read',
            category: 'Practical Skills'
        }
    ];

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                        <span className="text-sm font-medium text-cyan-400 tracking-wide">
                            📝 BLOG
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        AI Skill Lab Blog
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Clear, practical articles about AI. No hype. No jargon. Just honest explanations to help you understand and use AI effectively.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="space-y-8 mb-16">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="group block bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 font-medium">
                                    {article.category}
                                </span>
                                <span className="text-gray-500">{article.date}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-500">{article.readTime}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {article.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed mb-4">
                                {article.description}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                                <span>Read Article</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                    <h3 className="text-2xl font-bold text-white mb-3">Want to Learn More?</h3>
                    <p className="text-gray-400 mb-6">
                        Explore our free learning tracks for hands-on AI education. No signup required.
                    </p>
                    <Link 
                        href="/courses"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                    >
                        Browse Free Courses
                    </Link>
                </div>
            </div>
        </main>
    );
}
