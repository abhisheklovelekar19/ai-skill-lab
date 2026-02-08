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
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const plans: PricingPlan[] = [
        {
            id: 'starter',
            name: 'Starter',
            price: 99,
            description: 'Perfect for beginners starting their AI journey',
            features: [
                'AI Crash Course access',
                'Hands-on projects & exercises',
                'Downloadable resources',
                'Community forum access',
                'Lifetime updates',
                'Email support'
            ]
        },
        {
            id: 'pro',
            name: 'Pro',
            price: 249,
            description: 'For professionals seeking advanced AI skills',
            features: [
                'All Starter features',
                'Prompt Engineering Pro',
                'Automation Toolkit',
                'Advanced AI projects',
                'Priority support',
                'Weekly live Q&A sessions',
                '1-on-1 mentorship (2 sessions)',
                'Career guidance materials'
            ],
            popular: true
        },
        {
            id: 'mastery',
            name: 'Mastery',
            price: 499,
            description: 'Complete AI mastery with premium support',
            features: [
                'All Pro features',
                'AI Career Blueprint',
                'All future courses included',
                'Exclusive masterclasses',
                'Premium support (24/7)',
                'Monthly 1-on-1 mentorship',
                'Portfolio review & optimization',
                'Job placement assistance',
                'Private community access'
            ]
        }
    ];

    const handleCheckout = (plan: PricingPlan) => {   
        setIsLoading(plan.id);
        
        // Static export: Direct client-side redirect for mock checkout
        // Replace this with real payment gateway integration (Stripe/Razorpay) when moving to VPS
        
        // Simulate processing delay
        setTimeout(() => {
            // Redirect to success page with order details
            const sessionId = `mock_${Date.now()}_${plan.id}`;
            window.location.href = `/success?session_id=${sessionId}&plan=${encodeURIComponent(plan.name)}&amount=${plan.price}`;
        }, 1000);
    };

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
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Choose the plan that fits your goals. All plans include lifetime access and free updates.
                    </p>
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
                                    <p className="text-sm text-gray-500 mt-1">Lifetime access • No recurring fees</p>
                                </div>
                                
                                {/* CTA Button */}
                                <button
                                    onClick={() => handleCheckout(plan)}
                                    disabled={isLoading === plan.id}
                                    className={`w-full px-6 py-4 font-semibold rounded-lg transition-all duration-300 mb-8 ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105'
                                            : 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    {isLoading === plan.id ? 'Processing...' : 'Get Started'}
                                </button>
                                
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
                <div className="text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>30-Day Money-Back Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>4.9/5 Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
