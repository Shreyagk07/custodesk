"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Mic, Sparkles, CheckCircle2, BarChart3, ArrowRight } from "lucide-react";

const CLIPS = [
    {
        id: "intro",
        title: "Introduction & Context",
        duration: "0:45",
        description: "Sophia sets the stage and builds rapport.",
        transcript: "Hi Alex, thanks for joining me. I've reviewed your recent commits on the payment gateway refactor. I'd love to understand the decision-making process behind the switch to the new provider. Can you walk me through that?",
    },
    {
        id: "deep-dive",
        title: "Technical Deep Dive",
        duration: "1:20",
        description: "Drilling down into specific architectural choices.",
        transcript: "That makes sense regarding the latency. But how did you handle the eventual consistency issues with the legacy database during the migration? Did you implement a dual-write strategy?",
    },
    {
        id: "soft-skills",
        title: "Leadership & Culture",
        duration: "0:55",
        description: "Capturing cultural nuances and team dynamics.",
        transcript: "You mentioned the team was hesitant at first. How did you get buy-in from the senior engineers? What specific concerns did they have, and how did you address them?",
    },
];

export default function SophiaAudioSection() {
    const [activeClip, setActiveClip] = useState(CLIPS[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [displayedTranscript, setDisplayedTranscript] = useState("");
    const [waveformHeights, setWaveformHeights] = useState<number[]>(Array(40).fill(20));

    const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const transcriptIndexRef = useRef(0);

    useEffect(() => {
        setIsPlaying(false);
        setProgress(0);
        setDisplayedTranscript(activeClip.transcript);
        transcriptIndexRef.current = 0;
        if (typewriterTimeoutRef.current) clearTimeout(typewriterTimeoutRef.current);
    }, [activeClip]);

    useEffect(() => {
        let progressInterval: NodeJS.Timeout;
        let waveformInterval: NodeJS.Timeout;

        if (isPlaying) {
            progressInterval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 0.5;
                });
            }, 50);

            waveformInterval = setInterval(() => {
                setWaveformHeights(prev => prev.map(() => Math.random() * 50 + 20)); // Smoother, less chaotic
            }, 100);

            if (progress === 0) {
                setDisplayedTranscript("");
                transcriptIndexRef.current = 0;
            }

            const typeWriter = () => {
                if (transcriptIndexRef.current < activeClip.transcript.length) {
                    setDisplayedTranscript(activeClip.transcript.slice(0, transcriptIndexRef.current + 1));
                    transcriptIndexRef.current++;
                    typewriterTimeoutRef.current = setTimeout(typeWriter, Math.random() * 30 + 30); // Slower typing
                }
            };

            if (transcriptIndexRef.current < activeClip.transcript.length) {
                typeWriter();
            }

        } else {
            if (typewriterTimeoutRef.current) clearTimeout(typewriterTimeoutRef.current);
        }

        return () => {
            clearInterval(progressInterval);
            clearInterval(waveformInterval);
            if (typewriterTimeoutRef.current) clearTimeout(typewriterTimeoutRef.current);
        };
    }, [isPlaying, activeClip, progress]);


    const selectClip = (clip: typeof CLIPS[0]) => {
        if (activeClip.id === clip.id) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveClip(clip);
            setIsPlaying(true);
            setProgress(0);
        }
    };

    return (
        <section className="py-32 px-6 bg-charcoal-950 text-white relative overflow-hidden">
            {/* Aesthetic Background - Deep & Subtle */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta-500/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-charcoal-800/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Left Content - Minimalist Typography */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-terracotta-500">
                            <span className="w-8 h-[1px] bg-terracotta-500/50"></span>
                            Meet Sophia
                        </div>

                        <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1]">
                            Capture knowledge <br />
                            <span className="font-serif italic text-terracotta-500">in the moment.</span>
                        </h2>

                        <p className="text-lg text-charcoal-400 leading-relaxed max-w-md font-light">
                            Sophia conducts adaptive, voice-based conversations that feel completely natural. She captures the nuance that written forms miss.
                        </p>
                    </div>

                    <div className="space-y-4 border-l border-white/10 pl-6">
                        {[
                            "Adapts questions in real-time",
                            "Detects sentiment & hesitation",
                            "Auto-tags insights",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-charcoal-300 text-sm font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Premium Glass Card */}
                <div className="relative group/card">
                    {/* Subtle Glow Behind */}
                    <div className={`absolute -inset-4 bg-terracotta-500/10 rounded-[2rem] blur-2xl transition-opacity duration-1000 ${isPlaying ? "opacity-100" : "opacity-0"}`} />

                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20">

                        {/* Card Header */}
                        <div className="flex items-start justify-between mb-10">
                            <div className="flex items-center gap-5">
                                <div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta-500 to-terracotta-600 flex items-center justify-center cursor-pointer hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-terracotta-500/20 group-hover/card:shadow-terracotta-500/30"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                >
                                    {isPlaying ? <Pause className="w-6 h-6 text-white fill-white" /> : <Play className="w-6 h-6 text-white fill-white ml-1" />}
                                </div>
                                <div>
                                    <div className="font-medium text-xl tracking-tight">Sophia</div>
                                    <div className="text-xs text-terracotta-400 font-medium tracking-widest uppercase mt-1">Voice Agent</div>
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className={`flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all ${isPlaying ? "bg-terracotta-500/10 border-terracotta-500/20 text-terracotta-400" : "bg-white/5 border-white/5 text-charcoal-500"}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-terracotta-500 animate-pulse" : "bg-charcoal-600"}`} />
                                {isPlaying ? "Live" : "Ready"}
                            </div>
                        </div>

                        {/* Waveform Visualization - Minimalist */}
                        <div className="h-20 flex items-center justify-center gap-1 mb-10 px-2">
                            {waveformHeights.map((height, i) => (
                                <div
                                    key={i}
                                    className="w-1 rounded-full transition-all duration-150 ease-out"
                                    style={{
                                        height: isPlaying ? `${height}%` : "10%",
                                        backgroundColor: isPlaying ? "#E07A5F" : "rgba(255, 255, 255, 0.1)",
                                        opacity: isPlaying ? (i > 10 && i < 30 ? 1 : 0.5) : 0.3
                                    }}
                                />
                            ))}
                        </div>

                        {/* Transcript Area */}
                        <div className="mb-8 min-h-[100px]">
                            <p className="text-lg text-charcoal-100 font-light leading-relaxed">
                                &quot;{displayedTranscript}
                                {isPlaying && <span className="inline-block w-0.5 h-5 ml-1 bg-terracotta-500 animate-pulse align-middle" />}&quot;
                            </p>
                        </div>

                        {/* Playlist - Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5 pt-8">
                            {CLIPS.map((clip, index) => (
                                <button
                                    key={clip.id}
                                    onClick={() => selectClip(clip)}
                                    className={`flex flex-col items-start p-4 rounded-xl transition-all text-left group relative overflow-hidden ${activeClip.id === clip.id
                                            ? "bg-white/5 text-white ring-1 ring-terracotta-500/50"
                                            : "text-charcoal-400 hover:text-charcoal-200 hover:bg-white/5"
                                        }`}
                                >
                                    {/* Active Indicator Background */}
                                    {activeClip.id === clip.id && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-500/10 to-transparent opacity-50" />
                                    )}

                                    <div className={`text-xs font-mono mb-2 transition-colors ${activeClip.id === clip.id ? "text-terracotta-400" : "opacity-50 group-hover:opacity-100"
                                        }`}>
                                        0{index + 1}
                                    </div>

                                    <div className="font-medium text-sm leading-tight relative z-10">
                                        {clip.title}
                                    </div>

                                    {/* Play Icon on Hover/Active */}
                                    <div className={`absolute bottom-3 right-3 transition-all duration-300 ${activeClip.id === clip.id ? "opacity-100 translate-y-0 text-terracotta-500" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-white/50"
                                        }`}>
                                        {activeClip.id === clip.id && isPlaying ? <BarChart3 className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                                    </div>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
