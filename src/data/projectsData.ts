export interface Project {
    id: string;
    title: string;
    category: "STEM & Tinkering Lab" | "AI & Robotics Lab" | "Embedded Systems & Electronics Lab" | "Astronomy Lab" | "Composite Skills Lab";
    description: string;
    image: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    components: string[];
}

export const projects: Project[] = [
    {
        id: "stem-p1",
        title: "Tinkering Lab – Package 1 (P1) – Electronics Development, Robotics, Internet of Things and Sensors",
        category: "STEM & Tinkering Lab",
        description: "Tinkering Lab Package 1 contains components for Electronics Development, Internet of Things & Sensors, Robotics, and DIY Kits.\n\nThis product is As per QR/specification for Package No. 1 – Tinkering Lab of NITI AAYOG Electronics Development, Robotics, Internet of Things and Sensors approved by NITI AAYOG(Approved Copy of Qrs / Specification uploaded in GeM portal).",
        image: "/images/STEM & Tinkering LAb.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Electronics Development", "Internet of Things", "Robotics", "DIY Kits"]
    },
    {
        id: "stem-p2",
        title: "Tinkering Lab – Package 2 (P2) Rapid Prototyping Tool",
        category: "STEM & Tinkering Lab",
        description: "Tinkering Lab Package 2 contains components for 3D Printing, Rapid Prototyping, and DIY Crafting.\n\nThis product is as per QR/specification for Package No.2 – Tinkering Lab of NITI AAYOG Rapid Prototyping Tools approved by NITI AAYOG(Approved Copy of Qrs / Specification uploaded in GeM portal).",
        image: "/images/STEM & Tinkering Lab 2.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["3D Printing", "Rapid Prototyping", "DIY Crafting"]
    },
    {
        id: "stem-p3",
        title: "Tinkering Lab – Package 3 (P3) – Mechanical, Electrical and Measurement Tools",
        category: "STEM & Tinkering Lab",
        description: "Tinkering Lab Package 3 contains components for Electronics and Mechanical Prototyping.\n\nThis product is as per QR/specification for Package No.3 – Tinkering Lab of NITI AAYOG Mechanical, Electrical, and Measurement Tools approved by NITI AAYOG(Approved Copy of Qrs / Specification uploaded in GeM portal).",
        image: "/images/stem_p3_tools.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Electronics Prototyping", "Mechanical Prototyping", "Measurement Tools"]
    },
    {
        id: "stem-p4",
        title: "Tinkering Lab – Package 4 (P4) – Power Supply and Accessories and Safety Equipment",
        category: "STEM & Tinkering Lab",
        description: "Tinkering Lab Package 4 contains components for DIY Tinkering and Safety.\n\nThis product is as per QR/specification for Package No. 4 – Tinkering Lab of NITI AAYOG Power Supply and Accessories and Safety Equipment approved by NITI AAYOG(Approved Copy of Qrs / Specification uploaded in GeM portal).",
        image: "/images/stem_p4_safety.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["DIY Tinkering", "Power Supply", "Safety Equipment"]
    },
    {
        id: "embedded-p1",
        title: "Embedded Systems Lab – Package 1 – Core Microcontrollers & Circuit Board Modules",
        category: "Embedded Systems & Electronics Lab",
        description: "Focus on establishing a core foundation in Microcontroller architecture, breadboarding, and basic circuit design.\n\nThis package includes fundamental kits like Arduino, ESP32, and Raspberry Pi modules to allow students to learn basic to intermediate digital logic, interfacing, and signal processing.",
        image: "/images/embedded_p1_microcontrollers.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Microcontrollers", "Breadboards", "Basic Circuit Modules"]
    },
    {
        id: "embedded-p2",
        title: "Embedded Systems Lab – Package 2 – Professional Circuit Design & PCB Fabrication Kit",
        category: "Embedded Systems & Electronics Lab",
        description: "Move beyond breadboards. Package 2 brings tools necessary for designing real printed circuit boards (PCBs) and soldering components.\n\nIncludes advanced soldering stations, multi-meters, oscilloscopes, copper cladding materials, and etching accessories for in-house prototyping of professional-grade circuitry.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["PCB Fabrication", "Soldering Station", "Oscilloscopes"]
    },
    {
        id: "embedded-p3",
        title: "Embedded Systems Lab – Package 3 – IoT & Advanced Sensor Data Connectivity Hub",
        category: "Embedded Systems & Electronics Lab",
        description: "Equip the lab for the Internet of Things (IoT). Connect electronic systems to the cloud, create smart home devices, and log sensor data remotely.\n\nContains advanced sensors (LIDAR, gas, telemetry), Wi-Fi/Bluetooth shields, and LoRa communication modules for comprehensive telemetry processing.",
        image: "/images/embedded_p3_iot.png",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["IoT Sensors", "Communication Modules", "Telemetry"]
    },
    {
        id: "embedded-p4",
        title: "Embedded Systems Lab – Package 4 – Advanced Firmware & RTOS Development",
        category: "Embedded Systems & Electronics Lab",
        description: "For mastering Embedded C, C++, and Real-Time Operating Systems (RTOS). Provides programmers and advanced debugging logic analyzers to test software on edge devices.\n\nThe ultimate software-hardware integration kit focusing on performance, memory safety, and real-world system timing constraints.",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
        difficulty: "Advanced",
        duration: "N/A",
        components: ["Logic Analyzers", "Debugging Kits", "RTOS Architecture"]
    },
    {
        id: "astronomy-p1",
        title: "Astronomy Lab – Package 1 – Foundation Telescopes & Stargazing Kits",
        category: "Astronomy Lab",
        description: "Begin your journey into stargazing and celestial mapping. This package introduces basic optics and planetary observation.\n\nIncludes high-quality refractor manual telescopes, planispheres, and stargazing guides perfect for observing craters on the Moon and the brightest planets.",
        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2074&auto=format&fit=crop",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Refractor Telescopes", "Planispheres", "Observation Guides"]
    },
    {
        id: "astronomy-p2",
        title: "Astronomy Lab – Package 2 – Advanced Optical & Motorized Tracking Systems",
        category: "Astronomy Lab",
        description: "Take observational astronomy to the next level with motorized equatorial mounts and larger aperture reflectors.\n\nEquips the lab with automated Go-To tracking mounts, allowing students to effortlessly track deep-sky objects, solar filters for safe sun viewing, and precise alignment tools.",
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2040&auto=format&fit=crop",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["Motorized Mounts", "Reflector Telescopes", "Solar Filters"]
    },
    {
        id: "astronomy-p3",
        title: "Astronomy Lab – Package 3 – Astrophotography & Digital Imaging Suite",
        category: "Astronomy Lab",
        description: "Capture the cosmos digitally. This package provides everything needed to photograph galaxies, nebulas, and planetary details.\n\nIncludes specialized CCD/CMOS astrophotography cameras, adapters, intervalometers, and image processing software licenses for detailed celestial mapping.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["Astrophotography Cameras", "Adapters", "Processing Software"]
    },
    {
        id: "astronomy-p4",
        title: "Astronomy Lab – Package 4 – Radio Astronomy & Space Science Data Analysis",
        category: "Astronomy Lab",
        description: "Explore the invisible universe. Set up a radio telescope array to detect solar flares, Jupiter's emissions, or map the Milky Way.\n\nComes with SDR (Software Defined Radio) kits, directional antennas, and data analysis stations to process space science data beyond the visible spectrum.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2011&auto=format&fit=crop",
        difficulty: "Advanced",
        duration: "N/A",
        components: ["Radio Telescopes", "SDR Kits", "Data Analysis Terminals"]
    },
    {
        id: "ai-robotics-p1",
        title: "AI & Robotics Lab – Package 1 – Sensor Integration Modules",
        category: "AI & Robotics Lab",
        description: "Equip your lab with advanced sensor integration modules. This package contains a comprehensive set of sensors for environmental, motion, and distance detection.\n\nStudents will learn how to interface, calibrate, and process data from various sensors to give their robotic systems perception of the physical world.",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Proximity Sensors", "Motion Detectors", "Environmental Sensors"]
    },
    {
        id: "ai-robotics-p2",
        title: "AI & Robotics Lab – Package 2 – Robotics Assembly Components",
        category: "AI & Robotics Lab",
        description: "A robust collection of mechanical components, actuators, and chassis kits for building diverse robotic assemblies.\n\nFrom robotic arms and rovers to humanoid frames, this package includes precision motors, servos, and structural elements for assembling structural designs with high mobility.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["Servo Motors", "Chassis Kits", "Actuators"]
    },
    {
        id: "ai-robotics-p3",
        title: "AI & Robotics Lab – Package 3 – AI Programming & Software Stack",
        category: "AI & Robotics Lab",
        description: "Unleash the capabilities of artificial intelligence. This software stack and compute module package enables intelligent decision-making.\n\nFeaturing edge-computing devices, vision processing units, and access to machine learning libraries (like TensorFlow and OpenCV), students can program neural networks and computer vision algorithms.",
        image: "/images/ai_robotics_p3_software.png",
        difficulty: "Advanced",
        duration: "N/A",
        components: ["Edge Compute Modules", "Vision Processing", "ML Libraries"]
    },
    {
        id: "ai-robotics-p4",
        title: "AI & Robotics Lab – Package 4 – Project-Based Learning Manuals",
        category: "AI & Robotics Lab",
        description: "A comprehensive set of learning resources, manuals, and guided curriculums tailored for the AI and robotics ecosystem.\n\nThese step-by-step project blueprints guide educators and students from foundational concepts to advanced autonomous robotics applications, ensuring structured and hands-on skill development.",
        image: "/images/ai_robotics_p4_manuals.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Curriculum Guides", "Project Blueprints", "Educator Manuals"]
    },
    {
        id: "composite-p1",
        title: "Composite Skills Lab – Package 1 – 3D Printing & Design Prototyping",
        category: "Composite Skills Lab",
        description: "Transform digital designs into physical reality. This package contains everything required to introduce students to additive manufacturing.\n\nIncludes high-resolution FDM/SLA 3D printers, assorted PLA/ABS filaments, and CAD software licenses to learn parameterizing, slicing, and 3D modeling.",
        image: "/images/close_up_3d_printing.png",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["3D Printers", "CAD Software", "Filaments"]
    },
    {
        id: "composite-p2",
        title: "Composite Skills Lab – Package 2 – Carpentry & Woodwork Mastery",
        category: "Composite Skills Lab",
        description: "Develop hands-on mechanical and crafting skills with robust carpentry tools. \n\nThis setup provides professional-grade saws, drills, sanding stations, carving chisels, and safety gear, allowing for the construction of wooden chassis, frames, and intricate custom furniture pieces.",
        image: "/images/composite_lab_details.png",
        difficulty: "Intermediate",
        duration: "N/A",
        components: ["Power Tools", "Hand Tools", "Safety Equipment"]
    },
    {
        id: "composite-p3",
        title: "Composite Skills Lab – Package 3 – Digital Fabrication & Laser Cutting",
        category: "Composite Skills Lab",
        description: "Merge precision engineering with artistic design. This digital fabrication package introduces subtractive manufacturing.\n\nFeaturing laser cutters, desktop CNC routers, and engraving tools, students can cut and engrave acrylic, wood, and soft metals to create precision parts and artistic pieces.",
        image: "/images/laser_cutting_machine.png",
        difficulty: "Advanced",
        duration: "N/A",
        components: ["Laser Cutters", "CNC Routers", "Engraving Materials"]
    },
    {
        id: "composite-p4",
        title: "Composite Skills Lab – Package 4 – Artistic Crafting & Mixed Media Assembly",
        category: "Composite Skills Lab",
        description: "Bring creativity and multi-material engineering together. This package provides tools for fine detailing, painting, and mixed media projects.\n\nIncludes airbrush kits, fine-detail modeling tools, epoxies, acrylic paints, and molding materials to finish, dye, and assemble composite materials seamlessly.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
        difficulty: "Beginner",
        duration: "N/A",
        components: ["Airbrush Kits", "Molding Materials", "Detailing Tools"]
    }
];
