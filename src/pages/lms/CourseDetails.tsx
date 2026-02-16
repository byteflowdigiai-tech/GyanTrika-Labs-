
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { courses } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, BookOpen, Users, Share2, CheckCircle, Lock } from "lucide-react";
import { toast } from "sonner";

const CourseDetails = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Course not found</h2>
                        <Button variant="link" onClick={() => navigate('/lms')}>Back to Courses</Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const handleEnroll = () => {
        if (!isAuthenticated) {
            toast.error("Please sign in to enroll");
            navigate("/login", { state: { from: location } });
            return;
        }
        // Proceed to enrollment (mock)
        toast.success("Enrolled successfully!");
        navigate("/lms/dashboard");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Course Hero */}
            <div className="bg-muted/30 border-b">
                <div className="container py-12 px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex gap-2">
                                <Badge variant="secondary">{course.category}</Badge>
                                <Badge variant="outline">{course.level}</Badge>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">{course.title}</h1>
                            <p className="text-xl text-muted-foreground">{course.description}</p>

                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                                    <span className="font-bold text-lg">{course.rating}</span>
                                    <span className="text-muted-foreground">/ 5.0</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Users className="w-5 h-5 text-muted-foreground" />
                                    <span>{course.students.toLocaleString()} Students Enrolled</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-5 h-5 text-muted-foreground" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                        {course.instructor.charAt(0)}
                                    </div>
                                    <span>Created by <span className="font-medium text-primary underline underline-offset-4">{course.instructor}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* About */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">About this Course</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                This comprehensive course is designed to take you from basics to advanced concepts in {course.category}.
                                Whether you are a student, hobbyist, or professional, you will gain hands-on experience and practical knowledge.
                                The curriculum is crafted by industry experts to ensure you learn relevant skills.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-sm">Certificate of Completion</span>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-sm">Real-world projects</span>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-sm">Lifetime access to materials</span>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-sm">Instructor support</span>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        {/* Syllabus */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Syllabus - What you will learn</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {course.syllabus.map((week, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex flex-col items-start text-left">
                                                <span className="text-sm font-medium text-muted-foreground mb-1">Module {index + 1}</span>
                                                <span className="text-lg font-semibold">{week.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-4 border-l-2 ml-1">
                                                {week.lessons.map((lesson, lIdx) => (
                                                    <li key={lIdx} className="flex items-center gap-2 py-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                        <span className="text-muted-foreground">{lesson}</span>
                                                        {/* <span className="text-xs text-muted-foreground ml-auto bg-muted px-2 py-0.5 rounded">10m</span> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        <Separator />

                        {/* Instructor */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                            <div className="flex gap-4 items-start">
                                <div className="w-20 h-20 rounded-full bg-muted overflow-hidden shrink-0">
                                    {/* Placeholder for instructor image based on name */}
                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-2xl font-bold">
                                        {course.instructor.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{course.instructor}</h3>
                                    <p className="text-primary font-medium mb-2">{course.role}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Experienced professional with a passion for teaching. dedicated to helping students achieve their goals in technology and engineering.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar / Sticky Enroll */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="rounded-xl border bg-card text-card-foreground shadow-lg overflow-hidden">
                                <div className="aspect-video relative">
                                    <img src={course.image} className="w-full h-full object-cover" alt="Course preview" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold">{course.price === 0 ? "Free" : `$${course.price}`}</span>
                                        <span className="text-muted-foreground line-through mb-1 text-sm">$99.99</span>
                                        <span className="text-green-600 text-sm font-bold mb-1 ml-auto">50% OFF</span>
                                    </div>

                                    <Button onClick={handleEnroll} size="lg" className="w-full text-lg font-semibold shadow-md">
                                        {isAuthenticated ? "Enroll Now" : "Sign up to Enroll"}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">30-Day Money-Back Guarantee</p>

                                    <div className="space-y-3 pt-4 border-t">
                                        <h4 className="font-semibold text-sm">This course includes:</h4>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {course.duration} on-demand video</div>
                                            <div className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> {course.modules} Modules</div>
                                            <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> Full lifetime access</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" className="flex-1">Share <Share2 className="w-4 h-4 ml-2" /></Button>
                                        <Button variant="outline" className="flex-1">Gift Course</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CourseDetails;
