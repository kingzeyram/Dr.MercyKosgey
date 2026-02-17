"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        text: "Dr. Kosgey completely transformed my skin. Her attention to detail and genuine care made all the difference.",
        rating: 5,
    },
    {
        id: 2,
        name: "James K.",
        text: "Professional, knowledgeable, and results-driven. I finally found a dermatologist I can trust.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amina R.",
        text: "The best investment in myself. Dr. Kosgey's treatments gave me back my confidence.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials-section py-24 bg-gradient-warm relative overflow-hidden"
        >
            {/* Decorative background glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFD3C3] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl font-bold text-[#6B5843] mb-4">
                        Patient Stories
                    </h2>
                    <p className="font-sans text-xl text-[#8B6F47]">
                        Real experiences from real people
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl backdrop-blur-md bg-white/60 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Quote Icon */}
                            <Quote
                                className="absolute top-6 right-6 text-[#C7956D] opacity-20 group-hover:opacity-40 transition"
                                size={40}
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className={`${i < testimonial.rating
                                            ? "text-[#C7956D] fill-[#C7956D]"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="font-sans text-[#6B5843] italic mb-6 leading-relaxed">
                                “{testimonial.text}”
                            </p>

                            {/* Name */}
                            <div className="font-serif text-lg font-bold text-[#8B6F47]">
                                {testimonial.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
