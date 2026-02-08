'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function CertificatePage() {
    const [learnerName, setLearnerName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleGenerateCertificate = (e: React.FormEvent) => {
        e.preventDefault();
        if (learnerName.trim()) {
            setShowCertificate(true);
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
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb - hide when printing */}
                <div className="mb-8 print:hidden">
                    <Link href="/courses/automation" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Automation Fundamentals
                    </Link>
                </div>

                {!showCertificate ? (
                    <>
                        {/* Name Input Form */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                                <span className="text-5xl">🎓</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                Certificate of Completion
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                                Congratulations on passing the Automation Fundamentals Certification Test! Enter your name to generate your certificate.
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
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Demonstrates completion of the Automation Fundamentals course</span>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Print Buttons - hide when printing */}
                        <div className="flex justify-center gap-4 mb-8 print:hidden">
                            <button
                                onClick={handlePrint}
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                🖨️ Print Certificate
                            </button>
                            <button
                                onClick={() => setShowCertificate(false)}
                                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                            >
                                Edit Name
                            </button>
                        </div>

                        {/* Certificate */}
                        <div 
                            ref={certificateRef}
                            className="bg-white p-12 rounded-xl border-8 border-double border-cyan-500 shadow-2xl max-w-3xl mx-auto print:shadow-none print:border-black"
                            style={{ minHeight: '600px' }}
                        >
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="text-6xl mb-4">🎓</div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
                                    Certificate of Completion
                                </h1>
                                <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
                            </div>

                            {/* Main Content */}
                            <div className="text-center mb-8">
                                <p className="text-lg text-gray-700 mb-6">
                                    This certificate is proudly presented to
                                </p>
                                
                                <h2 className="text-5xl font-bold text-gray-900 mb-8 py-4 border-b-2 border-t-2 border-cyan-500" style={{ fontFamily: 'serif' }}>
                                    {learnerName}
                                </h2>

                                <p className="text-lg text-gray-700 mb-4">
                                    for successfully completing the
                                </p>

                                <h3 className="text-3xl font-bold text-cyan-600 mb-6">
                                    Automation Fundamentals Course
                                </h3>

                                <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                                    This certifies that the learner has demonstrated understanding of automation concepts, 
                                    the difference between traditional and AI-powered automation, and real-world automation use cases.
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-end pt-8 border-t-2 border-gray-200">
                                <div className="text-left">
                                    <p className="text-sm text-gray-600 mb-1">Issued by</p>
                                    <p className="text-xl font-bold text-gray-900">AI Skill Lab</p>
                                    <p className="text-sm text-gray-500">Learning Recognition</p>
                                </div>
                                
                                <div className="text-right">
                                    <p className="text-sm text-gray-600 mb-1">Date of Completion</p>
                                    <p className="text-lg font-semibold text-gray-900">{today}</p>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 text-center">
                                    This certificate is issued by AI Skill Lab for learning recognition purposes. 
                                    It is not an official accreditation or professional certification.
                                </p>
                            </div>
                        </div>

                        {/* Additional Info - hide when printing */}
                        <div className="mt-8 text-center print:hidden">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                💡 <strong>Tip:</strong> Use your browser's print function (Ctrl/Cmd + P) and select "Save as PDF" to download your certificate.
                            </p>
                            
                            <div className="mt-8">
                                <Link 
                                    href="/courses"
                                    className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    Explore More Courses →
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Print styles */}
            <style jsx global>{`
                @media print {
                    body {
                        background: white !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    .print\\:shadow-none {
                        box-shadow: none !important;
                    }
                    .print\\:border-black {
                        border-color: black !important;
                    }
                }
            `}</style>
        </main>
    );
}
