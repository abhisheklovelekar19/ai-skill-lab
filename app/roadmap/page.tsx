import Link from 'next/link';

export default function RoadmapPage() {
    const freeCourses = [
        {
            id: 1,
            title: 'AI Basics',
            slug: 'ai-basics',
            description: 'Start your journey by understanding what AI is, how it works, and where it fits in the real world.',
            icon: '🤖',
            duration: '~30 min',
            topics: ['What is AI?', 'AI vs ML', 'Real-world uses', 'When to use AI']
        },
        {
            id: 2,
            title: 'Prompt Engineering',
            slug: 'prompts',
            description: 'Learn to communicate effectively with AI tools and write prompts that get you exactly what you need.',
            icon: '💬',
            duration: '~30 min',
            topics: ['Prompt fundamentals', 'Good vs bad prompts', 'Common patterns', 'Practical examples']
        },
        {
            id: 3,
            title: 'Automation Fundamentals',
            slug: 'automation',
            description: 'Discover how to save time with AI-powered automation and identify tasks worth automating.',
            icon: '⚡',
            duration: '~30 min',
            topics: ['What is automation?', 'AI + automation', 'Use cases', 'Getting started']
        }
    ];

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    {/* Badge */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                            <span className="text-sm font-medium text-cyan-400 tracking-wide">
                                LEARNING ROADMAP
                            </span>
                        </div>
                    </div>

                    {/* Hero Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Your Learning Path
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                at AI Skill Lab
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            From AI beginner to certified AI & Automation practitioner
                        </p>
                        <Link
                            href="/courses/ai-basics"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Start with AI Basics →
                        </Link>
                    </div>
                </div>

                {/* Level 1: Foundations */}
                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        {/* Level Badge */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                                <span className="text-3xl">1️⃣</span>
                                <span className="text-lg font-bold text-white">Level 1: Foundations</span>
                                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                                    FREE
                                </span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
                        </div>

                        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                            Build your AI foundation with three focused courses. Learn the basics, master prompting, and understand automation—all completely free.
                        </p>

                        {/* Free Courses Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {freeCourses.map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/courses/${course.slug}`}
                                    className="group bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                                >
                                    <div className="text-5xl mb-4">{course.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-cyan-400 mb-4">{course.duration}</p>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {course.description}
                                    </p>
                                    <div className="space-y-2 mb-6">
                                        {course.topics.map((topic, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="text-cyan-400">✓</span>
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="text-gray-500">
                                                <span className="text-cyan-400">✓</span> Quiz
                                            </span>
                                            <span className="text-gray-500">
                                                <span className="text-cyan-400">✓</span> Certificate
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Level 2: Skill Validation */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        {/* Level Badge */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10">
                                <span className="text-3xl">2️⃣</span>
                                <span className="text-lg font-bold text-white">Level 2: Skill Validation</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <p className="text-center text-gray-400 mb-12 text-lg leading-relaxed">
                                Prove your learning by completing all three courses, passing the quizzes, and earning your certificates. This validates your foundational knowledge and prepares you for advanced work.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-b from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20 text-center">
                                    <div className="text-4xl mb-4">📚</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Complete 3 Courses</h4>
                                    <p className="text-sm text-gray-400">
                                        Finish all lessons across AI Basics, Prompt Engineering, and Automation
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20 text-center">
                                    <div className="text-4xl mb-4">✅</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Pass All Quizzes</h4>
                                    <p className="text-sm text-gray-400">
                                        Score 6/10 or higher on each certification test to demonstrate understanding
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20 text-center">
                                    <div className="text-4xl mb-4">🎓</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Earn 3 Certificates</h4>
                                    <p className="text-sm text-gray-400">
                                        Collect your certificates as proof of your foundational AI knowledge
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">💡</span>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">Why This Matters</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            These certificates prove you've learned the basics. They build your confidence and prepare you for the Advanced Certification, where you'll apply these skills to real-world projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Level 3: Advanced Certification */}
                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        {/* Level Badge */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
                            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10">
                                <span className="text-3xl">3️⃣</span>
                                <span className="text-lg font-bold text-white">Level 3: Advanced Certification</span>
                                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
                                    COMING SOON
                                </span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <p className="text-center text-gray-400 mb-12 text-lg leading-relaxed">
                                Once you've mastered the foundations, take the next step with our Advanced Certification. Move beyond theory and learn to build real AI solutions.
                            </p>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-purple-500/20 mb-8">
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                    What You'll Learn
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🎯</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Advanced Prompt Engineering</h4>
                                            <p className="text-sm text-gray-400">Chain-of-thought, multi-agent systems, production-quality prompts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🔗</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">AI + Automation Systems</h4>
                                            <p className="text-sm text-gray-400">Build intelligent workflows, API integration, orchestration</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💼</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Applied AI Use Cases</h4>
                                            <p className="text-sm text-gray-400">Solve real problems in marketing, ops, support, and analysis</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🚀</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Capstone Project</h4>
                                            <p className="text-sm text-gray-400">Design and build a complete AI solution from scratch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/certification"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Join Advanced Certification Waitlist →
                                </Link>
                                <p className="text-sm text-gray-500 mt-4">
                                    Prerequisites: Complete all Level 1 courses
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-xl text-gray-400 mb-12">
                                Every expert was once a beginner. Your AI learning journey starts here.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link
                                    href="/courses"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Browse All Courses
                                </Link>
                                <Link
                                    href="/courses/ai-basics"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    Start with AI Basics
                                </Link>
                            </div>

                            <p className="text-sm text-gray-500">
                                💡 Bookmark this page to track your progress through the learning path
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
