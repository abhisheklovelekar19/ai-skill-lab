'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { trackEvent } from '@/app/components/GoogleAnalytics';

export default function AIBasicsCertificatePage() {
    const [learnerName, setLearnerName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);
    const [feedbackGiven, setFeedbackGiven] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleFeedback = (type: 'positive' | 'negative') => {
        trackEvent('course_feedback', { 
            course_name: 'ai-basics',
            feedback_type: type 
        });
        setFeedbackGiven(true);
    };

    const handleGenerateCertificate = (e: React.FormEvent) => {
        e.preventDefault();
        if (learnerName.trim()) {
            setShowCertificate(true);
            trackEvent('certificate_generated', { course_name: 'ai-basics' });
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const today = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <main className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="mb-8 print:hidden">
                    <Link href="/courses/ai-basics" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to AI Basics
                    </Link>
                </div>

                {!showCertificate ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                                <span className="text-5xl">🎓</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                Certificate of Completion
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                                Congratulations on passing the AI Basics Certification Test! Enter your name to generate your certificate.
                            </p>
                        </div>

                        <form onSubmit={handleGenerateCertificate} className="max-w-md mx-auto">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={learnerName}
                                    onChange={(e) => setLearnerName(e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-900/50 border border-cyan-500/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Generate Certificate
                            </button>
                        </form>

                        <div className="mt-12 p-6 bg-gradient-to-b from-gray-100/50 to-white/50 dark:from-gray-900/50 dark:to-black/50 rounded-xl border border-cyan-500/20">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About This Certificate</h3>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>This certificate is issued by AI Skill Lab for learning recognition</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Not an official accreditation - for educational purposes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>You can print or download your certificate as PDF</span>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div ref={certificateRef} className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-12 border-8 border-cyan-500/30 mb-8">
                            <div className="text-center space-y-8">
                                <div>
                                    <div className="text-6xl mb-4">🎓</div>
                                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                                        Certificate of Completion
                                    </h1>
                                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-xl text-gray-600 dark:text-gray-400">
                                        This certifies that
                                    </p>
                                    <p className="text-4xl font-bold text-gray-900 dark:text-white border-b-2 border-cyan-500 pb-2 inline-block">
                                        {learnerName}
                                    </p>
                                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                        has successfully completed the <strong className="text-gray-900 dark:text-white">AI Basics</strong> mini-course and demonstrated understanding of fundamental artificial intelligence concepts, real-world applications, and the differences between AI, Machine Learning, and Automation.
                                    </p>
                                </div>

                                <div className="flex justify-between items-end pt-8 max-w-2xl mx-auto">
                                    <div className="text-left">
                                        <div className="w-48 border-t-2 border-gray-300 dark:border-gray-700 pt-2">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">AI Skill Lab</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Issued by</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="w-48 border-t-2 border-gray-300 dark:border-gray-700 pt-2">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{today}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Date of Completion</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                                        Certificate issued for learning recognition • Not an official accreditation
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center space-y-4 print:hidden">
                            <button
                                onClick={handlePrint}
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                🖨️ Print Certificate
                            </button>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Use your browser's print function to save as PDF
                            </p>
                            <div className="pt-4">
                                <Link 
                                    href="/courses/ai-basics"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                                >
                                    ← Back to AI Basics Course
                                </Link>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Was this course helpful?
                                </p>
                                {!feedbackGiven ? (
                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={() => handleFeedback('positive')}
                                            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                                        >
                                            👍 Yes
                                        </button>
                                        <button
                                            onClick={() => handleFeedback('negative')}
                                            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                                        >
                                            👎 Needs improvement
                                        </button>
                                    </div>
                                ) : (
                                    <p className="text-center text-green-500">
                                        ✓ Thank you for your feedback!
                                    </p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
