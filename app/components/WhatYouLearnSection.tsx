export default function WhatYouLearnSection() {
    const learningPillars = [
        {
            id: 1,
            title: 'AI Fundamentals',
            description: 'Understand how AI actually works. Learn the core concepts without getting lost in complex math. Know enough to make informed decisions.',
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Automation Workflows',
            description: 'Build systems that work for you 24/7. Automate data entry, email responses, content creation, and research. Free up hours every week.',
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Real-World Use Cases',
            description: 'Apply AI to actual problems. Customer service chatbots, data analysis tools, content generators, and more. Build things people will pay for.',
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Future-Ready Skills',
            description: 'Stay ahead of the curve. Learn the AI tools and techniques that companies are hiring for right now. Build a portfolio that gets you noticed.',
            icon: (
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Glow accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What You'll Learn
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Every course is designed to give you practical skills you can use immediately
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {learningPillars.map((pillar) => (
                        <div 
                            key={pillar.id} 
                            className="group relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm"
                        >
                            {/* Hover effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 inline-block group-hover:border-cyan-400/50 transition-colors duration-300">
                                    {pillar.icon}
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {pillar.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
