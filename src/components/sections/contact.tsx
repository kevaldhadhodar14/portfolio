"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/resume";
import { Mail, MapPin, Send, Instagram } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Interested in working together? Choose your preferred way to chat.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/916354320814"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all flex flex-col items-center gap-4"
                        >
                            <div className="p-4 bg-green-500/10 text-green-600 rounded-full group-hover:scale-110 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                                    WhatsApp
                                </h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    Quick chat &amp; Inquiries
                                </p>
                            </div>
                            <span className="mt-2 text-green-600 font-medium flex items-center gap-2 group-hover:underline">
                                Message Me <Send size={16} />
                            </span>
                        </a>

                        {/* Instagram Card */}
                        <a
                            href="https://instagram.com/kevalbuilds.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all flex flex-col items-center gap-4"
                        >
                            <div className="p-4 bg-pink-500/10 text-pink-600 rounded-full group-hover:scale-110 transition-transform">
                                <Instagram size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                                    Instagram
                                </h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    Follow &amp; DM
                                </p>
                            </div>
                            <span className="mt-2 text-pink-600 font-medium flex items-center gap-2 group-hover:underline">
                                @kevalbuilds.dev <Send size={16} />
                            </span>
                        </a>
                    </div>

                    {/* Common Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-lg">
                                <Mail size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                    Email
                                </p>
                                <a
                                    href={`mailto:${personalData.email}`}
                                    className="text-neutral-900 dark:text-white font-medium hover:text-blue-600 transition-colors"
                                >
                                    {personalData.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-purple-500/10 text-purple-600 rounded-lg">
                                <MapPin size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                    Location
                                </p>
                                <p className="text-neutral-900 dark:text-white font-medium">
                                    {personalData.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
