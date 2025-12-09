import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Globe, Lock, MessageSquare, Zap, BarChart } from "lucide-react";
import Link from "next/link";

export default function Product() {
    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900/5 text-xs font-medium text-charcoal-600">
                        <span className="flex h-2 w-2 rounded-full bg-terracotta-500"></span>
                        The Custodesk Platform
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-charcoal-900">
                        A single unified <br />
                        <span className="italic text-terracotta-600">AI agent platform.</span>
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
                        Go beyond simple assistance. Deliver autonomous execution, automate tasks, and transform workflows across your entire enterprise.
                    </p>
                    <div className="pt-8 flex justify-center gap-4">
                        <Link href="#demo" className="px-8 py-4 rounded-full bg-charcoal-900 text-white font-semibold hover:bg-charcoal-800 transition-colors">
                            Start Building
                        </Link>
                        <Link href="/#demo" className="px-8 py-4 rounded-full border border-charcoal-200 text-charcoal-900 font-medium hover:bg-cream-100 transition-colors">
                            View Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Platform Capabilities (Adapted from Aisera/Kustomer) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">Agent Studio</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Choose from an extensive library of out-of-the-box AI agents or create custom ones using natural language. No coding required.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">Universal Integration</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Use our open standards backbone to integrate best-of-breed agents, apps, and tools into a cohesive ecosystem.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">Autonomous Execution</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Harness the full power of AI Agents to execute complex, cross-domain actions with full observability and control.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">AI-Driven Analytics</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Leverage agents&apos; ability to analyze outcomes, generate knowledge, and create automation playbooks from past resolutions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">Omnichannel Support</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Deliver personalized help directly through webchat, Microsoft Teams, Slack, and email, boosting productivity everywhere.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-cream-100 rounded-xl flex items-center justify-center text-terracotta-600">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900">Enterprise Security</h3>
                            <p className="text-charcoal-500 leading-relaxed">
                                Robust security and compliance with role-based access control, ensuring your data remains safe and private.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-6 bg-cream-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900">Built for every team</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-charcoal-900/5">
                            <div className="text-terracotta-500 font-bold mb-4">For HR & People Ops</div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">Seamless Offboarding</h3>
                            <p className="text-charcoal-500">
                                Automate the exit interview process. Ensure every departing employee leaves a legacy of knowledge, not just an empty desk.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-charcoal-900/5">
                            <div className="text-terracotta-500 font-bold mb-4">For Engineering</div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">Code & Context</h3>
                            <p className="text-charcoal-500">
                                Capture the &quot;why&quot; behind architectural decisions. Turn complex technical debt into clear, searchable documentation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-charcoal-900/5">
                            <div className="text-terracotta-500 font-bold mb-4">For Customer Support</div>
                            <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">Instant Answers</h3>
                            <p className="text-charcoal-500">
                                Reduce ramp time for new agents. Give them instant access to the collective wisdom of your senior support staff.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Proofing */}
            <section className="py-24 px-6 bg-charcoal-900 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold">A platform that learns</h2>
                    <p className="text-charcoal-300 text-lg">
                        Custodesk isn&apos;t a static database. It&apos;s a living knowledge graph that gets smarter with every interaction, every document, and every conversation.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
