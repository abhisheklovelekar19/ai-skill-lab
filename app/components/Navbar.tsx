'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-black/70 dark:bg-black/70 light:bg-white/70 backdrop-blur-xl border-b border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-600/20 shadow-lg shadow-black/50 dark:shadow-black/50 light:shadow-gray-300/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                            AI Skill Lab
                        </span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link 
                            href="/" 
                            className="relative text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group"
                        >
                            <span className="relative">
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                            </span>
                        </Link>
                        <Link 
                            href="/courses" 
                            className="relative text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group"
                        >
                            <span className="relative">
                                Courses
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                            </span>
                        </Link>
                        <Link 
                            href="/pricing" 
                            className="relative text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group"
                        >
                            <span className="relative">
                                Pricing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                            </span>
                        </Link>
                        <Link 
                            href="/certification" 
                            className="relative text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-purple-400 transition-all duration-300 text-sm font-medium group"
                        >
                            <span className="relative">
                                Certification
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300" />
                            </span>
                        </Link>
                        {mounted && <ThemeToggle />}
                        <Link 
                            href="/login" 
                            className="px-4 py-2 rounded-md bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300 text-sm font-medium"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {mounted && <ThemeToggle />}
                        <button className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}