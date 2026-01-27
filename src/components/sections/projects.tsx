"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/resume";
import { X, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Project = (typeof projects)[0];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to solve complex problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-${project.title}`}
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow"
                        >
                            <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
                                    <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <motion.h3
                                    layoutId={`title-${project.title}`}
                                    className="text-2xl font-bold text-neutral-900 dark:text-white mb-2"
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                                            +{project.tech.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={`card-${selectedProject.title}`}
                                className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full backdrop-blur-md transition-colors z-20"
                                >
                                    <X size={20} className="text-neutral-900 dark:text-white" />
                                </button>

                                <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative flex-shrink-0">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="p-8 overflow-y-auto">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div>
                                            <span className="text-blue-600 dark:text-blue-400 font-medium mb-1 block">{selectedProject.category}</span>
                                            <motion.h3
                                                layoutId={`title-${selectedProject.title}`}
                                                className="text-3xl font-bold text-neutral-900 dark:text-white"
                                            >
                                                {selectedProject.title}
                                            </motion.h3>
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={selectedProject.liveUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                            <a href={selectedProject.githubUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium text-sm">
                                                <Github size={16} /> Code
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">Overview</h4>
                                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                                {selectedProject.details}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((t) => (
                                                    <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm border border-neutral-200 dark:border-neutral-700 font-medium">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
