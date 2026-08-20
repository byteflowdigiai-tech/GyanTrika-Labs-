import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {

    return (
        <footer className="relative bg-[#FFFFFF] dark:bg-background border-t circuit-pattern overflow-hidden">
            {/* Premium Atmosphere - Matching Hero Section */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-[#2B5C92]/60 via-[#B3CDE0]/30 to-transparent" />
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#B3CDE0]/10 to-transparent" />
            </div>
            
            <div className="container relative z-10 py-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <img
                            src={logo}
                            alt="GyanTrika Labs"
                            className="h-44 w-auto object-contain transition-all duration-300 mix-blend-multiply dark:mix-blend-normal dark:brightness-150"
                        />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering the next generation of innovators through hands-on learning in Robotics, AI, IoT, and emerging technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/lms" className="text-muted-foreground hover:text-primary transition-colors">LMS</Link></li>
                            <li><Link to="/shop/kits" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
                            <li><Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors">Blogs</Link></li>
                            <li><Link to="/books" className="text-muted-foreground hover:text-primary transition-colors">Books</Link></li>
                            <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Our Courses</Link></li>
                        </ul>
                    </div>

                    {/* Lab Setups */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Lab Setups</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/technology-lab-setup/stem-tinkering" className="text-muted-foreground hover:text-primary transition-colors">Atal Tinkering Lab</Link></li>
                            <li><Link to="/technology-lab-setup/ai-robotics" className="text-muted-foreground hover:text-primary transition-colors">Ai , STEM & Robotics Lab</Link></li>
                            <li><Link to="/technology-lab-setup/embedded-electronics" className="text-muted-foreground hover:text-primary transition-colors">Embedded Systems Lab</Link></li>
                            <li><Link to="/technology-lab-setup/astronomy" className="text-muted-foreground hover:text-primary transition-colors">Astronomy Lab</Link></li>
                            <li><Link to="/technology-lab-setup/composite-skills" className="text-muted-foreground hover:text-primary transition-colors">Composite Skills Lab</Link></li>
                            <li><Link to="/technology-lab-setup/rapid-prototyping" className="text-muted-foreground hover:text-primary transition-colors">Rapid Prototyping Lab</Link></li>
                        </ul>
                    </div>

                    {/* Legal — full width on desktop, left col on mobile hidden on mobile to merge with contact */}
                    <div className="hidden md:block">
                        <h4 className="font-display font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact — full width on desktop */}
                    <div className="hidden md:block">
                        <h4 className="font-display font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <span className="text-muted-foreground">Main Branch: Byteflow DigiAI, 1st Floor, Neeladri Complex, 10th Cross, 2nd Main, Sampige Rd, Malleshwaram, Bengaluru, Karnataka 560003<br />Sub-branch: Guwahati</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <a href="tel:+919181015607" className="text-muted-foreground hover:text-primary transition-colors">+91 91810 15607</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <a href="mailto:info@gyantrikalabs.in" className="text-muted-foreground hover:text-primary transition-colors break-all">info@gyantrikalabs.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile-only Row 1: Legal (left) | Location (right) */}
                    <div className="md:hidden">
                        <h4 className="font-display font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <h4 className="font-display font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                                <span className="text-muted-foreground">Main Branch: Bangalore<br />Sub-branch: Guwahati</span>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile-only Row 2: Email (left) | Phone (right) */}
                    <div className="md:hidden">
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-1.5">
                                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                                <a href="mailto:info@gyantrikalabs.in" className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap">info@gyantrikalabs.in</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <a href="tel:+919181015607" className="text-muted-foreground hover:text-primary transition-colors">+91 91810 15607</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 border-t mt-12 pt-8">
                    <div className="hidden md:block order-1"></div>

                    <div className="text-sm text-muted-foreground text-center order-2">
                        <p>© {new Date().getFullYear()} GyanTrika Labs. All rights reserved. | Lab of Ideas</p>
                        <p className="mt-1 text-xs opacity-70">
                            Developed by <a href="https://www.byteflowdigiai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">ByteFlow DigiAI</a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 order-3">
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/Gyantrika/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
