
export interface Course {
    id: string;
    title: string;
    instructor: string;
    role: string;
    rating: number;
    students: number;
    duration: string;
    modules: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    category: string;
    image: string;
    price: number;
    description: string;
    syllabus: {
        title: string;
        lessons: string[];
    }[];
}

export const courses: Course[] = [
    {
        id: "robotics-101",
        title: "Introduction to Robotics",
        instructor: "Dr. A. Sharma",
        role: "Senior Robotics Engineer",
        rating: 4.8,
        students: 1240,
        duration: "8 weeks",
        modules: 12,
        level: "Beginner",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        price: 49.99,
        description: "Learn the fundamentals of robotics, from kinematics to sensor integration. Build your first autonomous robot.",
        syllabus: [
            { title: "Introduction", lessons: ["History of Robotics", "Types of Robots", "Basic Components"] },
            { title: "Kinematics", lessons: ["Degrees of Freedom", "Forward Kinematics", "Inverse Kinematics"] },
            { title: "Sensors & Actuators", lessons: ["Motors and Drivers", "Ultrasonic Sensors", "Infrared Sensors"] },
        ]
    },
    {
        id: "ai-python",
        title: "Python for AI Beginners",
        instructor: "Prof. Sarah Lee",
        role: "AI Researcher",
        rating: 4.9,
        students: 3500,
        duration: "6 weeks",
        modules: 10,
        level: "Beginner",
        category: "AI",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        price: 39.99,
        description: "Master Python programming specifically for Artificial Intelligence and Machine Learning applications.",
        syllabus: [
            { title: "Python Basics", lessons: ["Variables & Data Types", "Control Flow", "Functions"] },
            { title: "Data Structures", lessons: ["Lists & Dictionaries", "Numpy Arrays", "Pandas DataFrames"] },
            { title: "Intro to ML", lessons: ["Supervised Learning", "Linear Regression", "Classification"] },
        ]
    },
    {
        id: "iot-arduino",
        title: "Arduino Basics & IoT",
        instructor: "Eng. R. Verma",
        role: "IoT Specialist",
        rating: 4.7,
        students: 890,
        duration: "5 weeks",
        modules: 8,
        level: "Intermediate",
        category: "IoT",
        image: "https://images.unsplash.com/photo-1555412654-72a95a495858?auto=format&fit=crop&q=80&w=800",
        price: 44.99,
        description: "Connect the physical world to the internet. Learn Arduino programming and IoT protocols.",
        syllabus: [
            { title: "Arduino Platform", lessons: ["Board Overview", "IDE Setup", "Digital I/O"] },
            { title: "Sensors", lessons: ["Temperature & Humidity", "Light Sensors", "Motion Detection"] },
            { title: "Connectivity", lessons: ["WiFi Modules (ESP8266)", "MQTT Protocol", "Cloud Dashboards"] },
        ]
    },
    {
        id: "pcb-design",
        title: "Advanced PCB Design",
        instructor: "Alex Chen",
        role: "Hardware Engineer",
        rating: 4.8,
        students: 120,
        duration: "10 weeks",
        modules: 15,
        level: "Advanced",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1574689049297-a7ea6b23d9b8?auto=format&fit=crop&q=80&w=800",
        price: 69.99,
        description: "Design professional-grade Printed Circuit Boards using industry-standard software.",
        syllabus: [
            { title: "Schematic Capture", lessons: ["Component Libraries", "Netlists", "Design Rules"] },
            { title: "PCB Layout", lessons: ["Component Placement", "Routing Techniques", "Ground Planes"] },
            { title: "Manufacturing", lessons: ["Gerber Files", "BOM Generation", "Assembly Process"] },
        ]
    },
    {
        id: "3d-printing",
        title: "3D Printing Mastery",
        instructor: "Jessica Wu",
        role: "Additive Manufacturing Expert",
        rating: 4.9,
        students: 350,
        duration: "4 weeks",
        modules: 6,
        level: "Beginner",
        category: "Manufacturing",
        image: "/images/3d-printing-projects.png",
        price: 29.99,
        description: "From CAD design to physical object. Master the art of 3D printing.",
        syllabus: [
            { title: "3D Modeling", lessons: ["Tinkercad Basics", "Fusion 360 Intro", "Exporting STLs"] },
            { title: "Slicing", lessons: ["Layer Height", "Infill Patterns", "Supports"] },
            { title: "Printing & Troubleshooting", lessons: ["Bed Leveling", "Material Selection", "Post-Processing"] },
        ]
    }
];
