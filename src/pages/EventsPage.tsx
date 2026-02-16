import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { events, getAllEventCategories, Event } from "@/data/eventsData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Tag, ExternalLink } from "lucide-react";


import { EventRegistrationModal } from "@/components/EventRegistrationModal";

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const filterEvents = (status: "Upcoming" | "Past" | "All") => {
        return events.filter((event) => {
            const matchesStatus = status === "All" ? true : status === "Upcoming" ? event.status !== "Past" : event.status === "Past";
            return matchesStatus;
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const EventCard = ({ event, onRegister }: { event: Event; onRegister: (event: Event) => void }) => (
        <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-muted">
                <div className="relative h-48 overflow-hidden bg-primary/5">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200";
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                        <Badge variant={event.status === "Past" ? "secondary" : "default"} className="backdrop-blur-md">
                            {event.status}
                        </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-foreground">
                            {event.category}
                        </Badge>
                    </div>
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
                        <span className="font-semibold text-primary whitespace-nowrap">{event.price}</span>
                    </div>
                    <CardDescription className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString(undefined, {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                        {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="truncate">{event.location}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="pt-4 border-t bg-muted/20">
                    {event.status !== "Past" ? (
                        <Button className="w-full gap-2" onClick={() => onRegister(event)}>
                            Register Now <ExternalLink className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button variant="outline" className="w-full" disabled>
                            Event Ended
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background - Theme Consistent */}
                <div className="absolute inset-0 bg-primary/80 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505373676104-30c598d9237c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50 filter blur-[1px]"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background dark:to-slate-950" />
                </div>

                <div className="container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-white dark:text-foreground"
                    >
                        Events & <span className="text-blue-200 dark:text-primary">Workshops</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 dark:text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
                    >
                        Join our community events, workshops, and hackathons to learn, compete, and grow with fellow innovators.
                    </motion.p>
                </div>
            </section>

            <main className="flex-1 container py-12 relative z-10">
                <div className="absolute inset-0 circuit-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10" />


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filterEvents("Upcoming").length > 0 ? (
                        filterEvents("Upcoming").map((event) => (
                            <EventCard key={event.id} event={event} onRegister={setSelectedEvent} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-muted-foreground text-lg">No upcoming events found.</p>
                        </div>
                    )}
                </motion.div>
            </main>

            <Footer />
            <EventRegistrationModal
                event={selectedEvent}
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </div>
    );
};

export default EventsPage;
