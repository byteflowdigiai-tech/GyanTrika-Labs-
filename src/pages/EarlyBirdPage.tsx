import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EarlyBirdWizard } from "@/components/EarlyBirdWizard";

export default function EarlyBirdPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container py-16 px-4 flex items-center justify-center">
                <div className="w-full max-w-5xl">
                    <EarlyBirdWizard isExpanded={true} onToggle={() => {}} standalone={true} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
