"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
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
                            Experience
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-900 box-content" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                        {job.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-100 dark:border-neutral-700 w-fit mt-2 sm:mt-0">
                                        <Calendar size={14} />
                                        {job.period}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-medium">
                                    <Briefcase size={16} />
                                    {job.company}
                                </div>

                                <ul className="space-y-3">
                                    {job.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
