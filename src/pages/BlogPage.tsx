import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, getFeaturedPosts, getAllCategories } from "@/data/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight, Sparkles, Send, TrendingUp, Users, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const BlogPage = () => {
    useEffect(() => {
        document.title = "Tech Insights Hub - GyaanTrika Labs Blog | Robotics, AI, IoT (2026)";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Explore the latest in Robotics, AI, and IoT on the GyaanTrika Labs blog. Dive into expert tutorials, industry insights, and innovation stories.");
        }
    }, []);

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [showOnlyTrending, setShowOnlyTrending] = useState<boolean>(false);
    const [showAllContributors, setShowAllContributors] = useState<boolean>(false);

    const categories = ["All", ...getAllCategories()];
    const featuredPosts = getFeaturedPosts();
    const featuredPost = featuredPosts[0] || blogPosts[0];
    const secondaryPosts = blogPosts.filter(p => p.id !== featuredPost.id).slice(0, 3);

    const isSearching = searchQuery !== "" || selectedCategory !== "All" || showOnlyTrending;

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesTrending = !showOnlyTrending || post.featured;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = searchQuery === "" ||
            post.title.toLowerCase().includes(searchLower) ||
            post.excerpt.toLowerCase().includes(searchLower) ||
            post.category.toLowerCase().includes(searchLower) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchLower));
        return matchesCategory && matchesSearch && matchesTrending;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
            <Header />

            <main className="flex-1">
                {/* New Premium Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay - Matched to Shop Section */}
                    <div className="absolute inset-0 bg-primary/95 dark:bg-primary/20 z-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20 filter blur-[2px]"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
                    </div>

                    {/* Content */}
                    <div className="container relative z-10 text-center text-white px-4 pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block text-white/80">
                                BLOG
                            </span>
                            <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight leading-tight text-white">
                                TECH INSIGHTS <span className="text-primary-foreground/90">HUB</span>
                            </h1>
                            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
                                Exploring the frontiers of Robotics, AI, and IoT. Your source for technical deep-dives and innovation stories.
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

                {/* Categories & Search - Refined styling */}
                <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 sticky top-20 z-30 backdrop-blur-md bg-opacity-90">
                    <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setShowOnlyTrending(false);
                                    }}
                                    className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${selectedCategory === cat && !showOnlyTrending
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input
                                placeholder="Search articles..."
                                className="pl-12 pr-10 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary/20 h-12"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors group"
                                    aria-label="Clear search"
                                >
                                    <X className="w-4 h-4 text-slate-400 group-hover:text-primary" />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                <section className="container py-16" id="latest-stories">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 px-4">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {showOnlyTrending ? "Trending Stories" : isSearching ? `Search Results for "${searchQuery || selectedCategory}"` : "Latest Stories"}
                        </h2>
                        <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-900 px-4 py-1 rounded-full border border-slate-200 dark:border-slate-800 italic">
                            Showing {filteredPosts.length} Articles
                        </span>
                    </div>

                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                        >
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index % 3 * 0.1 }}
                                    key={post.id}
                                    className="group cursor-pointer"
                                    onClick={() => navigate(`/blog/${post.slug}`)}
                                >
                                    <Card className="h-full border-none shadow-none bg-transparent group overflow-hidden flex flex-col">
                                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shrink-0">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary border-none text-xs font-bold uppercase tracking-wider">
                                                {post.category}
                                            </Badge>
                                        </div>
                                        <CardContent className="p-0 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 text-xs font-semibold text-primary mb-3 uppercase tracking-widest">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{formatDate(post.publishDate)}</span>
                                                <span className="w-1 h-1 rounded-full bg-primary/30" />
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{post.readTime} min read</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors decoration-primary underline-offset-4 decoration-2 line-clamp-3 min-h-[5.25rem]">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed text-sm">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                                                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all border border-slate-100" />
                                                <div>
                                                    <p className="text-sm font-bold">{post.author.name}</p>
                                                    <p className="text-xs text-slate-500 uppercase tracking-tighter">{post.author.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-24 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">No matches found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your filters or search keywords</p>
                        </div>
                    )}
                </section>

                {/* Newsletter Section */}
                <section className="container px-4 pb-24">
                    <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] mix-blend-overlay" />
                        </div>
                        <div className="relative z-10 max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                                <Sparkles className="w-4 h-4" />
                                Expert Consultation
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                Planning to establish a Robotics, AI, or <span className="italic font-serif text-blue-200">STEM lab?</span>
                            </h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-xl leading-relaxed">
                                Get in touch with our experts today.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
                                <Input
                                    placeholder="Enter your email or phone"
                                    className="h-14 px-6 rounded-2xl bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:ring-white/50"
                                />
                                <Button asChild className="h-14 px-10 rounded-2xl bg-white text-primary hover:bg-blue-50 font-bold transition-all hover:shadow-xl hover:shadow-white/20">
                                    <Link to="/contact">
                                        Contact Us <Send className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Team / Contributors */}
                <section className="container px-4 py-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold mb-4">Meet our brilliant minds</h2>
                            <p className="text-slate-500">The researchers and engineers bringing you the most accurate and up-to-date insights in the industry.</p>
                        </div>
                        <Button
                            variant="outline"
                            className="rounded-xl h-12 px-8 transition-all active:scale-95"
                            onClick={() => setShowAllContributors(!showAllContributors)}
                        >
                            {showAllContributors ? "Show less" : "View all contributors"}
                        </Button>
                    </div>
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
                    >
                        {Array.from(new Set(blogPosts.map(p => p.author.name)))
                            .slice(0, showAllContributors ? undefined : 5)
                            .map((authorName, index) => {
                                const author = blogPosts.find(p => p.author.name === authorName)?.author;
                                return (
                                    <motion.div
                                        key={authorName}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="text-center group"
                                    >
                                        <div className="relative inline-block mb-4">
                                            <img src={author?.avatar} className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 border border-slate-100 dark:border-slate-800" alt="" />
                                            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{authorName}</h4>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">{author?.role}</p>
                                    </motion.div>
                                );
                            })}
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
