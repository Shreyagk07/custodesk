"use client";

import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function BookingForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [bookingData, setBookingData] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(form);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company"),
            budget: formData.get("budget"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/book-demo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Failed to submit booking");
                } else {
                    const text = await response.text();
                    console.error("Non-JSON response:", text);
                    throw new Error("Server error: Please check console for details");
                }
            }

            setBookingData({ name: data.name, email: data.email });
            setStatus("success");
            // Reset form after success
            form.reset();
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        }
    }

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-charcoal-900/5">
            {status === "success" ? (
                <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">Request Sent!</h3>
                        <p className="text-charcoal-600">Thanks for your interest. We'll be in touch shortly.</p>
                    </div>

                    <div className="pt-4 border-t border-charcoal-900/5">
                        <p className="text-sm font-medium text-charcoal-500 mb-4">Want to skip the wait?</p>
                        <button
                            data-cal-link="vandith/30min"
                            data-cal-config={`{"name":"${bookingData?.name}","email":"${bookingData?.email}"}`}
                            className="w-full py-4 rounded-full bg-charcoal-900 text-white font-bold hover:bg-charcoal-800 transition-all shadow-lg hover:shadow-charcoal-900/25 active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Schedule Meeting Now
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-charcoal-900 mb-1.5">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-charcoal-900/10 text-charcoal-900 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-charcoal-900 mb-1.5">Work Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-charcoal-900/10 text-charcoal-900 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all"
                            placeholder="jane@company.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-charcoal-900 mb-1.5">Company Size</label>
                        <div className="relative">
                            <select
                                name="company"
                                id="company"
                                className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-charcoal-900/10 text-charcoal-900 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all appearance-none"
                            >
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201+">201+ employees</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-charcoal-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="budget" className="block text-sm font-bold text-charcoal-900 mb-1.5">Company Budget</label>
                        <div className="relative">
                            <select
                                name="budget"
                                id="budget"
                                className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-charcoal-900/10 text-charcoal-900 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all appearance-none"
                            >
                                <option value="500-1500">$500 - $1,500</option>
                                <option value="1500-3000">$1,500 - $3,000</option>
                                <option value="3000-6000">$3,000 - $6,000</option>
                                <option value="6000-10000">$6,000 - $10,000</option>
                                <option value="10000+">$10,000+</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-charcoal-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-charcoal-900 mb-1.5">Message <span className="text-charcoal-400 font-normal">(Optional)</span></label>
                        <textarea
                            name="message"
                            id="message"
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-cream-50 border border-charcoal-900/10 text-charcoal-900 focus:outline-none focus:border-terracotta-500 focus:ring-1 focus:ring-terracotta-500 transition-all resize-none"
                            placeholder="Tell us about your needs..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 rounded-full bg-terracotta-500 text-white font-bold hover:bg-terracotta-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-lg hover:shadow-terracotta-500/25 active:scale-[0.98]"
                    >
                        {status === "loading" ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Scheduling...
                            </span>
                        ) : (
                            "Book Demo"
                        )}
                    </button>

                    {status === "error" && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm text-center font-medium animate-in fade-in slide-in-from-bottom-2">
                            {errorMessage}
                        </div>
                    )}
                </form>
            )}
        </div>
    );
}
