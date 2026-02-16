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

                    {/* Projects */}
                    <div>
                        <h4 className="font-display font-semibold mb-4">Projects</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/projects/robotics" className="text-muted-foreground hover:text-primary transition-colors">Robotics</Link></li>
                            <li><Link to="/projects/iot" className="text-muted-foreground hover:text-primary transition-colors">IoT</Link></li>
                            <li><Link to="/projects/ai" className="text-muted-foreground hover:text-primary transition-colors">AI</Link></li>
                            <li><Link to="/projects/pcb" className="text-muted-foreground hover:text-primary transition-colors">PCB Design</Link></li>
                            <li><Link to="/projects/3d" className="text-muted-foreground hover:text-primary transition-colors">3D Printing</Link></li>
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
                                <span className="text-muted-foreground">+91 91810 15607</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">info@gyantrikalabs.in</span>
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
                        {/* Credits removed as per request */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
