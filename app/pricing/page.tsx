'use client';

import { useState } from 'react';

interface PricingPlan {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
}

export default function PricingPage() {
    const [email, setEmail] = useState('');

    const plans: PricingPlan[] = [
        {
            id: 'starter',
            name: 'Starter',
            price: 99,
            description: 'Perfect for complete beginners taking their first steps into AI',
            features: [
                'AI Crash Course (full access)',
                '20+ hands-on projects & exercises',
                'Downloadable resources & templates',
                'Community forum access',
                'Lifetime access to course updates',
                'Email support (48hr response)'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 249,
            description: 'For professionals ready to build real AI systems and automations',
            features: [
                'Everything in Starter',
                'Prompt Engineering Pro course',
                'Automation Toolkit course',
                '50+ advanced AI projects',
                'Priority email support (24hr)',
                'Weekly live Q&A sessions',
                '2 x 1-on-1 mentorship calls',
                'AI career guidance materials'
            ],
            popular: true
        },
        {
            id: 'mastery',
            name: 'Mastery',
            price: 499,
            description: 'Complete AI mastery with premium support and career assistance',
            features: [
                'Everything in Pro',
                'AI Career Blueprint course',
                'Access to ALL future courses',
                'Exclusive monthly masterclasses',
                'Premium support (same-day)',
                'Monthly 1-on-1 mentorship',
                'Portfolio & resume review',
                'Job placement guidance',
                'Private Slack community'
            ]
        }
    ];

    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-cyan-400 tracking-wide">
                            FLEXIBLE PRICING
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Invest in Your
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            AI Future
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        One-time payment. Lifetime access. No subscriptions, no recurring fees, no surprises.
                    </p>
                    
                    {/* Pricing Philosophy */}
                    <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-900/50 to-black/50 rounded-xl p-6 border border-cyan-500/20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                            <strong className="text-cyan-400">Our pricing philosophy:</strong> AI education should be accessible, not exploitative. Pay once, learn forever. We don't believe in monthly subscriptions that drain your wallet. When you invest in a course, you own it for life—including all future updates.
                        </p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border transition-all duration-300 backdrop-blur-sm flex flex-col ${
                                plan.popular
                                    ? 'border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.4)] scale-105'
                                    : 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]'
                            }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10 flex-1 flex flex-col">
                                {/* Plan name */}
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-gray-400 mb-6 text-sm">
                                    {plan.description}
                                </p>
                                
                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                                        <span className="text-gray-500">one-time</span>
                                    </div>
                                    <p className="text-sm text-cyan-400 mt-1">Launching Soon • Join Waitlist</p>
                                </div>
                                
                                {/* CTA Form - Waitlist */}
                                <form 
                                    action="https://formspree.io/f/mreagvkb" 
                                    method="POST"
                                    className="mb-8"
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 mb-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
                                    />
                                    <input type="hidden" name="plan" value={plan.name} />
                                    <input type="hidden" name="_subject" value={`Waitlist: ${plan.name} Plan`} />
                                    <input type="hidden" name="_next" value="/success?type=waitlist" />
                                    
                                    <button
                                        type="submit"
                                        className={`w-full px-6 py-4 font-semibold rounded-lg transition-all duration-300 ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105'
                                                : 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
                                        }`}
                                    >
                                        Join Waitlist
                                    </button>
                                </form>
                                
                                {/* Launch message */}
                                <div className="mb-6 p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                                    <p className="text-xs text-cyan-400 text-center">
                                        🚀 Payments coming soon. Be the first to know!
                                    </p>
                                </div>
                                
                                {/* Features */}
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                                        What's included:
                                    </p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                                                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="text-center space-y-6">
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Secure Checkout</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>No Hidden Costs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Free Updates Forever</span>
                        </div>
                    </div>
                    
                    {/* Additional reassurance */}
                    <div className="max-w-2xl mx-auto">
                        <p className="text-sm text-gray-500">
                            <strong className="text-gray-400">More features coming soon:</strong> We're constantly improving our courses and adding new content. When you buy now, you get all future updates at no extra cost.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
