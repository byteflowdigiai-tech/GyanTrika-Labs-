import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Loader2, UploadCloud, QrCode, CheckCircle2, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";
import paymentQr from "@/assets/payment-qr.png";

export default function ApplyPage() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    // Calculate initial values based on route params to ensure perfect auto-selection
    const initialCourse = courses.find((c) => c.id === courseId);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNo: "",
        selectedCourseId: initialCourse?.id || "",
        transactionId: "",
    });

    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [screenshotName, setScreenshotName] = useState<string | null>(null);
    const [screenshotError, setScreenshotError] = useState<string | null>(null);
    const MAX_SCREENSHOT_SIZE = 100 * 1024; // 100 KB

    // Try to find the currently selected course in the form
    const selectedCourse = courses.find((c) => c.id === formData.selectedCourseId);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > MAX_SCREENSHOT_SIZE) {
                setScreenshotError(`File too large (${(file.size / 1024).toFixed(0)} KB). Maximum allowed size is 100 KB.`);
                setScreenshot(null);
                setScreenshotName(null);
                e.target.value = "";
                return;
            }
            setScreenshotError(null);
            setScreenshot(file);
            setScreenshotName(file.name);
        }
    };

    const toBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

    const validateStep1 = () => !!(formData.fullName && formData.email && formData.contactNo);
    const validateStep2 = () => !!formData.selectedCourseId;

    const nextStep = () => {
        if (step === 1 && !validateStep1()) {
            toast.error("Please fill all required personal details.");
            return;
        }
        if (step === 2 && !validateStep2()) {
            toast.error("Please select a course to enroll in.");
            return;
        }
        setStep((prev) => prev + 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!screenshot) {
            toast.error("Please upload the payment screenshot.");
            return;
        }

        if (!formData.transactionId) {
            toast.error("Please enter the Transaction ID / UTR Number.");
            return;
        }

        const toastId = toast.loading("Submitting enrollment...");
        setLoading(true);

        try {
            const screenshotBase64 = await toBase64(screenshot);
            const derivedStream = selectedCourse?.stream || "N/A";

            const templateParams = {
                name: formData.fullName,
                email: formData.email,
                phone: formData.contactNo,
                title: `Enrollment: ${selectedCourse?.title}`,
                message: `Stream: ${derivedStream}\nCourse: ${selectedCourse?.title}\nFee: ${selectedCourse?.fee}\nTransaction ID: ${formData.transactionId}`,
                screenshot_url: screenshotBase64,
                screenshot_name: screenshot.name,
            };

            await emailjs.send(
                "service_efg136v",
                "template_lszh0pp",
                templateParams,
                "zG-JXRtH0hQyn8B2V"
            );

            setLoading(false);
            toast.dismiss(toastId);
            
            // Navigate to success
            navigate("/apply/success");
            
        } catch (error: any) {
            console.error("Enrollment Error:", error);
            setLoading(false);
            const errorMessage = error?.text || error?.message || "Check your internet or EmailJS account.";
            toast.error(`Error: ${errorMessage}`, { id: toastId });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            
            <main className="flex-1 flex items-center justify-center py-12 px-4 bg-muted/20">
                <div className="w-full max-w-3xl">
                    <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 -ml-4 text-muted-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    <div className="bg-background rounded-2xl shadow-xl border overflow-hidden">
                        <div className="px-6 py-8 md:px-10 md:py-10">
                            
                            <div className="text-center mb-10">
                                <h1 className="text-3xl font-display font-bold mb-2">Complete Your Enrollment</h1>
                                <p className="text-muted-foreground">Join Gyantrika Labs and shape your future with AI.</p>
                            </div>

                            {/* Stepper */}
                            <div className="flex items-center justify-between mb-10 relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary transition-all duration-500 ease-in-out"
                                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                                    ></div>
                                </div>
                                {[1, 2, 3].map((s) => (
                                    <div 
                                        key={s} 
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 ${
                                            step === s 
                                                ? "bg-primary border-primary text-primary-foreground shadow-md"
                                                : step > s 
                                                    ? "bg-primary border-primary text-primary-foreground" 
                                                    : "bg-background border-muted text-muted-foreground"
                                        }`}
                                    >
                                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                                    </div>
                                ))}
                            </div>

                            <Card className="border-0 shadow-none">
                                <CardContent className="p-0">
                                    {step === 1 && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                            <h2 className="text-xl font-bold border-b pb-2">1. Personal Information</h2>
                                            <div className="grid gap-4">
                                                <div className="grid gap-2">
                                                    <Label htmlFor="fullName">Full Name</Label>
                                                    <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="grid gap-2">
                                                        <Label htmlFor="email">Email Address</Label>
                                                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <Label htmlFor="contactNo">Mobile Number</Label>
                                                        <Input id="contactNo" name="contactNo" type="tel" value={formData.contactNo} onChange={handleChange} placeholder="+91 98765 43210" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                            <h2 className="text-xl font-bold border-b pb-2">2. Selected Course Details</h2>
                                            {!selectedCourse ? (
                                                <div className="text-center py-8 bg-muted/20 rounded-xl border border-dashed">
                                                    <h3 className="text-lg font-bold">No Course Selected</h3>
                                                    <p className="text-muted-foreground text-sm mt-2 mb-4">Please select a course from the catalog to enroll.</p>
                                                    <Button onClick={() => navigate('/courses')}>Browse Courses</Button>
                                                </div>
                                            ) : (
                                                <div className="p-6 md:p-8 rounded-2xl border bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden shadow-inner ring-1 ring-primary/10">
                                                    <div className="absolute top-0 right-0 p-4 opacity-5"><BookOpen className="w-48 h-48 -mt-10 -mr-10" /></div>
                                                    
                                                    <div className="relative z-10">
                                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                                                            {selectedCourse.level}
                                                        </span>
                                                        <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 text-foreground">{selectedCourse.title}</h3>
                                                        <p className="text-muted-foreground mb-6 max-w-[90%] md:max-w-[80%]">{selectedCourse.tagline}</p>
                                                        
                                                        <div className="grid sm:grid-cols-2 gap-4 bg-background/80 backdrop-blur-sm p-5 rounded-xl border border-primary/10">
                                                            <div>
                                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block mb-1">Stream</span>
                                                                <p className="font-semibold capitalize text-foreground">{selectedCourse.stream}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block mb-1">Duration</span>
                                                                <p className="font-semibold text-foreground">{selectedCourse.duration}</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block mb-1">Structure</span>
                                                                <p className="font-semibold text-foreground">{selectedCourse.terms} Phases</p>
                                                            </div>
                                                            <div>
                                                                <span className="text-xs text-primary/80 uppercase font-bold tracking-wider block mb-1">Total Fee</span>
                                                                <p className="font-bold text-primary text-2xl">{selectedCourse.fee}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                            <h2 className="text-xl font-bold border-b pb-2">3. Payment & Finalization</h2>
                                            
                                            <div className="space-y-4 border rounded-2xl p-6 bg-muted/30">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <QrCode className="w-5 h-5 text-primary" />
                                                    <h3 className="font-bold text-lg">Official Payment Gateway</h3>
                                                </div>

                                                <div className="flex flex-col items-center gap-6">
                                                    <div className="bg-white p-4 rounded-xl shadow-md border w-full max-w-[350px] flex justify-center">
                                                        <img
                                                            src={paymentQr}
                                                            alt="Official Payment QR"
                                                            className="w-full h-auto object-contain"
                                                        />
                                                    </div>
                                                    
                                                    {/* Mobile Only Direct UPI Link */}
                                                    <div className="md:hidden w-full max-w-[350px]">
                                                        <a href={`upi://pay?pa=olatussystemsprivate.69112795@hdfcbank&pn=OLATUS%20SYSTEMS&cu=INR`} target="_blank" rel="noreferrer">
                                                            <Button type="button" className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full py-6 text-lg shadow-lg">
                                                                Pay via UPI App (Mobile)
                                                            </Button>
                                                        </a>
                                                        <p className="text-[11px] text-center text-muted-foreground mt-2">
                                                            After paying, return here to enter the 12-digit UTR number.
                                                        </p>
                                                    </div>

                                                    <div className="text-center space-y-3 max-w-[400px]">
                                                        <p className="text-sm text-muted-foreground px-4">
                                                            Scan the official HDFC SmartHub QR code to pay using any UPI app like GPay, PhonePe, or Paytm.
                                                        </p>
                                                        <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                                                            <span className="text-xs font-semibold text-primary uppercase block mb-0.5">Final Amount to Pay</span>
                                                            <p className="font-bold text-primary text-2xl">
                                                                {selectedCourse?.fee}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid gap-2 mt-6">
                                                    <Label htmlFor="transactionId">Transaction ID / UTR Number *</Label>
                                                    <Input
                                                        id="transactionId"
                                                        name="transactionId"
                                                        placeholder="Enter 12-digit UTR number"
                                                        required
                                                        value={formData.transactionId}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="grid gap-2 mt-4">
                                                    <Label>Upload Payment Screenshot *</Label>
                                                    <div
                                                        className={`border-2 border-dashed rounded-lg p-5 flex flex-col items-center justify-center text-center transition-colors cursor-pointer ${
                                                            screenshotError ? "border-red-400 bg-red-50" : screenshotName ? "border-green-400 bg-green-50" : "hover:bg-muted/50"
                                                        }`}
                                                        onClick={() => document.getElementById('screenshot-upload')?.click()}
                                                    >
                                                        <UploadCloud className={`w-8 h-8 mb-2 ${screenshotName ? "text-green-500" : "text-primary/60"}`} />
                                                        <p className="text-sm font-medium">{screenshotName || "Click to upload payment screenshot"}</p>
                                                        <p className="text-xs mt-1 text-muted-foreground">PNG, JPG — max 100 KB</p>
                                                        <input id="screenshot-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                                    </div>
                                                    {screenshotError && <p className="text-xs text-red-500 mt-1">{screenshotError}</p>}
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>

                            <div className="flex justify-between items-center mt-10 pt-6 border-t">
                                <Button 
                                    variant="outline" 
                                    onClick={() => setStep(s => Math.max(1, s - 1))}
                                    disabled={step === 1 || loading}
                                >
                                    Back
                                </Button>
                                
                                {step < 3 ? (
                                    <Button onClick={nextStep} className="px-8">
                                        Continue <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                ) : (
                                    <Button onClick={handleSubmit} disabled={loading} className="px-8">
                                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        {loading ? "Processing..." : "Submit Enrollment"}
                                    </Button>
                                )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
