import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Event } from "@/data/eventsData";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Loader2, QrCode, UploadCloud, CheckCircle2 } from "lucide-react";
import paymentQr from "@/assets/payment-qr.png";

interface EventRegistrationModalProps {
    event: Event | null;
    isOpen: boolean;
    onClose: () => void;
}

export function EventRegistrationModal({
    event,
    isOpen,
    onClose,
}: EventRegistrationModalProps) {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        transactionId: "",
        comments: "",
    });
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [screenshotName, setScreenshotName] = useState<string | null>(null);
    const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);

    if (!event) return null;

    const isFree = !event.price || event.price.toLowerCase() === "free";

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            // Check file size (500KB limit for EmailJS reliability)
            if (file.size > 500000) {
                toast.error("File is too large! Please upload a screenshot smaller than 500KB.");
                return;
            }

            setScreenshot(file);
            setScreenshotName(file.name);

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setScreenshotPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        // Validation for step 1
        if (!formData.name || !formData.email || !formData.phone || !formData.organization) {
            toast.error("Please fill in all personal details.");
            return;
        }

        if (isFree) {
            // If free, submit directly or move to a confirmation step? 
            // Usually, free events don't need step 2.
            handleSubmit(e);
        } else {
            setStep(2);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFree) {
            if (!screenshot) {
                toast.error("Please upload the payment screenshot.");
                return;
            }
            if (!formData.transactionId) {
                toast.error("Please enter the Transaction ID.");
                return;
            }
            if (formData.transactionId.length < 10) {
                toast.error("The Transaction ID seems too short. Please verify it.");
                return;
            }
        }

        setLoading(true);
        const toastId = toast.loading("Sending registration & payment details...");

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                event_name: event.title,
                organization: formData.organization,
                transaction_id: formData.transactionId || "N/A (Free Event)",
                comments: formData.comments || "None",
                // Base64 string for the attachment (Must match variable in EmailJS template)
                payment_screenshot: screenshotPreview || "",
            };

            await emailjs.send(
                "service_efg136v",
                "template_lszh0pp",
                templateParams,
                "zG-JXRtH0hQyn8B2V"
            );

            setLoading(false);
            toast.success("Registration Successful!", {
                id: toastId,
                description: `We've received your registration for ${event.title}. Our team will verify the payment and confirm your seat shortly.`,
            });

            // Reset and close
            setFormData({
                name: "",
                email: "",
                phone: "",
                organization: "",
                transactionId: "",
                comments: "",
            });
            setScreenshot(null);
            setScreenshotName(null);
            setScreenshotPreview(null);
            setStep(1);
            onClose();
        } catch (error: any) {
            console.error("Event Registration Error:", error);
            setLoading(false);

            let errorMessage = "Check your internet or EmailJS settings.";
            if (error?.text?.includes("too large")) {
                errorMessage = "The attachment is too large for the current EmailJS plan. Try a smaller image.";
            } else if (error?.text) {
                errorMessage = error.text;
            }

            toast.error(`Error: ${errorMessage}`, {
                id: toastId,
                description: "If this persists, please contact us with your UTR number."
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                        Event Registration
                    </DialogTitle>
                    <DialogDescription>
                        {step === 1
                            ? `Enter your details below to register for ${event.title}.`
                            : "Scan the QR code to complete your payment and upload the screenshot."}
                        <br />All marked * are required.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    {/* Step Indicator - Only show for paid events */}
                    {!isFree && (
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-colors ${step === 1 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>1</div>
                            <div className="w-12 h-0.5 bg-muted"></div>
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-colors ${step === 2 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>2</div>
                        </div>
                    )}

                    {step === 1 ? (
                        <form onSubmit={handleNext} className="space-y-6">
                            {/* Basic Info */}
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your full name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="h-11"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
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
                                        <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="h-11"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="organization" className="text-sm font-semibold">Organization / College *</Label>
                                    <Input
                                        id="organization"
                                        name="organization"
                                        placeholder="Company or University Name"
                                        required
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="h-11"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="comments" className="text-sm font-semibold">Additional Comments (Optional)</Label>
                                    <Textarea
                                        id="comments"
                                        name="comments"
                                        placeholder="Any specific requirements or questions?"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className="min-h-[100px]"
                                    />
                                </div>
                            </div>

                            <DialogFooter className="pt-2">
                                <Button type="button" variant="outline" onClick={onClose} disabled={loading} className="h-11">
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={loading} className="h-11 px-8">
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {isFree
                                        ? (loading ? "Processing..." : "Confirm Registration")
                                        : "Next: Payment"}
                                </Button>
                            </DialogFooter>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Payment Section */}
                            <div className="space-y-4 border rounded-2xl p-6 bg-muted/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <QrCode className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold text-lg">Event Fee Payment</h3>
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
                                            Scan the official HDFC SmartHub QR code above to pay the registration fee.
                                        </p>
                                        <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-0.5">Registration Fee</span>
                                            <p className="font-bold text-primary text-2xl">
                                                {event.price}
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
                                        required={!isFree}
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
                                            required={!isFree}
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    {screenshotPreview && (
                                        <div className="mt-4 relative rounded-xl overflow-hidden border shadow-inner bg-black/5">
                                            <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground absolute top-2 left-2 bg-white/80 px-2 py-0.5 rounded-md z-10 shadow-sm">Preview</p>
                                            <img src={screenshotPreview} alt="Payment Preview" className="w-full h-auto max-h-[200px] object-contain mx-auto" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <DialogFooter className="pt-2 gap-2 flex-col sm:flex-row">
                                <Button type="button" variant="outline" onClick={() => setStep(1)} disabled={loading} className="h-11">
                                    Back to Details
                                </Button>
                                <Button type="submit" disabled={loading} className="h-11 px-8">
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {loading ? "Processing..." : "Confirm Registration"}
                                </Button>
                            </DialogFooter>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
