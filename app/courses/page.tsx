import Link from "next/link";

export default function CoursesPage() {
    const freeTracks = [
        {
            id: 1,
            title: 'AI Basics',
            slug: 'ai-basics',
            description: 'Start here if you\'re new to AI. Understand what AI actually is, how it differs from traditional programming, and where it fits in the real world.',
            topics: ['What is AI?', 'AI vs ML vs Automation', 'Real-world applications', 'When to use AI'],
            icon: '🤖',
            level: 'Beginner'
        },
        {
            id: 2,
            title: 'Prompt Engineering',
            slug: 'prompts',
            description: 'Learn to communicate with AI tools effectively. Master the art of writing prompts that get you exactly what you need from ChatGPT, Claude, and other LLMs.',
            topics: ['Prompt fundamentals', 'Good vs bad prompts', 'Common patterns', 'Practical examples'],
            icon: '💬',
            level: 'Beginner'
        },
        {
            id: 3,
            title: 'Automation Fundamentals',
            slug: 'automation',
            description: 'Discover how to save time with AI-powered automation. Learn to identify tasks worth automating and how AI makes automation smarter.',
            topics: ['What is automation?', 'AI + automation together', 'Practical use cases', 'Getting started'],
            icon: '⚡',
            level: 'Beginner'
        }
    ];

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Glowing orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-cyan-400 tracking-wide">
                            FREE LEARNING TRACKS
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Start Learning AI
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Completely Free
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Three focused learning tracks to build your AI foundation. No signup required. No credit card. Just quality content to help you get started.
                    </p>
                </div>

                {/* Free Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {freeTracks.map((track) => (
                        <Link 
                            href={`/courses/${track.slug}`}
                            key={track.id}
                            className="group bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            {/* Icon & Level */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-5xl">{track.icon}</div>
                                <span className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                                    {track.level}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {track.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {track.description}
                            </p>

                            {/* Topics */}
                            <div className="space-y-2 mb-6">
                                {track.topics.map((topic, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{topic}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                                <span>Start Learning</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center space-y-8">
                    {/* Learning Philosophy */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Learning Philosophy</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            AI doesn't have to be complicated. These free tracks strip away the hype and jargon. You'll get clear explanations, practical examples, and real-world context. Perfect for anyone who wants to understand AI without the overwhelm.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">📖</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Clear & Simple</h3>
                                <p className="text-sm text-gray-400">No jargon. No assumptions. Just clear explanations.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🎯</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Real-World Focus</h3>
                                <p className="text-sm text-gray-400">Learn things you'll actually use in your life.</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-3">🚀</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Always Free</h3>
                                <p className="text-sm text-gray-400">Quality education shouldn't cost money.</p>
                            </div>
                        </div>
                    </div>

                    {/* Waitlist CTA */}
                    <div className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h3 className="text-2xl font-bold text-white mb-3">Want More?</h3>
                        <p className="text-gray-400 mb-6">
                            We're building advanced courses with hands-on projects, real-world applications, and deeper technical dives. Join the waitlist to be the first to know when they launch.
                        </p>
                        <Link 
                            href="/#waitlist"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
