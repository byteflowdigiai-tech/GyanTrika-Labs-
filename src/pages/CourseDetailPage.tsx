import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
    Clock,
    GraduationCap,
    Users,
    ChevronRight,
    ArrowLeft,
    CheckCircle2,
    BookOpen,
    BarChart,
    Briefcase
} from "lucide-react";

export default function CourseDetailPage() {
    const { stream, courseId } = useParams();
    const navigate = useNavigate();

    const course = courses.find((c) => c.id === courseId && c.stream === stream);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
                    <Button onClick={() => navigate("/courses")}>Back to Streams</Button>
                </main>
                <Footer />
            </div>
        );
    }

    const streamTitleMap: Record<string, string> = {
        technology: "Technology & IT",
        science: "Science",
        commerce: "Commerce",
        arts: "Arts & Humanities"
    };

    const streamTitle = stream ? streamTitleMap[stream] : "Unknown Stream";

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="bg-muted/30 border-b py-10 md:py-16">
                <div className="container px-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(`/courses/${stream}`)}
                        className="mb-6 pl-0 text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to {streamTitle}
                    </Button>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                        <div className="flex-1 max-w-3xl">
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <Badge className="bg-primary hover:bg-primary">{course.level}</Badge>
                                <Badge variant="outline" className="capitalize">{stream}</Badge>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                {course.tagline}
                            </p>
                            
                            <div className="flex flex-wrap gap-6 mb-8 bg-background p-4 md:p-6 rounded-xl border shadow-sm w-fit">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase font-bold">Duration</div>
                                        <div className="font-semibold">{course.duration}</div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-10" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase font-bold">Layout</div>
                                        <div className="font-semibold">{course.terms} Phases</div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-10" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <BarChart className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase font-bold">Registration</div>
                                        <div className="font-semibold">{course.registrationFee}</div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="hidden md:block h-10" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <BarChart className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase font-bold">Tuition</div>
                                        <div className="font-semibold">{course.monthlyFee}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Card */}
                        <Card className="w-full md:w-80 shadow-lg border-primary/20 bg-background/50 backdrop-blur-sm shrink-0 md:sticky top-24">
                            <CardContent className="p-6">
                                <div className="text-center mb-4">
                                    <div className="text-sm text-muted-foreground mb-1 uppercase font-semibold tracking-wider">Registration Fee</div>
                                    <div className="text-4xl font-bold text-primary">{course.registrationFee}</div>
                                </div>
                                <div className="text-center mb-6 bg-muted/40 rounded-lg py-3 px-4 border">
                                    <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Monthly Tuition</div>
                                    <div className="text-lg font-bold text-foreground">{course.monthlyFee}</div>
                                </div>
                                <Button 
                                    className="w-full text-lg h-12 rounded-xl group"
                                    onClick={() => navigate(`/apply/${course.id}?stream=${stream}`)}
                                >
                                    Enroll Now 
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    Limited seats available. Next batch starts soon.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <main className="flex-1 container px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-16">
                    
                    {/* Overview & Audience */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-primary" /> Overview
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {course.overview}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Users className="w-6 h-6 text-primary" /> Who is this for?
                            </h2>
                            <ul className="space-y-3">
                                {course.targetAudience.map((audience, idx) => (
                                    <li key={idx} className="flex flex-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground text-lg">{audience}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <Separator />

                    {/* Detailed Curriculum Section */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-display font-bold mb-2">Program Curriculum</h2>
                            <p className="text-muted-foreground">A detailed breakdown of the phases, modules, and learning outcomes.</p>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="phase-0">
                            {course.curriculum.map((phase, phaseIdx) => (
                                <AccordionItem key={phaseIdx} value={`phase-${phaseIdx}`} className="bg-card border rounded-xl overflow-hidden shadow-sm px-2">
                                    <AccordionTrigger className="hover:no-underline px-4 py-5 group">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                {phaseIdx + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{phase.phase}</h3>
                                                <p className="text-sm font-normal text-muted-foreground">{phase.topics.length} Modules</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-6 pt-2">
                                        <div className="w-full overflow-x-auto rounded-lg border">
                                            <table className="w-full text-sm text-left">
                                                <thead className="bg-muted text-muted-foreground uppercase text-xs">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 font-semibold">Module / Topic</th>
                                                        <th scope="col" className="px-6 py-3 font-semibold">Learning Outcome</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {phase.topics.map((topic, topicIdx) => (
                                                        <tr key={topicIdx} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                                                            <td className="px-6 py-4 font-medium">{topic.module}</td>
                                                            <td className="px-6 py-4 text-muted-foreground">{topic.outcome}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <Separator />

                    {/* Skills & Careers */}
                    <div className="grid md:grid-cols-2 gap-12 pb-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-primary" /> Skills You Will Gain
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {course.skillsGained.map((skill, idx) => (
                                    <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border/50">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-primary" /> Career Outcomes
                            </h2>
                            <ul className="space-y-4">
                                {course.careerOutcomes.map((career, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-muted/30 p-3 rounded-lg border">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-medium">{career}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Final CTA */}
                    <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
                        <h2 className="text-3xl font-display font-bold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                            Join the next batch for {course.title} and take the first step towards a successful career.
                        </p>
                        <Button 
                            className="text-lg h-14 px-10 rounded-xl group w-full md:w-auto"
                            onClick={() => navigate(`/apply/${course.id}?stream=${stream}`)}
                        >
                            Enroll Now 
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
