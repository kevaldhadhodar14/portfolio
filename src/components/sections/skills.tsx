"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import { cn } from "@/lib/utils";

const SkillCategory = ({ title, items, className }: { title: string; items: string[], className?: string }) => (
    <div className={cn("p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800", className)}>
        <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                            Tech Stack
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            A curated list of technologies I use to build world-class applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Main Skills - Spanning 2 cols or highlighted */}
                        <SkillCategory title="Frontend Core" items={skills.frontend} className="md:col-span-2 lg:col-span-1" />
                        <SkillCategory title="State & Data" items={skills.stateData} />
                        <SkillCategory title="UI Libraries" items={skills.ui} />

                        <SkillCategory title="Tools & DevOps" items={skills.tools} />
                        <SkillCategory title="AI Productivity" items={skills.ai} className="md:col-span-2 lg:col-span-1" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
