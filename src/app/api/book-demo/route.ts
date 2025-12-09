import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { supabase } from '@/lib/supabase';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'bookings.json');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, budget, message } = body;

        if (!name || !email || !company) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const newBooking = {
            id: Date.now().toString(),
            name,
            email,
            company,
            budget,
            message,
            submittedAt: new Date().toISOString(),
        };

        // Try saving to Supabase
        try {
            const { error } = await supabase
                .from('bookings')
                .insert([
                    {
                        name,
                        email,
                        company,
                        budget,
                        message,
                        submitted_at: newBooking.submittedAt
                    }
                ]);

            if (error) throw error;
        } catch (dbError) {
            console.error('Supabase error (falling back to file):', dbError);
            // Fallback to file system if Supabase fails (e.g. invalid keys)
            saveToFile(newBooking);
        }

        return NextResponse.json(
            { message: 'Booking successful', booking: newBooking },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error processing booking:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}

function saveToFile(newBooking: any) {
    // Read existing data
    let bookings = [];
    if (fs.existsSync(DATA_FILE_PATH)) {
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        try {
            bookings = JSON.parse(fileContent);
        } catch (error) {
            console.error('Error parsing bookings file:', error);
            bookings = [];
        }
    }

    // Append new booking
    bookings.push(newBooking);

    // Ensure directory exists
    const dataDir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write back to file
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(bookings, null, 2));
}

export async function GET() {
    try {
        // Try fetching from Supabase
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('submitted_at', { ascending: false });

            if (error) throw error;

            if (data) {
                // Map Supabase fields to our interface
                const mappedBookings = data.map((b: any) => ({
                    id: b.id,
                    name: b.name,
                    email: b.email,
                    company: b.company,
                    budget: b.budget,
                    message: b.message,
                    submittedAt: b.submitted_at
                }));
                return NextResponse.json(mappedBookings);
            }
        } catch (dbError) {
            console.error('Supabase read error (falling back to file):', dbError);
        }

        // Fallback to file system
        if (!fs.existsSync(DATA_FILE_PATH)) {
            return NextResponse.json([]);
        }

        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        const bookings = JSON.parse(fileContent);

        // Sort by newest first
        bookings.sort((a: any, b: any) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

        return NextResponse.json(bookings);
    } catch (error: any) {
        console.error('Error reading bookings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch bookings', details: error.message },
            { status: 500 }
        );
    }
}
