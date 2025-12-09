import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bot, Zap, Settings, BarChart3, Database, Workflow, Shield, Users } from "lucide-react";


export default function Features() {
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
                        Unleash the power of <br />
                        <span className="italic text-terracotta-600">Data + AI + Humans.</span>
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
                        Unlock the full potential of your organization&apos;s knowledge. Automate capture, assist employees, and optimize workflows with our unified AI agent platform.
                    </p>
                </div>
            </section>

            {/* Core Pillars (Adapted from Kustomer) */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                                <Bot className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-2">Automate</h3>
                            <p className="text-charcoal-500 text-sm">
                                Instantly capture and structure knowledge across all channels with precise AI-powered interviews and transcription.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-2">Assist</h3>
                            <p className="text-charcoal-500 text-sm">
                                Triage, route, and support new hires with advanced AI and omnichannel knowledge retrieval capabilities.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-2">Customize</h3>
                            <p className="text-charcoal-500 text-sm">
                                Effortlessly create your ideal knowledge base, ensuring a seamless transition from your current fragmented systems.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 hover:border-terracotta-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-terracotta-500/10 rounded-xl flex items-center justify-center text-terracotta-600 mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-2">Report</h3>
                            <p className="text-charcoal-500 text-sm">
                                Track the performance of your offboarding process and quickly identify areas to optimize for better retention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow (Adapted from Aisera) */}
            <section className="py-24 px-6 bg-cream-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900">The fastest way to get AI working</h2>
                        <p className="text-charcoal-500 mt-4">A single unified AI agent platform for your enterprise.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">SELECT</h3>
                                    <p className="text-charcoal-500">Choose from an extensive library of out-of-the-box, purpose-built AI agents or create custom ones using natural language.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">CONNECT</h3>
                                    <p className="text-charcoal-500">Integrate best-of-breed agents, apps, and tools into a cohesive ecosystem leveraging our open standards backbone.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">OPERATE</h3>
                                    <p className="text-charcoal-500">Harness the full power of System of AI Agents to execute complex, cross-domain actions with full observability.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal-900 mb-2">OPTIMIZE</h3>
                                    <p className="text-charcoal-500">Leverage AI agents&apos; ability to analyze outcomes and generate knowledge, unlocking continuous learning.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-charcoal-900/5 shadow-lg shadow-charcoal-900/5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-cream-50 rounded-xl text-center">
                                    <Database className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                                    <div className="font-bold text-charcoal-900">Unified Data</div>
                                </div>
                                <div className="p-4 bg-cream-50 rounded-xl text-center">
                                    <Workflow className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                                    <div className="font-bold text-charcoal-900">Workflows</div>
                                </div>
                                <div className="p-4 bg-cream-50 rounded-xl text-center">
                                    <Shield className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                                    <div className="font-bold text-charcoal-900">Security</div>
                                </div>
                                <div className="p-4 bg-cream-50 rounded-xl text-center">
                                    <Users className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                                    <div className="font-bold text-charcoal-900">Agents</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Security */}
            <section className="py-24 px-6 bg-charcoal-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">Enterprise-grade security</h2>
                            <p className="text-charcoal-300 mb-8 text-lg">
                                Your knowledge is your most valuable asset. We protect it with banking-level security standards.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-terracotta-500" /> SOC2 Type II Certified
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-terracotta-500" /> GDPR & CCPA Compliant
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-terracotta-500" /> End-to-end Encryption (AES-256)
                                </li>
                                <li className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-terracotta-500" /> Role-Based Access Control (RBAC)
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <span className="font-mono text-sm text-terracotta-500">SECURE_CONNECTION</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="w-3 h-3 rounded-full bg-white/20" />
                                    <div className="w-3 h-3 rounded-full bg-white/20" />
                                </div>
                            </div>
                            <div className="space-y-4 font-mono text-sm text-charcoal-400">
                                <p>&gt; Initializing handshake...</p>
                                <p>&gt; Verifying certificates...</p>
                                <p className="text-green-400">&gt; Connection established (TLS 1.3)</p>
                                <p>&gt; Encrypting data stream...</p>
                                <p className="text-green-400">&gt; Data secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
}
