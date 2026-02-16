import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import logoLight from '@/assets/logo-light.png';
import logoDark from '@/assets/logo-dark.png';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isDark = theme === 'dark';

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'LMS', path: '/lms' },
        { name: 'Shop', path: '/shop' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Books', path: '/books' },
        { name: 'Our Courses', path: '/programs' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40 shadow-sm transition-shadow duration-300">
            <div className="w-full px-6 md:px-8">
                <div className="flex h-32 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            src={isDark ? logoDark : logoLight}
                            alt="GyanTrika Labs"
                            className="h-28 w-auto object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${isActive(item.path)
                                    ? 'bg-foreground text-background shadow-md'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Section - Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-2">
                        {/* Theme Toggle */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2.5 rounded-full hover:bg-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95 group"
                                    aria-label="Toggle theme"
                                >
                                    {isDark ? (
                                        <Sun className="h-5 w-5 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
                                    ) : (
                                        <Moon className="h-5 w-5 text-muted-foreground group-hover:text-violet-500 transition-colors" />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle theme</p>
                            </TooltipContent>
                        </Tooltip>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-secondary/50 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-foreground/80" />
                            ) : (
                                <Menu className="h-6 w-6 text-foreground/80" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-border/40">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${isActive(item.path)
                                        ? 'text-primary font-semibold bg-primary/10'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};
