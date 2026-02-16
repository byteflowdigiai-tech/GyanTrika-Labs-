import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {

    Phone,
    Mail,
    Clock,
    Send,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });


    const socialLinks = [
        { icon: Facebook, label: "Facebook", url: "https://facebook.com/gyantrika", color: "hover:text-blue-600" },
        { icon: Twitter, label: "Twitter", url: "https://twitter.com/gyantrika", color: "hover:text-sky-500" },
        { icon: Instagram, label: "Instagram", url: "https://instagram.com/gyantrika", color: "hover:text-pink-600" },
        { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/gyantrika", color: "hover:text-blue-700" },
        { icon: Youtube, label: "YouTube", url: "https://youtube.com/@gyantrika", color: "hover:text-red-600" }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            return;
        }

        const toastId = toast.loading("Sending message...");

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                title: formData.subject || "General Inquiry",
                message: formData.message,
            };

            const result = await emailjs.send(
                "service_efg136v",
                "template_lszh0pp",
                templateParams,
                "zG-JXRtH0hQyn8B2V"
            );

            if (result.status === 200) {
                toast.success("Message sent successfully!", {
                    id: toastId,
                    description: "We'll get back to you within 24 hours."
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            } else {
                throw new Error(result.text || "Failed to send");
            }
        } catch (error: any) {
            console.error("Full EmailJS Error Logic:", error);

            // Helpful error messages for common EmailJS issues
            let errorMessage = "Please check your internet or EmailJS settings.";
            if (error?.text === "The template ID not found") {
                errorMessage = "The Template ID wasn't found. Double check it's saved and linked to YOUR Service ID in the dashboard.";
            } else if (error?.status === 403) {
                errorMessage = "Public Key mismatch. Check 'Account' -> 'API Keys'.";
            } else if (error?.text) {
                errorMessage = error.text;
            }

            toast.error(`Error: ${errorMessage}`, {
                id: toastId,
                description: "Check the console (Press F12) for full details."
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background - Theme Consistent */}
                <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
                </div>

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <MessageSquare className="w-10 h-10 text-blue-200 dark:text-primary" />
                                <h1 className="text-4xl md:text-6xl font-display font-bold text-white dark:text-foreground">
                                    Contact <span className="text-blue-200 dark:text-primary">Us</span>
                                </h1>
                            </div>
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-primary dark:to-blue-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/80 dark:text-muted-foreground text-balance"
                        >
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </motion.p>
                    </div>
                </div>
            </section>

            <main className="flex-1 container py-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="How can we help?"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your inquiry..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full md:w-auto gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Contact */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Location</p>
                                        <p className="text-sm text-muted-foreground">
                                            Main Branch: Bangalore<br />
                                            Sub-branch: Guwahati
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Phone</p>
                                        <a href="tel:+919181015607" className="text-sm text-muted-foreground hover:text-primary">
                                            +91 91810 15607
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Email</p>
                                        <a href="mailto:info@gyantrikalabs.in" className="text-sm text-muted-foreground hover:text-primary break-all">
                                            info@gyantrikalabs.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Business Hours</p>
                                        <p className="text-sm text-muted-foreground">Mon - Sat: 9 AM - 6 PM</p>
                                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>




                    </div>
                </div>


            </main>



            <Footer />
        </div>
    );
};

export default ContactPage;
