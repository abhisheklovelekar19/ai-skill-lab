import Link from 'next/link';

export default function CancelPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
            
            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Cancel icon */}
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Payment
                    <br />
                    <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                        Cancelled
                    </span>
                </h1>

                {/* Message */}
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    No worries! Your payment was cancelled and you haven't been charged. 
                    Feel free to try again when you're ready.
                </p>

                {/* Info card */}
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-700 mb-8">
                    <h3 className="text-white font-semibold mb-3">Still interested?</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Our courses are waiting for you. We offer a 30-day money-back guarantee, 
                        so there's no risk in getting started.
                    </p>
                    <ul className="text-left text-gray-400 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Lifetime access to all course materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>All future updates included free</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Join a community of 10,000+ AI learners</span>
                        </li>
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/pricing"
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Pricing
                            <svg 
                                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>

                    <Link 
                        href="/courses"
                        className="group px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            Browse Courses
                        </span>
                    </Link>
                </div>

                {/* Support info */}
                <p className="mt-8 text-sm text-gray-500">
                    Have questions? Reach out to us at{' '}
                    <a href="mailto:support@aiskilllab.com" className="text-cyan-400 hover:text-cyan-300">
                        support@aiskilllab.com
                    </a>
                </p>
            </div>
        </main>
    );
}
