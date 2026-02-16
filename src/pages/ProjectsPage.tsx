
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Home, ArrowLeft, Clock, BarChart, Settings, ExternalLink, Cpu } from "lucide-react";
import { projectServices } from "@/data/projectsPageData";
import { projects, Project } from "@/data/projectsData";

const ProjectsPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Scroll to top on mount or category change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    // VIEW 1: CATEGORY/SERVICES LIST (Main /projects page)
    // If no category is selected, show the high-level service cards
    if (!category || category === undefined) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
                <Header />
                {/* Main Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 filter blur-[2px]"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
                    </div>

                    <div className="container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >

                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
                                <Cpu className="w-4 h-4" />
                                <span>Customize Your Projects</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Projects</span>
                            </h1>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                                Explore our innovative projects and technical solutions designed to empower the next generation of creators.
                            </p>
                        </motion.div>
                    </div>
                </section>

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
                                        <div className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
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
                                                        transition: {
                                                            staggerChildren: 0.1,
                                                            delayChildren: 0.2
                                                        }
                                                    }
                                                }}
                                            >
                                                {service.features.map((feature, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex items-start gap-3"
                                                        variants={{
                                                            hidden: { opacity: 0, x: -10 },
                                                            visible: { opacity: 1, x: 0 }
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

                                            <div className="pt-4">
                                                <Button
                                                    onClick={() => navigate('/contact')}
                                                    className="rounded-full px-10 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    Get Started
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'} h-full perspective-[1000px] group/card`}>
                                            <div className="relative w-full aspect-[4/3] transition-all duration-700 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] rounded-[2rem] shadow-2xl">
                                                {/* Front Face */}
                                                <div className="absolute inset-0 [backface-visibility:hidden] rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                                    {/* Decorative Gradient Blob */}
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
                                                            {/* Background Image */}
                                                            <img
                                                                src={service.hoverImage}
                                                                alt={`${service.title} hover`}
                                                                className="absolute inset-0 w-full h-full object-cover"
                                                            />
                                                            {/* Dark Overlay - positioned at bottom only */}
                                                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                                                            {/* Content */}
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
                                                                <Button onClick={() => navigate(service.link)} variant="default" className="gap-2 rounded-full mt-2">
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
                <Footer />
            </div>
        );
    }

    // VIEW 2: INDIVIDUAL PROJECTS (Detailed /projects/:category page)
    // Filter projects based on the category param
    const categoryInfo = projectServices.find(s => s.id === category || s.link.includes(category));
    const normalizedCategoryName = categoryInfo ? categoryInfo.title : "Projects";

    // Filter logic for projects
    const categoryProjects = projects.filter(p => {
        if (!categoryInfo) return true; // Show all if unknown category
        if (category === 'robotics' && p.category === 'Robotics') return true;
        if (category === 'iot' && p.category === 'IoT') return true;
        if (category === 'ai' && p.category === 'AI') return true;
        if (category === 'pcb' && p.category === 'PCB') return true;
        if (category === '3d' && p.category === '3D Designing & Printing') return true;
        return false;
    });

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Category Hero */}
            <section className="relative py-20 bg-muted/30">
                {/* Back Button */}
                <div className="container px-4 relative z-20 mb-8">
                    <Button
                        variant="ghost"
                        className="gap-2 text-muted-foreground hover:text-foreground pl-0"
                        onClick={() => navigate('/projects')}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Button>
                </div>

                <div className="container px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5">
                            {categoryProjects.length} Projects Available
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {normalizedCategoryName} Projects
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {categoryInfo?.description || "Explore our innovative projects in this field."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <main className="flex-1 container py-12 px-4">
                {categoryProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                            <Badge className={
                                                project.difficulty === 'Beginner' ? 'bg-green-500' :
                                                    project.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                            }>
                                                {project.difficulty}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                            {project.description}
                                        </p>
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
                        <p className="text-muted-foreground mb-6">
                            We haven't added any public projects for this category yet.
                        </p>
                        <Button onClick={() => navigate('/projects')}>
                            Browse Other Categories
                        </Button>
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
                                        <Badge key={i} variant="secondary">{comp}</Badge>
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
