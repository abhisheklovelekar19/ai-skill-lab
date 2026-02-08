import Link from 'next/link';

export default function ProductsSection() {
    const freeContent = [
        {
            id: 1,
            title: 'AI Basics',
            description: 'New to AI? Start here. Understand what AI is, how it works, and where it fits in the real world. Perfect for complete beginners.',
            ctaText: 'Start Learning',
            href: '/courses/ai-basics',
            icon: '🤖'
        },
        {
            id: 2,
            title: 'Prompt Engineering',
            description: 'Master the art of talking to AI. Write prompts that get you 10x better results from ChatGPT, Claude, and other AI tools.',
            ctaText: 'Start Learning',
            href: '/courses/prompts',
            icon: '💬'
        },
        {
            id: 3,
            title: 'Automation Fundamentals',
            description: 'Stop doing repetitive work. Learn what automation is, when to use it, and how AI makes it smarter.',
            ctaText: 'Start Learning',
            href: '/courses/automation',
            icon: '⚡'
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Free Learning Tracks
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Start your AI journey with quality content, completely free. No signup required.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {freeContent.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                                <span>{item.ctaText}</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Browse All Link */}
                <div className="text-center mt-12">
                    <Link 
                        href="/courses"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        <span>Browse All Tracks</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}