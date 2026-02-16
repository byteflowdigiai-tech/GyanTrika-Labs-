import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Loader2, UploadCloud, QrCode, CheckCircle2 } from "lucide-react";
import { Program } from "@/data/programsData";
import paymentQr from "@/assets/payment-qr.png";

interface ProgramEnrollmentModalProps {
    program: Program | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProgramEnrollmentModal({
    program,
    isOpen,
    onClose,
}: ProgramEnrollmentModalProps) {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNo: "",
        transactionId: "",
        selectedProgram: "",
    });
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [screenshotName, setScreenshotName] = useState<string | null>(null);

    useEffect(() => {
        if (program) {
            setFormData(prev => ({ ...prev, selectedProgram: program.title }));
        }
    }, [program]);

    // Reset step when modal closes or opens with a new program
    useEffect(() => {
        if (isOpen) {
            setStep(1);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setScreenshot(e.target.files[0]);
            setScreenshotName(e.target.files[0].name);
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation for step 1
        if (!formData.fullName || !formData.email || !formData.contactNo) {
            toast.error("Please fill in all personal details.");
            return;
        }
        setStep(2);
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
            const templateParams = {
                name: formData.fullName, // matches template {{name}}
                email: formData.email,   // matches template {{email}}
                phone: formData.contactNo,
                title: `Enrollment: ${program?.title}`,
                message: `Program: ${program?.title}\nPrice: ₹${price}\nTransaction ID: ${formData.transactionId}\nCategory: ${program?.category}`,
            };

            await emailjs.send(
                "service_efg136v",
                "template_lszh0pp",
                templateParams,
                "zG-JXRtH0hQyn8B2V"
            );

            setLoading(false);
            toast.success("Enrollment Successful!", {
                id: toastId,
                description: `You have been enrolled in ${program?.title}. Our team will verify your payment and contact you shortly.`,
            });

            // Reset and close
            setFormData({
                fullName: "",
                email: "",
                contactNo: "",
                transactionId: "",
                selectedProgram: "",
            });
            setScreenshot(null);
            setScreenshotName(null);
            setStep(1);
            onClose();
        } catch (error: any) {
            console.error("Enrollment Error:", error);
            setLoading(false);
            const errorMessage = error?.text || error?.message || "Check your internet or EmailJS account.";
            toast.error(`Error: ${errorMessage}`, {
                id: toastId
            });
        }
    };

    const price = program ? (program.price * (100 - (program.discount || 0))) / 100 : 0;

    if (!program) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                        Enroll in {program.category}
                    </DialogTitle>
                    <DialogDescription>
                        {step === 1
                            ? `Complete the form below to enroll in ${program.title}.`
                            : "Scan the QR code to complete your payment and upload the screenshot."}
                        <br />Every field is required.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-colors ${step === 1 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>1</div>
                        <div className="w-12 h-0.5 bg-muted"></div>
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-colors ${step === 2 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>2</div>
                    </div>

                    {step === 1 ? (
                        <form onSubmit={handleNext} className="space-y-6">
                            {/* User Info */}
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="fullName" className="text-sm font-semibold">Full Name *</Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="h-11"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="contactNo" className="text-sm font-semibold">Contact No. *</Label>
                                        <Input
                                            id="contactNo"
                                            name="contactNo"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            value={formData.contactNo}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="selectedProgram" className="text-sm font-semibold">Program / Subject *</Label>
                                    <Input
                                        id="selectedProgram"
                                        name="selectedProgram"
                                        value={formData.selectedProgram}
                                        readOnly
                                        className="bg-muted h-11 pointer-events-none"
                                    />
                                </div>
                            </div>

                            <DialogFooter className="pt-2">
                                <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="h-11">
                                    Cancel
                                </Button>
                                <Button type="submit" className="h-11 px-8">
                                    Next: Payment
                                </Button>
                            </DialogFooter>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Payment Section */}
                            <div className="space-y-4 border rounded-2xl p-6 bg-muted/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <QrCode className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-lg">Official Payment Gateway</h3>
                                </div>

                                <div className="flex flex-col items-center gap-6">
                                    <div className="bg-white p-4 rounded-xl shadow-md border overflow-hidden group">
                                        <img
                                            src={paymentQr}
                                            alt="Official Payment QR"
                                            className="w-full max-w-[240px] h-auto object-contain transition-transform group-hover:scale-105 duration-300"
                                        />
                                    </div>
                                    <div className="text-center space-y-3">
                                        <p className="text-sm text-muted-foreground font-medium px-4">
                                            Scan the official HDFC SmartHub QR code above to pay using any UPI app.
                                        </p>
                                        <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-0.5">Final Amount to Pay</span>
                                            <p className="font-bold text-primary text-2xl">
                                                ₹{price.toLocaleString('en-IN')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-2 mt-4">
                                    <Label htmlFor="transactionId" className="text-sm font-semibold text-foreground">Transaction ID / UTR Number *</Label>
                                    <Input
                                        id="transactionId"
                                        name="transactionId"
                                        placeholder="Enter 12-digit UTR number"
                                        required
                                        value={formData.transactionId}
                                        onChange={handleChange}
                                        className="h-11 border-primary/20 focus:border-primary"
                                    />
                                    <p className="text-[10px] text-muted-foreground italic">
                                        * Look for the 12-digit reference number in your payment confirmation.
                                    </p>
                                </div>

                                <div className="grid gap-2 mt-4">
                                    <Label htmlFor="screenshot" className="text-sm font-semibold text-foreground">Upload Payment Screenshot *</Label>
                                    <div
                                        className="border-2 border-dashed rounded-lg p-5 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer bg-background"
                                        onClick={() => document.getElementById('screenshot-upload')?.click()}
                                    >
                                        <UploadCloud className="w-8 h-8 text-primary/60 mb-2" />
                                        <p className="text-sm font-medium">
                                            {screenshotName ? screenshotName : "Click to upload payment screenshot"}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {screenshotName ? "Click to change" : "PNG, JPG up to 2MB"}
                                        </p>
                                        <input
                                            id="screenshot-upload"
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            required
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <DialogFooter className="pt-2 gap-2 flex-col sm:flex-row">
                                <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={loading} className="h-11">
                                    Back to Details
                                </Button>
                                <Button type="submit" disabled={loading} className="h-11 px-8">
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {loading ? "Processing..." : "Submit & Enroll"}
                                </Button>
                            </DialogFooter>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
