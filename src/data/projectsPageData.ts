
import { Bot, Cpu, CircuitBoard, Printer, Rocket, Layers, Lightbulb } from "lucide-react";

export interface ProjectService {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: any /* eslint-disable-line @typescript-eslint/no-explicit-any */; // Lucide icon
    image: string;
    link: string;
    color: string;
    hoverImage?: string;
}

export const projectServices: ProjectService[] = [
    {
        id: "stem-tinkering",
        title: "STEM & Tinkering Lab",
        description: "A creative space for hands-on learning, fostering innovation. We offer complete Atal Tinkering Lab setup as per NITI AAYOG approved specifications, categorized into 4 comprehensive packages.",
        features: [
            "Package 1 (P1) - Electronics, Robotics, IoT",
            "Package 2 (P2) - Rapid Prototyping Tools",
            "Package 3 (P3) - Mechanical & Measurement Tools",
            "Package 4 (P4) - Power Supply & Safety Equipment"
        ],
        icon: Lightbulb,
        image: "/images/STEM & Tinkering LAb.png",
        link: "/projects/stem-tinkering",
        color: "from-yellow-500 to-orange-500",
        hoverImage: "/images/STEM & Tinkering Lab 2.png"
    },
    {
        id: "ai-robotics",
        title: "AI & Robotics Lab",
        description: "Advanced facility for designing autonomous systems, robotic arms, and implementing artificial intelligence algorithms.",
        features: [
            "Sensor Integration Modules",
            "Robotics Assembly Components",
            "AI Programming & Software Stack",
            "Project-Based Learning Manuals"
        ],
        icon: Bot,
        image: "/images/bot-workbench.png",
        link: "/projects/ai-robotics",
        color: "from-blue-500 to-cyan-500",
        hoverImage: "/images/robotics-hover-new.png"
    },
    {
        id: "embedded-electronics",
        title: "Embedded Systems & Electronics Lab",
        description: "Deep dive into circuit design, microcontrollers, PCB fabrication, and IoT systems connectivity.",
        features: [
            "Circuit Design",
            "Microcontroller Programming",
            "PCB Fabrication",
            "IoT Sensor Networks"
        ],
        icon: CircuitBoard,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        link: "/projects/embedded-electronics",
        color: "from-emerald-500 to-green-500",
        hoverImage: "/images/Electronics Lab.png"
    },
    {
        id: "astronomy",
        title: "Astronomy Lab",
        description: "Explore the cosmos with varied telescopes, sky mapping tools, and space science observational equipment.",
        features: [
            "Telescope Operation",
            "Stargazing Sessions",
            "Celestial Mapping",
            "Space Science"
        ],
        icon: Rocket,
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop",
        link: "/projects/astronomy",
        color: "from-indigo-500 to-violet-500",
        hoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "composite-skills",
        title: "Composite Skills Lab",
        description: "A multidisciplinary hub integrating 3D printing, carpentry, artistic crafts, and modern fabrication techniques.",
        features: [
            "3D Printing & Design",
            "Carpentry & Woodwork",
            "Digital Fabrication",
            "Artistic Crafting"
        ],
        icon: Layers,
        image: "/images/composite_lab_3d_printing.png",
        link: "/projects/composite-skills",
        color: "from-pink-500 to-rose-500",
        hoverImage: "/images/composite_lab_details.png"
    }
];
