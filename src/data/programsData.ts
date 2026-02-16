export interface Program {
    id: string;
    title: string;
    category: "Workshop" | "Course" | "Bootcamp" | "Certification" | "Mentorship";
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    mode: "Online" | "Offline" | "Hybrid";
    price: number;
    discount?: number;
    image: string;
    description: string;
    features: string[];
    curriculum: string[];
    instructor: {
        name: string;
        avatar: string;
        role: string;
        experience: string;
    };
    enrolled: number;
    rating: number;
    reviews: number;
    startDate?: string;
    spots?: number;
    certificate: boolean;
    tags: string[];
}

export const programs: Program[] = [
    {
        id: "prog-001",
        title: "Arduino Robotics Bootcamp",
        category: "Bootcamp",
        duration: "8 Weeks",
        level: "Beginner",
        mode: "Hybrid",
        price: 20000,
        discount: 20,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=1200",
        description: "Master Arduino programming and robotics from scratch. Build 10+ projects including line-following robots, obstacle avoiders, and robotic arms.",
        features: [
            "10+ Hands-on Projects",
            "Arduino Starter Kit Included",
            "Live Online Sessions",
            "Offline Lab Access",
            "Certificate of Completion",
            "Lifetime Access to Materials"
        ],
        curriculum: [
            "Introduction to Arduino & Electronics",
            "Digital & Analog I/O",
            "Sensor Integration & Calibration",
            "Motor Control & PWM",
            "Wireless Communication",
            "Building Autonomous Robots",
            "Advanced Projects & Portfolio",
            "Final Project Presentation"
        ],
        instructor: {
            name: "Vishal Nath",
            avatar: "/assets/authors/vishal-nath.jpeg",
            role: "Electronics Engineer",
            experience: "15+ years in Robotics & Embedded Systems"
        },
        enrolled: 847,
        rating: 4.8,
        reviews: 234,
        startDate: "2026-02-01",
        spots: 25,
        certificate: true,
        tags: ["Arduino", "Robotics", "Embedded Systems", "Electronics"]
    },
    {
        id: "prog-002",
        title: "IoT Smart Home Development",
        category: "Course",
        duration: "6 Weeks",
        level: "Intermediate",
        mode: "Online",
        price: 1000,
        discount: 15,
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
        description: "Learn to build smart home automation systems using ESP32, sensors, and cloud platforms. Create your own connected home devices.",
        features: [
            "ESP32 Development Kit",
            "Cloud Platform Integration",
            "Mobile App Development",
            "Pre-recorded Video Lectures",
            "Weekly Live Q&A Sessions",
            "Project-Based Learning"
        ],
        curriculum: [
            "IoT Fundamentals & Architecture",
            "ESP32 Programming & WiFi",
            "Sensor Networks & Data Collection",
            "MQTT Protocol & Cloud Integration",
            "Mobile App Development (Blynk)",
            "Smart Lighting & Climate Control",
            "Security & Best Practices",
            "Capstone Smart Home Project"
        ],
        instructor: {
            name: "Sd Abraar",
            avatar: "/assets/authors/sd-abraar.jpg",
            role: "IoT and Embedded Systems Specialist",
            experience: "10+ years in IoT & Embedded Systems"
        },
        enrolled: 1234,
        rating: 4.9,
        reviews: 456,
        startDate: "2026-02-10",
        certificate: true,
        tags: ["IoT", "ESP32", "Smart Home", "Cloud", "Mobile App"]
    },
    {
        id: "prog-003",
        title: "AI & Machine Learning for Robotics",
        category: "Bootcamp",
        duration: "12 Weeks",
        level: "Advanced",
        mode: "Hybrid",
        price: 24999,
        discount: 25,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        description: "Dive deep into AI-powered robotics. Learn computer vision, object detection, path planning, and deploy ML models on edge devices.",
        features: [
            "Raspberry Pi 4 + Camera Module",
            "GPU-Accelerated Lab Access",
            "Industry Expert Mentorship",
            "Real-world Capstone Project",
            "Job Placement Assistance",
            "Professional Certificate"
        ],
        curriculum: [
            "Python for AI & Robotics",
            "Computer Vision with OpenCV",
            "Deep Learning Fundamentals",
            "Object Detection (YOLO, SSD)",
            "ROS (Robot Operating System)",
            "Path Planning Algorithms",
            "Sensor Fusion & Kalman Filters",
            "Edge AI Deployment",
            "Autonomous Robot Development",
            "Industry Capstone Project"
        ],
        instructor: {
            name: "Sd. Abraar",
            avatar: "/assets/authors/sd-abraar.jpg",
            role: "IoT and Embedded Systems Specialist",
            experience: "12+ years in AI/ML & Robotics Research"
        },
        enrolled: 542,
        rating: 4.9,
        reviews: 178,
        startDate: "2026-02-15",
        spots: 20,
        certificate: true,
        tags: ["AI", "Machine Learning", "Computer Vision", "ROS", "Python"]
    },
    {
        id: "prog-004",
        title: "PCB Design Mastery Workshop",
        category: "Workshop",
        duration: "2 Days",
        level: "Intermediate",
        mode: "Offline",
        price: 5000,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
        description: "Intensive weekend workshop on professional PCB design. Learn KiCad, design rules, and manufacture your own custom PCB.",
        features: [
            "Hands-on Lab Sessions",
            "KiCad Software Training",
            "Free PCB Manufacturing",
            "Lunch & Materials Included",
            "Certificate of Participation",
            "Networking Opportunity"
        ],
        curriculum: [
            "PCB Design Fundamentals",
            "Schematic Capture in KiCad",
            "Component Footprints & Libraries",
            "PCB Layout Best Practices",
            "Design Rule Checks (DRC)",
            "Gerber File Generation",
            "Manufacturing Process",
            "Testing & Debugging"
        ],
        instructor: {
            name: "Vishal Nath",
            avatar: "/assets/authors/vishal-nath.jpeg",
            role: "Electronics Engineer",
            experience: "8+ years in Electronics Design"
        },
        enrolled: 156,
        rating: 4.7,
        reviews: 89,
        startDate: "2026-02-22",
        spots: 15,
        certificate: true,
        tags: ["PCB Design", "KiCad", "Electronics", "Hardware"]
    },
    {
        id: "prog-005",
        title: "3D Printing for Makers",
        category: "Workshop",
        duration: "1 Day",
        level: "Beginner",
        mode: "Offline",
        price: 2499,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
        description: "Learn 3D printing from scratch. Design your own models, understand slicing, and print your creations. Perfect for beginners!",
        features: [
            "3D Design Software Training",
            "Hands-on Printing Experience",
            "Take Home Your Prints",
            "All Materials Included",
            "Certificate of Participation",
            "3D Model Library Access"
        ],
        curriculum: [
            "3D Printing Technologies Overview",
            "TinkerCAD Design Tutorial",
            "Slicing Software (Cura)",
            "Print Settings Optimization",
            "Troubleshooting Common Issues",
            "Post-Processing Techniques",
            "Design Your Own Model",
            "Print & Take Home"
        ],
        instructor: {
            name: "injamamul Islam",
            avatar: "/assets/authors/injamamul-islam.jpg",
            role: "Junior Engineer",
            experience: "6+ years in 3D Printing & Education"
        },
        enrolled: 324,
        rating: 4.8,
        reviews: 167,
        startDate: "2026-02-08",
        spots: 12,
        certificate: true,
        tags: ["3D Printing", "CAD", "Maker", "Design"]
    },
    {
        id: "prog-006",
        title: "Python Programming for Engineers",
        category: "Course",
        duration: "4 Weeks",
        level: "Beginner",
        mode: "Online",
        price: 6000,
        discount: 10,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
        description: "Master Python programming with a focus on engineering applications. Learn data analysis, automation, and scientific computing.",
        features: [
            "Self-Paced Video Lectures",
            "Coding Exercises & Projects",
            "Weekly Live Coding Sessions",
            "Community Forum Access",
            "Certificate of Completion",
            "Downloadable Resources"
        ],
        curriculum: [
            "Python Basics & Syntax",
            "Data Structures & Algorithms",
            "NumPy for Numerical Computing",
            "Pandas for Data Analysis",
            "Matplotlib & Visualization",
            "File Handling & Automation",
            "Introduction to Web Scraping",
            "Final Automation Project"
        ],
        instructor: {
            name: "Tushardri Paul",
            avatar: "/assets/authors/tushardri-paul.jpg",
            role: "Robotics & AI Specialist",
            experience: "9+ years in Software Development"
        },
        enrolled: 2156,
        rating: 4.9,
        reviews: 892,
        certificate: true,
        tags: ["Python", "Programming", "Data Science", "Automation"]
    },
    {
        id: "prog-007",
        title: "Drone Programming & Automation",
        category: "Bootcamp",
        duration: "6 Weeks",
        level: "Advanced",
        mode: "Hybrid",
        price: 8000,
        discount: 20,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1200",
        description: "Learn to program and automate drones for real-world applications. Covers flight control, computer vision, and autonomous navigation.",
        features: [
            "Drone Kit Included",
            "Flight Simulator Access",
            "Live Flight Sessions",
            "Computer Vision Integration",
            "Certificate & Drone License",
            "Project Portfolio Development"
        ],
        curriculum: [
            "Drone Fundamentals & Safety",
            "Flight Control Systems",
            "PID Controller Tuning",
            "Sensor Integration (GPS, IMU)",
            "Computer Vision for Drones",
            "Autonomous Navigation",
            "Mission Planning Software",
            "Real-world Applications"
        ],
        instructor: {
            name: "Vishal Nath & Dipak Barman",
            avatar: "/assets/authors/dipak-barman.jpg",
            role: "Electronics Engineers",
            experience: "11+ years in Aerospace & Drones"
        },
        enrolled: 289,
        rating: 4.8,
        reviews: 124,
        startDate: "2026-03-01",
        spots: 18,
        certificate: true,
        tags: ["Drones", "Automation", "Computer Vision", "Aerospace"]
    },
    {
        id: "prog-008",
        title: "Embedded Systems Certification",
        category: "Certification",
        duration: "16 Weeks",
        level: "Advanced",
        mode: "Hybrid",
        price: 29999,
        discount: 30,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
        description: "Professional certification program in embedded systems. Learn ARM Cortex, RTOS, device drivers, and industry-standard practices.",
        features: [
            "STM32 Development Board",
            "Industry-Standard Curriculum",
            "Real-world Industry Projects",
            "1-on-1 Mentorship",
            "Job Interview Preparation",
            "Professional Certification",
            "Lifetime Alumni Network"
        ],
        curriculum: [
            "Embedded C Programming",
            "ARM Cortex-M Architecture",
            "Peripheral Programming (GPIO, UART, SPI, I2C)",
            "Interrupt Handling & Timers",
            "Real-Time Operating Systems (FreeRTOS)",
            "Device Driver Development",
            "Power Management",
            "Debugging & Testing",
            "Communication Protocols",
            "Industry Capstone Project"
        ],
        instructor: {
            name: "Dipak Barman",
            avatar: "/assets/authors/dipak-barman.jpg",
            role: "Electronics Engineer",
            experience: "15+ years in Embedded Systems"
        },
        enrolled: 412,
        rating: 4.9,
        reviews: 203,
        startDate: "2026-02-20",
        spots: 25,
        certificate: true,
        tags: ["Embedded Systems", "ARM", "RTOS", "C Programming", "Professional"]
    },
    {
        id: "prog-009",
        title: "Young Innovators Program (Ages 10-14)",
        category: "Course",
        duration: "8 Weeks",
        level: "Beginner",
        mode: "Offline",
        price: 7999,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
        description: "Introduce young minds to robotics, coding, and innovation. Fun, hands-on learning designed specifically for kids aged 10-14.",
        features: [
            "Age-Appropriate Curriculum",
            "Block-Based Coding",
            "Robot Building Projects",
            "Creative Problem Solving",
            "Small Batch Sizes (8-10 kids)",
            "Certificate & Showcase Event"
        ],
        curriculum: [
            "Introduction to Coding (Scratch)",
            "Basic Electronics & Circuits",
            "Building Simple Robots",
            "Sensor Integration",
            "Creative Project Design",
            "Team Collaboration",
            "Innovation Challenge",
            "Showcase & Presentation"
        ],
        instructor: {
            name: "Vishal Nath",
            avatar: "/assets/authors/vishal-nath.jpeg",
            role: "Electronics Engineer",
            experience: "7+ years in Children's Education"
        },
        enrolled: 567,
        rating: 5.0,
        reviews: 245,
        startDate: "2026-02-12",
        spots: 10,
        certificate: true,
        tags: ["Kids", "Robotics", "Coding", "STEM", "Education"]
    },
    {
        id: "prog-010",
        title: "Professional Mentorship Program",
        category: "Mentorship",
        duration: "12 Weeks",
        level: "All Levels",
        mode: "Hybrid",
        price: 20000,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
        description: "Get personalized 1-on-1 mentorship from industry experts. Customize your learning path and accelerate your career in robotics and embedded systems.",
        features: [
            "1-on-1 Weekly Sessions",
            "Customized Learning Path",
            "Resume & Portfolio Review",
            "Interview Preparation",
            "Industry Connections",
            "Flexible Schedule",
            "Career Guidance"
        ],
        curriculum: [
            "Goals & Skills Assessment",
            "Personalized Learning Roadmap",
            "Technical Skills Development",
            "Project Portfolio Building",
            "Resume & LinkedIn Optimization",
            "Mock Interviews",
            "Networking Strategies",
            "Career Transition Support"
        ],
        instructor: {
            name: "Vishal Nath",
            avatar: "/assets/authors/vishal-nath.jpeg",
            role: "Electronics Engineer",
            experience: "12+ years in Tech Industry"
        },
        enrolled: 178,
        rating: 5.0,
        reviews: 95,
        certificate: false,
        tags: ["Mentorship", "Career", "1-on-1", "Professional Development"]
    },
    {
        id: "prog-011",
        title: "Website Designing and Building Masterclass",
        category: "Course",
        duration: "6 Weeks",
        level: "Beginner",
        mode: "Online",
        price: 8999,
        discount: 15,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
        description: "Learn to design and build modern, responsive websites from scratch using HTML, CSS, JavaScript, and popular frameworks.",
        features: [
            "Project-Based Learning",
            "Mobile-Responsive Design",
            "Hosting & Deployment Guide",
            "UI/UX Principles",
            "Certificate of Completion",
            "Lifetime Access to Materials"
        ],
        curriculum: [
            "HTML5 & CSS3 Fundamentals",
            "Layout Design with Flexbox & Grid",
            "JavaScript for Interactivity",
            "Responsive Design Techniques",
            "Introduction to React",
            "State Management Basics",
            "Working with APIs",
            "Final Portfolio Deployment"
        ],
        instructor: {
            name: "Sagarika Saikia And Injamamul Islam",
            avatar: "/assets/authors/sagarika-saikia.png",
            role: "Full Stack Developer & Designer",
            experience: "9+ years in Web Development"
        },
        enrolled: 1245,
        rating: 4.9,
        reviews: 324,
        startDate: "2026-02-25",
        certificate: true,
        tags: ["Web Design", "HTML/CSS", "JavaScript", "React", "UI/UX"]
    },
    {
        id: "prog-012",
        title: "Cybersecurity Basics & Ethical Hacking",
        category: "Course",
        duration: "4 Weeks",
        level: "Beginner",
        mode: "Online",
        price: 6999,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        description: "Understand the essentials of cybersecurity. Learn how to protect systems, networks, and data from digital attacks.",
        features: [
            "Hands-on Security Labs",
            "Real-world Threat Scenarios",
            "Expert Mentorship",
            "Industry-Standard Tools",
            "Career Path Guidance",
            "Security Certification"
        ],
        curriculum: [
            "Introduction to Cybersecurity",
            "Networking Fundamentals",
            "Common Threats & Attacks",
            "Cryptography Basics",
            "Securing Operating Systems",
            "Web Application Security",
            "Ethical Hacking Foundations",
            "Risk Management & Incident Response"
        ],
        instructor: {
            name: "Sagarika Saikia",
            avatar: "/assets/authors/sagarika-saikia.png",
            role: "Technology Engineer",
            experience: "8+ years in Network Security"
        },
        enrolled: 892,
        rating: 4.8,
        reviews: 145,
        startDate: "2026-03-05",
        certificate: true,
        tags: ["Cybersecurity", "Network Security", "Ethical Hacking", "InfoSec"]
    }
];

// Helper functions
export const getProgramsByCategory = (category: string) =>
    programs.filter(program => program.category === category);

export const getProgramsByLevel = (level: string) =>
    programs.filter(program => program.level === level);

export const getProgramsByMode = (mode: string) =>
    programs.filter(program => program.mode === mode);

export const getFeaturedPrograms = () =>
    programs.filter(program => program.rating >= 4.8).slice(0, 6);

export const getUpcomingPrograms = () =>
    programs.filter(program => program.startDate && new Date(program.startDate) > new Date());

export const getAllCategories = () =>
    Array.from(new Set(programs.map(program => program.category)));

export const getAllLevels = () =>
    Array.from(new Set(programs.map(program => program.level)));

export const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (!discount) return price;
    return Math.round(price * (1 - discount / 100));
};
