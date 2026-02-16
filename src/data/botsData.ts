export interface Bot {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
    features: string[];
    stock: boolean;
    status?: "Launching Soon" | "Low Stock" | "Sold Out";
    buyLink?: string;
    specifications?: {
        dimensions?: string;
        weight?: string;
        battery?: string;
        connectivity?: string;
    };
}

export const bots: Bot[] = [
    {
        id: "bot-001",
        name: "Otto Humanoid",
        price: 1350,
        rating: 4.9,
        reviews: 87,
        image: "/images/humanoid-bot.png",
        description: "Advanced humanoid robot with 18 degrees of freedom. Perfect for learning bipedal locomotion, AI programming, and human-robot interaction.",
        features: ["18 DOF Movement", "Voice Recognition", "Programmable Actions", "Bluetooth Control"],
        stock: true,
        buyLink: "https://olelectronics.in/product/otto-humanoid-robot-kit-humanoid-for-robotics-learning/",
        specifications: {
            dimensions: "35cm x 15cm x 10cm",
            weight: "1.2kg",
            battery: "7.4V Li-Po",
            connectivity: "Bluetooth 5.0"
        }
    },
    {
        id: "bot-002",
        name: "NinjaBot",
        price: 1340,
        rating: 4.7,
        reviews: 124,
        image: "/images/ninjabot.png",
        description: "Agile and fast robot designed for obstacle courses and competitive robotics. Features advanced sensors and quick response time.",
        features: ["High-Speed Motors", "Obstacle Detection", "Line Following", "Remote Control"],
        stock: true,
        buyLink: "https://olelectronics.in/product/ninja-robot-kit-for-robotics-project/",
        specifications: {
            dimensions: "25cm x 20cm x 8cm",
            weight: "0.8kg",
            battery: "11.1V Li-Po",
            connectivity: "2.4GHz RF"
        }
    },
    {
        id: "bot-003",
        name: "Quad Master",
        price: 1120,
        rating: 4.8,
        reviews: 56,
        image: "/images/quad-master.png",
        description: "Four-legged quadruped robot with dynamic balance and terrain adaptation. Ideal for advanced robotics research and AI applications.",
        features: ["12 DOF Legs", "Terrain Adaptation", "AI Vision", "Autonomous Navigation"],
        stock: true,
        buyLink: "https://olelectronics.in/product/bionic-smart-robot-dog/",
        specifications: {
            dimensions: "40cm x 30cm x 25cm",
            weight: "2.5kg",
            battery: "14.8V Li-Po",
            connectivity: "WiFi + Bluetooth"
        }
    },
    {
        id: "bot-004",
        name: "Spider Bot",
        price: 2300,
        rating: 4.6,
        reviews: 92,
        image: "/images/spider-bot.png",
        description: "Six-legged hexapod robot with exceptional stability and climbing capabilities. Perfect for exploring complex terrains and learning multi-legged locomotion.",
        features: ["18 DOF Hexapod", "Wall Climbing", "Sensor Array", "Programmable Gaits"],
        stock: true,
        buyLink: "https://olelectronics.in/product/quadruped-spider-robot-combo-kit/",
        specifications: {
            dimensions: "35cm x 35cm x 15cm",
            weight: "1.8kg",
            battery: "11.1V Li-Po",
            connectivity: "Bluetooth + WiFi"
        }
    },
    {
        id: "bot-005",
        name: "Otto Wheel",
        price: 1250,
        rating: 4.5,
        reviews: 156,
        image: "/images/otto-wheel.png",
        description: "Self-balancing wheeled robot based on the popular Otto platform. Great for learning control systems, gyroscopic stabilization, and robotics fundamentals.",
        features: ["Self-Balancing", "Gyro Stabilization", "LED Display", "Open Source"],
        stock: true,
        buyLink: "https://olelectronics.in/product/otto-wheel-based-robot-kit-for-robotics-learning/",
        specifications: {
            dimensions: "20cm x 15cm x 25cm",
            weight: "0.6kg",
            battery: "7.4V Li-Po",
            connectivity: "Bluetooth"
        }
    },
    {
        id: "bot-006",
        name: "OTTO Emo Bots",
        price: 999,
        rating: 4.8,
        reviews: 203,
        image: "/images/dtto-emo-bots.png",
        description: "Modular emotional robot system with expressive LED matrix face. Features emotion recognition, interactive responses, and customizable personalities.",
        features: ["LED Matrix Face", "Emotion AI", "Voice Interaction", "Modular Design"],
        stock: true,
        status: "Launching Soon",
        specifications: {
            dimensions: "15cm x 15cm x 20cm",
            weight: "0.5kg",
            battery: "5V USB-C",
            connectivity: "WiFi + Bluetooth"
        }
    }
];
