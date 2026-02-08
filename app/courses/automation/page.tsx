import Link from "next/link";

export default function AutomationPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/courses" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        ← Back to Courses
                    </Link>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <span className="text-5xl">⚡</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Automation Fundamentals
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Stop wasting time on repetitive tasks. Learn what automation is, when to use it, and how AI makes it smarter.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Section 1: What is Automation */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">What is Automation?</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Automation means getting a computer to do repetitive tasks for you. Instead of manually doing something 100 times, you set it up once and let the system handle it.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Think of it like setting a coffee maker to brew at 7 AM every morning. You don't manually pour water and press start each day—you automate it.
                            </p>
                            
                            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30 my-6">
                                <h3 className="text-xl font-semibold text-white mb-3">The Simple Test</h3>
                                <p className="text-gray-400 mb-3">
                                    If you find yourself doing the same task more than 3 times, it's probably worth automating.
                                </p>
                                <p className="text-sm text-cyan-400">
                                    Time spent setting up automation often pays back within days or weeks.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Traditional vs AI-Powered Automation */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Traditional Automation vs AI-Powered Automation</h2>
                        <p className="text-gray-400 mb-6">
                            Automation has existed for decades, but AI makes it way more powerful. Here's how they differ:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Traditional */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">🔧 Traditional Automation</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-white font-medium mb-1">How it works:</p>
                                        <p className="text-sm text-gray-400">Follows exact rules you define. If-this-then-that logic.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Best for:</p>
                                        <p className="text-sm text-gray-400">Predictable, repetitive tasks with clear rules.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Example:</p>
                                        <p className="text-sm text-cyan-400">Every time I get an email from X, move it to folder Y.</p>
                                    </div>
                                </div>
                            </div>

                            {/* AI-Powered */}
                            <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-purple-500/20">
                                <h3 className="text-xl font-semibold text-white mb-4">🤖 AI-Powered Automation</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-white font-medium mb-1">How it works:</p>
                                        <p className="text-sm text-gray-400">Learns patterns and adapts. Makes decisions based on context.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Best for:</p>
                                        <p className="text-sm text-gray-400">Tasks requiring judgment, pattern recognition, or understanding.</p>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Example:</p>
                                        <p className="text-sm text-cyan-400">Read incoming emails, categorize by urgency, draft appropriate responses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30">
                            <p className="text-white font-medium mb-2">💡 The Power of Combining Both:</p>
                            <p className="text-gray-400 text-sm">
                                Most powerful automations use traditional automation for structure and AI for the smart parts. Example: A traditional trigger (new customer signup) kicks off an AI workflow (analyze their needs, generate personalized onboarding email, schedule follow-up).
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Practical Use Cases */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Practical Automation Use Cases</h2>
                        <p className="text-gray-400 mb-6">
                            Real examples you can implement starting today. Ranked from easiest to more advanced.
                        </p>

                        <div className="space-y-6">
                            {/* Easy Wins */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">EASY</span>
                                    Quick Wins (No Coding)
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">📧 Email Filtering</h4>
                                        <p className="text-sm text-gray-400 mb-2">Auto-sort emails into folders, mark as read, or star important ones.</p>
                                        <p className="text-xs text-cyan-400">Tools: Gmail filters, Outlook rules</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">📅 Calendar Management</h4>
                                        <p className="text-sm text-gray-400 mb-2">Auto-create events from emails, sync across calendars, send reminders.</p>
                                        <p className="text-xs text-cyan-400">Tools: Google Calendar, Calendly</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">💾 File Backups</h4>
                                        <p className="text-sm text-gray-400 mb-2">Auto-backup documents to cloud, organize by date or project.</p>
                                        <p className="text-xs text-cyan-400">Tools: Dropbox, Google Drive</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">🔔 Smart Notifications</h4>
                                        <p className="text-sm text-gray-400 mb-2">Get alerts for specific events, price drops, or keyword mentions.</p>
                                        <p className="text-xs text-cyan-400">Tools: IFTTT, Zapier</p>
                                    </div>
                                </div>
                            </div>

                            {/* Intermediate */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold">INTERMEDIATE</span>
                                    Workflow Automation
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">📝 Content Publishing</h4>
                                        <p className="text-sm text-gray-400 mb-2">Write once, auto-publish to blog, social media, newsletter.</p>
                                        <p className="text-xs text-cyan-400">Tools: Buffer, Zapier + WordPress</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">🧾 Invoice Generation</h4>
                                        <p className="text-sm text-gray-400 mb-2">Auto-create invoices from timesheets, send reminders for payment.</p>
                                        <p className="text-xs text-cyan-400">Tools: QuickBooks, Stripe</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">👥 Lead Capture</h4>
                                        <p className="text-sm text-gray-400 mb-2">New signup → add to CRM → send welcome email → notify sales team.</p>
                                        <p className="text-xs text-cyan-400">Tools: HubSpot, Mailchimp</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-cyan-500/20">
                                        <h4 className="text-white font-semibold mb-2">📊 Data Entry</h4>
                                        <p className="text-sm text-gray-400 mb-2">Extract data from forms, PDFs, or emails into spreadsheets.</p>
                                        <p className="text-xs text-cyan-400">Tools: Google Forms + Sheets, Airtable</p>
                                    </div>
                                </div>
                            </div>

                            {/* Advanced */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">ADVANCED</span>
                                    AI-Powered Workflows
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-purple-500/20">
                                        <h4 className="text-white font-semibold mb-2">🤖 Smart Email Responses</h4>
                                        <p className="text-sm text-gray-400 mb-2">AI reads emails, drafts context-aware replies, queues for your review.</p>
                                        <p className="text-xs text-purple-400">Tools: GPT-4 API, Make.com</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-purple-500/20">
                                        <h4 className="text-white font-semibold mb-2">📈 Report Generation</h4>
                                        <p className="text-sm text-gray-400 mb-2">Pull data from multiple sources, analyze trends, generate insights report.</p>
                                        <p className="text-xs text-purple-400">Tools: Python + AI, Power BI</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-purple-500/20">
                                        <h4 className="text-white font-semibold mb-2">🎯 Content Personalization</h4>
                                        <p className="text-sm text-gray-400 mb-2">Analyze user behavior, generate personalized recommendations and emails.</p>
                                        <p className="text-xs text-purple-400">Tools: Segment + AI models</p>
                                    </div>

                                    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-5 border border-purple-500/20">
                                        <h4 className="text-white font-semibold mb-2">💬 Chatbot Support</h4>
                                        <p className="text-sm text-gray-400 mb-2">AI handles common questions, escalates complex ones to humans.</p>
                                        <p className="text-xs text-purple-400">Tools: Intercom, ChatGPT API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Getting Started */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">How to Get Started with Automation</h2>
                        <p className="text-gray-400 mb-6">
                            Don't try to automate everything at once. Follow this step-by-step approach:
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Identify Repetitive Tasks</h3>
                                    <p className="text-sm text-gray-400">
                                        Track what you do daily for a week. Look for tasks you do more than 3 times. Common ones: checking emails, data entry, scheduling, reporting.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Calculate Time Savings</h3>
                                    <p className="text-sm text-gray-400">
                                        Be honest: how much time does this task take per week? If it's under 15 minutes/week, might not be worth automating yet. Focus on high-impact tasks first.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Start with No-Code Tools</h3>
                                    <p className="text-sm text-gray-400 mb-2">
                                        Before coding anything, try tools like Zapier, IFTTT, or Make.com. They handle 80% of common automation needs without programming.
                                    </p>
                                    <p className="text-xs text-cyan-400">Pro tip: Most have free tiers perfect for testing ideas.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Test Small, Then Scale</h3>
                                    <p className="text-sm text-gray-400">
                                        Don't automate your entire workflow day one. Start with one small task. Get it working perfectly. Then add the next piece.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start bg-gradient-to-b from-gray-900/50 to-black/50 rounded-lg p-6 border border-cyan-500/20">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Monitor & Refine</h3>
                                    <p className="text-sm text-gray-400">
                                        Automations aren't set-and-forget. Check them weekly at first. Fix errors. Optimize. Add edge cases you missed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next Steps */}
                    <section className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Continue Learning</h2>
                        <p className="text-gray-400 mb-6">
                            You now understand automation fundamentals. Explore the other tracks to round out your AI knowledge.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link 
                                href="/courses/ai-basics"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                            >
                                AI Basics →
                            </Link>
                            <Link 
                                href="/courses/prompts"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                            >
                                Prompt Engineering →
                            </Link>
                        </div>

                        <div className="border-t border-cyan-500/20 pt-6">
                            <p className="text-sm text-gray-400 mb-4">
                                Ready to build advanced automation systems with AI? Join the waitlist for hands-on courses with real-world projects.
                            </p>
                            <Link 
                                href="/#waitlist"
                                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
