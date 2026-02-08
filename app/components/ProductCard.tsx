interface ProductCardProps {
    title: string;
    description: string;
    ctaText: string;
}

export default function ProductCard({ title, description, ctaText }: ProductCardProps) {
    return (
        <div className="group relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {description}
                </p>
                <button className="w-full px-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    {ctaText}
                </button>
            </div>
        </div>
    );
}