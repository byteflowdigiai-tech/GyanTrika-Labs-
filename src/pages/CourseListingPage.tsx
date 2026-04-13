import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, GraduationCap, Users, BookOpen, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CourseListingPage() {
    const { stream } = useParams();
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState<string>("All");

    const streamTitleMap: Record<string, string> = {
        technology: "Technology & IT",
        science: "Science",
        commerce: "Commerce",
        arts: "Arts & Humanities"
    };

    const streamTitle = stream ? streamTitleMap[stream] : "Unknown Stream";
    
    // Filter courses for this stream
    const streamCourses = courses.filter(course => course.stream === stream);
    
    // Derived levels available in this stream
    const availableLevels = ["All", ...Array.from(new Set(streamCourses.map(c => c.level)))];

    // Filter by selected level
    const filteredCourses = streamCourses.filter(course => 
        selectedLevel === "All" || course.level === selectedLevel
    );

    const getLevelColor = (level: string) => {
        switch (level) {
            case "School": return "bg-green-500";
            case "UG": return "bg-blue-500";
            case "PG": return "bg-purple-500";
            case "Diploma": return "bg-orange-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <section className="bg-muted/30 border-b py-8">
                <div className="container px-4">
                    <Button variant="ghost" onClick={() => navigate("/courses")} className="mb-4 pl-0 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Streams
                    </Button>
                    <h1 className="text-3xl font-bold font-display capitalize mb-2">{streamTitle} AI Courses</h1>
                    <p className="text-muted-foreground">Select a specific course track to view its full curriculum and enroll.</p>
                </div>
            </section>

            <main className="flex-1 container py-12 px-4">
                {/* Filters */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                             <h3 className="text-sm font-semibold flex items-center gap-2 shrink-0">
                                <BookOpen className="w-4 h-4 text-primary" />
                                Filter by Level:
                            </h3>
                            <Tabs defaultValue="All" value={selectedLevel} onValueChange={setSelectedLevel} className="w-full sm:w-auto">
                                <TabsList className="bg-muted/50 w-full sm:w-auto flex flex-wrap h-auto justify-start py-1 px-1">
                                    {availableLevels.map((level) => (
                                        <TabsTrigger
                                            key={level}
                                            value={level}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex-1 sm:flex-none min-w-[70px] text-xs sm:text-sm py-1.5"
                                        >
                                            {level}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                        </div>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
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
                                        {/* Duration & Terms */}
                                        <div className="grid grid-cols-2 gap-y-4 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/70">Duration</span>
                                                    <span className="font-medium text-foreground">{course.duration}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <BookOpen className="w-4 h-4 text-primary" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase font-bold text-muted-foreground/70">Terms / Sems</span>
                                                    <span className="font-medium text-foreground">{course.terms} Phases</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* What You'll Learn */}
                                        <div className="border-t pt-4">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground/70 block mb-2">What You'll Learn</span>
                                            <ul className="space-y-1.5">
                                                {course.skillsGained.slice(0, 4).map((skill, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Career Outcomes */}
                                        <div className="border-t pt-4">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground/70 block mb-2">Career Outcomes</span>
                                            <p className="text-sm text-muted-foreground">
                                                {course.careerOutcomes.slice(0, 2).join(" · ")}
                                            </p>
                                        </div>

                                        {/* Ideal For */}
                                        <div className="border-t pt-4">
                                            <span className="text-[10px] uppercase font-bold text-muted-foreground/70 block mb-2">Ideal For</span>
                                            <div className="flex flex-wrap gap-1">
                                                {course.targetAudience.slice(0, 2).map((aud, i) => (
                                                     <Badge key={i} variant="secondary" className="text-[10px] font-normal bg-secondary/50">
                                                         {aud}
                                                     </Badge>
                                                ))}
                                                {course.targetAudience.length > 2 && (
                                                    <Badge variant="secondary" className="text-[10px] font-normal bg-secondary/50">
                                                        +{course.targetAudience.length - 2} more
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="border-t bg-muted/5 p-4 flex items-center justify-end mt-auto">
                                        <Button
                                            onClick={() => navigate(`/courses/${stream}/${course.id}`)}
                                            className="px-6 rounded-full w-full group-hover:bg-primary/90 justify-center"
                                        >
                                            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16 bg-muted/20 rounded-xl border border-dashed">
                            <GraduationCap className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-foreground">No Courses Found</h3>
                            <p className="text-muted-foreground text-sm max-w-sm mx-auto mt-2">
                                There are currently no courses available for the selected level. Try changing your filter.
                            </p>
                            <Button variant="outline" className="mt-4" onClick={() => setSelectedLevel("All")}>
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
