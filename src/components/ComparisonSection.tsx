"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Database, Clock, Search, TrendingUp, FileText, Mail, FolderOpen, RefreshCcw, ChevronDown } from "lucide-react";

const features = [
    {
        id: "knowledge",
        title: "Knowledge capture",
        traditional: {
            text: "Slides, docs, ad-hoc notes",
            icon: FileText,
        },
        custodesk: {
            text: "Voice agent sessions, transcripts, highlights",
            icon: Database,
        },
    },
    {
        id: "speed",
        title: "Speed",
        traditional: {
            text: "Weeks of meetings & emails",
            icon: Mail,
        },
        custodesk: {
            text: "Setup in days, automated voice capture",
            icon: Clock,
        },
    },
    {
        id: "access",
        title: "Access",
        traditional: {
            text: "Lost in drives and folders",
            icon: FolderOpen,
        },
        custodesk: {
            text: "Instant search & Q&A",
            icon: Search,
        },
    },
    {
        id: "value",
        title: "Long-term value",
        traditional: {
            text: "Resets every time someone exits",
            icon: RefreshCcw,
        },
        custodesk: {
            text: "Knowledge compounds as people leave",
            icon: TrendingUp,
        },
    },
];

export default function ComparisonSection() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate tabs
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleTabClick = (index: number) => {
        setActiveFeature(index);
        setIsAutoPlaying(false);
    };

    return (
        <section id="comparison" className="py-24 px-6 bg-white/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal-900">Why Custodesk?</h2>
                    <p className="text-charcoal-500 text-lg">Stop losing value every time someone exits.</p>
                </div>

                {/* Desktop View (Tabs) */}
                <div className="hidden md:grid grid-cols-12 gap-12">
                    {/* Tabs List */}
                    <div className="col-span-4 space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => handleTabClick(index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${activeFeature === index
                                    ? "bg-white border-terracotta-500/20 shadow-lg shadow-terracotta-500/5 scale-105"
                                    : "bg-transparent border-transparent hover:bg-white/50 text-charcoal-500"
                                    }`}
                            >
                                <h3 className={`text-lg font-bold ${activeFeature === index ? "text-charcoal-900" : "text-charcoal-400"}`}>
                                    {feature.title}
                                </h3>
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="h-1 w-12 bg-terracotta-500 rounded-full mt-3"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="col-span-8 relative h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 grid grid-cols-2 gap-6"
                            >
                                {/* Traditional Card */}
                                <div className="bg-charcoal-50 rounded-3xl p-8 border border-charcoal-900/5 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-charcoal-200 rounded-xl flex items-center justify-center text-charcoal-500">
                                            {(() => {
                                                const Icon = features[activeFeature].traditional.icon;
                                                return <Icon className="w-6 h-6" />;
                                            })()}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-2">Traditional</div>
                                            <p className="text-xl text-charcoal-600 font-medium leading-relaxed">
                                                {features[activeFeature].traditional.text}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="opacity-20">
                                        <X className="w-24 h-24 text-charcoal-400" />
                                    </div>
                                </div>

                                {/* Custodesk Card */}
                                <div className="bg-charcoal-900 rounded-3xl p-8 border border-charcoal-900/5 flex flex-col justify-between relative overflow-hidden text-white shadow-2xl shadow-terracotta-500/20">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

                                    <div className="space-y-4 relative z-10">
                                        <div className="w-12 h-12 bg-terracotta-500 rounded-xl flex items-center justify-center text-white">
                                            {(() => {
                                                const Icon = features[activeFeature].custodesk.icon;
                                                return <Icon className="w-6 h-6" />;
                                            })()}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-terracotta-400 uppercase tracking-wider mb-2">Custodesk</div>
                                            <p className="text-2xl font-bold leading-relaxed">
                                                {features[activeFeature].custodesk.text}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 flex justify-end">
                                        <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
                                            <Check className="w-8 h-8 text-terracotta-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile View (Accordion) */}
                <div className="md:hidden space-y-4">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="bg-white rounded-2xl border border-charcoal-900/5 overflow-hidden">
                            <button
                                onClick={() => setActiveFeature(activeFeature === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <h3 className="text-lg font-bold text-charcoal-900">{feature.title}</h3>
                                <ChevronDown className={`w-5 h-5 text-charcoal-400 transition-transform ${activeFeature === index ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {activeFeature === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-charcoal-900/5"
                                    >
                                        <div className="p-6 space-y-6 bg-charcoal-50/50">
                                            {/* Traditional */}
                                            <div className="flex gap-4 opacity-60">
                                                <div className="mt-1">
                                                    <X className="w-5 h-5 text-charcoal-400" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-charcoal-400 uppercase tracking-wider mb-1">Traditional</div>
                                                    <p className="text-charcoal-600">{feature.traditional.text}</p>
                                                </div>
                                            </div>

                                            {/* Custodesk */}
                                            <div className="flex gap-4">
                                                <div className="mt-1">
                                                    <Check className="w-5 h-5 text-terracotta-500" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-terracotta-600 uppercase tracking-wider mb-1">Custodesk</div>
                                                    <p className="text-charcoal-900 font-bold text-lg">{feature.custodesk.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
