'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CertificationPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just show success message (no backend)
        setSubmitted(true);
        setEmail('');
    };

    const prerequisites = [
        { name: 'AI Basics', slug: 'ai-basics', icon: '🤖' },
        { name: 'Prompt Engineering', slug: 'prompts', icon: '💬' },
        { name: 'Automation Fundamentals', slug: 'automation', icon: '⚡' }
    ];

    const advancedModules = [
        {
            title: 'Advanced Prompt Engineering',
            description: 'Master complex prompting techniques, chain-of-thought reasoning, and multi-step AI workflows',
            icon: '🎯',
            topics: ['Chain-of-thought prompting', 'Role-based prompts', 'Prompt templates', 'Multi-agent systems']
        },
        {
            title: 'AI + Automation Systems',
            description: 'Build intelligent automation pipelines that combine multiple AI tools and services',
            icon: '🔗',
            topics: ['Workflow design', 'API integration', 'Error handling', 'System orchestration']
        },
        {
            title: 'Applied AI Use Cases',
            description: 'Solve real business problems across marketing, operations, customer service, and analysis',
            icon: '💼',
            topics: ['Content generation', 'Data analysis', 'Customer support automation', 'Process optimization']
        },
        {
            title: 'Capstone Project',
            description: 'Design and build a complete AI-powered solution from scratch to demonstrate your skills',
            icon: '🚀',
            topics: ['Problem identification', 'Solution design', 'Implementation', 'Documentation']
        }
    ];

    const skills = [
        'Design end-to-end AI workflows for real business problems',
        'Evaluate when AI is (and isn\'t) the right solution',
        'Build automation systems that leverage multiple AI tools',
        'Write production-quality prompts that deliver consistent results',
        'Think strategically about AI integration and ROI',
        'Communicate technical concepts to non-technical stakeholders'
    ];

    const targetAudience = [
        {
            title: 'Free Course Graduates',
            description: 'You\'ve completed our beginner courses and want to go deeper',
            icon: '🎓'
        },
        {
            title: 'Working Professionals',
            description: 'You need practical AI skills to advance your career or solve work challenges',
            icon: '💼'
        },
        {
            title: 'Builders & Problem Solvers',
            description: 'You learn by doing and want hands-on project experience',
            icon: '🛠️'
        }
    ];

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Hero Section */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    {/* Badge */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                            </span>
                            <span className="text-sm font-medium text-purple-400 tracking-wide">
                                ADVANCED CERTIFICATION
                            </span>
                        </div>
                    </div>

                    {/* Hero Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            AI Skill Lab
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                                Advanced Certification
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A practical, project-driven certification for serious learners ready to build real AI solutions
                        </p>
                    </div>

                    {/* CTA Form */}
                    <div className="max-w-xl mx-auto">
                        {!submitted ? (
                            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Join Waitlist
                                </button>
                            </form>
                        ) : (
                            <div className="text-center p-6 rounded-lg bg-green-500/10 border border-green-500/30">
                                <p className="text-green-400 font-medium">
                                    ✓ You're on the list! We'll notify you when the certification launches.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Why This Certification */}
            <div className="relative z-10 bg-gradient-to-b from-gray-900/50 to-black/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Why This Certification?
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 text-left">
                            <p>
                                You've learned the basics of AI. You know what prompts are, you understand the difference between AI and automation, and you've experimented with ChatGPT.
                            </p>
                            <p>
                                But there's a gap between <span className="text-purple-400 font-semibold">understanding AI concepts</span> and <span className="text-purple-400 font-semibold">using AI to solve real problems</span>.
                            </p>
                            <p>
                                This certification bridges that gap. It's designed for learners who want to go beyond tutorials and build practical skills through hands-on projects. No fluff, no hype—just focused, practical learning that prepares you to design and implement AI solutions.
                            </p>
                            <p className="text-purple-400 font-semibold text-xl">
                                This is your path from AI beginner to AI practitioner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who This Is For */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                        Who This Is For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {targetAudience.map((audience, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{audience.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Learning Journey */}
            <div className="relative z-10 bg-gradient-to-b from-gray-900/50 to-black/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                        Your Learning Journey
                    </h2>

                    {/* Prerequisites */}
                    <div className="mb-16">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                Prerequisites: Complete Our Free Courses
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {prerequisites.map((course) => (
                                    <Link
                                        key={course.slug}
                                        href={`/courses/${course.slug}`}
                                        className="flex items-center gap-3 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/50 transition-all group"
                                    >
                                        <span className="text-3xl">{course.icon}</span>
                                        <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                            {course.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            <p className="text-center text-gray-500 mt-4 text-sm">
                                Haven't completed these yet? <Link href="/courses" className="text-cyan-400 hover:text-cyan-300">Start here →</Link>
                            </p>
                        </div>
                    </div>

                    {/* Advanced Modules */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">
                            Advanced Certification Modules
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {advancedModules.map((module, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-8 border border-purple-500/20"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="text-4xl">{module.icon}</span>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{module.title}</h4>
                                            <p className="text-gray-400 mb-4">{module.description}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {module.topics.map((topic, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="text-purple-400">→</span>
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* What You Will Be Able To Do */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                        What You'll Be Able To Do
                    </h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                            >
                                <span className="text-purple-400 font-bold text-xl mt-1">✓</span>
                                <p className="text-gray-300 leading-relaxed">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certification & Recognition */}
            <div className="relative z-10 bg-gradient-to-b from-gray-900/50 to-black/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Certification & Recognition
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                Upon successful completion of all modules and your capstone project, you'll receive an <span className="text-purple-400 font-semibold">AI Skill Lab Advanced Certification</span>.
                            </p>
                            <p>
                                This certification recognizes your practical skills in designing and building AI-powered solutions. While not an accredited degree, it demonstrates to employers and clients that you've completed rigorous, hands-on training.
                            </p>
                            <p className="text-gray-400 text-base border-l-4 border-purple-500/30 pl-6 italic">
                                We believe in honest credentials. This certification proves you can do the work—no exaggerated claims, just real skills validated through real projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Level Up?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12">
                            The Advanced Certification is currently in development. Join the waitlist to be notified when it launches.
                        </p>

                        <div className="mb-12">
                            {!submitted ? (
                                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                    >
                                        Join Waitlist
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center p-6 rounded-lg bg-green-500/10 border border-green-500/30 max-w-xl mx-auto">
                                    <p className="text-green-400 font-medium">
                                        ✓ You're on the list! We'll notify you when the certification launches.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-gray-500 mb-6">
                                In the meantime, strengthen your foundation:
                            </p>
                            <Link
                                href="/courses"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Complete Free Courses →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
