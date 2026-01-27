"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Project Manager",
        role: "Superworks",
        text: "Keval is an exceptional developer who consistently delivers high-quality code. His work on the HRMS suite significantly improved our user engagement.",
        initials: "PM"
    },
    {
        name: "Client",
        role: "Easy Catering",
        text: "The e-commerce platform built by Keval is flawless. The attention to detail in the UI and the smooth checkout process exceeded our expectations.",
        initials: "CL"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Client Feedback
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        What people say about working with me.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl relative border border-neutral-100 dark:border-neutral-800"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30" size={48} />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 dark:text-white">{t.name}</h4>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-neutral-600 dark:text-neutral-300 italic relative z-10 leading-relaxed">
                                "{t.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
