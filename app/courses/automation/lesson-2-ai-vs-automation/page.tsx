'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Lesson2Page() {
    const [mounted, setMounted] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('automation-completed-lessons');
        if (stored) {
            const completed = new Set(JSON.parse(stored));
            setIsCompleted(completed.has('lesson-2'));
        }
    }, []);

    const markComplete = () => {
        const stored = localStorage.getItem('automation-completed-lessons');
        const completed = stored ? new Set(JSON.parse(stored)) : new Set();
        completed.add('lesson-2');
        localStorage.setItem('automation-completed-lessons', JSON.stringify(Array.from(completed)));
        setIsCompleted(true);
    };

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/courses/automation" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Course Overview
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                        LESSON 2 OF 3
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        🤖 AI + Automation
                    </h1>
                    <p className="text-xl text-gray-400">
                        Understand how AI takes automation to the next level with adaptive intelligence.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none space-y-8 mb-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">The Key Difference</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Traditional automation and AI-powered automation both save time, but they work very differently.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Traditional */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">🔧 Traditional Automation</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="text-white font-medium mb-1">How it works:</p>
                                        <p className="text-gray-400">Follows exact rules you define. Pure if-this-then-that logic.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Best for:</p>
                                        <p className="text-gray-400">Predictable, repetitive tasks with clear rules.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Example:</p>
                                        <p className="text-cyan-400">Every time I get an email from X, move it to folder Y.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Limitation:</p>
                                        <p className="text-orange-400">Can't handle variations. Needs exact matches.</p>
                                    </div>
                                </div>
                            </div>

                            {/* AI-Powered */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-purple-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">🤖 AI-Powered Automation</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="text-white font-medium mb-1">How it works:</p>
                                        <p className="text-gray-400">Learns patterns and adapts. Makes context-based decisions.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Best for:</p>
                                        <p className="text-gray-400">Tasks requiring judgment, pattern recognition, or understanding.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Example:</p>
                                        <p className="text-cyan-400">Read incoming emails, understand intent, categorize by urgency, draft appropriate responses.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Advantage:</p>
                                        <p className="text-green-400">Handles variations and makes smart decisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">When to Use Each</h2>
                        
                        <div className="space-y-6">
                            {/* Use Traditional Automation */}
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span>🔧</span> Use Traditional Automation When:
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>The task has clear, unchanging rules</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>You don't need context or judgment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>The input format is consistent and predictable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span><strong>Example:</strong> Auto-forwarding emails from specific senders to specific folders</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Use AI Automation */}
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30">
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span>🤖</span> Use AI Automation When:
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>The task requires understanding context or meaning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>You need pattern recognition across varied inputs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span>The task involves creating or summarizing content</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        <span><strong>Example:</strong> Reading customer support tickets, understanding urgency, categorizing by issue type, and drafting contextual responses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Combining Both for Maximum Impact</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The most powerful automation systems use both traditional and AI automation together:
                        </p>

                        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20 mb-6">
                            <h4 className="text-white font-semibold mb-3">Example: Automated Customer Support</h4>
                            <ol className="space-y-3 text-sm text-gray-400">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">1</span>
                                    <span><strong className="text-white">Traditional:</strong> Email arrives → trigger automation workflow</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">2</span>
                                    <span><strong className="text-white">AI:</strong> Read email content → understand customer intent and urgency</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">3</span>
                                    <span><strong className="text-white">AI:</strong> Draft personalized response based on issue type</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">4</span>
                                    <span><strong className="text-white">Traditional:</strong> Route to correct team member → log in CRM → send response</span>
                                </li>
                            </ol>
                            <p className="text-green-400 mt-4 text-sm font-medium">
                                Result: What used to take 15 minutes per ticket now takes 30 seconds—and customers get faster, more accurate responses.
                            </p>
                        </div>
                    </section>

                    {/* Key Takeaways */}
                    <section className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span>✓</span> Key Takeaways
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Traditional automation = rule-based, predictable tasks</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>AI automation = context-aware, adaptive, intelligent decisions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Use traditional for consistent, simple rules; AI for judgment and understanding</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Combining both creates the most powerful automation systems</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                    <Link 
                        href="/courses/automation/lesson-1-what-is-automation"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous Lesson
                    </Link>

                    <div className="flex items-center gap-4">
                        {mounted && !isCompleted && (
                            <button
                                onClick={markComplete}
                                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
                            >
                                ✓ Mark as Complete
                            </button>
                        )}
                        {mounted && isCompleted && (
                            <span className="px-6 py-3 bg-green-500/20 text-green-400 font-semibold rounded-lg border border-green-500/30">
                                ✓ Completed
                            </span>
                        )}
                        <Link 
                            href="/courses/automation/lesson-3-automation-use-cases"
                            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
                        >
                            Next: Use Cases
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
