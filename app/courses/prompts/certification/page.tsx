'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { trackEvent } from '@/app/components/GoogleAnalytics';

export default function PromptsCertificationPage() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [passed, setPassed] = useState(false);

    useEffect(() => {
        trackEvent('quiz_start', { course_name: 'prompts' });
    }, []);

    const questions = [
        {
            id: 1,
            question: "What is a prompt in the context of AI?",
            options: [
                "A) A notification on your phone",
                "B) Instructions you give to an AI to get a specific output",
                "C) A type of computer hardware",
                "D) An error message"
            ],
            correct: "B"
        },
        {
            id: 2,
            question: "What makes a prompt 'good'?",
            options: [
                "A) It's as short as possible",
                "B) It's vague so AI can be creative",
                "C) It's clear, specific, and includes context",
                "D) It uses complex technical jargon"
            ],
            correct: "C"
        },
        {
            id: 3,
            question: "Which is an example of a BAD prompt?",
            options: [
                "A) 'Write a 500-word blog post about remote work benefits for software engineers'",
                "B) 'Explain photosynthesis to a 10-year-old in 3 simple sentences'",
                "C) 'Write something good'",
                "D) 'Summarize this article in bullet points focusing on key statistics'"
            ],
            correct: "C"
        },
        {
            id: 4,
            question: "What is the role-play prompt pattern?",
            options: [
                "A) Making AI pretend to be a specific expert or persona",
                "B) Playing games with AI",
                "C) Writing scripts for movies",
                "D) Creating user roles in software"
            ],
            correct: "A"
        },
        {
            id: 5,
            question: "What does adding context to a prompt do?",
            options: [
                "A) Makes the prompt longer unnecessarily",
                "B) Confuses the AI",
                "C) Helps AI understand your needs and give more relevant answers",
                "D) Only works for technical topics"
            ],
            correct: "C"
        },
        {
            id: 6,
            question: "Which prompt pattern asks AI to think step-by-step?",
            options: [
                "A) Role-play pattern",
                "B) Chain-of-thought pattern",
                "C) Few-shot pattern",
                "D) Template pattern"
            ],
            correct: "B"
        },
        {
            id: 7,
            question: "What is the few-shot prompting technique?",
            options: [
                "A) Asking very short questions",
                "B) Limiting AI to a few words",
                "C) Giving examples before asking for output",
                "D) Only asking 2-3 questions per session"
            ],
            correct: "C"
        },
        {
            id: 8,
            question: "Why should you specify the output format in a prompt?",
            options: [
                "A) To make the prompt look professional",
                "B) It's not important - AI decides the best format",
                "C) To get results structured exactly how you need them",
                "D) Only for coding tasks"
            ],
            correct: "C"
        },
        {
            id: 9,
            question: "What should you do if AI's first response isn't quite right?",
            options: [
                "A) Give up and start over",
                "B) Refine your prompt with more specific instructions",
                "C) Use a different AI tool",
                "D) Accept the answer as-is"
            ],
            correct: "B"
        },
        {
            id: 10,
            question: "Which element is MOST important in a good prompt?",
            options: [
                "A) Using fancy vocabulary",
                "B) Making it as long as possible",
                "C) Being clear about what you want",
                "D) Using emojis and symbols"
            ],
            correct: "C"
        }
    ];

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
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
        
        if (hasPassed) {
            trackEvent('quiz_pass', { 
                course_name: 'prompts',
                score: correctCount 
            });
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="mb-8">
                    <Link href="/courses/prompts" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Prompt Engineering
                    </Link>
                </div>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-5xl">📝</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Prompt Engineering Certification Test
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Test your knowledge of prompt engineering fundamentals. You need 6/10 (60%) to pass and earn your certificate.
                    </p>
                </div>

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
                                    ? 'You have successfully completed the Prompt Engineering course!' 
                                    : 'You need at least 6/10 to pass. Review the course material and try again.'}
                            </p>
                            
                            {passed ? (
                                <Link 
                                    href="/courses/prompts/certificate"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    🎓 Get Your Certificate →
                                </Link>
                            ) : (
                                <button 
                                    onClick={handleRetry}
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    🔄 Retake Certification Test
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {!submitted && (
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
                            <span>Pass to receive your certificate of completion</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
