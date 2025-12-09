"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-charcoal-900 hover:text-terracotta-600 transition-colors"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-charcoal-900/5 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <Link
                        href="/features"
                        className="text-lg font-medium text-charcoal-900 hover:text-terracotta-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="/case-studies"
                        className="text-lg font-medium text-charcoal-900 hover:text-terracotta-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Case Studies
                    </Link>
                    <Link
                        href="/about"
                        className="text-lg font-medium text-charcoal-900 hover:text-terracotta-600"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <hr className="border-charcoal-900/5" />
                    <Link
                        href="/#demo"
                        className="w-full py-3 rounded-full bg-charcoal-900 text-white text-center font-medium hover:bg-charcoal-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Book a demo
                    </Link>
                </div>
            )}
        </div>
    );
}
