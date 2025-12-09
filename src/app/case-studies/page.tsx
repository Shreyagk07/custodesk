import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Play, Image as ImageIcon } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
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
                        Our Work & <br />
                        <span className="italic text-terracotta-600">Success Stories.</span>
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
                        See how we help organizations capture knowledge, streamline handovers, and scale their expertise.
                    </p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <Link
                            href={`/case-studies/${study.id}`}
                            key={study.id}
                            className="group block animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <article className="bg-white rounded-3xl overflow-hidden border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-charcoal-900/10 hover:-translate-y-1 h-full flex flex-col">
                                {/* Media Preview */}
                                <div className="relative h-64 bg-charcoal-100 overflow-hidden">
                                    <img
                                        src={study.mediaUrl}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-charcoal-900 flex items-center gap-1 shadow-sm">
                                        {study.mediaType === 'video' ? <Play className="w-3 h-3 fill-current" /> : <ImageIcon className="w-3 h-3" />}
                                        {study.mediaType === 'video' ? 'Video' : 'Image'}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="text-xs font-medium text-terracotta-600 mb-3 uppercase tracking-wider">
                                        {study.category}
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                                        {study.title}
                                    </h2>
                                    <p className="text-charcoal-500 mb-6 line-clamp-3 flex-1">
                                        {study.description}
                                    </p>

                                    <div className="flex items-center text-charcoal-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
