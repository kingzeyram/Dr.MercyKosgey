"use client";

import type { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Types for form data
type FormData = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

// Types for submit status
type SubmitStatus = {
    type: "success" | "error" | null;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: "" });

    // Handle form submission
    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! We'll get back to you soon.",

            });
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
            // Redirect to hero after a short delay so user sees the success message
            setTimeout(() => {
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }, 2000);
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section id="contact" className="contact-section py-16 md:py-32">
            <div className="relative max-w-7xl w-full px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE CONTACT INFO */}
                    <div className="animate-fade-in-up">
                        <p className="contact-subtitle">Get In Touch</p>
                        <h2 className="contact-title">
                            Begin Your Journey to <span className="text-gradient">Healthy Skin</span>
                        </h2>
                        <p className="contact-description">
                            Schedule your consultation today and discover personalized
                            solutions tailored to your skin’s unique needs.
                        </p>

                        <div className="space-y-8 mt-10">
                            <div className="contact-item">
                                <div className="contact-icon"><Phone size={18} /></div>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <div className="contact-value">+254 729387725</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><Mail size={18} /></div>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">mercykosgey4@gmail.com</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><MapPin size={18} /></div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-value">
                                        CASINO SPECIAL TREATMENT CENTRE<br />
                                        Nairobi, Kenya
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><Clock size={18} /></div>
                                <div>
                                    <div className="contact-label">Hours</div>
                                    <div className="contact-value">
                                        Monday – Friday: 9:00 AM – 6:00 PM<br />
                                        Saturday: 9:00 AM – 2:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div id="contact-book" className="contact-form-card animate-fade-in-up delay-200">
                        <h3 className=" contact-form-title">Book Your Consultation</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="form-input"
                                required
                            >
                                <option value="">Select Service Type</option>
                                <option>Consultation</option>
                                <option>Medical Dermatology</option>
                                <option>Cosmetic Procedures</option>
                                <option>Skin Rejuvenation</option>

                            </select>

                            <textarea
                                name="message"
                                placeholder="Tell us about your concerns..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                required
                            />

                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : <>Request Appointment <Send className="ml-2 w-5 h-5 inline" /></>}
                            </button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
