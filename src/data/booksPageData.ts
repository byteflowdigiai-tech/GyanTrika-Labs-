
import { BookOpen, Cpu, CircuitBoard, Code } from "lucide-react";

export interface BookService {
    id: string;
    title: string;
    description: string;
    features: string[]; // This will act as "Key Topics Covered"
    icon: any;
    image: string;
    link: string;
    color: string;
}

export const bookServiceCategories: BookService[] = [
    {
        id: "3d-printing",
        title: "3D Printing Core",
        description: "Master the art of additive manufacturing, from printer mechanics to advanced material science.",
        features: [
            "FDM & SLA Technologies",
            "Slicing & G-Code",
            "Design for Additive Mfg",
            "Material Science"
        ],
        icon: BookOpen,
        image: "/images/3d-printing-projects.png",
        link: "/books/3d-printing",
        color: "from-blue-500 to-indigo-500"
    },
    {
        id: "arduino",
        title: "Arduino Development",
        description: "The ultimate resource for prototyping, sensor integration, and building smart interactive devices.",
        features: [
            "Microcontroller Basics",
            "Sensor Interfacing",
            "Motor Control",
            "IoT Projects"
        ],
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800",
        link: "/books/arduino",
        color: "from-teal-500 to-cyan-500"
    },
    {
        id: "electronics",
        title: "Electronics",
        description: "The essential literature for designing high-performance circuits and professional board layouts.",
        features: [
            "Analog & Digital Circuits",
            "PCB Layout Techniques",
            "Signal Integrity",
            "Component Fundamentals"
        ],
        icon: CircuitBoard,
        image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=800",
        link: "/books/electronics",
        color: "from-emerald-500 to-green-500"
    },
];
