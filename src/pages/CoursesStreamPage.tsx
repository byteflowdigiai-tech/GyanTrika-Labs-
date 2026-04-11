import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Code, TestTube, Palette, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CoursesStreamPage() {
    const navigate = useNavigate();

    const streams = [
        {
            id: "technology",
            title: "Technology & IT",
            description: "Master AI, Data Science, and Machine Learning.",
            icon: <Code className="w-12 h-12 text-blue-500" />,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            color: "from-blue-500/20 to-blue-900/40"
        },
        {
            id: "science",
            title: "Science",
            description: "Advanced scientific computing and AI implementations.",
            icon: <TestTube className="w-12 h-12 text-green-500" />,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
            color: "from-green-500/20 to-green-900/40"
        },
        {
            id: "commerce",
            title: "Commerce",
            description: "Financial modeling, automated bookkeeping & AI in business.",
            icon: <Briefcase className="w-12 h-12 text-yellow-500" />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            color: "from-yellow-500/20 to-yellow-900/40"
        },
        {
            id: "arts",
            title: "Arts & Humanities",
            description: "Harness AI for research, media, and digital storytelling.",
            icon: <Palette className="w-12 h-12 text-purple-500" />,
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
            color: "from-purple-500/20 to-purple-900/40"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <section className="relative py-20 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-primary/80 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-45 filter blur-[2px]"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
                </div>

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                                <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200 dark:text-primary shrink-0" />
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white dark:text-foreground text-center leading-tight">
                                    Choose Your <span className="text-blue-200 dark:text-primary">Stream</span>
                                </h1>
                            </div>
                            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-primary dark:to-blue-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/80 dark:text-muted-foreground mb-8 text-balance"
                        >
                            Select your academic background to explore highly specialized, industry-relevant AI courses tailored for you.
                        </motion.p>
                    </div>
                </div>
            </section>

            <main className="flex-1 container py-16 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {streams.map((stream) => (
                        <motion.div
                            key={stream.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => navigate(`/courses/${stream.id}`)}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-xl"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={stream.image} alt={stream.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} mix-blend-multiply opacity-80`} />
                            </div>
                            <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[280px]">
                                <div className="mb-auto bg-background/80 dark:bg-background/40 backdrop-blur-md w-fit p-4 rounded-xl border border-white/20">
                                    {stream.icon}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold mt-6 mb-2 text-white drop-shadow-md">{stream.title}</h3>
                                <p className="text-white/90 text-sm sm:text-lg font-medium drop-shadow">{stream.description}</p>
                                
                                {/* Visible CTA Button */}
                                <div className="mt-8">
                                    <div className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-white transition-all group-hover:bg-white group-hover:text-primary group-hover:shadow-lg">
                                        Explore Courses <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
