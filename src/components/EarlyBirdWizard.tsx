import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Copy, Gift, CheckCircle2, Circle, ChevronRight, Loader2, Sparkles, BookOpen, Clock, Zap } from "lucide-react";
import { courses } from "@/data/courses";
import { countryCodes } from "@/data/countryCodes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const STREAMS = ["science", "commerce", "arts", "technology"];
const LEVELS = ["School", "UG", "PG", "Diploma"];

interface EarlyBirdWizardProps {
    isExpanded: boolean;
    onToggle?: () => void;
    standalone?: boolean;
}

export function EarlyBirdWizard({ isExpanded, onToggle, standalone = false }: EarlyBirdWizardProps) {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        stream: "",
        level: "",
        selectedCourseId: "",
        fullName: "",
        email: "",
        countryCode: "IN",
        contactNo: "",
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                if (!response.ok) return;
                const data = await response.json();
                if (data && data.country_code) {
                    setFormData(prev => ({ ...prev, countryCode: data.country_code }));
                }
            } catch (error) {
                console.error("Location fetch failed", error);
            }
        };
        fetchLocation();
    }, []);

    const selectedCourse = courses.find((c) => c.id === formData.selectedCourseId);

    // Derived Recommendations
    const recommendedCourses = courses.filter(
        c => c.stream === formData.stream && c.level === formData.level
    );

    const handleCopyLink = () => {
        const shareUrl = `${window.location.origin}/offer/early-bird`;
        navigator.clipboard.writeText(shareUrl);
        toast.success("Offer link copied to clipboard!");
    };

    const nextStep = () => {
        if (step === 1 && !formData.stream) return;
        if (step === 2 && !formData.level) return;
        if (step === 3 && !formData.selectedCourseId) return;
        setStep(s => s + 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email || !formData.contactNo) {
            toast.error("Please fill all required personal details.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (formData.contactNo.length !== 10) {
            toast.error("Please enter a valid 10-digit mobile number.");
            return;
        }

        const toastId = toast.loading("Processing Free Registration...");
        setLoading(true);

        try {
            const dialCode = countryCodes.find(c => c.code === formData.countryCode)?.dialCode || "+91";
            
            const templateParams = {
                name: formData.fullName,
                email: formData.email,
                phone: `${dialCode} ${formData.contactNo}`,
                title: `[EARLY BIRD FREE] ${selectedCourse?.title}`,
                message: `Offer: Early Bird 100% OFF Registration\nStream: ${formData.stream}\nLevel: ${formData.level}\nCourse: ${selectedCourse?.title}\nTransaction ID: WAIVED (Early Bird Offer)`,
            };

            await emailjs.send(
                "service_efg136v",
                "template_lszh0pp",
                templateParams,
                "zG-JXRtH0hQyn8B2V"
            );

            setLoading(false);
            toast.dismiss(toastId);
            toast.success("Early Bird Registration Successful! Welcome aboard.");
            
            // Send user to success
            navigate("/apply/success?offer=earlybird");
            
        } catch (error) {
             console.error("Submission Error", error);
             setLoading(false);
             toast.error("An error occurred. Please try again.", { id: toastId });
        }
    };

    if (!isExpanded) {
        return (
            <div 
                className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer hover:bg-primary/10 transition-colors shadow-sm"
                onClick={() => {
                    if (onToggle) {
                        onToggle();
                    } else {
                        navigate("/offer/early-bird");
                    }
                }}
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-foreground flex items-center gap-2">
                            Early Bird Offer <Badge className="bg-green-500 hover:bg-green-600 shadow-sm animate-pulse">100% OFF</Badge>
                        </h3>
                        <p className="text-sm text-muted-foreground">Register for any program absolutely FREE. Limited time only!</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                     <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); handleCopyLink(); }} className="shrink-0 bg-background/50 backdrop-blur">
                        <Copy className="w-4 h-4 mr-2" /> Share
                    </Button>
                    <Button onClick={(e) => {
                        e.stopPropagation();
                        if (onToggle) {
                            onToggle();
                        } else {
                            navigate("/offer/early-bird");
                        }
                    }} className="w-full sm:w-auto shadow-md">
                        Claim Offer <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-background rounded-2xl shadow-2xl border border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-400"></div>
            
            <div className="p-4 sm:p-6 md:p-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-primary tracking-wider uppercase">Exclusive Offer Wizard</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">Claim Your Free Registration</h2>
                        <p className="text-muted-foreground text-sm max-w-lg">Follow the steps below to find your perfect course. For a limited time, the standard registration fee is completely waived.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                        <Button variant="outline" size="sm" onClick={handleCopyLink}>
                            <Copy className="w-4 h-4 mr-2" /> Share Offer Link
                        </Button>
                        {!standalone && onToggle && (
                            <Button variant="ghost" size="sm" onClick={onToggle} className="text-muted-foreground hover:text-foreground">
                                Close
                            </Button>
                        )}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mb-8 sticky top-0 bg-background z-10 py-2">
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold transition-all ${
                                step === s ? "border-primary bg-primary text-primary-foreground" 
                                : step > s ? "border-primary bg-primary/20 text-primary" 
                                : "border-border bg-transparent text-muted-foreground"
                            }`}>
                                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                            </div>
                            {s < 4 && <div className={`w-6 sm:w-10 h-1 rounded-full ${step > s ? "bg-primary" : "bg-border"}`} />}
                        </div>
                    ))}
                </div>

                {/* Wizard Steps */}
                <div className="min-h-[250px]">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-lg font-bold">1. Select Your Stream / Domain</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {STREAMS.map(stream => (
                                    <div 
                                        key={stream}
                                        onClick={() => setFormData(p => ({ ...p, stream }))}
                                        className={`p-4 flex flex-col items-center justify-center gap-2 rounded-xl border text-center cursor-pointer capitalize font-semibold transition-all ${
                                            formData.stream === stream 
                                            ? "bg-primary/10 border-primary text-primary shadow-sm ring-1 ring-primary" 
                                            : "bg-background hover:bg-muted/50 border-input text-muted-foreground"
                                        }`}
                                    >
                                        {formData.stream === stream ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5 opacity-40" />}
                                        {stream}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-lg font-bold">2. Current Education Level</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {LEVELS.map(level => (
                                    <div 
                                        key={level}
                                        onClick={() => setFormData(p => ({ ...p, level }))}
                                        className={`p-4 flex flex-col items-center justify-center gap-2 rounded-xl border text-center cursor-pointer font-semibold transition-all ${
                                            formData.level === level 
                                            ? "bg-primary/10 border-primary text-primary shadow-sm ring-1 ring-primary" 
                                            : "bg-background hover:bg-muted/50 border-input text-muted-foreground"
                                        }`}
                                    >
                                        {formData.level === level ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <Circle className="w-5 h-5 opacity-40" />}
                                        {level}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="text-lg font-bold">3. Recommended Courses for You</h3>
                            
                            {recommendedCourses.length === 0 ? (
                                <div className="text-center py-12 border border-dashed rounded-xl bg-muted/20">
                                    <BookOpen className="w-8 h-8 mx-auto text-muted-foreground mb-3 opacity-50" />
                                    <p className="font-medium">No direct matches found.</p>
                                    <p className="text-sm text-muted-foreground mt-1 mb-4">Try adjusting your stream or level, or explore all courses below.</p>
                                    <Button variant="outline" onClick={() => setStep(1)}>Go Back</Button>
                                </div>
                            ) : (
                                <div className="grid sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2 pb-2">
                                    {recommendedCourses.map(course => (
                                        <div 
                                            key={course.id}
                                            onClick={() => setFormData(p => ({ ...p, selectedCourseId: course.id }))}
                                            className={`p-4 rounded-xl border relative cursor-pointer transition-all ${
                                                formData.selectedCourseId === course.id
                                                ? "bg-primary/5 border-primary shadow-md ring-1 ring-primary"
                                                : "bg-card hover:border-primary/50 hover:shadow-sm"
                                            }`}
                                        >
                                            {formData.selectedCourseId === course.id ? (
                                                <div className="absolute top-3 right-3 text-primary">
                                                    <CheckCircle2 className="w-5 h-5 fill-primary/20 text-primary" />
                                                </div>
                                            ) : (
                                                <div className="absolute top-3 right-3 text-muted-foreground opacity-30">
                                                    <Circle className="w-5 h-5" />
                                                </div>
                                            )}
                                            <h4 className="font-bold pr-6 line-clamp-1">{course.title}</h4>
                                            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {course.duration}</span>
                                                <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> {course.level}</span>
                                            </div>
                                            <div className="mt-3 pt-3 border-t flex justify-between items-center">
                                                 <span className="text-xs line-through text-muted-foreground">{course.registrationFee}</span>
                                                 <Badge className="bg-green-500 text-[10px] uppercase">Free Reg.</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                             <h3 className="text-lg font-bold">4. Finalize Free Registration</h3>
                             
                             {selectedCourse && (
                                 <div className="bg-muted/30 p-4 rounded-xl border mb-6 flex items-start gap-4">
                                     <div className="bg-primary/10 p-2 rounded-lg"><Gift className="w-5 h-5 text-primary" /></div>
                                     <div>
                                         <p className="text-sm font-medium">Enrolling in: <span className="font-bold text-foreground">{selectedCourse.title}</span></p>
                                         <p className="text-xs text-muted-foreground mt-1">Registration fee of {selectedCourse.registrationFee} has been completely waived via this early bird link.</p>
                                     </div>
                                 </div>
                             )}

                             <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" value={formData.fullName} onChange={(e) => setFormData(p => ({...p, fullName: e.target.value}))} placeholder="John Doe" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(p => ({...p, email: e.target.value}))} placeholder="john@example.com" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="contactNo">Mobile Number</Label>
                                        <div className="flex gap-2">
                                            <Select
                                                value={formData.countryCode}
                                                onValueChange={(val) => setFormData((prev) => ({ ...prev, countryCode: val }))}
                                            >
                                                <SelectTrigger className="w-[100px] shrink-0">
                                                    <SelectValue placeholder="Code" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[300px]">
                                                    {countryCodes.map((country) => (
                                                        <SelectItem key={country.code} value={country.code}>
                                                            {country.code} {country.dialCode}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <Input 
                                                id="contactNo" 
                                                type="tel" 
                                                value={formData.contactNo} 
                                                onChange={(e) => setFormData(p => ({...p, contactNo: e.target.value.replace(/\D/g, '').slice(0, 10)}))} 
                                                placeholder="10-digit no." 
                                                maxLength={10} 
                                                className="flex-1" 
                                            />
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                    <Button 
                        variant="outline" 
                        onClick={() => setStep(s => Math.max(1, s - 1))}
                        disabled={step === 1 || loading}
                    >
                        Back
                    </Button>
                    
                    {step < 4 ? (
                        <Button 
                            onClick={nextStep} 
                            disabled={(step === 1 && !formData.stream) || (step === 2 && !formData.level) || (step === 3 && !formData.selectedCourseId)}
                        >
                            Continue <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={loading} className="bg-green-600 hover:bg-green-700 text-white min-w-[150px]">
                            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Gift className="w-4 h-4 mr-2" />}
                            {loading ? "Processing..." : "Claim Free Spot"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
