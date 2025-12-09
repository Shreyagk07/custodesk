import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ComparisonSection from "@/components/ComparisonSection";
import BookingForm from "@/components/BookingForm";

import SophiaAudioSection from "@/components/SophiaAudioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50 text-charcoal-900 selection:bg-terracotta-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        {/* Aesthetic Background Mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-terracotta-500/5 rounded-full blur-[120px] animate-pulse duration-[10000ms]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cream-300/20 rounded-full blur-[100px] animate-pulse delay-1000 duration-[12000ms]" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] text-charcoal-900 animate-fade-in-up">
              Capture knowledge <br />
              <span className="italic text-terracotta-600">before it leaves.</span>
            </h1>

            <p className="text-xl md:text-2xl text-charcoal-500 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
              The AI-powered voice agent platform. Move from lost conversations to structured, searchable knowledge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-8 animate-fade-in-up delay-200">
            <Link href="#demo" className="group px-10 py-5 rounded-full bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-charcoal-900/20 flex items-center justify-center gap-3">
              Book a demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="px-10 py-5 rounded-full border border-charcoal-900/10 text-charcoal-900 font-medium hover:bg-cream-50 transition-all hover:scale-[1.02]">
              View features
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 border-b border-charcoal-900/5 bg-cream-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-charcoal-400 mb-8 uppercase tracking-wider">Industries We Serve</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-charcoal-500 font-medium">
            <span className="hover:text-terracotta-600 transition-colors cursor-default">Real Estate</span>
            <span className="hover:text-terracotta-600 transition-colors cursor-default">Healthcare</span>
            <span className="hover:text-terracotta-600 transition-colors cursor-default">Logistics</span>
            <span className="hover:text-terracotta-600 transition-colors cursor-default">E-commerce</span>
            <span className="hover:text-terracotta-600 transition-colors cursor-default">Legal</span>
          </div>
        </div>
      </section>

      {/* Hear Sophia Section */}
      <SophiaAudioSection />

      {/* Visual Features Section (Sensay-style) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-terracotta-500/5 rounded-full blur-3xl transform -translate-x-1/2" />
            <Image
              src="/ai_agent_analysis_mockup_1764667804704.png"
              alt="AI Agent Analysis"
              width={600}
              height={400}
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl border border-charcoal-900/5"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900">
              Intelligent voice capture.
            </h2>
            <p className="text-lg text-charcoal-500 leading-relaxed font-light">
              Our voice agents don&apos;t just record; they understand. By analyzing spoken workflows and communications, Custodesk builds a dynamic knowledge graph that evolves with your company.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-charcoal-600">
                <div className="w-6 h-6 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-600 text-xs font-bold">1</div>
                Automatic context extraction
              </li>
              <li className="flex items-center gap-3 text-charcoal-600">
                <div className="w-6 h-6 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-600 text-xs font-bold">2</div>
                Seamless integration with Slack & Teams
              </li>
              <li className="flex items-center gap-3 text-charcoal-600">
                <div className="w-6 h-6 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-600 text-xs font-bold">3</div>
                Self-updating knowledge base
              </li>
            </ul>
          </div>
        </div>
      </section>



      {/* Feature Deep Dive */}
      <section id="features" className="py-24 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900">Everything you need to scale knowledge</h2>
            <p className="text-charcoal-500 mt-4 font-light">Powerful tools for Engineering, Product, and Leadership.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-100">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Multi-Channel Agent Access</h3>
              <p className="text-charcoal-500 text-sm font-light">Sophia lives in your chat apps. Trigger a voice session directly from Slack or Teams when context gets too complex for text.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-200">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Real-time Voice Intelligence</h3>
              <p className="text-charcoal-500 text-sm font-light">Conversations are transcribed and analyzed instantly. Sophia identifies key takeaways while the user is still speaking.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-300">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Secure Voice Data</h3>
              <p className="text-charcoal-500 text-sm font-light">Permissions ensure sensitive audio and transcripts are protected. Share technical insights while keeping private matters secure.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-400">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Sentiment & Insight Tracking</h3>
              <p className="text-charcoal-500 text-sm font-light">Visualize knowledge gaps and sentiment trends across all automated sessions to understand team health.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-500">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Tailored Conversation Flows</h3>
              <p className="text-charcoal-500 text-sm font-light">Design custom conversation protocols. Control how Sophia probes for information based on the user&apos;s role.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-charcoal-900/5 hover:border-terracotta-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-500/10 group animate-fade-in-up delay-600">
              <h3 className="text-lg font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-600 transition-colors">Actionable Knowledge Export</h3>
              <p className="text-charcoal-500 text-sm font-light">Turn voice conversations into structured documentation. Export to PDF, JSON, or sync with Notion and Confluence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 px-6 bg-white border-b border-charcoal-900/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900 mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-terracotta-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-terracotta-500/20">1</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Discovery</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed font-light">We dive deep into your existing workflows to identify high-impact automation opportunities.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-charcoal-900/10 to-transparent -z-10" />
              <div className="w-16 h-16 mx-auto bg-white border border-charcoal-900/10 text-charcoal-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Build</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed font-light">Our engineers design and train custom AI agents tailored specifically to your business data.</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-white border border-charcoal-900/10 text-charcoal-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Launch</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed font-light">Seamless integration into your existing stack with full team training and documentation.</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-white border border-charcoal-900/10 text-charcoal-900 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">4</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-3">Scale</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed font-light">Continuous monitoring and optimization to ensure your agents evolve with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Agents Services Section */}
      <section className="py-24 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900 mb-12">AI Voice Agents that Work for You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-charcoal-900/5 text-2xl">🕒</div>
              <h3 className="font-bold text-charcoal-900">24/7 Availability</h3>
              <p className="text-sm text-charcoal-500 font-light">Never miss a lead. Sophia is always on, capturing context day and night.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-charcoal-900/5 text-2xl">💬</div>
              <h3 className="font-bold text-charcoal-900">Natural Conversations</h3>
              <p className="text-sm text-charcoal-500 font-light">Fluid, human-like dialogue that puts users at ease.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-charcoal-900/5 text-2xl">🤝</div>
              <h3 className="font-bold text-charcoal-900">Seamless Handoff</h3>
              <p className="text-sm text-charcoal-500 font-light">Smart routing to human experts when the conversation gets complex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />



      {/* Testimonials */}
      <section className="py-24 px-6 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium">Trusted by modern teams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-terracotta-500 mb-4">★★★★★</div>
              <p className="text-charcoal-300 mb-6 font-light">&quot;Custodesk has completely transformed how we handle knowledge transfer. We used to lose so much context during handoffs, but now everything is captured automatically. It&apos;s been a game-changer for us.&quot;</p>
              <div>
                <div className="font-bold">Priya Sharma</div>
                <div className="text-sm text-charcoal-400">VP of Engineering, InnovateX</div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-terracotta-500 mb-4">★★★★★</div>
              <p className="text-charcoal-300 mb-6 font-light">&quot;The AI summaries are honestly shocking—in a good way. It picks up on subtle nuances that even we miss during meetings. I highly recommend it to any product team.&quot;</p>
              <div>
                <div className="font-bold">Arjun Mehta</div>
                <div className="text-sm text-charcoal-400">Head of Product, GrowthCo</div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-terracotta-500 mb-4">★★★★★</div>
              <p className="text-charcoal-300 mb-6 font-light">&quot;Finally, a tool that actually bridges the gap between our teams. It’s become such an essential part of our daily knowledge management stack. I can&apos;t imagine working without it now.&quot;</p>
              <div>
                <div className="font-bold">Ananya Gupta</div>
                <div className="text-sm text-charcoal-400">CTO, DataSphere</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <details className="group p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 open:bg-white open:shadow-lg transition-all">
              <summary className="flex justify-between items-center font-bold text-charcoal-900 cursor-pointer list-none">
                Is my data secure?
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-charcoal-500 mt-4 leading-relaxed font-light">
                Absolutely. We use enterprise-grade encryption (AES-256) for all data at rest and in transit. We are SOC2 Type II compliant and GDPR ready.
              </p>
            </details>
            <details className="group p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 open:bg-white open:shadow-lg transition-all">
              <summary className="flex justify-between items-center font-bold text-charcoal-900 cursor-pointer list-none">
                Does it work with Slack and Teams?
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-charcoal-500 mt-4 leading-relaxed font-light">
                Yes! Custodesk lives where you work. You can query the knowledge base directly from Slack or Microsoft Teams without switching apps.
              </p>
            </details>
            <details className="group p-6 rounded-2xl bg-cream-50 border border-charcoal-900/5 open:bg-white open:shadow-lg transition-all">
              <summary className="flex justify-between items-center font-bold text-charcoal-900 cursor-pointer list-none">
                How accurate is the AI?
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="text-charcoal-500 mt-4 leading-relaxed font-light">
                Our models are fine-tuned on your specific company data, ensuring high relevance. We also provide citations for every answer so you can verify the source.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-charcoal-900 p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-200/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-cream-50 mb-8">
                Ready to start capturing knowledge?
              </h2>
              <div className="max-w-md mx-auto">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
