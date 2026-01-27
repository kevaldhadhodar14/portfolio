"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/data/resume";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                            Available for Hire
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
                            Building Scalable & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                High-Performance
                            </span>{" "}
                            Apps
                        </h1>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-8 leading-relaxed">
                            {personalData.summary}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                            <Link
                                href="#projects"
                                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-base font-medium hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="px-8 py-4 bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-full text-base font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all flex items-center gap-2"
                            >
                                Download CV
                                <Download size={18} />
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-neutral-500 dark:text-neutral-400">
                            {personalData.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                            {/* Glow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 dark:opacity-40 animate-pulse" />

                            {/* Image Container */}
                            <div className="absolute inset-2 bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                                <Image
                                    src="/keval_react.jpeg"
                                    alt="Keval Dhadhodara"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -left-4 top-10 p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-center gap-3"
                            >
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Code2 size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Role</p>
                                    <p className="text-sm font-bold text-neutral-900 dark:text-white">React Dev</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -right-4 bottom-10 p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-center gap-3"
                            >
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                                    <Star size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Experience</p>
                                    <p className="text-sm font-bold text-neutral-900 dark:text-white">3+ Years</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden"
            >
                <span className="text-xs font-medium text-neutral-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-800 dark:to-neutral-500" />
            </motion.div>
        </section>
    );
}
