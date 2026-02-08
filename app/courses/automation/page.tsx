'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function AutomationPage() {
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
    const [mounted, setMounted] = useState(false);

    const lessons = [
        { 
            id: 'lesson-1', 
            title: 'Lesson 1: What is Automation?',
            description: 'Learn the basics of automation and when to use it',
            url: '/courses/automation/lesson-1-what-is-automation',
            icon: '💡'
        },
        { 
            id: 'lesson-2', 
            title: 'Lesson 2: AI + Automation',
            description: 'Understand how AI enhances traditional automation',
            url: '/courses/automation/lesson-2-ai-vs-automation',
            icon: '🤖'
        },
        { 
            id: 'lesson-3', 
            title: 'Lesson 3: Real-World Use Cases',
            description: 'Explore practical automation examples you can use today',
            url: '/courses/automation/lesson-3-automation-use-cases',
            icon: '🚀'
        }
    ];

    useEffect(() => {
        setMounted(true);
        // Load completed lessons from localStorage
        const stored = localStorage.getItem('automation-completed-lessons');
        if (stored) {
            setCompletedLessons(new Set(JSON.parse(stored)));
        }
    }, []);

    const allLessonsComplete = lessons.every(l => completedLessons.has(l.id));

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">{/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Courses
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-5xl">⚡</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                        <span>✓</span>
                        <span>FREE MINI-COURSE</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Automation Fundamentals
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-6">
                        Stop wasting time on repetitive tasks. Learn what automation is, when to use it, and how AI makes it smarter.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            3 Lessons
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            ~15 minutes
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Certificate Available
                        </span>
                    </div>
                </div>

                {/* Why This Matters */}
                <div className="mb-12 p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
                    <h2 className="text-2xl font-bold text-white mb-4">Why Automation Matters</h2>
                    <p className="text-gray-400 mb-4">
                        Every professional wastes hours each week on repetitive tasks. Email sorting. Data entry. File organization. Status updates.
                    </p>
                    <p className="text-gray-400 mb-4">
                        Automation frees up that time so you can focus on creative, strategic work that actually moves the needle.
                    </p>
                    <p className="text-cyan-400 font-medium">
                        This mini-course teaches you the fundamentals—no coding required.
                    </p>
                </div>

                {/* Progress Tracker */}
                {mounted && (
                    <div className="mb-12 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Your Progress</h3>
                            <span className="text-sm text-purple-400 font-medium">
                                {completedLessons.size}/{lessons.length} lessons completed
                            </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                            <div 
                                className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(completedLessons.size / lessons.length) * 100}%` }}
                            />
                        </div>
                        {!allLessonsComplete && (
                            <p className="text-sm text-gray-400">
                                Complete all lessons to unlock the certification test
                            </p>
                        )}
                        {allLessonsComplete && (
                            <p className="text-sm text-green-400 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                All lessons complete! You can now take the certification test.
                            </p>
                        )}
                    </div>
                )}

                {/* Lessons List */}
                <div className="mb-16 space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-8">Course Lessons</h2>
                    
                    {lessons.map((lesson, index) => {
                        const isCompleted = completedLessons.has(lesson.id);
                        return (
                            <Link
                                key={lesson.id}
                                href={lesson.url}
                                className="block group"
                            >
                                <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="text-4xl">{lesson.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-3">
                                                    {lesson.description}
                                                </p>
                                                <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                                    Start Lesson
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        {mounted && isCompleted && (
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Completed
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Certification Section */}
                {mounted && (
                    <section className={`mb-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 ${!allLessonsComplete ? 'opacity-50' : ''}`}>
                        <div className="text-center mb-6">
                            <div className="inline-block text-6xl mb-4">🎓</div>
                            <h2 className="text-3xl font-bold text-white mb-4">Get Certified</h2>
                            {!allLessonsComplete ? (
                                <>
                                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                                        Complete all {lessons.length} lessons to unlock the certification test.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-gray-300 text-sm font-medium">Certification Locked</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                                        Ready to test your knowledge? Complete our 10-question certification test to earn your official certificate.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">10</div>
                                            <div className="text-sm text-gray-400">Questions</div>
                                        </div>
                                        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                                            <div className="text-sm text-gray-400">Passing Score</div>
                                        </div>
                                        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-4 border border-purple-500/20 text-center">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">🎓</div>
                                            <div className="text-sm text-gray-400">Get Certificate</div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Link 
                                            href="/courses/automation/certification"
                                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                        >
                                            🎯 Take Certification Test →
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                )}

                {/* Next Steps */}
                <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready for More?</h2>
                    <p className="text-gray-400 mb-6">
                        Explore other free mini-courses or join our waitlist for advanced hands-on training with real-world projects.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link 
                            href="/courses/ai-basics"
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                        >
                            AI Basics →
                        </Link>
                        <Link 
                            href="/courses/prompts"
                            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                        >
                            Prompt Engineering →
                        </Link>
                    </div>

                    <div className="border-t border-cyan-500/20 pt-6">
                        <p className="text-sm text-gray-400 mb-4">
                            Want to build advanced automation systems with AI? Join our waitlist for premium courses with real-world projects.
                        </p>
                        <Link 
                            href="/#waitlist"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist →
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
