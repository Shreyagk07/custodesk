import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }));
}

export default async function CaseStudyDetail({ params }: Props) {
    // Fetch case study based on ID
    const { id } = await params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-6 bg-cream-50 border-b border-charcoal-900/5">
                <div className="max-w-4xl mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-charcoal-500 hover:text-terracotta-600 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-600 text-sm font-medium">
                            {study.category}
                        </span>
                        <span className="text-charcoal-400 text-sm font-medium">
                            Client: {study.client}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
                        {study.title}
                    </h1>

                    <p className="text-xl text-charcoal-500 leading-relaxed max-w-2xl">
                        {study.description}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-[2fr,1fr] gap-16">

                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Media Embed */}
                        <div className="rounded-3xl overflow-hidden bg-charcoal-900 aspect-video relative shadow-2xl shadow-charcoal-900/10">
                            <img
                                src={study.mediaUrl}
                                alt={study.title}
                                className="w-full h-full object-cover opacity-90"
                            />
                            {study.mediaType === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Text Content */}
                        <div
                            className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-headings:text-charcoal-900 prose-p:text-charcoal-600 prose-strong:text-charcoal-900 prose-a:text-terracotta-600"
                            dangerouslySetInnerHTML={{ __html: study.content }}
                        />
                    </div>

                    {/* Sidebar Results */}
                    <div className="space-y-8">
                        <div className="bg-cream-50 rounded-3xl p-8 border border-charcoal-900/5 sticky top-32">
                            <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-6">Key Results</h3>
                            <ul className="space-y-4">
                                {study.results.map((result, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                                        <span className="text-charcoal-600 font-medium">{result}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-charcoal-900/5">
                                <h4 className="font-bold text-charcoal-900 mb-2">Ready to achieve similar results?</h4>
                                <Link href="/#demo" className="block w-full py-3 rounded-full bg-charcoal-900 text-white text-center font-medium hover:bg-terracotta-500 transition-colors">
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
