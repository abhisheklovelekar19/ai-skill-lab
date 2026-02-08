'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Lesson3Page() {
    const [mounted, setMounted] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('automation-completed-lessons');
        if (stored) {
            const completed = new Set(JSON.parse(stored));
            setIsCompleted(completed.has('lesson-3'));
        }
    }, []);

    const markComplete = () => {
        const stored = localStorage.getItem('automation-completed-lessons');
        const completed = stored ? new Set(JSON.parse(stored)) : new Set();
        completed.add('lesson-3');
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
                        LESSON 3 OF 3
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        🚀 Real-World Automation Use Cases
                    </h1>
                    <p className="text-xl text-gray-400">
                        Practical examples you can implement today to save hours every week.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none space-y-8 mb-12">
                    {/* Section 1: Easy Wins */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Quick Wins (No Coding Required)</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Start here. These automations take 5-15 minutes to set up and save hours every week.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">EASY</span>
                                    <h4 className="text-white font-semibold">📧 Email Filtering</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Auto-sort emails into folders, mark as read, or star important ones based on sender or keywords.</p>
                                <p className="text-xs text-cyan-400">Tools: Gmail filters, Outlook rules</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">EASY</span>
                                    <h4 className="text-white font-semibold">📅 Calendar Management</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Auto-create events from emails, sync across calendars, send reminders before meetings.</p>
                                <p className="text-xs text-cyan-400">Tools: Google Calendar, Calendly, Zapier</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">EASY</span>
                                    <h4 className="text-white font-semibold">💾 File Backups</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Auto-backup documents to cloud storage and organize by date or project automatically.</p>
                                <p className="text-xs text-cyan-400">Tools: Dropbox, Google Drive, OneDrive</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-bold">EASY</span>
                                    <h4 className="text-white font-semibold">🔔 Smart Notifications</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">Get alerts for specific events, price drops, keyword mentions, or deadline reminders.</p>
                                <p className="text-xs text-cyan-400">Tools: IFTTT, Google Alerts</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Intermediate */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">Workflow Automation</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Connect multiple tools and automate entire workflows—no coding needed.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-yellow-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">INTERMEDIATE</span>
                                    <h4 className="text-white font-semibold">📱 Social Media Scheduling</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Write content once, auto-post to Twitter, LinkedIn, and Facebook at optimal times. Schedule a week's worth of posts in one sitting.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: Buffer, Hootsuite, Later</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-yellow-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">INTERMEDIATE</span>
                                    <h4 className="text-white font-semibold">📊 Data Collection & Reporting</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Automatically pull data from forms, emails, or databases → format it → send weekly reports to your team. No manual copy-pasting.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: Zapier, Make.com, Google Sheets</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-yellow-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-bold">INTERMEDIATE</span>
                                    <h4 className="text-white font-semibold">💬 Customer Follow-Ups</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    When a customer signs up or makes a purchase → automatically send personalized welcome emails, add them to your CRM, and schedule follow-up reminders.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: HubSpot, ActiveCampaign, Zapier</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: AI-Powered */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Automation</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            These leverage AI to make smart decisions and handle complex tasks.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-purple-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs font-bold">AI-POWERED</span>
                                    <h4 className="text-white font-semibold">📧 Smart Email Triage</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    AI reads incoming emails, understands urgency and intent, categorizes by topic, and drafts appropriate responses. You just review and send.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: Gmail with Gemini, Microsoft 365 Copilot</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-purple-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs font-bold">AI-POWERED</span>
                                    <h4 className="text-white font-semibold">💡 Content Summarization</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    AI automatically summarizes long articles, meeting notes, or documents into key bullet points. Save hours of reading time.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: ChatGPT, Claude, Notion AI</p>
                            </div>

                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-purple-500/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs font-bold">AI-POWERED</span>
                                    <h4 className="text-white font-semibold">🎯 Smart Customer Support</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    AI chatbots handle common customer questions 24/7, escalate complex issues to humans, and learn from every interaction to improve responses.
                                </p>
                                <p className="text-xs text-cyan-400">Tools: Intercom, Zendesk AI, ChatGPT API</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Career Impact */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">How This Impacts Your Career</h3>
                        <p className="text-gray-400 mb-4">
                            Professionals who master automation are more productive, more valuable, and stand out in their roles:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span><strong className="text-white">Efficiency:</strong> Complete tasks 10x faster than colleagues who do everything manually</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span><strong className="text-white">Focus:</strong> Spend time on strategic work that actually moves the needle, not repetitive busywork</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span><strong className="text-white">Scalability:</strong> Handle 10x more workload without working 10x more hours</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span><strong className="text-white">Value:</strong> Become the person who makes everyone else more productive</span>
                            </li>
                        </ul>
                        <p className="text-green-400 font-medium mt-4">
                            Companies are actively seeking people who can build and manage automated systems. This skill set is increasingly valuable.
                        </p>
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
                                <span>Start with easy wins: email filtering, calendar management, file backups</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Use workflow tools like Zapier to connect apps without coding</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>AI automation handles complex tasks requiring judgment and understanding</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Automation skills make you more valuable and open career opportunities</span>
                            </li>
                        </ul>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready for Advanced Automation?</h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            You've learned the fundamentals. Want to build sophisticated AI-powered automation systems with hands-on projects and real-world applications?
                        </p>
                        <Link 
                            href="/#waitlist"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist for Advanced Course →
                        </Link>
                    </section>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                    <Link 
                        href="/courses/automation/lesson-2-ai-vs-automation"
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
                            href="/courses/automation"
                            className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all"
                        >
                            Take Certification Test
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
