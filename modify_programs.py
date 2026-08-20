import json
import os
import re

file_path = "src/data/programsData.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Update Program interface
interface_replacement = """export interface Program {
    id: string;
    title: string;
    educationLevel?: "schools-colleges-6-12" | "ug" | "pg";
    isUgParent?: boolean;
    ugParents?: string[];
    category: "Workshop" | "Course" | "Bootcamp" | "Certification" | "Mentorship";"""

content = content.replace('export interface Program {\n    id: string;\n    title: string;\n    category: "Workshop" | "Course" | "Bootcamp" | "Certification" | "Mentorship";', interface_replacement)


# Tag existing UG parents
content = content.replace(
    'title: "AI for Science",\n        category: "Course",',
    'title: "AI for Science",\n        educationLevel: "ug",\n        isUgParent: true,\n        category: "Course",'
)
content = content.replace(
    'title: "AI for Arts",\n        category: "Course",',
    'title: "AI for Arts",\n        educationLevel: "ug",\n        isUgParent: true,\n        category: "Course",'
)
content = content.replace(
    'title: "AI for Commerce",\n        category: "Course",',
    'title: "AI for Commerce",\n        educationLevel: "ug",\n        isUgParent: true,\n        category: "Course",'
)

# Tag others as PG
# Wait, let's just do a regex replace for the remaining courses.
# The remaining courses start with id: "prog-00..." 
# We can inject educationLevel: "pg", after category.
import re
content = re.sub(
    r'(id: "prog-00\d+",\n\s+title: ".*?",\n\s+category: ".*?",)',
    r'\1\n        educationLevel: "pg",',
    content
)

new_courses = """
    // --- SCHOOLS & COLLEGES (6-12) ---
    {
        id: "school-001",
        title: "AI Explorer Academy",
        educationLevel: "schools-colleges-6-12",
        category: "Course",
        duration: "Class 6–8",
        level: "Beginner",
        mode: "Online",
        price: 2000,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200",
        description: "Introduce younger students to the wonders of AI, basic logic, and creative technology.",
        features: ["Age-Appropriate AI Basics", "Interactive Projects", "Live Sessions"],
        curriculum: ["What is AI?", "Logic & Games", "Creative AI Drawing", "Final Showcase"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Educator", experience: "8+ years" },
        enrolled: 120, rating: 4.8, reviews: 30, certificate: true, tags: ["Kids", "AI", "Class 6-8"]
    },
    {
        id: "school-002",
        title: "AI Creator Academy",
        educationLevel: "schools-colleges-6-12",
        category: "Course",
        duration: "Class 9–10",
        level: "Intermediate",
        mode: "Online",
        price: 2500,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
        description: "Equip high schoolers with practical AI application skills and basic prompt engineering.",
        features: ["AI Tools Mastery", "Prompt Engineering", "School Projects Assistance"],
        curriculum: ["AI in Daily Life", "Using LLMs", "AI for Study & Research", "Building a Mini Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Educator", experience: "8+ years" },
        enrolled: 150, rating: 4.9, reviews: 45, certificate: true, tags: ["High School", "AI", "Class 9-10"]
    },
    {
        id: "school-003",
        title: "AI Professional Academy",
        educationLevel: "schools-colleges-6-12",
        category: "Course",
        duration: "Class 11–12",
        level: "Advanced",
        mode: "Online",
        price: 3000,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
        description: "Advanced AI techniques, career preparation, and foundational machine learning concepts for seniors.",
        features: ["Python Basics", "Intro to ML", "Career Counseling"],
        curriculum: ["Python Refresher", "Data Basics", "How ML works", "College Prep Portfolio"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Educator", experience: "8+ years" },
        enrolled: 200, rating: 5.0, reviews: 60, certificate: true, tags: ["Seniors", "AI", "Class 11-12"]
    },

    // --- UG SUBCOURSES (ARTS) ---
    {
        id: "ug-arts-1",
        title: "AI in Economics & Business Analytics",
        educationLevel: "ug",
        ugParents: ["AI for Arts", "AI for Commerce"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        description: "Learn to apply AI and data analytics to economic modeling and business strategy.",
        features: ["Predictive Analytics", "Market Trends", "Data-Driven Decisions"],
        curriculum: ["Data Collection", "Trend Analysis", "AI Models in Econ", "Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 400, rating: 4.8, reviews: 110, certificate: true, tags: ["Economics", "Analytics"]
    },
    {
        id: "ug-arts-2",
        title: "AI in Arts & Creativity",
        educationLevel: "ug",
        ugParents: ["AI for Arts"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1200",
        description: "Explore generative AI tools to augment and enhance the creative process.",
        features: ["Generative AI", "Creative Workflows", "Portfolio Building"],
        curriculum: ["Gen AI Basics", "Image & Video Gen", "Ethical AI Art", "Final Portfolio"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 300, rating: 4.9, reviews: 80, certificate: true, tags: ["Arts", "Generative AI"]
    },
    {
        id: "ug-arts-3",
        title: "AI in History & Culture",
        educationLevel: "ug",
        ugParents: ["AI for Arts"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&q=80&w=1200",
        description: "Use AI to analyze historical texts, reconstruct artifacts, and study cultural evolution.",
        features: ["Text Analysis", "Cultural Data", "Digital Humanities"],
        curriculum: ["Digital Humanities", "AI Archiving", "Text Mining History", "Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 150, rating: 4.7, reviews: 40, certificate: true, tags: ["History", "Culture"]
    },
    {
        id: "ug-arts-4",
        title: "AI in Language & Communication",
        educationLevel: "ug",
        ugParents: ["AI for Arts"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200",
        description: "Delve into Natural Language Processing and its impact on modern communication.",
        features: ["NLP Basics", "Translation AI", "Sentiment Analysis"],
        curriculum: ["Intro to NLP", "Linguistics & AI", "Modern Comms", "Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 250, rating: 4.9, reviews: 90, certificate: true, tags: ["Language", "Communication"]
    },
    {
        id: "ug-arts-5",
        title: "AI in Society & Human Behavior",
        educationLevel: "ug",
        ugParents: ["AI for Arts"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200",
        description: "Analyze the societal impact of AI and model human behavior using machine learning.",
        features: ["Behavioral Modeling", "AI Ethics", "Social Impact"],
        curriculum: ["Ethics in AI", "Behavioral Data", "Societal Trends", "Final Paper"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 220, rating: 4.8, reviews: 65, certificate: true, tags: ["Society", "Behavior"]
    },

    // --- UG SUBCOURSES (SCIENCE) ---
    {
        id: "ug-sci-1",
        title: "AI in Physical Sciences",
        educationLevel: "ug",
        ugParents: ["AI for Science"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
        description: "Apply AI to physics and chemistry to accelerate simulations and discoveries.",
        features: ["Simulation AI", "Data Modeling", "Scientific Python"],
        curriculum: ["AI in Physics", "Simulating Chemistry", "Data Analysis", "Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 300, rating: 4.9, reviews: 85, certificate: true, tags: ["Physics", "Chemistry"]
    },
    {
        id: "ug-sci-2",
        title: "AI in Life Sciences & Healthcare",
        educationLevel: "ug",
        ugParents: ["AI for Science"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        description: "Understand how AI is revolutionizing biology, genetics, and modern healthcare.",
        features: ["Bioinformatics", "Medical AI", "Genomic Data"],
        curriculum: ["AI in Healthcare", "Genomics", "Drug Discovery", "Ethics in Medical AI"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 500, rating: 4.9, reviews: 150, certificate: true, tags: ["Healthcare", "Biology"]
    },
    {
        id: "ug-sci-3",
        title: "AI in Computer Science",
        educationLevel: "ug",
        ugParents: ["AI for Science"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        description: "Deep dive into the algorithms, infrastructure, and coding behind modern AI.",
        features: ["Algorithm Design", "Deep Learning", "Neural Networks"],
        curriculum: ["Machine Learning", "Neural Nets", "Model Deployment", "Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 600, rating: 5.0, reviews: 210, certificate: true, tags: ["CS", "Programming"]
    },
    {
        id: "ug-sci-4",
        title: "AI in Mathematics & Data Analytics",
        educationLevel: "ug",
        ugParents: ["AI for Science"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200",
        description: "Master the mathematical foundations of AI and advanced data analytics techniques.",
        features: ["Statistics for AI", "Linear Algebra", "Data Mining"],
        curriculum: ["Math Foundations", "Probability", "Data Mining", "Analytics Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 250, rating: 4.8, reviews: 75, certificate: true, tags: ["Math", "Data"]
    },
    {
        id: "ug-sci-5",
        title: "AI in Environmental & Applied Sciences",
        educationLevel: "ug",
        ugParents: ["AI for Science"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
        description: "Leverage AI to model climate change, track ecology, and solve environmental issues.",
        features: ["Climate Modeling", "Ecological Data", "Sustainability AI"],
        curriculum: ["Intro to Env AI", "Climate Data", "Conservation Tech", "Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 180, rating: 4.9, reviews: 55, certificate: true, tags: ["Environment", "Ecology"]
    },

    // --- UG SUBCOURSES (COMMERCE) ---
    {
        id: "ug-com-1",
        title: "AI in Marketing",
        educationLevel: "ug",
        ugParents: ["AI for Commerce"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        description: "Use AI for customer segmentation, predictive marketing, and personalized campaigns.",
        features: ["Ad Optimization", "Customer Analytics", "Campaign Automation"],
        curriculum: ["AI in Ads", "Predictive Marketing", "Customer Sentiment", "Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 420, rating: 4.9, reviews: 130, certificate: true, tags: ["Marketing", "Ads"]
    },
    {
        id: "ug-com-2",
        title: "AI in HR",
        educationLevel: "ug",
        ugParents: ["AI for Commerce"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
        description: "Streamline talent acquisition, employee retention, and HR operations using AI.",
        features: ["Resume Screening", "Retention Models", "HR Automation"],
        curriculum: ["AI in Hiring", "Employee Analytics", "Ethics in HR", "Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 200, rating: 4.7, reviews: 50, certificate: true, tags: ["HR", "Management"]
    },
    {
        id: "ug-com-3",
        title: "AI in Finance",
        educationLevel: "ug",
        ugParents: ["AI for Commerce"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
        description: "Explore algorithmic trading, risk assessment, and fraud detection powered by AI.",
        features: ["Algorithmic Trading", "Risk Models", "Fraud Detection"],
        curriculum: ["AI in Banking", "Algo Trading", "Risk Management", "Finance Capstone"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 550, rating: 4.9, reviews: 180, certificate: true, tags: ["Finance", "Trading"]
    },
    {
        id: "ug-com-4",
        title: "AI in Accounting",
        educationLevel: "ug",
        ugParents: ["AI for Commerce"],
        category: "Course",
        level: "All Levels",
        mode: "Online",
        price: 1500,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
        description: "Automate bookkeeping, audit compliance, and financial reporting with machine learning.",
        features: ["Automated Auditing", "Bookkeeping AI", "Compliance Tech"],
        curriculum: ["AI Accounting Tools", "Automated Audits", "Tax AI", "Project"],
        instructor: { name: "Tushardri Paul", avatar: "/assets/authors/tushardri-paul.jpg", role: "AI Data Engineer", experience: "10+ years" },
        enrolled: 250, rating: 4.8, reviews: 70, certificate: true, tags: ["Accounting", "Audit"]
    },
"""

content = content.replace("export const programs: Program[] = [", "export const programs: Program[] = [\n" + new_courses)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated programsData.ts")
