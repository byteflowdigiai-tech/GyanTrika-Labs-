import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

export function Footer() {
    const { theme } = useTheme();

    return (
        <footer className="bg-card border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <img
                            src={theme === "dark" ? logoDark : logoLight}
                            alt="GyanTrika Labs"
                            className="h-44 w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
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
                            <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Our Courses</Link></li>
                        </ul>
                    </div>

                    {/* Lab Setups */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Lab Setups</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/projects/stem-tinkering" className="text-muted-foreground hover:text-primary transition-colors">STEM & Tinkering Lab</Link></li>
                            <li><Link to="/projects/ai-robotics" className="text-muted-foreground hover:text-primary transition-colors">AI & Robotics Lab</Link></li>
                            <li><Link to="/projects/embedded-electronics" className="text-muted-foreground hover:text-primary transition-colors">Embedded Systems Lab</Link></li>
                            <li><Link to="/projects/astronomy" className="text-muted-foreground hover:text-primary transition-colors">Astronomy Lab</Link></li>
                            <li><Link to="/projects/composite-skills" className="text-muted-foreground hover:text-primary transition-colors">Composite Skills Lab</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <span className="text-muted-foreground">Main Branch: Bangalore<br />Sub-branch: Guwahati</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href="tel:+919181015607" className="text-muted-foreground hover:text-primary transition-colors">+91 91810 15607</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:info@gyantrikalabs.in" className="text-muted-foreground hover:text-primary transition-colors">info@gyantrikalabs.in</a>
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
