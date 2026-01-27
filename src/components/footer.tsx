import { personalData } from "@/data/resume";
import Link from "next/link";
import { Code2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            <Code2 size={20} />
                        </div>
                        <span className="font-bold text-lg text-neutral-900 dark:text-white">
                            Keval<span className="text-blue-600">.dev</span>
                        </span>
                    </div>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        © {new Date().getFullYear()} Keval Dhadhodara. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="#about" className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            About
                        </Link>
                        <Link href="#projects" className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
