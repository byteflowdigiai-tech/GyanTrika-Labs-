import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Target,
    Eye,
    Heart,
    Users,
    Award,
    Lightbulb,
    Rocket,
    Shield,
    TrendingUp,
    Globe,
    Github
} from "lucide-react";
import { motion } from "framer-motion";
import kvLogo from "@/assets/kv-logo.png";
import apsLogo from "@/assets/aps-logo.png";
import iitgLogo from "@/assets/iitg-logo.png";

const AboutPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const values = [
        {
            icon: Heart,
            title: "Passion for Innovation",
            description: "We're driven by a relentless pursuit of innovation and excellence in everything we create."
        },
        {
            icon: Users,
            title: "Student-Centric Approach",
            description: "Every decision we make prioritizes the learning experience and success of our students."
        },
        {
            icon: Lightbulb,
            title: "Practical Learning",
            description: "We believe in hands-on, project-based learning that prepares students for real-world challenges."
        },
        {
            icon: Shield,
            title: "Quality & Excellence",
            description: "We maintain the highest standards in our curriculum, instruction, and student support."
        },
        {
            icon: Globe,
            title: "Accessibility",
            description: "Making quality technical education accessible to students across India and beyond."
        },
        {
            icon: Rocket,
            title: "Future-Ready Skills",
            description: "Equipping students with cutting-edge skills in robotics, AI, IoT, and emerging technologies."
        }
    ];





    const stats = [
        { number: "250+", label: "Students Trained" },
        { number: "3+", label: "Industry Partners" },
        { number: "98%", label: "Success Rate" },
        { number: "4.9/5", label: "Average Rating" }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background - Theme Consistent */}
                <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background dark:to-slate-950" />
                </div>

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white dark:text-foreground">
                                About <span className="text-blue-200 dark:text-primary">GyanTrika Labs</span>
                            </h1>
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-primary dark:to-purple-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/80 dark:text-muted-foreground text-balance"
                        >
                            Empowering the next generation of innovators through hands-on learning in robotics, AI, IoT, and emerging technologies.
                        </motion.p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* Stats Section */}
                <section className="py-12 border-b bg-muted/30">
                    <div className="container px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Target className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Our Mission</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To democratize access to quality technical education in robotics, AI, and IoT by providing hands-on, practical learning experiences that bridge the gap between theoretical knowledge and real-world applications. We strive to nurture curiosity, creativity, and innovation in every student we teach.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                                            <Eye className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Our Vision</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To become India's leading innovation lab where students from all backgrounds can explore, experiment, and excel in emerging technologies. We envision a future where every student has the skills and confidence to build solutions that transform society and drive technological progress.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-16 bg-muted/30">
                    <div className="container px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                The principles that guide everything we do at GyanTrika Labs
                            </p>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        >
                            {values.map((value, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                                <value.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>



                {/* Partners Section */}
                <section className="py-20 bg-background relative overflow-hidden">
                    <div className="container px-4 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted <span className="text-gradient">Partners</span></h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We're proud to collaborate with leading educational institutions to deliver world-class technical education.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { name: "IIT Guwahati", logo: iitgLogo, role: "Innovation Partner", url: "https://www.iitg.ac.in/" },
                                { name: "Kendriya Vidyalaya", logo: kvLogo, role: "Learning Partner", url: "https://kvsangathan.nic.in/" },
                                { name: "Army Public School", logo: apsLogo, role: "Technology Partner", url: "https://www.awesindia.com/" }
                            ].map((partner, i) => (
                                <motion.a
                                    key={i}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all group cursor-pointer"
                                >
                                    <div className="h-24 md:h-32 flex items-center justify-center mb-6 px-4">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                                    <p className="text-primary text-sm font-medium">{partner.role}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Why Choose Us */}
                <section className="py-16 container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GyanTrika Labs?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            What makes us different from other educational platforms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <Award className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Industry Expert Instructors</h3>
                            <p className="text-sm text-muted-foreground">
                                Learn from professionals with 10+ years of real-world experience in robotics, AI, and IoT.
                            </p>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <Rocket className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Project-Based Learning</h3>
                            <p className="text-sm text-muted-foreground">
                                Build real projects, not just watch videos. Every program includes hands-on practical work.
                            </p>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <TrendingUp className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Career Support</h3>
                            <p className="text-sm text-muted-foreground">
                                Job placement assistance, resume reviews, and industry connections to accelerate your career.
                            </p>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
