import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { programs, getAllCategories, getAllLevels, calculateDiscountedPrice } from "@/data/programsData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Calendar,
    Clock,
    Users,
    Award,
    MapPin,
    Star,
    TrendingUp,
    BookOpen,
    CheckCircle2,
    GraduationCap,
    X
} from "lucide-react";
import { motion } from "framer-motion";
import { Program } from "@/data/programsData";
import { toast } from "sonner";

import { ProgramEnrollmentModal } from "@/components/ProgramEnrollmentModal";

const ProgramsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedLevel, setSelectedLevel] = useState<string>("All");
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
    const [enrollProgram, setEnrollProgram] = useState<Program | null>(null);

    const categories = ["All", ...getAllCategories()];
    const levels = ["All", ...getAllLevels()];

    const filteredPrograms = programs.filter(program => {
        const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
        const matchesLevel = selectedLevel === "All" || program.level === selectedLevel;
        return matchesCategory && matchesLevel;
    });

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

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner": return "bg-green-500";
            case "Intermediate": return "bg-yellow-500";
            case "Advanced": return "bg-red-500";
            case "All Levels": return "bg-blue-500";
            default: return "bg-gray-500";
        }
    };

    const getModeIcon = (mode: string) => {
        switch (mode) {
            case "Online": return "🌐";
            case "Offline": return "📍";
            case "Hybrid": return "🔄";
            default: return "📚";
        }
    };

    const handleEnroll = (program: Program) => {
        setEnrollProgram(program);
        setSelectedProgram(null);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background - Theme Consistent */}
                {/* Background - Theme Consistent */}
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6"
                        >
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <GraduationCap className="w-10 h-10 text-blue-200 dark:text-primary" />
                                <h1 className="text-4xl md:text-6xl font-display font-bold text-white dark:text-foreground">
                                    Our <span className="text-blue-200 dark:text-primary">Courses</span>
                                </h1>
                            </div>
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-primary dark:to-blue-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/80 dark:text-muted-foreground mb-8 text-balance"
                        >
                            Master robotics, IoT, AI, and embedded systems through comprehensive programs designed by industry experts.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                        >
                            <div className="bg-white/10 dark:bg-background/80 backdrop-blur-md border border-white/20 dark:border-border rounded-lg p-4">
                                <div className="text-3xl font-bold text-white dark:text-primary">{programs.length}+</div>
                                <div className="text-sm text-white/80 dark:text-muted-foreground">Courses</div>
                            </div>
                            <div className="bg-white/10 dark:bg-background/80 backdrop-blur-md border border-white/20 dark:border-border rounded-lg p-4">
                                <div className="text-3xl font-bold text-white dark:text-primary">6K+</div>
                                <div className="text-sm text-white/80 dark:text-muted-foreground">Students</div>
                            </div>
                            <div className="bg-white/10 dark:bg-background/80 backdrop-blur-md border border-white/20 dark:border-border rounded-lg p-4">
                                <div className="text-3xl font-bold text-white dark:text-primary">4.8</div>
                                <div className="text-sm text-white/80 dark:text-muted-foreground">Avg Rating</div>
                            </div>
                            <div className="bg-white/10 dark:bg-background/80 backdrop-blur-md border border-white/20 dark:border-border rounded-lg p-4">
                                <div className="text-3xl font-bold text-white dark:text-primary">98%</div>
                                <div className="text-sm text-white/80 dark:text-muted-foreground">Completion</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <main className="flex-1 container py-12 px-4">
                {/* Filters */}
                <div className="mb-8 space-y-4">
                    {/* Category Tabs */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Filter by Category:
                        </h3>
                        <Tabs defaultValue="All" className="w-full" onValueChange={setSelectedCategory}>
                            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-2 bg-muted/50">
                                {categories.map((category) => (
                                    <TabsTrigger
                                        key={category}
                                        value={category}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                    >
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Level Filter */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Filter by Level:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {levels.map((level) => (
                                <Button
                                    key={level}
                                    variant={selectedLevel === level ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedLevel(level)}
                                >
                                    {level}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Programs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((program) => {
                            const discountedPrice = calculateDiscountedPrice(program.price, program.discount);
                            const hasDiscount = program.discount && program.discount > 0;

                            return (
                                <motion.div key={program.id} variants={itemVariants}>
                                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 group border-border/50 hover:border-primary/50">
                                        <div
                                            className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                                            onClick={() => setSelectedProgram(program)}
                                        >
                                            <img
                                                src={program.image}
                                                alt={program.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                                <Badge className={`${getLevelColor(program.level)} text-white`}>
                                                    {program.level}
                                                </Badge>
                                                <Badge variant="secondary" className="backdrop-blur-md bg-white/80 dark:bg-black/80">
                                                    {program.category}
                                                </Badge>
                                            </div>

                                            {hasDiscount && (
                                                <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                                                    {program.discount}% OFF
                                                </Badge>
                                            )}

                                            <div className="absolute bottom-3 left-3 right-3">
                                                <div className="flex items-center gap-2 text-white text-xs">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-semibold">{program.rating}</span>
                                                        <span className="text-white/80">({program.reviews})</span>
                                                    </div>
                                                    <span className="text-white/60">•</span>
                                                    <div className="flex items-center gap-1">
                                                        <Users className="w-3 h-3" />
                                                        <span>{program.enrolled.toLocaleString()} enrolled</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <CardHeader
                                            className="space-y-2 cursor-pointer"
                                            onClick={() => setSelectedProgram(program)}
                                        >
                                            <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
                                                {program.title}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {program.description}
                                            </p>
                                        </CardHeader>

                                        <CardContent className="flex-1 space-y-3">
                                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3 text-primary" />
                                                    <span>{program.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3 text-primary" />
                                                    <span>{program.mode}</span>
                                                </div>
                                                {program.startDate && (
                                                    <div className="flex items-center gap-1 col-span-2">
                                                        <Calendar className="w-3 h-3 text-primary" />
                                                        <span>Starts: {new Date(program.startDate).toLocaleDateString()}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={program.instructor.avatar}
                                                    alt={program.instructor.name}
                                                    className="w-8 h-8 rounded-full object-cover ring-2 ring-border"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-medium truncate">{program.instructor.name}</p>
                                                    <p className="text-xs text-muted-foreground truncate">{program.instructor.role}</p>
                                                </div>
                                            </div>

                                            {program.certificate && (
                                                <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                                                    <Award className="w-3 h-3" />
                                                    <span>Certificate Included</span>
                                                </div>
                                            )}
                                        </CardContent>

                                        <CardFooter className="border-t pt-4 flex items-center justify-between">
                                            <div className="flex flex-col">
                                                {hasDiscount && (
                                                    <span className="text-xs text-muted-foreground line-through">
                                                        ₹{program.price.toLocaleString('en-IN')}
                                                    </span>
                                                )}
                                                <span className="text-xl font-bold text-primary">
                                                    ₹{discountedPrice.toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                            <Button
                                                onClick={() => handleEnroll(program)}
                                                className="gap-2"
                                            >
                                                <GraduationCap className="w-4 h-4" />
                                                Enroll Now
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-muted-foreground text-lg">
                                No programs found with the selected filters.
                            </p>
                        </div>
                    )}
                </motion.div>
            </main>

            {/* Program Details Modal */}
            <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0">
                    <DialogHeader className="p-6 pb-4">
                        <DialogTitle className="text-2xl">{selectedProgram?.title}</DialogTitle>
                    </DialogHeader>

                    <ScrollArea className="max-h-[calc(90vh-180px)] px-6">
                        <div className="space-y-6 pb-6">
                            {/* Program Image */}
                            <img
                                src={selectedProgram?.image}
                                alt={selectedProgram?.title}
                                className="w-full h-64 object-cover rounded-lg"
                            />

                            {/* Key Info */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                                    <div className="text-xs text-muted-foreground">Duration</div>
                                    <div className="font-semibold">{selectedProgram?.duration}</div>
                                </div>
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <MapPin className="w-5 h-5 mx-auto mb-1 text-primary" />
                                    <div className="text-xs text-muted-foreground">Mode</div>
                                    <div className="font-semibold">{selectedProgram?.mode}</div>
                                </div>
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-primary" />
                                    <div className="text-xs text-muted-foreground">Level</div>
                                    <div className="font-semibold">{selectedProgram?.level}</div>
                                </div>
                                <div className="text-center p-3 bg-muted/50 rounded-lg">
                                    <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                                    <div className="text-xs text-muted-foreground">Enrolled</div>
                                    <div className="font-semibold">{selectedProgram?.enrolled.toLocaleString()}</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="font-semibold mb-2">About This Program</h3>
                                <p className="text-muted-foreground">{selectedProgram?.description}</p>
                            </div>

                            <Separator />

                            {/* Features */}
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    What You'll Get
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {selectedProgram?.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator />

                            {/* Curriculum */}
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                    Curriculum
                                </h3>
                                <ul className="space-y-2">
                                    {selectedProgram?.curriculum.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="pt-0.5">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator />

                            {/* Instructor */}
                            <div>
                                <h3 className="font-semibold mb-3">Your Instructor</h3>
                                <div className="flex items-start gap-4">
                                    <img
                                        src={selectedProgram?.instructor.avatar}
                                        alt={selectedProgram?.instructor.name}
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    <div>
                                        <p className="font-semibold">{selectedProgram?.instructor.name}</p>
                                        <p className="text-sm text-muted-foreground">{selectedProgram?.instructor.role}</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {selectedProgram?.instructor.experience}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>

                    {/* Footer */}
                    <div className="p-6 pt-4 border-t bg-muted/20 flex items-center justify-between">
                        <div>
                            {selectedProgram?.discount && selectedProgram.discount > 0 && (
                                <span className="text-sm text-muted-foreground line-through block">
                                    ₹{selectedProgram.price.toLocaleString('en-IN')}
                                </span>
                            )}
                            <span className="text-2xl font-bold text-primary">
                                ₹{selectedProgram && calculateDiscountedPrice(selectedProgram.price, selectedProgram.discount).toLocaleString('en-IN')}
                            </span>
                        </div>
                        <Button
                            size="lg"
                            onClick={() => selectedProgram && handleEnroll(selectedProgram)}
                            className="gap-2"
                        >
                            <GraduationCap className="w-5 h-5" />
                            Enroll Now
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <ProgramEnrollmentModal
                program={enrollProgram}
                isOpen={!!enrollProgram}
                onClose={() => setEnrollProgram(null)}
            />

            <Footer />
        </div>
    );
};

export default ProgramsPage;
