export interface ComponentDetail {
    title: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    category: "Water Testing" | "AeroSpace" | "Explorer" | "AI" | "Arduino" | "IoT";
    price: number;
    rating: number;
    reviews: number;
    image: string;
    detailImage?: string;
    description: string;
    features: string[];
    stock: boolean;
    details?: ComponentDetail[];
    buyLink?: string;
}


export const kits: Product[] = [
    // Explorer Kit
    {
        id: "ex-001",
        name: "Explorer Kit",
        category: "Explorer",
        price: 3450,
        rating: 4.6,
        reviews: 145,
        image: "/images/explorer-kit.png",
        description: "A hands-on robotics kit designed for self-learning, experimentation, and practical project development.",
        features: ["Arduino Compatible", "Sensors & Modules", "Project Guide", "Hands-on Learning"],
        stock: true,
        buyLink: "https://olelectronics.in/?s=Explorer+Kit+&post_type=product",
        details: [
            { title: "Explorer Board (UNO-Compatible Microcontroller)", description: "An Arduino UNO–compatible controller board featuring integrated motor drivers, an RGB LED, and a built-in breadboard for rapid prototyping." },
            { title: "Power Supply Module", description: "Designed for use with 18650 Li-ion batteries, featuring onboard charging support along with power and mode selection switches." },
            { title: "Acrylic Robot Chassis", description: "A durable two-layer acrylic chassis used for mounting electronic components and forming the robot's structural base. Includes four nylon spacers for securely connecting the top and bottom layers." },
            { title: "Micro Metal Gear Motors", description: "Two high-torque metal gear motors that provide reliable and precise robot mobility." },
            { title: "Wheels and Tyres", description: "Plastic wheels fitted with silicone tyres to ensure enhanced grip and smooth movement across various surfaces." },
            { title: "Line-Following Sensor Array", description: "A five-sensor line-following module ideal for projects such as autonomous line-tracking robots." },
            { title: "Ultrasonic Distance Sensor", description: "Enables accurate distance measurement and obstacle detection for intelligent navigation." }
        ]
    },

    // AI Innovators Kit
    {
        id: "ai-001",
        name: "AI Innovators Kit Powered by Arduino",
        category: "AI",
        price: 2795,
        rating: 4.7,
        reviews: 89,
        image: "/images/ai-innovators-kit-main.png",
        detailImage: "/images/ai-innovators-kit-main.png",
        description: "Introduction to artificial intelligence and machine learning with hands-on projects. Perfect for beginners exploring AI concepts.",
        features: ["AI Camera Module", "Pre-trained Models", "Python Programming", "10+ AI Projects"],
        stock: true,
        buyLink: "https://olelectronics.in/product/smartelex-bharat-ai-innovators-kit/"
    },

    // Arduino Basic Kit
    {
        id: "ard-001",
        name: "Arduino Basic Kit",
        category: "Arduino",
        price: 650,
        rating: 4.9,
        reviews: 256,
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800",
        description: "Complete Arduino starter kit with UNO board, sensors, and components. Ideal for learning electronics and programming fundamentals.",
        features: ["Arduino UNO R3", "Breadboard & Wires", "20+ Sensors", "Beginner Projects Guide"],
        stock: true,
        buyLink: "https://olelectronics.in/product/arduino-uno-kit/"
    }

    // Arduino Advance Kit
    // {
    //     id: "ard-002",
    //     name: "Arduino Advance Kit",
    //     category: "Arduino",
    //     price: 4599,
    //     rating: 4.9,
    //     reviews: 178,
    //     image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=800",
    //     description: "Advanced Arduino kit with Mega board and professional-grade components for complex robotics and automation projects.",
    //     features: ["Arduino Mega 2560", "Motor Drivers", "Advanced Sensors", "LCD Display & More"],
    //     stock: true
    // }
];
