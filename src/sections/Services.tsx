"use client";

// import { ChevronRight } from "lucide-react";
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
    const [activeService, setActiveService] = useState(false);
    const visibleServices = activeService ? services : services.slice(0, 2);
    return (
        <section
            id="services"
            className="services-section py-24 px-6 bg-gradient-warm relative overflow-hidden grain"
        >
            <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-center mb-16 text-5xl font-bold text-[#6B5843]">Services</h1>
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
                    {visibleServices.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
                        >
                            <div className="text-6xl mb-6">{service.icon}</div>

                            <h3 className="font-serif text-2xl font-bold text-[#6B5843] mb-3">
                                {service.title}
                            </h3>

                            <p className="font-sans text-[#8B6F47] mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* <ul className="space-y-2">
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
                            </ul> */}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => setActiveService(!activeService)}
                        className="px-6 py-3 bg-orange-50 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
                    >
                        {activeService ? "Show Less" : "View All Services"}
                    </button>
                </div>
            </div>
        </section>
    );
}
