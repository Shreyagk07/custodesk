import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, BookOpen, Video } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Business Academy",
    description: "Master AI automation with our comprehensive curriculum. Learn to build agents, automate workflows, and scale your business.",
};

export default function Academy() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                        <BookOpen className="w-3 h-3" />
                        AI Business Academy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Master AI Automation <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
                            Build the Future
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A comprehensive curriculum designed to take you from AI novice to automation expert.
                        Learn to build agents, automate workflows, and scale your business.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#demo" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
                            Start Learning
                        </Link>
                        <Link href="#curriculum" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                            View Curriculum
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-white">50+</div>
                        <div className="text-sm text-slate-400">Video Lessons</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">10+</div>
                        <div className="text-sm text-slate-400">Real-world Projects</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="text-sm text-slate-400">Community Support</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">Cert</div>
                        <div className="text-sm text-slate-400">Completion Certificate</div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Curriculum Overview</h2>
                        <p className="text-slate-400">Everything you need to know, structured for success.</p>
                    </div>

                    <div className="space-y-6">
                        {/* Module 1 */}
                        <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Foundations of AI</h3>
                                    <p className="text-slate-400 mb-4">
                                        Understanding LLMs, Prompt Engineering, and the landscape of AI tools.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Intro to LLMs</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Advanced Prompting</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Tool Selection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Module 2 */}
                        <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Building Automations</h3>
                                    <p className="text-slate-400 mb-4">
                                        Hands-on with Make.com, Zapier, and custom scripts to automate workflows.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Make.com Fundamentals</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> API Integrations</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Error Handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Module 3 */}
                        <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">AI Agents & Assistants</h3>
                                    <p className="text-slate-400 mb-4">
                                        Creating autonomous agents that can reason, plan, and execute tasks.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Agent Architecture</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> RAG Implementation</li>
                                        <li className="flex items-center gap-2"><Video className="w-4 h-4 text-slate-500" /> Multi-Agent Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-slate-900">
                <div className="max-w-7xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Simple Pricing</h2>
                        <p className="text-slate-400">Start your journey today.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Tier */}
                        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Starter</h3>
                                <div className="text-4xl font-bold mt-2">Free</div>
                                <p className="text-slate-400 mt-2">Perfect for beginners</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1 text-left">
                                <li className="flex items-center gap-3 text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Access to Module 1</li>
                                <li className="flex items-center gap-3 text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Community Discord</li>
                                <li className="flex items-center gap-3 text-slate-300"><Check className="w-5 h-5 text-emerald-400" /> Weekly Newsletter</li>
                            </ul>
                            <Link href="#demo" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-medium">
                                Get Started
                            </Link>
                        </div>

                        {/* Pro Tier */}
                        <div className="p-8 rounded-3xl border border-indigo-500/50 bg-indigo-500/5 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-indigo-400">Pro Access</h3>
                                <div className="text-4xl font-bold mt-2">$49<span className="text-lg text-slate-400 font-normal">/mo</span></div>
                                <p className="text-slate-400 mt-2">For serious builders</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1 text-left">
                                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-indigo-400" /> Full Course Access</li>
                                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-indigo-400" /> Weekly Live Calls</li>
                                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-indigo-400" /> Template Library</li>
                                <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-indigo-400" /> Certificate of Completion</li>
                            </ul>
                            <Link href="#demo" className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium">
                                Join Pro
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
