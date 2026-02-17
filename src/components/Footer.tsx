import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#EBE5D9] text-[#6B5843] pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">Dr. Mercy Kosgey</h3>
                        <p className="text-[#8B6F47] text-sm leading-relaxed">
                            Dedicated to providing exceptional dermatological care with a personalized approach to skin health and aesthetics.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#home" className="hover:text-[#C7956D] transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-[#C7956D] transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-[#C7956D] transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="hover:text-[#C7956D] transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-[#C7956D] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#C7956D] transition-colors">Medical Dermatology</a></li>
                            <li><a href="#" className="hover:text-[#C7956D] transition-colors">Cosmetic Procedures</a></li>
                            <li><a href="#" className="hover:text-[#C7956D] transition-colors">Skin Rejuvenation</a></li>
                            <li><a href="#" className="hover:text-[#C7956D] transition-colors">Laser Treatments</a></li>
                            <li><a href="#" className="hover:text-[#C7956D] transition-colors">Skin Cancer Screening</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0" />
                                <span>123 Medical Plaza, Suite 400<br />Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0" />
                                <span>+254 700 000000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0" />
                                <span>info@drmercykosgey.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#D6CDBF] pt-8 text-center text-sm text-[#8B6F47]">
                    <p>&copy; {new Date().getFullYear()} Dr. Mercy Kosgey. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
