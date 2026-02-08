export default function ValueSection() {
    const values = [
        {
            id: 1,
            icon: (
                <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Learn By Doing',
            description: 'Build real AI projects from day one. No theory overload—just hands-on practical skills you can apply immediately.'
        },
        {
            id: 2,
            icon: (
                <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'Expert-Led Training',
            description: 'Learn from AI practitioners who have deployed systems at scale. Get insights from real-world industry experience.'
        },
        {
            id: 3,
            icon: (
                <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Career-Ready Skills',
            description: 'Master the AI tools and techniques that companies are hiring for. Build a portfolio that gets you noticed.'
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why AI Skill Lab?
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        The fastest path from beginner to AI professional
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value) => (
                        <div 
                            key={value.id} 
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon container */}
                            <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                {value.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}