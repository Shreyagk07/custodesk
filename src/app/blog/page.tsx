import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-charcoal-900">
                        The Custodesk Blog
                    </h1>
                    <p className="text-xl text-charcoal-500 max-w-2xl mx-auto">
                        Insights, guides, and stories about the future of knowledge work.
                    </p>
                </div>
            </section>

            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-3xl p-8 border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all hover:shadow-lg hover:shadow-charcoal-900/5 flex flex-col group">
                            <div className="flex items-center gap-4 text-xs font-medium text-charcoal-400 mb-4">
                                <span className="px-3 py-1 rounded-full bg-cream-100 text-terracotta-600">{post.category}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                            </div>

                            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-charcoal-500 mb-6 flex-1">
                                {post.excerpt}
                            </p>

                            <Link href={`/blog/${post.id}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal-900 text-white font-semibold hover:bg-terracotta-500 transition-colors w-fit">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
