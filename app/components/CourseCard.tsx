interface CourseCardProps {
    title: string;
    description: string;
    price: number;
    ctaText: string;
}

export default function CourseCard({ title, description, price, ctaText }: CourseCardProps) {
    return (
        <div className="group relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm flex flex-col">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                    {description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">${price}</span>
                        <span className="text-gray-500 text-sm">one-time</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Lifetime access • All updates included</p>
                </div>
                
                {/* CTA Button */}
                <button className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105">
                    {ctaText}
                </button>
                
                {/* Features */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Hands-on projects & exercises</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Community access</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
