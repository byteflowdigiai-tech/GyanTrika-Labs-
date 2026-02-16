
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
    Download,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    BookOpen,
    Clock,
    Printer,
    Settings,
    Library,
    Star,
    FileText,
    User,
    X,
    Box,
    Layers,
    Cpu
} from "lucide-react";
import { bookServiceCategories } from "@/data/booksPageData";
import { books, Book } from "@/data/booksData";

const BooksPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [downloading, setDownloading] = useState<string | null>(null);

    const handleSystemDownload = (e: React.MouseEvent, url: string, filename: string) => {
        e.preventDefault();
        e.stopPropagation();

        // Show loading state for UX
        setDownloading(filename);

        // Create a hidden link and trigger download
        const link = document.createElement('a');
        link.href = url === "#" ? "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" : url;
        link.download = filename;
        link.target = "_blank"; // Fallback for some browsers
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset state after a short delay
        setTimeout(() => setDownloading(null), 2000);
    };

    // Scroll to top on mount or category change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    // VIEW 1: CATEGORY LIST (Main /books page)
    if (!category || category === undefined) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
                <Header />
                {/* Main Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
                    </div>

                    <div className="container relative z-10 text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
                                <Library className="w-4 h-4" />
                                <span>Digital Learning Resources</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Library</span>
                            </h1>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                                Dive into our collection of meticulously curated technical literature designed for architects of the future.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <main className="flex-1 container pb-24 px-4 overflow-hidden">
                    <div className="max-w-6xl mx-auto space-y-32">
                        {bookServiceCategories.map((service, index) => {
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
                                                        Knowledge Hub
                                                    </span>
                                                </div>
                                                <h3
                                                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight cursor-pointer hover:text-primary transition-colors"
                                                    onClick={() => navigate(service.link)}
                                                >
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
                                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
                                                    onClick={() => navigate(service.link)}
                                                    className="rounded-full px-10 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    Explore Library
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Button>

                                            </div>
                                        </div>

                                        {/* Image Section */}
                                        <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                            <div
                                                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                                                onClick={() => navigate(service.link)}
                                            >
                                                <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="relative w-full h-full object-cover z-10"
                                                />
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

    // VIEW 2: INDIVIDUAL BOOKS LIST
    const categoryInfo = bookServiceCategories.find(s => s.id === category || s.link.includes(category));
    const normalizedCategoryName = categoryInfo ? categoryInfo.title : "Library";

    const filteredBooks = books.filter(p => {
        if (!categoryInfo) return true;
        // Normalize: lowercase and replace spaces with hyphens for comparison
        const bookCategorySlug = p.category.toLowerCase().replace(/\s+/g, '-');
        const paramCategorySlug = category.toLowerCase();
        return bookCategorySlug === paramCategorySlug;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
            <Header />

            {/* Category Hero */}
            <section className="relative py-12 overflow-hidden bg-slate-950">
                {/* Technical "3D" Blueprint Background */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="absolute inset-0 z-0">
                    <motion.div
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-screen`}
                        style={{
                            backgroundImage: `url(${category === '3d-printing'
                                ? 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
                                : categoryInfo?.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
                                })`
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 0.5, 0]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />

                    {/* Floating Technical "Stuffs" - Thematic Icons */}
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                        {/* Mechanical Gear 1 */}
                        <motion.div
                            className="absolute top-[15%] left-[5%] text-primary/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <Settings className="w-24 h-24" strokeWidth={0.5} />
                        </motion.div>

                        {/* 3D Box/Layers Concept */}
                        <motion.div
                            className="absolute bottom-[10%] right-[8%] text-blue-400/20"
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Box className="w-32 h-32" strokeWidth={0.3} />
                        </motion.div>
                    </div>
                </div>

                <div className="container px-4 relative z-30">
                    <div className="mb-6">
                        <Button
                            variant="ghost"
                            className="gap-2 text-slate-400 hover:text-primary pl-0 transition-all group"
                            onClick={() => navigate('/books')}
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-white/50 group-hover:text-white">Back to Hub</span>
                        </Button>
                    </div>

                    <div className="text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-2xl">
                                <span className="text-xs font-black tracking-widest text-blue-100/80 uppercase italic">
                                    Technical Resource: {filteredBooks.length} Publications
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-black mb-4 text-white tracking-tighter leading-tight drop-shadow-2xl">
                                {normalizedCategoryName}
                            </h1>

                            <p className="text-lg md:text-xl text-blue-50/70 max-w-2xl mx-auto leading-relaxed font-light italic">
                                {categoryInfo?.description || "High-precision technical documentation."}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Books Grid */}
            <main className="flex-1 py-16 overflow-x-hidden">
                {filteredBooks.length > 0 ? (
                    <div className="container mx-auto px-4">
                        <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x snap-mandatory items-stretch justify-center">
                            {filteredBooks.map((book, index) => (
                                <motion.div
                                    key={book.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
                                >
                                    <Card className="h-full flex flex-col group hover:shadow-2xl transition-all duration-500 border-none bg-white dark:bg-slate-900 rounded-2xl overflow-hidden">
                                        <div
                                            className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                                            onClick={() => setSelectedBook(book)}
                                        >
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <Button variant="secondary" className="w-full gap-2 backdrop-blur-md bg-white/20 border-white/20 text-white hover:bg-white hover:text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <BookOpen className="w-4 h-4" /> Preview
                                                </Button>
                                            </div>
                                            <Badge className="absolute top-4 left-4 bg-primary/90 text-white border-none backdrop-blur-md">
                                                {book.category}
                                            </Badge>
                                        </div>
                                        <CardHeader className="p-5">
                                            <div className="flex items-center gap-2 mb-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                                <div className="flex text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'fill-current' : ''}`} />
                                                    ))}
                                                </div>
                                                <span>{book.rating}</span>
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                {book.title}
                                            </CardTitle>
                                            <p className="text-sm text-slate-500 mt-1 flex items-center gap-1 font-medium">
                                                By {book.author}
                                            </p>
                                        </CardHeader>
                                        <CardContent className="px-5 pt-0 flex-1">
                                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                                {book.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="p-5 pt-0 mt-auto border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                                <div className="flex items-center gap-1">
                                                    <FileText className="w-3 h-3" />
                                                    {book.pages}p
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {book.fileSize}
                                                </div>
                                            </div>
                                            <Button
                                                className="rounded-xl bg-primary hover:bg-primary/90 text-white gap-2 font-bold px-4 h-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                                                onClick={(e) => handleSystemDownload(e, book.downloadUrl, `${book.title.replace(/\s+/g, '-').toLowerCase()}.pdf`)}
                                            >
                                                <Download className={`w-4 h-4 ${downloading === `${book.title.replace(/\s+/g, '-').toLowerCase()}.pdf` ? 'animate-bounce' : ''}`} />
                                                {downloading === `${book.title.replace(/\s+/g, '-').toLowerCase()}.pdf` ? "..." : "Download"}
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-muted/10 rounded-lg border border-dashed">
                        <h3 className="text-xl font-semibold mb-2">No Books Found</h3>
                        <p className="text-muted-foreground mb-6">
                            We haven't added any books for this category yet.
                        </p>
                        <Button onClick={() => navigate('/books')}>
                            Browse Other Topics
                        </Button>
                    </div>
                )}
            </main>

            {/* Book Details Modal */}
            <Dialog open={!!selectedBook} onOpenChange={(open) => !open && setSelectedBook(null)}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden border-none rounded-3xl">
                    <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                        {/* Left: Image */}
                        <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto relative">
                            <img
                                src={selectedBook?.image}
                                alt={selectedBook?.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <Badge className="bg-primary text-white border-none">
                                    {selectedBook?.category}
                                </Badge>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="flex-1 p-8 md:p-12 bg-white dark:bg-slate-900 overflow-y-auto">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(selectedBook?.rating || 0) ? 'fill-current' : ''}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold">{selectedBook?.rating}</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold mb-2 leading-tight">
                                {selectedBook?.title}
                            </h2>
                            <p className="text-primary font-bold mb-6 flex items-center gap-2">
                                <User className="w-4 h-4" /> By {selectedBook?.author}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Published</span>
                                    <span className="font-bold text-sm">{selectedBook?.publishedDate}</span>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">File Size</span>
                                    <span className="font-bold text-sm tracking-tight">{selectedBook?.fileSize}</span>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="font-bold flex items-center gap-2 mb-3">
                                    <BookOpen className="w-4 h-4 text-primary" /> About This Book
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {selectedBook?.description}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    className="flex-1 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold gap-3 text-lg h-14"
                                    onClick={(e) => handleSystemDownload(e, selectedBook?.downloadUrl || "#", `${selectedBook?.title.replace(/\s+/g, '-').toLowerCase()}.pdf`)}
                                >
                                    <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
                                    {downloading ? "Downloading..." : "Download PDF"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default BooksPage;
