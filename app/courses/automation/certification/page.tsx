'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { trackEvent } from '@/app/components/GoogleAnalytics';

export default function AutomationCertificationPage() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [passed, setPassed] = useState(false);
    const [userName, setUserName] = useState('');
    const [nameSubmitted, setNameSubmitted] = useState(false);
    const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);

    useEffect(() => {
        // Track quiz start
        trackEvent('quiz_start', { course_name: 'automation' });
    }, []);

    const questions = [
        {
            id: 1,
            question: "What is automation in simple terms?",
            options: [
                "A) Using robots to replace all human jobs",
                "B) Getting a computer to do repetitive tasks for you",
                "C) Writing code in Python",
                "D) A type of artificial intelligence"
            ],
            correct: "B"
        },
        {
            id: 2,
            question: "According to the 'Simple Test', when should you consider automating a task?",
            options: [
                "A) After doing it once",
                "B) After doing it twice",
                "C) After doing it more than 3 times",
                "D) Only if it takes more than an hour"
            ],
            correct: "C"
        },
        {
            id: 3,
            question: "What is the main difference between traditional automation and AI-powered automation?",
            options: [
                "A) Traditional automation is faster",
                "B) AI-powered automation can learn patterns and adapt to context",
                "C) Traditional automation requires Python",
                "D) AI-powered automation only works with emails"
            ],
            correct: "B"
        },
        {
            id: 4,
            question: "Which of these is an example of traditional automation?",
            options: [
                "A) Chatbot that understands customer intent",
                "B) AI writing personalized responses",
                "C) Email filter: 'Move emails from X to folder Y'",
                "D) System that learns customer preferences"
            ],
            correct: "C"
        },
        {
            id: 5,
            question: "What is a key benefit of automation mentioned in the course?",
            options: [
                "A) It makes you look busy",
                "B) It's complicated and impressive",
                "C) Time spent setting it up pays back within days or weeks",
                "D) It requires no initial effort"
            ],
            correct: "C"
        },
        {
            id: 6,
            question: "Which task is BEST suited for AI-powered automation?",
            options: [
                "A) Scheduling emails to send at 9 AM every day",
                "B) Reading incoming emails and categorizing by urgency",
                "C) Moving files from folder A to folder B",
                "D) Renaming files with today's date"
            ],
            correct: "B"
        },
        {
            id: 7,
            question: "What makes AI-powered automation different from traditional automation?",
            options: [
                "A) It follows exact rules you define",
                "B) It only works with if-this-then-that logic",
                "C) It can make decisions based on context and judgment",
                "D) It's simpler to set up"
            ],
            correct: "C"
        },
        {
            id: 8,
            question: "What is a real-world use case of automation in business?",
            options: [
                "A) Manually checking every customer email",
                "B) Customer service chatbots handling common questions",
                "C) Writing each social media post by hand",
                "D) Calling every customer individually"
            ],
            correct: "B"
        },
        {
            id: 9,
            question: "What should you do if you're doing the same task repeatedly?",
            options: [
                "A) Keep doing it manually - it builds character",
                "B) Hire someone else to do it",
                "C) Consider automating it to save time",
                "D) Complain about it on social media"
            ],
            correct: "C"
        },
        {
            id: 10,
            question: "How does automation help in your daily work?",
            options: [
                "A) It makes tasks more complicated",
                "B) It frees up time by handling repetitive tasks automatically",
                "C) It requires constant manual intervention",
                "D) It only works for technical people"
            ],
            correct: "B"
        }
    ];

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Calculate score
        let correctCount = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) {
                correctCount++;
            }
        });
        
        setScore(correctCount);
        const hasPassed = correctCount >= 6;
        setPassed(hasPassed);
        setSubmitted(true);
        
        // Track quiz completion
        if (hasPassed) {
            trackEvent('quiz_pass', { 
                course_name: 'automation',
                score: correctCount 
            });
            
            // Auto-generate certificate
            setIsGeneratingCertificate(true);
            try {
                const response = await fetch('/api/endpoints/generate_certificate.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: userName,
                        course: 'automation'
                    })
                });
                
                const data = await response.json();
                
                if (data.success && data.certificate_code) {
                    // Redirect to verification page
                    window.location.href = `/verify.php?code=${data.certificate_code}`;
                } else {
                    console.error('Failed to generate certificate:', data.error);
                    setIsGeneratingCertificate(false);
                    alert('Certificate generated! However, we couldn\'t redirect you automatically. Please check your email or contact support.');
                }
            } catch (error) {
                console.error('Error generating certificate:', error);
                setIsGeneratingCertificate(false);
                alert('An error occurred while generating your certificate. Please try again or contact support.');
            }
        } else {
            // Scroll to results
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleRetry = () => {
        setAnswers({});
        setSubmitted(false);
        setScore(0);
        setPassed(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/courses/automation" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Automation Fundamentals
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-5xl">📝</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Automation Fundamentals Certification Test
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Complete all lessons to unlock this certification test. You need 6/10 (60%) to pass and earn your certificate.
                    </p>
                </div>

                {!nameSubmitted && (
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="p-8 rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-50/50 to-white/50 dark:from-purple-900/20 dark:to-black/20">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">👤</div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Enter Your Name
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    This will appear on your certificate after you pass the test
                                </p>
                            </div>
                            
                            <form onSubmit={(e) => { e.preventDefault(); if (userName.trim()) setNameSubmitted(true); }} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-lg border-2 border-purple-500/20 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        required
                                        minLength={2}
                                        maxLength={100}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    ✨ Continue to Certification Test
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Results Section */}
                {submitted && (
                    <div className={`mb-12 p-8 rounded-xl border-2 ${
                        passed 
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
                            : 'bg-red-50 dark:bg-red-900/20 border-red-500'
                    }`}>
                        <div className="text-center">
                            <div className="text-6xl mb-4">{passed ? '🎉' : '😔'}</div>
                            <h2 className={`text-3xl font-bold mb-3 ${
                                passed ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                            }`}>
                                {passed ? 'Congratulations! You Passed!' : 'Not Quite There Yet'}
                            </h2>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Your Score: {score}/10 ({(score * 10)}%)
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                {passed 
                                    ? isGeneratingCertificate 
                                        ? 'Generating your certificate...' 
                                        : 'You have successfully completed the Automation Fundamentals course!'
                                    : 'You need at least 6/10 to pass. Review the course material and try again.'}
                            </p>
                            
                            {passed && isGeneratingCertificate && (
                                <div className="flex items-center justify-center gap-3 text-green-700 dark:text-green-400">
                                    <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="text-xl font-semibold">Generating your certificate...</span>
                                </div>
                            )}
                            {passed && !isGeneratingCertificate ? (
                                <Link 
                                    href="/courses/automation/certificate"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    🎓 Get Your Certificate →
                                </Link>
                            ) : !passed ? (
                                <button 
                                    onClick={handleRetry}
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    🔄 Retake Certification Test
                                </button>
                            ) : null}
                        </div>
                    </div>
                )}

                {/* Quiz Form */}
                {!submitted && nameSubmitted && (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {questions.map((q, index) => (
                            <div key={q.id} className="bg-gradient-to-b from-gray-100/50 to-white/50 dark:from-gray-900/50 dark:to-black/50 rounded-xl p-6 border border-cyan-500/20">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    {index + 1}. {q.question}
                                </h3>
                                
                                <div className="space-y-3">
                                    {q.options.map((option) => {
                                        const optionLetter = option.charAt(0);
                                        return (
                                            <label 
                                                key={option}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-500/5 cursor-pointer transition-colors"
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${q.id}`}
                                                    value={optionLetter}
                                                    checked={answers[q.id] === optionLetter}
                                                    onChange={() => handleAnswerChange(q.id, optionLetter)}
                                                    className="mt-1 w-4 h-4 text-cyan-500 focus:ring-cyan-400"
                                                    required
                                                />
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {option}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Submit Button */}
                        <div className="text-center pt-8">
                            <button
                                type="submit"
                                className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 text-lg"
                            >
                                📋 Submit Certification Test
                            </button>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                                Make sure you've answered all questions before submitting.
                            </p>
                        </div>
                    </form>
                )}

                {/* Certification Info */}
                <div className="mt-12 p-6 bg-gradient-to-b from-gray-100/50 to-white/50 dark:from-gray-900/50 dark:to-black/50 rounded-xl border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Certification Information</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>10 multiple-choice questions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Passing score: 60% (6 out of 10)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>You can retake the certification test as many times as needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Pass to receive your official certificate of completion</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Complete all 3 lessons before taking this test</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
