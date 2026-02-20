"use client";

import { Clock, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        id: 1,
        title: "Personalized Time",
        description:
            "Comprehensive consultations where we truly listen to your concerns and goals.",
        icon: Clock,
    },
    {
        id: 2,
        title: "Proven Results",
        description:
            "Evidence-based treatments with documented outcomes and high patient satisfaction.",
        icon: Award,
    },
    {
        id: 3,
        title: "Holistic Approach",
        description:
            "Treating not just symptoms, but addressing root causes for lasting skin health.",
        icon: Heart,
    },
];

export default function WhyUs() {
    return (
        <section className="whyus-section py-24 bg-white relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFD3C3] opacity-20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>

            <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl font-bold text-[#6B5843] mb-4">
                        Why Patients Choose Us
                    </h2>
                    <p className="font-sans text-xl text-[#8B6F47] max-w-2xl mx-auto">
                        Combining expertise, compassion, and innovation to deliver
                        exceptional dermatological care.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group text-center p-10 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#f3ebe2]"
                            >
                                {/* Icon circle */}
                                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="text-white" size={30} />
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl font-bold text-[#6B5843] mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-[#8B6F47] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
