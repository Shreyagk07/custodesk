import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Shield, Zap, Users } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-charcoal-900">
                        We believe knowledge <br />
                        <span className="italic text-terracotta-600">should never leave.</span>
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
                        Custodesk is on a mission to solve the &quot;Brain Drain&quot; crisis. We help companies capture, structure, and preserve the expertise that drives their success.
                    </p>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/10 text-xs font-medium text-terracotta-600">
                                The Challenge
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900">The Silent Cost of Turnover</h2>
                            <p className="text-charcoal-600 leading-relaxed">
                                Every time an employee leaves, they take years of implicit knowledge with them. Processes break, relationships falter, and the remaining team scrambles to pick up the pieces.
                            </p>
                            <p className="text-charcoal-600 leading-relaxed">
                                Traditional offboarding—a few exit interviews and a Google Drive dump—isn&apos;t enough. It captures files, not context. It captures data, not wisdom.
                            </p>
                        </div>
                        <div className="bg-cream-100 rounded-3xl p-8 border border-charcoal-900/5 relative">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-500/10 rounded-full blur-2xl" />
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-charcoal-900/5">
                                    <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0">
                                        <Brain className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal-900">Lost Context</h3>
                                        <p className="text-sm text-charcoal-500">&quot;Why did we choose this vendor?&quot; &quot;What&apos;s the history of this bug?&quot;</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-charcoal-900/5">
                                    <div className="p-2 bg-terracotta-500/10 text-terracotta-600 rounded-lg shrink-0">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal-900">Security Risks</h3>
                                        <p className="text-sm text-charcoal-500">Unrevoked access and undocumented shadow IT systems.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-charcoal-900/5">
                                    <div className="p-2 bg-charcoal-100 text-charcoal-600 rounded-lg shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal-900">Productivity Dip</h3>
                                        <p className="text-sm text-charcoal-500">Months spent retraining replacements on basics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solution / Values */}
            <section className="py-24 px-6 bg-cream-50">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-charcoal-900">Built for Continuity</h2>
                    <p className="text-charcoal-500 mt-4">How we&apos;re changing the way companies think about knowledge.</p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-6 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">AI-First Capture</h3>
                        <p className="text-charcoal-500 leading-relaxed">
                            We don&apos;t ask people to write docs. Our voice agent interviews them, extracts the gold, and writes the docs for them.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-6 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">Human Centric</h3>
                        <p className="text-charcoal-500 leading-relaxed">
                            Transitions are emotional. We make the process respectful, celebrating contributions while securing legacy.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                        <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-6 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">Instant Value</h3>
                        <p className="text-charcoal-500 leading-relaxed">
                            No long implementation cycles. Custodesk starts capturing value from the very first voice session.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Process (Adapted from Fin) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-charcoal-900">Simple steps, powerful results</h2>
                        <p className="text-charcoal-500 mt-4">The infrastructure for knowledge continuity.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-cream-100 rounded-full flex items-center justify-center text-terracotta-600 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Sandbox & Prepare</h3>
                            <p className="text-charcoal-500">Test our AI agents in a safe environment. Get 1-on-1 guidance to launch smoothly from day one.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-cream-100 rounded-full flex items-center justify-center text-terracotta-600 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Build & Validate</h3>
                            <p className="text-charcoal-500">Run QA with our team to ensure seamless knowledge capture and integration across all departments.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-cream-100 rounded-full flex items-center justify-center text-terracotta-600 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Go-live & Scale</h3>
                            <p className="text-charcoal-500">Launch with 24/7 support. We keep every interaction secure, reliable, and valuable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation (Adapted from Integraticus) */}
            <section className="py-24 px-6 bg-charcoal-900 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold">Innovative AI Solutions for Forward-Thinking Businesses</h2>
                    <p className="text-charcoal-300 text-lg">
                        Discover advanced AI solutions designed to propel innovative businesses to the forefront of their industries, enhancing efficiency and competitive advantage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Autonomous Marketing Agents</span>
                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Intelligent Customer Interaction</span>
                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Data-Driven Insights</span>
                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Scalable Solutions</span>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 px-6 bg-cream-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-charcoal-900">What drives us</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-terracotta-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">1</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Knowledge is Power</h3>
                            <p className="text-charcoal-500">We believe that shared knowledge is the ultimate competitive advantage for any organization.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-terracotta-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">2</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Continuity Matters</h3>
                            <p className="text-charcoal-500">Business shouldn&apos;t stop when people leave. We build systems that ensure smooth transitions.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-terracotta-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">3</div>
                            <h3 className="text-xl font-bold text-charcoal-900">Human-Centric AI</h3>
                            <p className="text-charcoal-500">AI should augment human intelligence, not replace it. We build tools that help people work better.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-16">Meet the leadership</h2>
                    <div className="flex justify-center">
                        <div className="space-y-4">
                            <div className="w-32 h-32 mx-auto bg-charcoal-200 rounded-full overflow-hidden">
                                <img
                                    src="/vandith-vc.jpg"
                                    alt="Vandith V C"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal-900">Vandith V C</h3>
                                <p className="text-terracotta-600 font-medium">Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
