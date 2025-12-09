export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    description: string;
    content: string;
    mediaType: 'video' | 'image';
    mediaUrl: string;
    results: string[];
    category: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "zerodha-support-automation",
        title: "Handling Market Volatility with AI Support",
        client: "Zerodha",
        description: "How India's largest stockbroker automates 70% of trader queries during market peaks.",
        content: `
            <p><strong>The Challenge:</strong> Zerodha faces massive spikes in support volume during market volatility. Traders need instant answers about order rejections, margin requirements, and account status. Human agents simply couldn't scale fast enough to handle thousands of concurrent queries.</p>
            
            <p><strong>The Solution:</strong> They deployed Custodesk's AI voice and chat agents. The agents were trained on Zerodha's extensive support portal (Z-Connect) and could understand complex trading terminology and context.</p>
            
            <p><strong>The Outcome:</strong> The AI now handles over 70% of routine queries instantly. This allows the human support team to focus on complex, high-stakes issues like technical glitches or payment failures, significantly improving trader satisfaction.</p>
        `,
        mediaType: 'image',
        mediaUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop",
        results: ["70% auto-resolution rate", "Instant response during market hours", "Reduced support costs by 40%"],
        category: "Fintech"
    },
    {
        id: "apollo-patient-experience",
        title: "Transforming Patient Appointment Scheduling",
        client: "Apollo Hospitals",
        description: "Reducing patient wait times and no-shows with intelligent voice agents.",
        content: `
            <p><strong>The Challenge:</strong> Managing thousands of appointment requests daily across multiple languages was a logistical nightmare. Patients faced long hold times, and manual scheduling errors led to missed appointments.</p>
            
            <p><strong>The Solution:</strong> Apollo implemented Custodesk's multilingual voice agents. These agents can handle appointment bookings, rescheduling, and basic health inquiries in Hindi, English, Tamil, and Telugu.</p>
            
            <p><strong>The Outcome:</strong> Patient wait times dropped to near zero. The system automatically sends reminders and handles confirmations, reducing no-shows by 30%. This efficiency saved approximately ₹2.5 Crores in operational costs annually.</p>
        `,
        mediaType: 'image',
        mediaUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop",
        results: ["₹2.5Cr saved in ops costs", "30% reduction in no-shows", "Support in 4 regional languages"],
        category: "Healthcare"
    },
    {
        id: "dunzo-delivery-support",
        title: "Multilingual Support for Delivery Partners",
        client: "Dunzo",
        description: "Bridging the language gap for thousands of delivery partners across India.",
        content: `
            <p><strong>The Challenge:</strong> Dunzo's delivery partners often speak different regional languages. Providing real-time support for order issues, location finding, and payouts in English was ineffective and frustrating for partners.</p>
            
            <p><strong>The Solution:</strong> Custodesk provided a voice-first support interface. Delivery partners can now speak their issues in their native language (Hindi, Kannada, Tamil, etc.), and the AI understands and resolves them instantly or routes to a language-matched agent.</p>
            
            <p><strong>The Outcome:</strong> Partner satisfaction scores soared. Issues that took 20 minutes to resolve now take less than 5. This has led to higher partner retention and smoother delivery operations across major cities.</p>
        `,
        mediaType: 'image',
        mediaUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2670&auto=format&fit=crop",
        results: ["60% faster issue resolution", "Support in 5+ languages", "Higher partner retention"],
        category: "Logistics"
    }
];
