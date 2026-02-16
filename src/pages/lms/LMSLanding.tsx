
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const LMSLanding = () => {

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Full Screen Launching Soon Section */}
            <section className="relative flex-grow flex items-center justify-center overflow-hidden min-h-screen">
                {/* Background - Theme Consistent */}
                <div className="absolute inset-0 bg-primary/95 dark:bg-primary/20 z-0">
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background dark:to-slate-950" />
                </div>

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-8xl font-bold font-display tracking-tight text-white dark:text-foreground drop-shadow-2xl"
                        >
                            Launching Soon
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1.5 bg-white/50 dark:bg-primary/50 mx-auto mt-8 rounded-full"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LMSLanding;
