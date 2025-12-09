import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-charcoal-900/5 bg-cream-50/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-terracotta-500 flex items-center justify-center text-white font-bold text-xl">
                        C
                    </div>
                    <span className="font-bold text-xl tracking-tight text-charcoal-900">Custodesk</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal-500">
                    <Link href="/features" className="hover:text-terracotta-600 transition-colors">Features</Link>
                    <Link href="/case-studies" className="hover:text-terracotta-600 transition-colors">Case Studies</Link>
                    <Link href="/about" className="hover:text-terracotta-600 transition-colors">About</Link>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/#demo" className="px-4 py-2 rounded-full bg-charcoal-900 text-white text-sm font-medium hover:bg-charcoal-500 transition-colors">
                        Book a demo
                    </Link>
                </div>

                {/* Mobile Menu */}
                <MobileMenu />
            </div>
        </nav>
    );
}

