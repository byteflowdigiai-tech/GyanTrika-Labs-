import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Code, TestTube, Palette, Briefcase, ArrowRight, Clock, BookOpen, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EarlyBirdWizard } from "@/components/EarlyBirdWizard";
import { courses } from "@/data/courses";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoursesStreamPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [selectedLevel, setSelectedLevel] = useState("All");
    const [selectedStream, setSelectedStream] = useState("All");
    useEffect(() => {
        if (searchParams.get("offer") === "earlybird") {
            // If they land on courses with the old query param, redirect them to the new page automatically
            navigate("/offer/early-bird", { replace: true });
        }
    }, [searchParams, navigate]);

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

    const streamLabels: Record<string, string> = {
        technology: "Technology",
        science: "Science",
        commerce: "Commerce",
        arts: "Arts"
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case "School": return "bg-green-500";
            case "UG": return "bg-blue-500";
            case "PG": return "bg-purple-500";
            case "Diploma": return "bg-orange-500";
            default: return "bg-gray-500";
        }
    };

    const allLevels = ["All", "School", "UG", "PG", "Diploma"];
    const allStreamFilters = ["All", "Technology", "Science", "Commerce", "Arts"];

    const filteredCourses = courses.filter(course => {
        const levelMatch = selectedLevel === "All" || course.level === selectedLevel;
        const streamMatch = selectedStream === "All" || streamLabels[course.stream] === selectedStream;
        return levelMatch && streamMatch;
    });

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

            <main className="flex-1 container py-16 px-4 space-y-20">
                
                {/* Early Bird Offer Section Gateway */}
                <div className="max-w-6xl mx-auto">
                    <EarlyBirdWizard isExpanded={false} />
                </div>

                {/* Stream Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto"
                >
                    {streams.map((stream) => (
                        <motion.div
                            key={stream.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => navigate(`/courses/${stream.id}`)}
                            className="relative group cursor-pointer overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-xl"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={stream.image} alt={stream.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} mix-blend-multiply opacity-80`} />
                            </div>
                            <div className="relative z-10 p-4 h-full flex flex-col justify-end min-h-[140px] md:min-h-[180px]">
                                <div className="mb-auto bg-background/80 dark:bg-background/40 backdrop-blur-md w-fit p-2.5 rounded-lg border border-white/20">
                                    <div className="[&>svg]:w-7 [&>svg]:h-7">{stream.icon}</div>
                                </div>
                                <h3 className="text-lg font-bold mt-4 mb-1 text-white drop-shadow-md">{stream.title}</h3>
                                <p className="text-white/80 text-xs font-medium drop-shadow line-clamp-2">{stream.description}</p>
                                <div className="mt-4">
                                    <div className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white transition-all group-hover:bg-white group-hover:text-primary group-hover:shadow-lg">
                                        Explore <ArrowRight className="ml-1.5 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Courses Section with Filters */}
                <div>
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2">
                            <SlidersHorizontal className="w-5 h-5 text-primary" />
                            <h2 className="text-2xl font-display font-bold">Browse All Courses</h2>
                        </div>
                        <p className="text-muted-foreground">Filter by stream or education level to find your perfect course.</p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 p-4 bg-muted/30 rounded-xl border">
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">By Level</span>
                            <Tabs value={selectedLevel} onValueChange={setSelectedLevel}>
                                <TabsList className="bg-muted/50 h-auto flex flex-wrap gap-1 py-1 px-1">
                                    {allLevels.map(level => (
                                        <TabsTrigger
                                            key={level}
                                            value={level}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs py-1.5 px-3"
                                        >
                                            {level}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>

                        <div className="sm:border-l sm:pl-4 flex flex-col gap-1.5">
                            <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider">By Stream</span>
                            <Tabs value={selectedStream} onValueChange={setSelectedStream}>
                                <TabsList className="bg-muted/50 h-auto flex flex-wrap gap-1 py-1 px-1">
                                    {allStreamFilters.map(s => (
                                        <TabsTrigger
                                            key={s}
                                            value={s}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs py-1.5 px-3"
                                        >
                                            {s}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>

                        <div className="sm:ml-auto flex items-end">
                            <span className="text-sm text-muted-foreground">{filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} found</span>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.length > 0 ? filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group">
                                    <CardHeader className="space-y-4 pb-4 bg-muted/10 border-b relative">
                                        <div className="absolute top-4 right-4">
                                            <Badge className={`${getLevelColor(course.level)} text-white shadow-sm`}>
                                                {course.level}
                                            </Badge>
                                        </div>
                                        <div>
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <GraduationCap className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                {course.title}
                                            </CardTitle>
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground line-clamp-2 min-h-[40px]">
                                            {course.tagline}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="flex-1 pt-6 space-y-5">
                                        <div className="grid grid-cols-2 gap-y-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/70">Duration</span>
                                                    <span className="font-medium text-foreground">{course.duration}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="w-4 h-4 text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/70">Terms / Sems</span>
                                                    <span className="font-medium text-foreground">{course.terms} Phases</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t pt-4">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground/70 block mb-2">What You'll Learn</span>
                                            <ul className="space-y-1.5">
                                                {course.skillsGained.slice(0, 3).map((skill, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="border-t pt-4">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground/70 block mb-2">Career Outcomes</span>
                                            <p className="text-sm text-muted-foreground">{course.careerOutcomes.slice(0, 2).join(" · ")}</p>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="border-t bg-muted/5 p-4">
                                        <Button
                                            onClick={() => navigate(`/courses/${course.stream}/${course.id}`)}
                                            className="w-full rounded-full justify-center group-hover:bg-primary/90"
                                        >
                                            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )) : (
                            <div className="col-span-full text-center py-16 bg-muted/20 rounded-xl border border-dashed">
                                <GraduationCap className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                                <h3 className="text-lg font-bold">No Courses Found</h3>
                                <p className="text-muted-foreground text-sm mt-2">Try changing your filters.</p>
                                <Button variant="outline" className="mt-4" onClick={() => { setSelectedLevel("All"); setSelectedStream("All"); }}>
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
