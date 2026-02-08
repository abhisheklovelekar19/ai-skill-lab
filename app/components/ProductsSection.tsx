import ProductCard from './ProductCard';

export default function ProductsSection() {
    const products = [
        {
            id: 1,
            title: 'AI Crash Course',
            description: 'Master the fundamentals of AI, machine learning, and neural networks. Build real-world projects and deploy intelligent systems from scratch.',
            ctaText: 'Explore Course'
        },
        {
            id: 2,
            title: 'Prompt Engineering Pro',
            description: 'Learn advanced prompting techniques to unlock the full potential of AI models. Create custom AI agents and automate complex workflows.',
            ctaText: 'Explore Course'
        },
        {
            id: 3,
            title: 'Automation Toolkit',
            description: 'Automate repetitive tasks using AI-powered tools and scripts. Increase productivity and free up time for high-value creative work.',
            ctaText: 'Explore Course'
        }
    ];

    return (
        <section className="relative py-24 px-4 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
            
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Courses
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Practical, hands-on courses designed to transform you into an AI expert
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            ctaText={product.ctaText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}