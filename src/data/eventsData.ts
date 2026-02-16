export interface Event {
    id: string;
    title: string;
    category: "Workshop" | "Webinar" | "Hackathon" | "Meetup" | "Competition";
    date: string;
    time: string;
    location: string;
    image: string;
    description: string;
    status: "Upcoming" | "Ongoing" | "Past";
    registrationLink?: string;
    price?: string; // e.g., "Free" or "₹500"
}

export const events: Event[] = [
    {
        id: "1",
        title: "Robotics & AI Summit 2026",
        category: "Meetup",
        date: "2026-03-15",
        time: "10:00 AM - 4:00 PM",
        location: "Tech Park Auditorium, Bangalore",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
        description: "Join industry leaders and innovators for a day of talks, demos, and networking in the field of Robotics and AI.",
        status: "Upcoming",
        price: "Free",
    },
    {
        id: "2",
        title: "IoT Home Automation Workshop",
        category: "Workshop",
        date: "2026-02-20",
        time: "2:00 PM - 5:00 PM",
        location: "GyanTrika Labs, Indiranagar",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200",
        description: "Hands-on workshop to build your own smart home devices using ESP32 and Arduino.",
        status: "Upcoming",
        price: "₹499",
    },
    {
        id: "3",
        title: "National Hackathon: AgriTech",
        category: "Hackathon",
        date: "2026-04-10",
        time: "48 Hours",
        location: "Online / Hybrid",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1200",
        description: "Solve real-world agricultural problems using technology. Prizes worth ₹1 Lakh up for grabs!",
        status: "Upcoming",
        price: "Free",
    },
    {
        id: "4",
        title: "Drone Making Masterclass",
        category: "Workshop",
        date: "2026-01-10",
        time: "10:00 AM - 1:00 PM",
        location: "StartHub Center",
        image: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=1200",
        description: "Learn the aerodynamics and electronics behind drones and build your first quadcopter.",
        status: "Past",
        price: "₹999",
    },
    {
        id: "5",
        title: "Future of PCB Design Webinar",
        category: "Webinar",
        date: "2026-11-05",
        time: "6:00 PM - 7:30 PM",
        location: "Online (Zoom)",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
        description: "Expert talk on High-Speed PCB Design and upcoming industry trends.",
        status: "Past",
        price: "Free",
    },
];

export const getAllEventCategories = () => {
    return Array.from(new Set(events.map((event) => event.category)));
};
