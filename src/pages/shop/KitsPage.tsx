
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { kits, Product } from "@/data/shopData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const KitsPage = () => {
    const [selectedKit, setSelectedKit] = useState<Product | null>(null);

    const handleAddToCart = (product: Product) => {
        if (product.buyLink) {
            window.open(product.buyLink, '_blank');
            return;
        }

        toast.success("Added to cart", {
            description: "Item has been added to your shopping cart."
        });
    };

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

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-muted/30 overflow-hidden">
                <div className="container px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-6"
                        >
                            Educational <span className="text-primary">Starter Kits</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground mb-8 text-balance"
                        >
                            Hands-on learning tools designed to spark curiosity. From water analysis to rocket science,
                            start your innovation journey here.
                        </motion.p>
                    </div>
                </div>
                {/* Background Elements */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            </section>

            <main className="flex-1 container py-12 px-4">
                {/* Product Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {kits.map((kit) => (
                        <motion.div key={kit.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 group border-border/50">
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted/50">
                                    <img
                                        src={kit.image}
                                        alt={kit.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {kit.stock ? (
                                        <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">In Stock</Badge>
                                    ) : (
                                        <Badge variant="destructive" className="absolute top-3 left-3">Out of Stock</Badge>
                                    )}
                                    <Badge variant="secondary" className="absolute top-3 right-3 backdrop-blur-md bg-white/50 dark:bg-black/50">{kit.category}</Badge>
                                </div>

                                <CardHeader className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors">{kit.name}</CardTitle>
                                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                                            <Star className="w-4 h-4 fill-amber-500" />
                                            {kit.rating}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">{kit.description}</p>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <Separator className="my-2" />
                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Features:</p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {kit.features.slice(0, 2).map((feature, i) => (
                                                <li key={i} className="text-xs flex items-center gap-1.5 text-foreground/80">
                                                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                                    <span className="truncate">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex items-center justify-between border-t p-4 bg-muted/5">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-muted-foreground">Price</span>
                                        <span className="text-xl font-bold font-display">₹{kit.price.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="group-hover:text-primary hover:border-primary"
                                            onClick={() => setSelectedKit(kit)}
                                        >
                                            <Info className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            className="gap-2 shadow-sm"
                                            onClick={() => handleAddToCart(kit)}
                                            disabled={!kit.stock}
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            {kit.stock ? "Add to Cart" : "No Stock"}
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            {/* Product Details Modal */}
            <Dialog open={!!selectedKit} onOpenChange={(open) => !open && setSelectedKit(null)}>
                <DialogContent className="max-w-5xl h-[80vh] flex flex-col md:flex-row p-0 gap-0 overflow-hidden border-none shadow-2xl">
                    {/* Left Column - Image */}
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 relative group cursor-pointer">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            src={selectedKit?.image}
                            alt={selectedKit?.name}
                            className="w-full h-auto max-h-[60vh] object-contain drop-shadow-xl group-hover:drop-shadow-2xl transition-all duration-300"
                        />
                    </div>

                    {/* Right Column - Details */}
                    <div className="w-full md:w-1/2 bg-background flex flex-col h-full border-l">
                        {/* Header Section */}
                        <div className="p-6 pb-2 flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm font-semibold">Status:</span>
                                    {selectedKit?.stock ? (
                                        <span className="text-sm font-bold text-green-600">In stock</span>
                                    ) : (
                                        <span className="text-sm font-bold text-red-600">Out of stock</span>
                                    )}
                                </div>
                            </div>

                        </div>

                        <ScrollArea className="flex-1 px-6">
                            <div className="space-y-6 pb-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{selectedKit?.name}</h2>
                                    <p className="text-muted-foreground">{selectedKit?.description}</p>
                                </div>

                                {selectedKit?.details && selectedKit.details.length > 0 ? (
                                    <ul className="space-y-3">
                                        {selectedKit.details.map((detail, index) => (
                                            <li key={index} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-muted-foreground/40 shrink-0" />
                                                <span>
                                                    <span className="font-semibold text-foreground mr-1">{detail.title && detail.title.endsWith("-") ? detail.title : detail.title + "-"}</span>
                                                    {detail.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="space-y-2">
                                        {selectedKit?.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Footer / Action Area */}
                        <div className="p-6 border-t bg-muted/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-muted-foreground">Total Price</p>
                                    <p className="text-2xl font-bold text-primary">₹{selectedKit?.price.toLocaleString('en-IN')}</p>
                                </div>
                                <Button
                                    size="lg"
                                    className="gap-2 shadow-lg hover:shadow-xl transition-all"
                                    onClick={() => {
                                        if (selectedKit) handleAddToCart(selectedKit);
                                    }}
                                    disabled={!selectedKit?.stock}
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
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

export default KitsPage;
