import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="font-serif text-3xl font-bold tracking-tight text-gradient">
                        Dr. Mercy Kosgey
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10 font-sans">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#testimonials" className="nav-link">Testimonials</a>
                        <a href="#contact" className="nav-link">Contact</a>

                        <button className="btn-primary-modern">
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#6B5843] transition-transform duration-300 hover:scale-110"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "mobile-open" : ""}`}>
                <div className="px-6 py-8 space-y-6 font-sans">
                    <a href="#about" className="mobile-link">About</a>
                    <a href="#services" className="mobile-link">Services</a>
                    <a href="#testimonials" className="mobile-link">Testimonials</a>
                    <a href="#contact" className="mobile-link">Contact</a>
                    <a href="https://wa.me/254729387725" target="_blank" rel="noopener noreferrer">
                        <button className="w-full btn-primary-modern">
                            Book Appointment
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
