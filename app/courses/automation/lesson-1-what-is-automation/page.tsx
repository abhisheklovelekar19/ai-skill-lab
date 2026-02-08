'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Lesson1Page() {
    const [mounted, setMounted] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('automation-completed-lessons');
        if (stored) {
            const completed = new Set(JSON.parse(stored));
            setIsCompleted(completed.has('lesson-1'));
        }
    }, []);

    const markComplete = () => {
        const stored = localStorage.getItem('automation-completed-lessons');
        const completed = stored ? new Set(JSON.parse(stored)) : new Set();
        completed.add('lesson-1');
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
                        LESSON 1 OF 3
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        💡 What is Automation?
                    </h1>
                    <p className="text-xl text-gray-400">
                        Learn the fundamentals of automation and discover when to use it to save time.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none space-y-8 mb-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">The Simple Definition</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Automation means <strong className="text-white">getting a computer to do repetitive tasks for you</strong>. Instead of manually doing something 100 times, you set it up once and let the system handle it.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Think of it like setting a coffee maker to brew at 7 AM every morning. You don't manually pour water and press start each day—you automate it.
                        </p>

                        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                            <h3 className="text-xl font-semibold text-white mb-3">Real-World Example</h3>
                            <p className="text-gray-400 mb-3">
                                You get 20 customer inquiry emails daily. Instead of manually reading each, sorting by topic, and forwarding to the right team member, you create a rule:
                            </p>
                            <ul className="list-disc list-inside text-cyan-400 space-y-2 text-sm">
                                <li>If email contains "billing" → forward to finance team</li>
                                <li>If email contains "technical issue" → forward to support team</li>
                                <li>If email contains "sales question" → forward to sales team</li>
                            </ul>
                            <p className="text-gray-400 mt-3 text-sm">
                                You just automated 20 minutes of daily work.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">The 3x Rule</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Here's a simple test to know when automation is worth it:
                        </p>
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/30 text-center mb-6">
                            <p className="text-2xl font-bold text-white mb-2">
                                If you do the same task more than 3 times...
                            </p>
                            <p className="text-lg text-cyan-400">
                                It's probably worth automating.
                            </p>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Time spent setting up automation often pays back within days or weeks. Even a simple 5-minute automated task that you do daily saves you 30+ hours per year.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">What Can Be Automated?</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Any repetitive, rule-based task is a candidate for automation:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">📧 Email Management</h4>
                                <p className="text-sm text-gray-400">Auto-sort, filter, label, and archive emails based on sender, keywords, or topics.</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">📅 Calendar Scheduling</h4>
                                <p className="text-sm text-gray-400">Automatically create events from emails, send reminders, and sync across calendars.</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">💾 File Organization</h4>
                                <p className="text-sm text-gray-400">Auto-rename, sort, and backup files by date, type, or project name.</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">📊 Data Entry</h4>
                                <p className="text-sm text-gray-400">Copy data from emails to spreadsheets, update databases, or generate reports.</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">🔔 Notifications</h4>
                                <p className="text-sm text-gray-400">Get alerts for specific events, price drops, new mentions, or deadline reminders.</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <h4 className="text-white font-semibold mb-2">📱 Social Media</h4>
                                <p className="text-sm text-gray-400">Schedule posts, auto-respond to comments, or cross-post to multiple platforms.</p>
                            </div>
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
                                <span>Automation = making computers handle repetitive tasks automatically</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>If you repeat a task 3+ times, it's worth automating</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Common targets: emails, calendars, files, data entry, notifications</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Small time savings compound into huge productivity gains</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                    <Link 
                        href="/courses/automation"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Course Overview
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
                            href="/courses/automation/lesson-2-ai-vs-automation"
                            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
                        >
                            Next: AI + Automation
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
