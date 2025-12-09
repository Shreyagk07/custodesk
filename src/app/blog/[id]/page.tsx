import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This is a server component
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-500 hover:text-terracotta-600 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <header className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 text-sm font-medium text-charcoal-400">
                            <span className="px-3 py-1 rounded-full bg-terracotta-500/10 text-terracotta-600">{post.category}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-charcoal-900 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div
                        className="prose prose-lg prose-charcoal prose-headings:text-charcoal-900 prose-a:text-terracotta-600 hover:prose-a:text-terracotta-500"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="my-12 border-charcoal-900/10" />

                    <div className="bg-white rounded-2xl p-8 border border-charcoal-900/5">
                        <h3 className="text-xl font-bold text-charcoal-900 mb-2">Ready to capture knowledge?</h3>
                        <p className="text-charcoal-500 mb-6">Start using Custodesk today and stop the brain drain.</p>
                        <Link href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-charcoal-900 text-white font-semibold hover:bg-charcoal-800 transition-colors">
                            Get Started for Free
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
