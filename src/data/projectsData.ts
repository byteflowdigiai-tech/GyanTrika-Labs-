export interface Project {
    id: string;
    title: string;
    category: "Robotics" | "IoT" | "AI" | "PCB" | "3D Designing & Printing";
    description: string;
    image: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    components: string[];
}

export const projects: Project[] = [
    // Robotics Projects
    {
        id: "rob-001",
        title: "Line Following Robot",
        category: "Robotics",
        description: "Build an autonomous robot that follows a black line using IR sensors. Perfect for learning basic robotics and control systems.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        difficulty: "Beginner",
        duration: "2-3 hours",
        components: ["Arduino UNO", "IR Sensors", "Motor Driver", "DC Motors"]
    },
    {
        id: "rob-002",
        title: "Obstacle Avoiding Robot",
        category: "Robotics",
        description: "Create a smart robot that detects and avoids obstacles using ultrasonic sensors. Learn about autonomous navigation.",
        image: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "3-4 hours",
        components: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Chassis"]
    },
    {
        id: "rob-003",
        title: "Robotic Arm",
        category: "Robotics",
        description: "Design and build a multi-axis robotic arm with servo motors. Explore kinematics and precision control.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=800",
        difficulty: "Advanced",
        duration: "6-8 hours",
        components: ["Arduino Mega", "Servo Motors", "Joystick", "3D Printed Parts"]
    },

    // IoT Projects
    {
        id: "iot-001",
        title: "Smart Home Automation",
        category: "IoT",
        description: "Control home appliances remotely using WiFi and mobile app. Learn IoT fundamentals and cloud connectivity.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "4-5 hours",
        components: ["ESP8266", "Relay Module", "Sensors", "Mobile App"]
    },
    {
        id: "iot-002",
        title: "Weather Monitoring Station",
        category: "IoT",
        description: "Build a complete weather station that monitors temperature, humidity, and pressure with cloud data logging.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
        difficulty: "Beginner",
        duration: "2-3 hours",
        components: ["NodeMCU", "DHT22", "BMP180", "ThingSpeak"]
    },
    {
        id: "iot-003",
        title: "Smart Plant Watering System",
        category: "IoT",
        description: "Automated plant watering system with soil moisture monitoring and remote control via smartphone.",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "3-4 hours",
        components: ["ESP32", "Soil Moisture Sensor", "Water Pump", "Relay"]
    },

    // AI Projects
    {
        id: "ai-001",
        title: "Face Recognition System",
        category: "AI",
        description: "Implement a face recognition system using OpenCV and machine learning. Perfect for security applications.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        difficulty: "Advanced",
        duration: "5-6 hours",
        components: ["Raspberry Pi", "Camera Module", "Python", "OpenCV"]
    },
    {
        id: "ai-002",
        title: "Voice Controlled Assistant",
        category: "AI",
        description: "Create your own voice assistant that responds to commands and controls devices using speech recognition.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "4-5 hours",
        components: ["Raspberry Pi", "Microphone", "Speaker", "Python Libraries"]
    },
    {
        id: "ai-003",
        title: "Object Detection Robot",
        category: "AI",
        description: "Build a robot that identifies and tracks objects using computer vision and deep learning models.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
        difficulty: "Advanced",
        duration: "8-10 hours",
        components: ["Jetson Nano", "Camera", "Motors", "TensorFlow"]
    },

    // PCB Projects
    {
        id: "pcb-001",
        title: "Custom Arduino Board",
        category: "PCB",
        description: "Design and fabricate your own Arduino-compatible PCB. Learn PCB design fundamentals and manufacturing.",
        image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=800",
        difficulty: "Advanced",
        duration: "10-12 hours",
        components: ["ATmega328P", "PCB Design Software", "Components", "Soldering Kit"]
    },
    {
        id: "pcb-002",
        title: "LED Matrix Display",
        category: "PCB",
        description: "Create a custom PCB for an LED matrix display with animations and text scrolling capabilities.",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "5-6 hours",
        components: ["Microcontroller", "LED Matrix", "Shift Registers", "PCB"]
    },

    // 3D Designing & Printing Projects
    {
        id: "3d-001",
        title: "Custom Robot Chassis",
        category: "3D Designing & Printing",
        description: "Design and 3D print a custom robot chassis with mounting points for motors and electronics.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "6-8 hours",
        components: ["CAD Software", "3D Printer", "Filament", "Assembly Hardware"]
    },
    {
        id: "3d-002",
        title: "Quadcopter Frame",
        category: "3D Designing & Printing",
        description: "Design a lightweight yet strong quadcopter frame optimized for 3D printing and flight performance.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
        difficulty: "Advanced",
        duration: "8-10 hours",
        components: ["Fusion 360", "3D Printer", "Carbon Fiber Rods", "Motors"]
    },
    {
        id: "3d-003",
        title: "Gripper Mechanism",
        category: "3D Designing & Printing",
        description: "Create a functional gripper mechanism for robotic arms with servo motor integration.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
        difficulty: "Intermediate",
        duration: "4-5 hours",
        components: ["CAD Software", "3D Printer", "Servo Motor", "Linkages"]
    }
];
