import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Award, Brain, Users, TrendingUp, CheckCircle2, Download, GraduationCap, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NeetJeePage = () => {
    const features = [
        {
            icon: Target,
            title: "Expert Faculty",
            description: "Learn from highly experienced faculty members who have mentored top rankers."
        },
        {
            icon: Brain,
            title: "Comprehensive Material",
            description: "Well-structured study material covering the entire syllabus with detailed concepts."
        },
        {
            icon: Award,
            title: "Mock Tests",
            description: "Regular all-India level mock tests with detailed performance analysis."
        },
        {
            icon: Users,
            title: "Doubt Clearance",
            description: "Dedicated doubt clearing sessions to ensure you understand every concept."
        },
        {
            icon: TrendingUp,
            title: "Performance Tracking",
            description: "Continuous evaluation and personalized feedback to improve your ranking."
        },
        {
            icon: BookOpen,
            title: "Interactive Classes",
            description: "Engaging lecture delivery focusing on problem-solving techniques and shortcuts."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
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
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 text-white dark:text-foreground leading-tight">
                                <span className="text-blue-200 dark:text-primary">NEET / JEE</span> Preparation
                            </h1>
                            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-primary dark:to-purple-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg sm:text-xl text-white/80 dark:text-muted-foreground text-balance"
                        >
                            Excel in your competitive exams with our structured programs, expert guidance, and rigorous testing framework.
                        </motion.p>
                    </div>
                </div>
            </section>

            <main className="flex-1 py-16 md:py-24">
                {/* Stats / Overview Bar */}
                <section className="container px-4 mb-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Hours of Lectures", value: "850+" },
                            { label: "Practice Questions", value: "15,000+" },
                            { label: "Mock Tests", value: "120+" },
                            { label: "Dedicated Mentors", value: "24/7" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center shadow-sm">
                                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Course Programs Tabs */}
                <section className="container px-4 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Programs</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose the perfect batch tailored to your current academic stage and exam targets.
                        </p>
                    </div>

                    <Tabs defaultValue="two-year" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-transparent">
                            <TabsTrigger value="foundation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base py-3 rounded-lg border border-border">
                                Foundation (Class 9-10)
                            </TabsTrigger>
                            <TabsTrigger value="two-year" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base py-3 rounded-lg border border-border">
                                Target Batch (Class 11-12)
                            </TabsTrigger>
                            <TabsTrigger value="dropper" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base py-3 rounded-lg border border-border">
                                Repeater / Dropper
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="foundation" className="mt-8">
                            <Card className="border-primary/20 shadow-md">
                                <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6 rounded-t-xl">
                                    <div className="flex items-center gap-3">
                                        <Microscope className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-2xl">Foundation Course</CardTitle>
                                    </div>
                                    <p className="text-muted-foreground mt-2">Start early and build a rock-solid foundation for future competitive exams.</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Focus on conceptual clarity', 'NTSE & Olympiad preparation', 'Advanced Problem Solving', 'Regular Mental Ability Tests', 'Stress-free environment', 'Personalized attention'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="two-year" className="mt-8">
                            <Card className="border-primary/20 shadow-md">
                                <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6 rounded-t-xl">
                                    <div className="flex items-center gap-3">
                                        <Target className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-2xl">2-Year Target Batch</CardTitle>
                                    </div>
                                    <p className="text-muted-foreground mt-2">Intensive 2-year classroom program synchronized with school curriculum for Class 11 and 12.</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Complete CBSE/Board + NEET/JEE syllabus', 'Weekly phase tests', 'Extensive Study Modules', 'AI-Based Performance Analytics', 'Revision & Doubt Camps', 'All India Test Series (AITS)'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="dropper" className="mt-8">
                            <Card className="border-primary/20 shadow-md">
                                <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6 rounded-t-xl">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-2xl">Repeater / Dropper Batch</CardTitle>
                                    </div>
                                    <p className="text-muted-foreground mt-2">An aggressive, highly-focused 1-year program designed for 12th pass students aiming for top ranks.</p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Fast-paced comprehensive coverage', 'High-frequency mock testing', 'Advanced trick & shortcut workshops', 'Weakness identification clinics', 'Previous Year Questions (PYQ) Mastery', 'Dedicated Mentor allocation'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Features Section */}
                <section className="container px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Prepare With Us?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We provide everything you need to secure a top rank in your target examination, leveraging modern pedagogy and expert insights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full group block rounded-[24px] bg-white dark:bg-card border-[1px] border-slate-200 dark:border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="w-[56px] h-[56px] rounded-2xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden transition-colors duration-300 group-hover:bg-primary/20">
                                            <feature.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-display font-medium text-[22px] mb-3 text-foreground tracking-tight">{feature.title}</h3>
                                        <p className="text-[15px] leading-relaxed text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default NeetJeePage;
