
import { Bot, Cpu, Brain, CircuitBoard, Printer } from "lucide-react";

export interface ProjectService {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: any; // Lucide icon
    image: string;
    link: string;
    color: string;
    hoverImage?: string;
}

export const projectServices: ProjectService[] = [
    {
        id: "robotics",
        title: "Robotics",
        description: "Design and build advanced robotic systems, from autonomous rovers to complex robotic arms.",
        features: [
            "Autonomous Navigation",
            "Robotic Arms & Kinematics",
            "Sensor Integration",
            "Control Systems"
        ],
        icon: Bot,
        image: "/images/bot-workbench.png",
        link: "/projects/robotics",
        color: "from-cyan-500 to-blue-500",
        hoverImage: "/images/robotics-hover-new.png"
    },
    {
        id: "iot",
        title: "Internet of Things (IoT)",
        description: "Connect the physical world to the digital realm with smart sensors and cloud-integrated solutions.",
        features: [
            "Smart Home Automation",
            "Industrial IoT Monitoring",
            "Cloud Data Logging",
            "Wireless Connectivity"
        ],
        icon: Cpu,
        image: "/images/iot-projects.png",
        link: "/projects/iot",
        color: "from-indigo-500 to-violet-500",
        hoverImage: "/images/iot-hover.png"
    },
    {
        id: "ai",
        title: "Artificial Intelligence",
        description: "Implement cutting-edge AI and Machine Learning models for vision, speech, and predictive analysis.",
        features: [
            "Computer Vision",
            "Pattern Recognition",
            "Voice Assistants",
            "Edge AI Implementation"
        ],
        icon: Brain,
        image: "/images/ai-projects.png",
        link: "/projects/ai",
        color: "from-fuchsia-500 to-pink-500",
        hoverImage: "/images/ai-hover.png"
    },
    {
        id: "pcb",
        title: "PCB Design",
        description: "Professional Printed Circuit Board design, from schematic capture to manufacturing files.",
        features: [
            "Schematic Design",
            "Multi-layer Layout",
            "Component Selection",
            "Prototyping"
        ],
        icon: CircuitBoard,
        image: "/images/pcb-projects.png",
        link: "/projects/pcb",
        color: "from-emerald-500 to-green-500",
        hoverImage: "/images/pcb-hover.jpg"
    },
    {
        id: "3d",
        title: "3D Designing & Printing",
        description: "Turn concepts into reality with precision CAD modeling and 3D printing services.",
        features: [
            "CAD Modeling",
            "Rapid Prototyping",
            "Functional Parts",
            "Product Enclosures"
        ],
        icon: Printer,
        image: "/images/3d-printing-projects.png",
        link: "/projects/3d",
        color: "from-orange-500 to-amber-500",
        hoverImage: "/images/3d-hover.jpg"
    }
];
