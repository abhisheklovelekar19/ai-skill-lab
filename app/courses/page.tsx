import CourseCard from "../components/CourseCard";

export default function CoursesPage() {
    const courses = [
        {
            id: 1,
            title: 'AI Crash Course',
            description: 'Perfect for complete beginners. Learn how AI works, build your first machine learning model, and understand when to use AI vs traditional programming. By the end, you\'ll know enough to have intelligent conversations about AI and start building simple projects.',
            price: 99,
            ctaText: 'View Details'
        },
        {
            id: 2,
            title: 'Prompt Engineering Pro',
            description: 'Master the #1 skill for working with AI in 2026. Learn to write prompts that get you exactly what you need from ChatGPT, Claude, and other AI tools. Build custom workflows, automate research, and 10x your productivity.',
            price: 149,
            ctaText: 'View Details'
        },
        {
            id: 3,
            title: 'Automation Toolkit',
            description: 'Stop wasting time on repetitive tasks. Build AI-powered automation systems for email management, data processing, content creation, and customer support. Real projects you can deploy immediately.',
            price: 129,
            ctaText: 'View Details'
        },
        {
            id: 4,
            title: 'AI Career Blueprint',
            description: 'Breaking into AI? This course shows you how. Build a standout portfolio, optimize your resume for AI roles, prepare for technical interviews, and navigate the AI job market. Includes real interview questions and strategies.',
            price: 199,
            ctaText: 'View Details'
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
                            ALL COURSES
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Learn AI Skills That
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Actually Get Used
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        No fluff. No theory overload. Just practical AI skills you'll use in the real world. Each course is designed to take you from zero to building actual projects.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            price={course.price}
                            ctaText={course.ctaText}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center space-y-8">
                    {/* Learning Approach */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Learning Approach</h3>
                        <p className="text-gray-400 mb-6">
                            Every course follows the same proven formula: Learn → Build → Apply. No endless theory. No outdated content. Just practical skills you can use immediately.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-2">📚</div>
                                <h4 className="text-lg font-semibold text-white mb-2">Hands-On Projects</h4>
                                <p className="text-sm text-gray-400">Build real applications, not toy examples</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-2">⚡</div>
                                <h4 className="text-lg font-semibold text-white mb-2">Learn by Doing</h4>
                                <p className="text-sm text-gray-400">Write code from day one, not week five</p>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="text-3xl mb-2">🎯</div>
                                <h4 className="text-lg font-semibold text-white mb-2">Real-World Focus</h4>
                                <p className="text-sm text-gray-400">Skills you can use in your job tomorrow</p>
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Lifetime Access</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Regular Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span>Beginner-Friendly</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
