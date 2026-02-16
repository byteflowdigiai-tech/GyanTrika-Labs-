import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditionsPage = () => {
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
                            <h1 className="text-4xl font-bold mb-8 text-primary">Terms and Conditions</h1>
                            <p className="text-muted-foreground mb-6 italic">Last Updated: February 13, 2026</p>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using the services provided by GyanTrika Labs, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Use of Services</h2>
                                <p>
                                    You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all persons who access our website through your internet connection are aware of these Terms and comply with them.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. Intellectual Property Rights</h2>
                                <p>
                                    The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by GyanTrika Labs and are protected by international copyright, trademark, and other intellectual property laws.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. Limitation of Liability</h2>
                                <p>
                                    In no event will GyanTrika Labs, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, our services.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Governing Law</h2>
                                <p>
                                    These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. Changes to Terms</h2>
                                <p>
                                    We may revise and update these Terms and Conditions from time to time in our sole discretion. All changes are effective immediately when we post them.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">7. Contact Us</h2>
                                <p>
                                    For any questions regarding these Terms and Conditions, please contact us at:
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

export default TermsConditionsPage;
