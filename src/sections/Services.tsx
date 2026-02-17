"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

const services = [
    {
        title: "Medical Dermatology",
        description:
            "Comprehensive diagnosis and treatment of skin conditions including acne, eczema, psoriasis, and skin cancer screening.",
        icon: "🔬",
        features: [
            "Acne Treatment",
            "Eczema Care",
            "Psoriasis Management",
            "Skin Cancer Screening",
        ],
    },
    {
        title: "Cosmetic Procedures",
        description:
            "Advanced aesthetic treatments to enhance your natural beauty and restore youthful radiance.",
        icon: "✨",
        features: [
            "Botox & Fillers",
            "Chemical Peels",
            "Laser Treatments",
            "Microneedling",
        ],
    },
    {
        title: "Skin Rejuvenation",
        description:
            "Innovative treatments designed to refresh and revitalize your skin's appearance and health.",
        icon: "🌸",
        features: [
            "Anti-aging Treatments",
            "Pigmentation Correction",
            "Scar Reduction",
            "Skin Tightening",
        ],
    },
    {
        title: "Personalized Care",
        description:
            "Custom skincare regimens tailored to your unique skin type, concerns, and lifestyle.",
        icon: "💎",
        features: [
            "Skin Analysis",
            "Custom Protocols",
            "Product Recommendations",
            "Follow-up Care",
        ],
    },
];

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(0);

    return (
        <section
            id="services"
            className="services-section py-24 bg-gradient-warm relative overflow-hidden grain"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl font-bold text-[#6B5843] mb-4">
                        Comprehensive Skin Care
                    </h2>
                    <p className="font-sans text-xl text-[#8B6F47] max-w-2xl mx-auto">
                        From medical treatments to aesthetic enhancements, we offer a full
                        spectrum of dermatological services
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            role="button"
                            tabIndex={0}
                            onClick={() => setActiveService(index)}
                            onMouseEnter={() => setActiveService(index)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") setActiveService(index);
                            }}
                            className={`bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl ${index === activeService
                                ? "ring-2 ring-[#C7956D] bg-[#fffcf8] scale-[1.02]"
                                : ""
                                }`}
                        >
                            <div className="text-6xl mb-6">{service.icon}</div>

                            <h3 className="font-serif text-2xl font-bold text-[#6B5843] mb-3">
                                {service.title}
                            </h3>

                            <p className="font-sans text-[#8B6F47] mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 font-sans text-sm text-[#A0826D]"
                                    >
                                        <ChevronRight
                                            size={16}
                                            className="text-[#C7956D] mt-0.5 flex-shrink-0"
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
