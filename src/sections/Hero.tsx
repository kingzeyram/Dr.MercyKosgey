import { ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            {/* Background Layer */}
            <div className="hero-bg"></div>

            {/* Floating Blobs */}
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>

            <div className="relative max-w-7xl w-full  px-6 lg:px-8 py-28">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-10">

                        <div className="space-y-6 animate-fade-in-up">
                            <p className="hero-subtitle">Premium Dermatology Care</p>

                            <h1 className="hero-title">
                                Your Skin’s
                                <span className="block text-gradient">
                                    Best Friend
                                </span>
                            </h1>

                            <p className="hero-description">
                                Expert dermatological care combining medical precision
                                with aesthetic artistry. Transform your skin,
                                elevate your confidence.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-6 animate-fade-in-up delay-200">
                            <a href="#contact-book" >
                                <button className="hero-btn-primary">
                                    Schedule Consultation
                                    <ChevronRight size={20} />
                                </button>
                            </a>

                            <a href="#about">
                                <button className="hero-btn-secondary">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="hero-stats animate-fade-in-up delay-300">
                            <div className="hero-stat">
                                <div className="hero-stat-number">15+</div>
                                <div className="hero-stat-label">Years Experience</div>
                            </div>

                            <div className="hero-stat">
                                <div className="hero-stat-number">5000+</div>
                                <div className="hero-stat-label">Happy Clients</div>
                            </div>

                            <div className="hero-stat">
                                <div className="hero-stat-number">98%</div>
                                <div className="hero-stat-label">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="relative animate-slide-in-right">
                        <div className="hero-card-wrapper">
                            <div className="hero-card-accent"></div>

                            <div className="hero-card">
                                <div className="hero-card-inner">
                                    <div className="text-8xl">👩‍⚕️</div>
                                    <div className="hero-card-name">
                                        Dr. Mercy Kosgey
                                    </div>
                                    <div className="hero-card-role">
                                        Board-Certified Dermatologist
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
