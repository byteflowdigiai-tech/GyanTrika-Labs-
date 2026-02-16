import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { bots, Bot } from "@/data/botsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Info, Cpu, Battery, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const BotsPage = () => {
    const [selectedBot, setSelectedBot] = useState<Bot | null>(null);

    const handleAddToCart = (bot: Bot) => {
        if (bot.buyLink) {
            window.open(bot.buyLink, '_blank');
            return;
        }

        toast.success("Added to cart", {
            description: `${bot.name} has been added to your shopping cart.`
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
            <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-purple-500/10 overflow-hidden">
                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                OttoBots
                            </h1>
                            <div className="h-1 w-32 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance"
                        >
                            Discover our collection of advanced educational robots. From humanoids to hexapods,
                            each bot is designed to inspire innovation and hands-on learning.
                        </motion.p>
                    </div>
                </div>
                {/* Background Elements */}
                <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
                <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            </section>

            <main className="flex-1 container py-16 px-4">
                {/* Product Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {bots.map((bot) => (
                        <motion.div key={bot.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 hover:border-primary/50">
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                                    <img
                                        src={bot.image}
                                        alt={bot.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {bot.stock ? (
                                        <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">In Stock</Badge>
                                    ) : (
                                        <Badge variant="destructive" className="absolute top-3 left-3">Out of Stock</Badge>
                                    )}

                                    {bot.status && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/40 backdrop-blur-[2px]">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-2xl transform -rotate-12 border-2">
                                                <span className="text-white font-display font-black text-xl md:text-2xl tracking-tighter uppercase drop-shadow-lg">
                                                    {bot.status}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <Badge variant="secondary" className="backdrop-blur-md bg-white/80 dark:bg-black/80">
                                            <Cpu className="w-3 h-3 mr-1" />
                                            Robot
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="line-clamp-1 text-2xl group-hover:text-primary transition-colors">
                                            {bot.name}
                                        </CardTitle>
                                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                                            <Star className="w-4 h-4 fill-amber-500" />
                                            {bot.rating}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                                        {bot.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <Separator className="my-3" />
                                    <div className="space-y-3">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Key Features:
                                        </p>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {bot.features.slice(0, 4).map((feature, i) => (
                                                <li key={i} className="text-xs flex items-center gap-2 text-foreground/80">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>

                                <CardFooter className="flex items-center justify-between border-t p-4 bg-muted/5">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-muted-foreground">Price</span>
                                        <span className="text-2xl font-bold font-display text-primary">
                                            ₹{bot.price.toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="group-hover:text-primary hover:border-primary"
                                            onClick={() => setSelectedBot(bot)}
                                        >
                                            <Info className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            className="gap-2 shadow-sm"
                                            onClick={() => handleAddToCart(bot)}
                                            disabled={!bot.stock || bot.status === "Launching Soon"}
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            {bot.status === "Launching Soon" ? "Coming Soon" : bot.stock ? "Add to Cart" : "No Stock"}
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            {/* Product Details Modal */}
            <Dialog open={!!selectedBot} onOpenChange={(open) => !open && setSelectedBot(null)}>
                <DialogContent className="max-w-5xl h-[85vh] flex flex-col md:flex-row p-0 gap-0 overflow-hidden border-none shadow-2xl">
                    {/* Left Column - Image */}
                    <div className="w-full md:w-1/2 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center p-8 relative group cursor-pointer">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            src={selectedBot?.image}
                            alt={selectedBot?.name}
                            className="w-full h-auto max-h-[70vh] object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Right Column - Details */}
                    <div className="w-full md:w-1/2 bg-background flex flex-col h-full border-l">
                        {/* Header Section */}
                        <div className="p-6 pb-4 border-b">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold">Status:</span>
                                    {selectedBot?.stock ? (
                                        <Badge className="bg-green-500">In Stock</Badge>
                                    ) : (
                                        <Badge variant="destructive">Out of Stock</Badge>
                                    )}
                                </div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star className="w-5 h-5 fill-amber-500" />
                                    <span className="font-bold">{selectedBot?.rating}</span>
                                    <span className="text-sm text-muted-foreground">({selectedBot?.reviews} reviews)</span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold mb-2">{selectedBot?.name}</h2>
                            <p className="text-muted-foreground">{selectedBot?.description}</p>
                        </div>

                        <ScrollArea className="flex-1 px-6">
                            <div className="space-y-6 py-6">
                                {/* Features */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                        <Cpu className="w-5 h-5 text-primary" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedBot?.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Specifications */}
                                {selectedBot?.specifications && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                            <Battery className="w-5 h-5 text-primary" />
                                            Technical Specifications
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedBot.specifications.dimensions && (
                                                <div className="space-y-1">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Dimensions</p>
                                                    <p className="text-sm font-medium">{selectedBot.specifications.dimensions}</p>
                                                </div>
                                            )}
                                            {selectedBot.specifications.weight && (
                                                <div className="space-y-1">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Weight</p>
                                                    <p className="text-sm font-medium">{selectedBot.specifications.weight}</p>
                                                </div>
                                            )}
                                            {selectedBot.specifications.battery && (
                                                <div className="space-y-1">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Battery</p>
                                                    <p className="text-sm font-medium">{selectedBot.specifications.battery}</p>
                                                </div>
                                            )}
                                            {selectedBot.specifications.connectivity && (
                                                <div className="space-y-1">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                        <Wifi className="w-3 h-3" />
                                                        Connectivity
                                                    </p>
                                                    <p className="text-sm font-medium">{selectedBot.specifications.connectivity}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Footer / Action Area */}
                        <div className="p-6 border-t bg-muted/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-muted-foreground">Total Price</p>
                                    <p className="text-3xl font-bold text-primary">₹{selectedBot?.price.toLocaleString('en-IN')}</p>
                                </div>
                                <Button
                                    size="lg"
                                    className="gap-2 shadow-lg hover:shadow-xl transition-all"
                                    onClick={() => {
                                        if (selectedBot) handleAddToCart(selectedBot);
                                    }}
                                    disabled={!selectedBot?.stock || selectedBot?.status === "Launching Soon"}
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    {selectedBot?.status === "Launching Soon" ? "Coming Soon" : "Add to Cart"}
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

export default BotsPage;
