"use client";

import { motion } from "framer-motion";
import { personalData, stats } from "@/data/resume";

export function About() {
    return (
        <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            <p>
                                I'm <strong>Keval Dhadhodara</strong>, a passionate React.js
                                Developer with over <strong>3 years of experience</strong> in
                                building robust web applications. My journey started with a
                                curiosity for how things work on the web, which swiftly turned
                                into a career building complex enterprise solutions.
                            </p>
                            <p>
                                I specialize in creating <strong>high-performance</strong>,{" "}
                                <strong>scalable</strong> user interfaces. From crafting pixel-perfect designs
                                to optimizing complex state management logic, I enjoy every part
                                of the frontend development lifecycle.
                            </p>
                            <p>
                                Currently, I focus on building accessible, human-centered products at <strong>{personalData.role}</strong>.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700"
                                >
                                    <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
