
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Trophy, Clock, Star, PlayCircle, BarChart, Calendar, ChevronRight, Search, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const { user } = useAuth();

    // Mock Data
    const enrolledCourses = [
        {
            id: 1,
            title: "Introduction to Robotics",
            instructor: "Dr. A. Sharma",
            progress: 65,
            totalModules: 12,
            completedModules: 8,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            category: "Robotics"
        },
        {
            id: 2,
            title: "Python for AI Beginners",
            instructor: "Prof. Sarah Lee",
            progress: 30,
            totalModules: 10,
            completedModules: 3,
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
            category: "AI"
        },
        {
            id: 3,
            title: "Arduino Basics & IoT",
            instructor: "Eng. R. Verma",
            progress: 0,
            totalModules: 8,
            completedModules: 0,
            image: "https://images.unsplash.com/photo-1555412654-72a95a495858?auto=format&fit=crop&q=80&w=800",
            category: "IoT"
        }
    ];

    const upcomingAssignments = [
        { id: 1, title: "Robotics Kinematics Quiz", course: "Introduction to Robotics", due: "Tomorrow, 11:59 PM" },
        { id: 2, title: "Python Variables Exercise", course: "Python for AI Beginners", due: "Jan 15, 2026" },
    ];

    const recommendedCourses = [
        { id: 4, title: "Advanced PCB Design", category: "Electronics", rating: 4.8, students: 120, image: "https://images.unsplash.com/photo-1574689049297-a7ea6b23d9b8?auto=format&fit=crop&q=80&w=800" },
        { id: 5, title: "3D Printing Mastery", category: "Manufacturing", rating: 4.9, students: 350, image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=800" },
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

            <main className="flex-1 container py-8 px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
                            Learning Dashboard
                        </h1>
                        <p className="text-muted-foreground mt-1">Welcome back, {user?.name || "Student"}. Keep up the great work!</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                            Explore Courses
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 max-w-[400px] mb-8 bg-muted/50 p-1">
                        <TabsTrigger value="dashboard" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Dashboard</TabsTrigger>
                        <TabsTrigger value="courses">My Courses</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard" className="space-y-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        >
                            {/* Stats Overview */}
                            <motion.div variants={itemVariants} className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/20 shadow-sm hover:shadow-md transition-all">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Courses inside Progress</CardTitle>
                                        <BookOpen className="h-4 w-4 text-purple-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">2</div>
                                        <p className="text-xs text-muted-foreground">+1 from last month</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20 shadow-sm hover:shadow-md transition-all">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Completed Modules</CardTitle>
                                        <Trophy className="h-4 w-4 text-amber-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">11</div>
                                        <p className="text-xs text-muted-foreground">Top 10% of learners</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 shadow-sm hover:shadow-md transition-all">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                                        <Clock className="h-4 w-4 text-emerald-600" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">24.5h</div>
                                        <p className="text-xs text-muted-foreground">+2.5h this week</p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Continue Learning */}
                            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">Continue Learning</h2>
                                    <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
                                </div>

                                <div className="space-y-4">
                                    {enrolledCourses.filter(c => c.progress > 0).map((course) => (
                                        <Card key={course.id} className="overflow-hidden border-border/50 hover:border-primary/30 transition-all hover:shadow-md group">
                                            <div className="flex flex-col sm:flex-row">
                                                <div className="sm:w-48 h-32 sm:h-auto relative overflow-hidden">
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                                    <div className="absolute bottom-2 left-2">
                                                        <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white border-0 text-xs">{course.category}</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex-1 p-4 flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex justify-between items-start">
                                                            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mt-1 mb-3">{course.instructor}</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1.5">
                                                            <span className="text-muted-foreground">{course.completedModules} / {course.totalModules} Modules</span>
                                                            <span className="font-medium text-primary">{course.progress}%</span>
                                                        </div>
                                                        <Progress value={course.progress} className="h-2" />
                                                    </div>
                                                    <div className="mt-3 flex justify-end">
                                                        <Button size="sm" className="w-full sm:w-auto gap-2">
                                                            <PlayCircle className="w-4 h-4" /> Continue
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {recommendedCourses.map((course) => (
                                            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 group">
                                                <div className="h-32 relative overflow-hidden">
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                                                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                        {course.rating}
                                                    </div>
                                                </div>
                                                <CardHeader className="p-4 pb-2">
                                                    <div className="text-xs text-primary font-medium mb-1">{course.category}</div>
                                                    <CardTitle className="text-base line-clamp-1 group-hover:text-primary transition-colors">{course.title}</CardTitle>
                                                </CardHeader>
                                                <CardFooter className="p-4 pt-0 flex justify-between items-center text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.students} Students</span>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 hover:text-primary">
                                                        <ChevronRight className="w-4 h-4" />
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sidebar Widgets */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <Card className="border-border/50">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Upcoming Assignments</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {upcomingAssignments.map((assignment) => (
                                            <div key={assignment.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/70 transition-colors">
                                                <div className="bg-primary/10 p-2 rounded-md">
                                                    <Calendar className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <p className="text-sm font-medium leading-none">{assignment.title}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-1">{assignment.course}</p>
                                                    <p className="text-xs text-red-500 font-medium pt-1">Due: {assignment.due}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <Button variant="outline" className="w-full text-xs">View All Assignments</Button>
                                    </CardContent>
                                </Card>

                                <Card className="bg-primary text-primary-foreground border-none shadow-lg overflow-hidden relative">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-3xl pointer-events-none" />
                                    <CardHeader>
                                        <CardTitle className="text-lg relative z-10">Upgrade to Pro</CardTitle>
                                        <CardDescription className="text-primary-foreground/80 relative z-10">Get unlimited access to all courses and certificates.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <Button variant="secondary" className="w-full font-semibold text-primary">Upgrade Now</Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="courses">
                        <div className="py-8 text-center text-muted-foreground">
                            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <h3 className="text-lg font-medium">All Courses View</h3>
                            <p>This section will list all enrolled and available courses.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="achievements">
                        <div className="py-8 text-center text-muted-foreground">
                            <Trophy className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <h3 className="text-lg font-medium">Achievements & Certificates</h3>
                            <p>Your earned badges and certificates will appear here.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
