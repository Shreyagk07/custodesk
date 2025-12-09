import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Rocket, Target, Zap, BarChart } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accelerator Program",
    description: "Fast-track your growth with personalized coaching, lead generation systems, and MVP setup. The ultimate program for serious founders.",
};

export default function Accelerator() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
                        <Rocket className="w-3 h-3" />
                        Ben AI Accelerator
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Scale Your Agency <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                            With AI Systems
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A 12-week intensive program to help you build, sell, and deliver AI automation services.
                        We provide the systems, you bring the drive.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#apply" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
                            Apply Now
                        </Link>
                        <Link href="#case-studies" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                            Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 px-6 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Accelerator System</h2>
                        <p className="text-slate-400">Three pillars to guarantee your success.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10">
                            <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">1. Acquisition System</h3>
                            <p className="text-slate-400">
                                We install our proven cold outreach and content systems into your business to generate qualified meetings on autopilot.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10">
                            <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">2. Delivery Systems</h3>
                            <p className="text-slate-400">
                                Copy-paste our pre-built AI agents and automation templates. Don&apos;t reinvent the wheel—deliver results from day one.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/10">
                            <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">3. Operations & Scale</h3>
                            <p className="text-slate-400">
                                Learn how to hire, manage, and scale your team. We give you the SOPs and legal contracts you need to protect your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Ready to Scale?</h2>
                    <p className="text-slate-400">
                        The Accelerator is application-only. We work with a limited number of founders each quarter to ensure results.
                    </p>

                    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 text-left">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-emerald-500" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-emerald-500" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-emerald-500" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Current Monthly Revenue</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-emerald-500">
                                    <option>Pre-revenue</option>
                                    <option>$1k - $5k</option>
                                    <option>$5k - $10k</option>
                                    <option>$10k+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Why do you want to join?</label>
                                <textarea className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-emerald-500 h-32" placeholder="Tell us about your goals..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-lg bg-emerald-600 font-bold hover:bg-emerald-500 transition-colors">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
