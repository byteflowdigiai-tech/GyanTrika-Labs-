import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 container py-12 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="border-primary/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden">
                        <CardContent className="p-8 md:p-12 prose dark:prose-invert max-w-none">
                            <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
                            <p className="text-muted-foreground mb-6 italic">Last Updated: February 13, 2026</p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Introduction</h2>
                                <p>
                                    Welcome to GyanTrika Labs. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Information We Collect</h2>
                                <p>We may collect several types of information from and about users of our website, including:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
                                    <li><strong>Contact Data:</strong> Email address and telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and location.</li>
                                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. How We Use Your Information</h2>
                                <p>We use information that we collect about you or that you provide to us:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>To provide and maintain our Service.</li>
                                    <li>To notify you about changes to our Service.</li>
                                    <li>To provide customer support.</li>
                                    <li>To gather analysis or valuable information so that we can improve our Service.</li>
                                    <li>To monitor the usage of our Service.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. Data Security</h2>
                                <p>
                                    We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Contact Information</h2>
                                <p>
                                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                                </p>
                                <p className="font-semibold text-primary text-xl">info@gyantrikalabs.in</p>
                            </section>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
