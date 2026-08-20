
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight, CheckCircle2, ArrowLeft, Clock, BarChart,
    Settings, Cpu, X, Sparkles,
} from "lucide-react";
import { projectServices, ProjectService } from "@/data/projectsPageData";
import { projects, Project } from "@/data/projectsData";

// ── Learn More Modal ──────────────────────────────────────────────────────────
function LearnMoreModal({
    service,
    onClose,
    navigate,
}: {
    service: ProjectService | null;
    onClose: () => void;
    navigate: ReturnType<typeof useNavigate>;
}) {
    return (
        <AnimatePresence>
            {service && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal Card */}
                    <motion.div
                        className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
                        initial={{ opacity: 0, scale: 0.88, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 40 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Hero Image */}
                        <div className="relative h-52 md:h-64 flex-shrink-0 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur flex items-center justify-center text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Title overlay */}
                            <div className="absolute bottom-4 left-6 right-16">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-1">
                                    Professional Service
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow">
                                    {service.title}
                                </h2>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <ScrollArea className="flex-1 overflow-y-auto">
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Description */}
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                        <h3 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wide">
                                            Key Features
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.15 + i * 0.07 }}
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-4 pt-2 flex-col sm:flex-row">
                                    <Button
                                        className="flex-1 rounded-full h-12 text-base font-semibold gap-2 hover:-translate-y-0.5 transition-all"
                                        onClick={() => {
                                            onClose();
                                            navigate(service.link);
                                        }}
                                    >
                                        Explore Projects & Packages <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 rounded-full h-12 text-base font-semibold gap-2 border-2 hover:-translate-y-0.5 transition-all"
                                        onClick={() => {
                                            onClose();
                                            navigate("/contact");
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </ScrollArea>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

// ── Services List (the main content section on /projects page) ────────────────
function LearnMoreSection({ navigate }: { navigate: ReturnType<typeof useNavigate> }) {
    const [activeService, setActiveService] = useState<ProjectService | null>(null);

    return (
        <>
            <LearnMoreModal
                service={activeService}
                onClose={() => setActiveService(null)}
                navigate={navigate}
            />
            <main className="flex-1 container pb-24">
                <div className="max-w-7xl mx-auto space-y-32">
                    {projectServices.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="group"
                            >
                                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                                    {/* Content Section */}
                                    <div className={`space-y-8 ${isEven ? "md:order-1" : "md:order-2"}`}>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-2">
                                                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300">
                                                    Professional Service
                                                </span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <motion.div
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={{
                                                hidden: { opacity: 0 },
                                                visible: {
                                                    opacity: 1,
                                                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                                                },
                                            }}
                                        >
                                            {service.features.map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    variants={{
                                                        hidden: { opacity: 0, x: -10 },
                                                        visible: { opacity: 1, x: 0 },
                                                    }}
                                                >
                                                    <div className="mt-1 flex-shrink-0 bg-primary/5 dark:bg-primary/20 p-1 rounded-full">
                                                        <CheckCircle2 className="w-5 h-5 text-primary dark:text-primary-foreground" />
                                                    </div>
                                                    <span className="font-medium text-slate-700 dark:text-slate-200 text-lg">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* ── Learn More Button ── */}
                                        <div className="pt-4 flex flex-wrap gap-4">
                                            <Button
                                                onClick={() => navigate(service.link)}
                                                className="rounded-full px-8 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 gap-2"
                                            >
                                                Learn More
                                                <ArrowRight className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Image Section (flip card) */}
                                    <div
                                        className={`relative ${isEven ? "md:order-2" : "md:order-1"} h-full perspective-[1000px] group/card`}
                                    >
                                        <div className="relative w-full aspect-[4/3] transition-all duration-700 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] rounded-[2rem] shadow-2xl">
                                            {/* Front Face */}
                                            <div className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                                <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-20 blur-3xl rounded-full`} />
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="relative w-full h-full object-cover z-10"
                                                />
                                            </div>

                                            {/* Back Face */}
                                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center shadow-inner">
                                                {service.hoverImage ? (
                                                    <>
                                                        <img
                                                            src={service.hoverImage}
                                                            alt={`${service.title} hover`}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                                                        <div className="relative z-10 space-y-2 mt-auto w-full pb-4">
                                                            <h4 className="text-2xl font-bold text-white drop-shadow-lg">{service.title}</h4>
                                                            <p className="text-white/90 text-sm line-clamp-2 px-4 drop-shadow">
                                                                {service.description}
                                                            </p>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 dark:opacity-10`} />
                                                        <div className="relative z-10 space-y-4">
                                                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                                                                <service.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                                            </div>
                                                            <h4 className="text-2xl font-bold">{service.title}</h4>
                                                            <p className="text-muted-foreground text-sm line-clamp-3 px-4">
                                                                {service.description}
                                                            </p>
                                                            <Button
                                                                onClick={() => navigate(service.link)}
                                                                variant="default"
                                                                className="gap-2 rounded-full mt-2"
                                                            >
                                                                Explore Projects <ArrowRight className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}

// ── Main Page Component ────────────────────────────────────────────────────────
const ProjectsPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    // VIEW 1: Services list (main /projects page)
    if (!category) {
        return (
            <div className="min-h-screen flex flex-col bg-transparent dark:bg-slate-950">
                <Header />

                {/* Hero */}
                <section className="relative pt-32 pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 filter blur-[2px]"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent dark:to-slate-950" />
                    </div>
                    <div className="container relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
                                <Cpu className="w-4 h-4" />
                                <span>Set Up Your Lab</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                                Technology{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                                    Lab Setup
                                </span>
                            </h1>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                                Explore our innovative projects and technical solutions designed to empower the next generation of
                                creators.
                            </p>
                        </motion.div>
                    </div>

                    {/* Wavy Divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                        <svg
                            className="relative block w-[calc(150%+1.3px)] h-[60px] md:h-[100px]"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-white dark:fill-slate-950"
                            ></path>
                        </svg>
                    </div>
                </section>

                <LearnMoreSection navigate={navigate} />
                <Footer />
            </div>
        );
    }

    // VIEW 2: Individual category projects (/projects/:category)
    const categoryInfo = projectServices.find((s) => s.id === category || s.link.includes(category));
    const normalizedCategoryName = categoryInfo ? categoryInfo.title : "Projects";

    const categoryProjects = projects.filter((p) => {
        if (!categoryInfo) return true;
        if (category === "stem-tinkering" && p.category === "Atal Tinkering Lab") return true;
        if (category === "ai-robotics" && p.category === "Ai , STEM & Robotics Lab") return true;
        if (category === "embedded-electronics" && p.category === "Embedded Systems & Electronics Lab") return true;
        if (category === "astronomy" && p.category === "Astronomy Lab") return true;
        if (category === "composite-skills" && p.category === "Composite Skills Lab") return true;
        return false;
    });

    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />

            {/* Category Hero */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center opacity-90"
                        style={{ backgroundImage: `url('${categoryInfo?.heroImage || categoryInfo?.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'}')` }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container px-4 relative z-20 mb-8 pt-8">
                    <Button
                        variant="ghost"
                        className="gap-2 text-white/80 hover:text-white hover:bg-white/10 pl-3 pr-4 rounded-full"
                        onClick={() => navigate("/technology-lab-setup")}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Button>
                </div>
                <div className="container px-4 text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
                            <Cpu className="w-4 h-4 text-cyan-200" />
                            <span>{categoryProjects.length} Packages Available</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white drop-shadow-sm">
                            Technology Lab Set Up <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">— {normalizedCategoryName}</span>
                        </h1>
                        <p className="text-xl text-blue-50/90 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
                            {categoryInfo?.description || "Explore our innovative projects in this field."}
                        </p>
                    </motion.div>
                </div>

                {/* Wavy Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg
                        className="relative block w-[calc(150%+1.3px)] h-[60px] md:h-[100px]"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="fill-white dark:fill-slate-950"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Projects Grid */}
            <main className="flex-1 container py-12 px-4">
                {categoryProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categoryProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group overflow-hidden border-border/50">
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button variant="secondary" onClick={() => setSelectedProject(project)}>
                                                View Details
                                            </Button>
                                        </div>
                                        <div className="absolute top-2 right-2">
                                            <Badge
                                                className={
                                                    project.difficulty === "Beginner"
                                                        ? "bg-green-500"
                                                        : project.difficulty === "Intermediate"
                                                            ? "bg-yellow-500"
                                                            : "bg-red-500"
                                                }
                                            >
                                                {project.difficulty}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {project.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Settings className="w-3 h-3" />
                                                {project.components.length} Components
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-0">
                                        <Button
                                            className="w-full"
                                            onClick={() => navigate("/contact")}
                                        >
                                            Contact Us
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-muted/10 rounded-lg border border-dashed">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <BarChart className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                        <p className="text-muted-foreground mb-6">We haven't added any public projects for this category yet.</p>
                        <Button onClick={() => navigate("/technology-lab-setup")}>Browse Other Categories</Button>
                    </div>
                )}
            </main>

            {/* Project Details Modal */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[70vh]">
                        <div className="space-y-6">
                            <img
                                src={selectedProject?.image}
                                alt={selectedProject?.title}
                                className="w-full aspect-video object-cover rounded-md"
                            />
                            <div>
                                <h4 className="font-semibold mb-2">Description</h4>
                                <p className="text-muted-foreground">{selectedProject?.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-muted rounded-lg">
                                    <div className="text-xs text-muted-foreground mb-1">Difficulty</div>
                                    <div className="font-medium">{selectedProject?.difficulty}</div>
                                </div>
                                <div className="p-3 bg-muted rounded-lg">
                                    <div className="text-xs text-muted-foreground mb-1">Estimated Time</div>
                                    <div className="font-medium">{selectedProject?.duration}</div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Components Required</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject?.components.map((comp, i) => (
                                        <Badge key={i} variant="secondary">
                                            {comp}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
