import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

export default function Customers() {
    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-charcoal-900">
                        Trusted by the world&apos;s <br />
                        <span className="italic text-terracotta-600">top brands.</span>
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto">
                        See how leading enterprises are transforming their knowledge management and offboarding with Custodesk.
                    </p>
                </div>
            </section>

            {/* Case Studies (Adapted from Aisera) */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-cream-50 border border-charcoal-900/5 hover:shadow-lg transition-all">
                            <div className="text-4xl font-bold text-terracotta-600 mb-2">60%</div>
                            <div className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-6">Faster Resolution</div>
                            <p className="text-charcoal-600 mb-6">
                                &quot;Handling delivery partner queries in multiple languages was a nightmare. Custodesk's AI agent now handles Hindi, Kannada, and English queries seamlessly.&quot;
                            </p>
                            <div className="font-bold text-charcoal-900">Dunzo</div>
                        </div>

                        <div className="p-8 rounded-3xl bg-cream-50 border border-charcoal-900/5 hover:shadow-lg transition-all">
                            <div className="text-4xl font-bold text-terracotta-600 mb-2">70%</div>
                            <div className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-6">Auto-resolved Tickets</div>
                            <p className="text-charcoal-600 mb-6">
                                &quot;During market volatility, our support volume spikes. Custodesk handles the surge effortlessly, answering common trading queries instantly so our team can focus on complex issues.&quot;
                            </p>
                            <div className="font-bold text-charcoal-900">Zerodha</div>
                        </div>

                        <div className="p-8 rounded-3xl bg-cream-50 border border-charcoal-900/5 hover:shadow-lg transition-all">
                            <div className="text-4xl font-bold text-terracotta-600 mb-2">₹2.5Cr</div>
                            <div className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-6">Saved in Ops Costs</div>
                            <p className="text-charcoal-600 mb-6">
                                &quot;We automated appointment scheduling and basic patient inquiries. The reduction in wait times has been phenomenal, and our staff is much happier.&quot;
                            </p>
                            <div className="font-bold text-charcoal-900">Apollo Hospitals</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Adapted from Bookedin) */}
            <section className="py-24 px-6 bg-charcoal-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold">Real Results from Real Clients</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Quote className="w-8 h-8 text-terracotta-500 mb-4 opacity-50" />
                            <p className="text-charcoal-200 mb-6">
                                &quot;Finally, an AI that understands Indian accents perfectly! It's been a game-changer for our internal knowledge transfer.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center font-bold">R</div>
                                <div>
                                    <div className="font-bold">Rohan Patel</div>
                                    <div className="text-xs text-charcoal-400">CTO, FinServe</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Quote className="w-8 h-8 text-terracotta-500 mb-4 opacity-50" />
                            <p className="text-charcoal-200 mb-6">
                                &quot;The regional language support is incredible. We can now support our field staff in their native tongue without hiring extra support agents.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center font-bold">S</div>
                                <div>
                                    <div className="font-bold">Sneha Reddy</div>
                                    <div className="text-xs text-charcoal-400">VP Ops, HealthCare Plus</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <Quote className="w-8 h-8 text-terracotta-500 mb-4 opacity-50" />
                            <p className="text-charcoal-200 mb-6">
                                &quot;We were up and running in days. The team at Custodesk really understands the Indian market and its unique challenges.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-terracotta-500 flex items-center justify-center font-bold">A</div>
                                <div>
                                    <div className="font-bold">Amit Kumar</div>
                                    <div className="text-xs text-charcoal-400">Director, EdTech Solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
