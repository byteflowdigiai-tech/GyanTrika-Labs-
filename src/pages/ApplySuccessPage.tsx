import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ApplySuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            
            <main className="flex-1 flex flex-col justify-center items-center py-20 px-4">
                <div className="w-full max-w-lg mx-auto text-center">
                    <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-500" />
                    </div>
                    
                    <h1 className="text-4xl font-display font-bold mb-4">Application Submitted!</h1>
                    
                    <div className="bg-muted/30 p-6 rounded-xl border mb-8">
                        <p className="text-lg text-muted-foreground mb-4">
                            Thank you for enrolling with Gyantrika Labs. We have successfully received your enrollment and payment details.
                        </p>
                        <p className="text-sm font-medium text-foreground">
                            Our admissions team will verify your payment and contact you shortly with your enrollment confirmation and next steps.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="outline" size="lg" onClick={() => navigate("/")}>
                            Return to Home
                        </Button>
                        <Button size="lg" onClick={() => navigate("/courses")}>
                            Explore More Courses
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
