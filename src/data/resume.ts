import { Github, Linkedin, Mail } from "lucide-react";

export const personalData = {
    name: "Keval Dhadhodara",
    role: "React.js Developer",
    experience: "3+ Years",
    location: "India (Remote Friendly)",
    email: "kevaldhadhodara14@gmail.com",
    linkedin: "https://www.linkedin.com/in/keval-dhadhodara-447aa522a/",
    github: "https://github.com/keval-dhadhodara", // Assuming github from context
    summary: "React JS Developer with 3+ years of experience building scalable web applications and enterprise solutions across HRMS, e-commerce, and B2B platforms. Expert in React.js, TypeScript, Redux Toolkit, WebSocket, Tailwind CSS, and modern UI architecture.",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/keval-dhadhodara", // Placeholder/Assumption
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/keval-dhadhodara-447aa522a/",
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:kevaldhadhodara14@gmail.com",
            icon: Mail,
        }
    ]
};

export const skills = {
    frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    stateData: ["Redux Toolkit", "Context API", "REST APIs", "WebSocket"],
    ui: ["Tailwind CSS", "Material UI", "Ant Design", "HeroUI"],
    tools: ["Git", "GitHub", "Razorpay", "Webpack", "Vite", "Recharts", "Figma"],
    ai: ["Cursor AI", "Claude AI", "ChatGPT", "DeepSeek", "Perplexity"]
};

export const experience = [
    {
        company: "TechX Solutions",
        role: "Frontend Developer",
        period: "May 2025 – Present",
        highlights: [
            "Built Easy Catering e-commerce platform with multi-vendor support.",
            "Integrated Razorpay payment gateway for seamless transactions.",
            "Developed admin analytics dashboards and B2B marketplace workflows.",
        ]
    },
    {
        company: "Superworks",
        role: "React JS Developer",
        period: "Nov 2022 – Feb 2025",
        highlights: [
            "Built HRMS, Recruitment, Payroll, and PMS modules from scratch.",
            "Developed real-time chat functionality using WebSocket.",
            "Reduced page load time by 25% through code splitting and optimization.",
            "Built dashboards used by 500+ daily users."
        ]
    }
];

export const projects = [
    {
        title: "Easy Catering",
        category: "E-commerce",
        description: "Multi-vendor food catering platform with real-time order tracking.",
        tech: ["React", "TypeScript", "Tailwind", "Redux", "Razorpay"],
        image: "/easycatering.jpeg",
        liveUrl: "#",
        githubUrl: "https://github.com/techxsolutions11/dishdash_merchant.git",
        details: "A comprehensive B2B/B2C platform allowing vendors to list menus and customers to book catering for events. Features include calendar management, split payments, and reviews."
    },
    {
        title: "Superworks HRMS",
        category: "Enterprise",
        description: "Complete HR management suite including Payroll and Recruitment.",
        tech: ["React", "Redux", "WebSocket", "SCSS", "Recharts"],
        image: "/superworks.png",
        liveUrl: "https://superworks.com/",
        githubUrl: "#",
        details: "Enterprise-grade HRMS used by multiple organizations. Handles complex payroll calculations, leave management, and real-time employee communication."
    },
    {
        title: "B2B Marketplace",
        category: "Marketplace",
        description: "Wholesale marketplace connecting suppliers and retailers.",
        tech: ["React", "TypeScript", "Tailwind", "Redux"],
        image: "/B2B.jpeg",
        liveUrl: "#",
        githubUrl: "#",
        details: "Features bulk ordering, tier-based pricing, RFQ system, and trade assurance integration."
    },
    {
        title: "PRIO Fire Detection",
        category: "Dashboard",
        description: "IoT dashboard for monitoring fire detection sensors.",
        tech: ["React", "TypeScript", "Tailwind", "APIs"],
        image: "/fireDetection.jpeg",
        liveUrl: "#",
        githubUrl: "#",
        details: "Real-time monitoring dashboard displaying sensor status, alerts, and historical data visualization."
    },
    {
        title: "Healthcare Platform",
        category: "Healthcare",
        description: "Comprehensive patient and appointment management system.",
        tech: ["React", "Redux", "Material UI", "Node.js"],
        image: "/healthcare.jpeg",
        liveUrl: "#",
        githubUrl: "#",
        details: "A secure healthcare platform facilitating patient record management, appointment scheduling, and doctor-patient communication."
    },
    {
        title: "NGR Property",
        category: "Real Estate",
        description: "Property listing and management portal for real estate agencies.",
        tech: ["React.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
        image: "/ngrProperty.jpeg",
        liveUrl: "https://www.ngrpaper.com/",
        githubUrl: "https://github.com/techxsolutions11/ngr_paper_fr_react.git",
        details: "A high-performance real estate platform featuring advanced property search, map integration, and automated lead generation for agents."
    }
];

export const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Large Projects", value: "8+" },
    { label: "Daily Users", value: "500+" },
    { label: "Performance Boost", value: "25%" },
];
