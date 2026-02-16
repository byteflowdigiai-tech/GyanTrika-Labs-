
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { kits } from "@/data/shopData";
import { bots } from "@/data/botsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Info, Cpu, Check, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const ShopPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeParam = searchParams.get("type");

    const [view, setView] = useState<"kits" | "bots">(
        typeParam === "bots" ? "bots" : "kits"
    );

    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    useEffect(() => {
        if (typeParam === "bots" || typeParam === "kits") {
            setView(typeParam as "kits" | "bots");
        }
    }, [typeParam]);

    const handleViewChange = (newView: "kits" | "bots") => {
        setView(newView);
        setSearchParams({ type: newView });
    };

    const items = view === "kits" ? kits : bots;
    const itemTypeLabel = view === "kits" ? "Kit" : "Bot";

    const handleAddToCart = (item: any) => {
        if (item.buyLink) {
            window.open(item.buyLink, '_blank');
            return;
        }
        toast.success("Added to cart", {
            description: `${item.name} has been added to your shopping cart.`
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background - Theme Consistent */}
                <div className="absolute inset-0 bg-primary/90 dark:bg-primary/20 z-0 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
                </div>

                <div className="container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg mx-auto">
                            <Zap className="w-4 h-4 text-cyan-200" />
                            <span>Innovator's Hardware Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Products</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-sm">
                            Unlock your potential with our curated selection of high-quality electronics and comprehensive educational kits.
                        </p>

                        {/* Switcher */}
                        <div className="inline-flex p-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl">
                            <button
                                onClick={() => handleViewChange("kits")}
                                className={`
                                    px-8 py-3 rounded-full text-base font-semibold transition-all duration-300
                                    ${view === "kits"
                                        ? "bg-white text-primary shadow-md"
                                        : "text-white hover:bg-white/10"}
                                `}
                            >
                                Kits
                            </button>
                            <button
                                onClick={() => handleViewChange("bots")}
                                className={`
                                    px-8 py-3 rounded-full text-base font-semibold transition-all duration-300
                                    ${view === "bots"
                                        ? "bg-white text-primary shadow-md"
                                        : "text-white hover:bg-white/10"}
                                `}
                            >
                                Bots
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Grid */}
            <main className="flex-1 container pb-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={view}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 group border-none shadow-md bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {item.stock ? (
                                            <Badge className="absolute top-4 left-4 bg-emerald-500 hover:bg-emerald-600 shadow-lg border-none text-white">
                                                In Stock
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive" className="absolute top-4 left-4 shadow-lg border-none">
                                                Out of Stock
                                            </Badge>
                                        )}

                                        {item.status && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                                                {/* The transparent screen with increasing opacity (gradient) */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 backdrop-blur-[2px]" />

                                                <div className="relative z-30 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-2xl transform -rotate-12 scale-110">
                                                    <span className="text-white font-display font-black text-xl lg:text-2xl tracking-tighter uppercase drop-shadow-2xl">
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4">
                                            <Badge variant="secondary" className="backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 shadow-sm border-white/20">
                                                {item.category || itemTypeLabel}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="space-y-2 pb-4">
                                        <div className="flex justify-between items-start gap-4">
                                            <CardTitle className="line-clamp-1 text-xl font-bold group-hover:text-primary transition-colors">
                                                {item.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-md">
                                                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                                                <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                                                    {item.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="flex-1 pb-4">
                                        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div className="flex flex-wrap gap-2">
                                                {item.features.slice(0, 3).map((feature: string, i: number) => (
                                                    <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {item.features.length > 3 && (
                                                    <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800/50 text-slate-400">
                                                        +{item.features.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-6 pt-0 flex items-center justify-between gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Price</span>
                                            <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                                ₹{item.price.toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="rounded-full hover:bg-primary/5 hover:text-primary dark:hover:bg-primary/10"
                                                onClick={() => setSelectedItem(item)}
                                            >
                                                <Info className="w-5 h-5" />
                                            </Button>
                                            <Button
                                                className="rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                                                onClick={() => handleAddToCart(item)}
                                                disabled={!item.stock || item.status === "Launching Soon"}
                                            >
                                                <ShoppingCart className="w-4 h-4 mr-2" />
                                                {item.status === "Launching Soon" ? "Coming Soon" : "Buy Now"}
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />

            {/* Details Modal */}
            <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none rounded-2xl shadow-2xl bg-white dark:bg-slate-950">
                    <div className="grid md:grid-cols-2">
                        <div className="relative bg-slate-100 dark:bg-slate-900 p-8 flex items-center justify-center min-h-[300px]">
                            <img
                                src={selectedItem?.detailImage || selectedItem?.image}
                                alt={selectedItem?.name}
                                className="w-full h-auto object-contain max-h-[400px]"
                            />
                        </div>
                        <div className="p-8 flex flex-col">
                            <div className="mb-6">
                                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15 border-none dark:bg-primary/30 dark:text-primary-foreground">
                                    {selectedItem?.category}
                                </Badge>
                                <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{selectedItem?.name}</h2>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span className="font-medium text-slate-900 dark:text-white">{selectedItem?.rating}</span>
                                    <span>({selectedItem?.reviews} reviews)</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {selectedItem?.description}
                                </p>
                            </div>

                            <div className="flex-1">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Check className="w-4 h-4 text-blue-600" /> Key Features
                                </h3>
                                <ul className="space-y-2 mb-6">
                                    {selectedItem?.features.map((f: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <span className="text-sm text-slate-400 uppercase font-medium">Price</span>
                                    <div className="text-3xl font-bold text-primary">
                                        ₹{selectedItem?.price.toLocaleString('en-IN')}
                                    </div>
                                </div>
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white"
                                    onClick={() => handleAddToCart(selectedItem)}
                                    disabled={!selectedItem?.stock || selectedItem?.status === "Launching Soon"}
                                >
                                    {selectedItem?.status === "Launching Soon" ? "Coming Soon" : "Add to Cart"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ShopPage;
