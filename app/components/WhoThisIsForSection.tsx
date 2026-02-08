export default function WhoThisIsForSection() {
    const audiences = [
        {
            id: 1,
            emoji: '🎓',
            title: 'Complete Beginners',
            description: 'Never touched AI before? Start here. Our courses assume zero experience and guide you step-by-step.'
        },
        {
            id: 2,
            emoji: '💼',
            title: 'Working Professionals',
            description: 'Add AI skills to your resume. Automate your daily tasks. Become more valuable in your current role.'
        },
        {
            id: 3,
            emoji: '🚀',
            title: 'Builders & Founders',
            description: 'Ship AI-powered products faster. Learn to build, not just use. Turn ideas into reality with AI.'
        },
        {
            id: 4,
            emoji: '🎯',
            title: 'Career Switchers',
            description: 'Break into AI and tech. Build a portfolio of real projects. Land your first AI job with confidence.'
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black overflow-hidden transition-colors duration-300">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Who This Is For
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Whether you're just starting out or looking to level up, we've got you covered
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {audiences.map((audience) => (
                        <div 
                            key={audience.id} 
                            className="group relative bg-gradient-to-b from-gray-100/50 to-white/50 dark:from-gray-900/50 dark:to-black/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                                {/* Emoji */}
                                <div className="text-5xl mb-4">{audience.emoji}</div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {audience.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {audience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
