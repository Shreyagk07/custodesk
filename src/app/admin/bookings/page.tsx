"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Download } from "lucide-react";

interface Booking {
    id: string;
    name: string;
    email: string;
    company: string;
    budget?: string;
    message?: string;
    submittedAt: string;
}

export default function AdminBookings() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchBookings() {
        setLoading(true);
        try {
            const res = await fetch("/api/book-demo");
            const data = await res.json();
            setBookings(data);
        } catch (error) {
            console.error("Failed to fetch bookings", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    const downloadCSV = () => {
        const headers = ["Name", "Email", "Company Size", "Budget", "Message", "Date Submitted"];
        const rows = bookings.map(b => [
            b.name,
            b.email,
            b.company,
            b.budget || "",
            `"${(b.message || "").replace(/"/g, '""')}"`, // Escape quotes in message
            new Date(b.submittedAt).toLocaleString()
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "bookings.csv";
        a.click();
    };

    return (
        <main className="min-h-screen bg-cream-50 text-charcoal-900 font-sans p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 rounded-full hover:bg-charcoal-900/5 transition-colors">
                            <ArrowLeft className="w-6 h-6 text-charcoal-500" />
                        </Link>
                        <h1 className="text-3xl font-serif font-bold text-charcoal-900">Demo Bookings</h1>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={fetchBookings}
                            className="p-2 rounded-lg border border-charcoal-900/10 hover:bg-white transition-colors text-charcoal-600"
                            title="Refresh"
                        >
                            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button
                            onClick={downloadCSV}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-charcoal-900 text-white font-medium hover:bg-charcoal-800 transition-colors"
                        >
                            <Download className="w-4 h-4" /> Export CSV
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-charcoal-900/5 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-charcoal-50 border-b border-charcoal-900/5">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Name</th>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Email</th>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Company Size</th>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Budget</th>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Message</th>
                                    <th className="px-6 py-4 font-semibold text-charcoal-900">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-charcoal-900/5">
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-charcoal-500">
                                            Loading bookings...
                                        </td>
                                    </tr>
                                ) : bookings.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-charcoal-500">
                                            No bookings found yet.
                                        </td>
                                    </tr>
                                ) : (
                                    bookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-cream-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-charcoal-900">{booking.name}</td>
                                            <td className="px-6 py-4 text-charcoal-600">{booking.email}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terracotta-50 text-terracotta-700">
                                                    {booking.company}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-charcoal-600">{booking.budget || "-"}</td>
                                            <td className="px-6 py-4 text-charcoal-600 max-w-xs truncate" title={booking.message}>
                                                {booking.message || "-"}
                                            </td>
                                            <td className="px-6 py-4 text-charcoal-500 text-sm">
                                                {new Date(booking.submittedAt).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
