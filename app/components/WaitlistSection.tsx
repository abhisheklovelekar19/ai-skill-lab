export default function WaitlistSection() {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span className="text-sm font-medium text-cyan-400 tracking-wide">
                        LAUNCHING SOON
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Join the AI Skill Lab
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Waitlist
                    </span>
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Be the first to know when our courses launch. Get early access, exclusive updates, and special launch pricing. No spam, just valuable AI education updates.
                </p>

                {/* Waitlist Form */}
                <form 
                    action="https://formspree.io/f/YOUR_FORM_ID" 
                    method="POST"
                    className="max-w-md mx-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                        >
                            Join Waitlist
                        </button>
                    </div>
                    
                    {/* Hidden fields for better tracking */}
                    <input type="hidden" name="_subject" value="New AI Skill Lab Waitlist Signup" />
                    <input type="hidden" name="_next" value="/success?type=waitlist" />
                    
                    {/* Trust message */}
                    <p className="text-sm text-gray-500">
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </form>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Early Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Special Launch Pricing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
