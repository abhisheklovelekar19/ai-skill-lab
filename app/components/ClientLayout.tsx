'use client';

import { ThemeProvider } from '../context/ThemeContext';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
}
