export type CurriculumPhase = {
  phase: string;
  topics: { module: string; outcome: string }[];
};

export type Course = {
  id: string;
  title: string;
  stream: "arts" | "science" | "commerce" | "technology";
  level: "School" | "UG" | "PG" | "Diploma";
  duration: string;
  terms: number;
  fee: string;
  registrationFee: string;
  monthlyFee: string;
  tagline: string;
  overview: string;
  targetAudience: string[];
  skillsGained: string[];
  careerOutcomes: string[];
  curriculum: CurriculumPhase[];
};

export const courses: Course[] = [
  // ==========================================
  // ARTS STREAM
  // ==========================================
  {
    id: "arts-class-11",
    title: "Class 11 (Arts)",
    stream: "arts",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Build a strong AI foundation alongside your high school arts curriculum.",
    overview: "This program introduces 11th-grade students in the Arts stream to the world of Artificial Intelligence. It focuses on the societal impacts of AI, digital research ethics, media literacy, and AI tools for content generation and research.",
    targetAudience: ["Class 11 Arts Students"],
    skillsGained: ["Digital Scrutiny", "Media Analytics", "Digital Surveys"],
    careerOutcomes: ["Future Policy Analyst", "Digital Media Specialist", "Research Assistant"],
    curriculum: [
      {
        phase: "Class 11 Term 1",
        topics: [
          { module: "Impact of AI on Culture", outcome: "Societal AI Awareness" },
          { module: "Digital Research Ethics", outcome: "Research Literacy" },
          { module: "Media Literacy in AI Age", outcome: "Media Fluency" }
        ]
      },
      {
        phase: "Class 11 Term 2",
        topics: [
          { module: "Digital Surveys", outcome: "Enhanced Research Skills" },
          { module: "Automated Note-taking", outcome: "Workflow Optimization" },
          { module: "Qualitative Data Visualization Tools", outcome: "Data Presentation" }
        ]
      }
    ]
  },
  {
    id: "arts-class-12",
    title: "Class 12 (Arts)",
    stream: "arts",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Advanced AI foundation for content generation and digital storytelling.",
    overview: "Designed for Class 12 Arts students to learn data-driven governance, AI content generation, fact-checking and formatting advanced digital narrative storytelling.",
    targetAudience: ["Class 12 Arts Students"],
    skillsGained: ["Digital Storytelling", "AI Fact-Checking", "Data-driven Governance"],
    careerOutcomes: ["Future Policy Analyst", "Digital Media Specialist", "Social Researcher"],
    curriculum: [
      {
        phase: "Class 12 Term 1",
        topics: [
          { module: "AI Content Generation (Text/Image)", outcome: "Media & Content Fluency" },
          { module: "Fact-Checking Tools", outcome: "Verification Skills" },
          { module: "Digital Storytelling", outcome: "Creative Formatting" }
        ]
      },
      {
        phase: "Class 12 Term 2",
        topics: [
          { module: "Data-driven Governance", outcome: "Policy & Career Clarity" },
          { module: "Social Impact Analysis", outcome: "Social Research" },
          { module: "Career Portfolios for Humanities", outcome: "Career Readiness" }
        ]
      }
    ]
  },
  {
    id: "ba-arts",
    title: "B.A. (Bachelor of Arts)",
    stream: "arts",
    level: "UG",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Integrate AI seamlessly into Humanities & Social Science research.",
    overview: "A comprehensive undergraduate program that brings AI and data analytics to the Bachelor of Arts. You will learn to use automated literature reviews, sentiment analysis, map-based data analysis, and advanced research tools.",
    targetAudience: ["Undergraduate Arts Students", "Humanities Majors", "Future Researchers"],
    skillsGained: ["Excel for Social Sciences", "Visual Storytelling", "Automated Content Writing", "Sentiment Analysis"],
    careerOutcomes: ["Social Researcher", "Public Administrator", "Content Strategy Lead"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Intro to AI in Arts", outcome: "Research Foundation" },
          { module: "Online Research Frameworks", outcome: "Digital Research Strategy" },
          { module: "Excel for Social Science", outcome: "Data Handling" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Creating Infographics", outcome: "Visual Storytelling" },
          { module: "Map-based Data Analysis", outcome: "Geospatial Awareness" },
          { module: "Storytelling with Data", outcome: "Narrative Construction" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Automated Content Writing", outcome: "Media & Content AI" },
          { module: "Identifying Deepfakes", outcome: "Media Verification" },
          { module: "Media Analytics", outcome: "Audience Insights" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Analyzing Census Data", outcome: "Policy & Trend Analysis" },
          { module: "Trend Forecasting", outcome: "Predictive Awareness" },
          { module: "AI in Public Administration", outcome: "Civic Applications" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "Automated Literature Review", outcome: "Advanced Research Skills" },
          { module: "Sentiment Analysis", outcome: "Textual Analysis" },
          { module: "Survey Automation", outcome: "Data Collection Efficiency" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "AI-driven Social Impact Project", outcome: "Social Impact & Portfolio" },
          { module: "Career Portfolio Development", outcome: "Job Preparedness" },
          { module: "Industry Ethics in Research", outcome: "Compliance & Safety" }
        ]
      }
    ]
  },
  {
    id: "ma-arts",
    title: "M.A. (Master of Arts)",
    stream: "arts",
    level: "PG",
    duration: "2 Years",
    terms: 4,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Advanced AI methodologies for Post-Graduate Humanities scholars.",
    overview: "Master the intersection of AI and Humanities. Topics include Text Analytics, NLP, Policy Analysis, Sentiment & Discourse Analysis, Digital Humanities, and Governance.",
    targetAudience: ["Postgraduate Students", "Senior Researchers", "Policy Makers"],
    skillsGained: ["NLP", "Text Analytics", "Policy Forecasting", "Advanced Data Interpretation"],
    careerOutcomes: ["Policy Analyst", "Senior Researcher", "Digital Archivist"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Advanced Research Methodology", outcome: "Research Framework & Proposal" },
          { module: "AI in Social Sciences", outcome: "Policy Briefs & Critical Review" },
          { module: "Data Analysis for Humanities", outcome: "Statistical Analysis & Visuals" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Text Analytics & NLP", outcome: "Text Processing & Vectorization" },
          { module: "Policy Analysis & Forecasting", outcome: "Trend Forecasting" },
          { module: "Digital Humanities", outcome: "Digital Archives & Storytelling" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Advanced Data Interpretation", outcome: "Data Storytelling & Insights" },
          { module: "Sentiment & Discourse Analysis", outcome: "Social Media Discourse Analysis" },
          { module: "AI Ethics & Governance", outcome: "Regulatory Policies & Accountability" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Master's Dissertation", outcome: "Comprehensive Thesis Submission" },
          { module: "Academic & Professional Portfolio", outcome: "Research Portfolio & CV Building" },
          { module: "Professional AI Certification", outcome: "Industry Certification Completion" }
        ]
      }
    ]
  },

  // ==========================================
  // SCIENCE STREAM
  // ==========================================
  {
    id: "science-class-11",
    title: "Class 11 (Science)",
    stream: "science",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Jump-start your scientific computing and AI knowledge early.",
    overview: "For 11th-grade science students aiming to master fundamentals like Python syntax, algorithms, basis statistics, and building logic foundations.",
    targetAudience: ["Class 11 Science Students"],
    skillsGained: ["Python syntax", "Matplotlib basics", "Basic Statistics"],
    careerOutcomes: ["Future Data Scientist", "STEM Scholar", "Junior Tech Lead"],
    curriculum: [
      {
        phase: "Class 11 Term 1",
        topics: [
          { module: "Logic Gates to Neural Networks", outcome: "Computational Foundation" },
          { module: "Basics of Statistics", outcome: "Statistical Awareness" },
          { module: "Intro to Algorithms", outcome: "Logic Building" }
        ]
      },
      {
        phase: "Class 11 Term 2",
        topics: [
          { module: "Python Syntax", outcome: "Basic Coding Proficiency" },
          { module: "Matplotlib for Lab Reports", outcome: "Data Presentation" },
          { module: "Automating Scientific Calculations", outcome: "Workflow Optimization" }
        ]
      }
    ]
  },
  {
    id: "science-class-12",
    title: "Class 12 (Science)",
    stream: "science",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Apply Python computing to simple regression and biological models.",
    overview: "In 12th grade, Science students start dealing with Regression, Classification, GitHub Basics, and building simple AI models.",
    targetAudience: ["Class 12 Science Students"],
    skillsGained: ["NumPy handling", "Classification Models", "GitHub Basics"],
    careerOutcomes: ["Future Data Scientist", "STEM Scholar", "Junior Tech Lead"],
    curriculum: [
      {
        phase: "Class 12 Term 1",
        topics: [
          { module: "Regression in Physics/Biology", outcome: "Applied ML Knowledge" },
          { module: "Classification Models", outcome: "Categorization Skills" },
          { module: "Data Handling with NumPy", outcome: "Matrix Operations" }
        ]
      },
      {
        phase: "Class 12 Term 2",
        topics: [
          { module: "Building simple AI Models", outcome: "Tech-Ready Portfolio" },
          { module: "GitHub Basics", outcome: "Version Control" },
          { module: "Scientific Documentation with AI", outcome: "Research Integrity" }
        ]
      }
    ]
  },
  {
    id: "bsc-science",
    title: "B.Sc (Bachelor of Science)",
    stream: "science",
    level: "UG",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "A rigorous data science and machine learning undergraduate program.",
    overview: "Dive deep into Machine Learning, Neural Networks, Computer Vision, and NLP. This course creates job-ready Data Scientists and ML Engineers by incorporating Capstone projects and cloud deployment basics.",
    targetAudience: ["Undergraduate Science Students", "Tech Enthusiasts"],
    skillsGained: ["Python", "SQL", "Pandas", "Scikit-Learn", "Computer Vision", "NLP"],
    careerOutcomes: ["Data Scientist", "Machine Learning Engineer", "Data Analyst"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Programming Fundamentals", outcome: "Python Programming & Basic Logic" },
          { module: "Mathematics for Data Science", outcome: "Applied Math & Statistics" },
          { module: "Data Handling Basics", outcome: "Data Cleaning & Visualization" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "SQL & Databases", outcome: "Database Management & Querying" },
          { module: "NumPy & Pandas", outcome: "Data Manipulation" },
          { module: "Feature Engineering", outcome: "Data Preprocessing" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Machine Learning Basics", outcome: "Foundational ML Models" },
          { module: "Decision Trees, Ensemble & KNN", outcome: "Advanced Classification" },
          { module: "Data Visualization", outcome: "Dashboards & Storytelling" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Neural Networks", outcome: "Network Training & Optimization" },
          { module: "Natural Language Processing", outcome: "Text Processing & Sentiment" },
          { module: "Computer Vision", outcome: "Image Processing & CNNs" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "Model Optimization & Deployment", outcome: "Hyperparameter Tuning & APIs" },
          { module: "Cloud Computing Basics", outcome: "Deployment & App Monitoring" },
          { module: "Big Data Basics", outcome: "Hadoop/Spark Pipelines" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "Capstone Project", outcome: "End-to-End ML Deployment" },
          { module: "Academic Research Basics", outcome: "Paper Drafting" },
          { module: "Career Preparation", outcome: "Job-Ready Portfolio" }
        ]
      }
    ]
  },
  {
    id: "msc-science",
    title: "M.Sc (Master of Science)",
    stream: "science",
    level: "PG",
    duration: "2 Years",
    terms: 4,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Advanced AI system design and engineering for Post-Graduate students.",
    overview: "This intensive two-year master's program covers Advanced Math, Deep Learning, MLOps, AI System Design, and Big Data Engineering. Tailored to produce high-level AI Architects.",
    targetAudience: ["Postgraduate Science Students", "Future AI Architects"],
    skillsGained: ["Deep Learning Models", "MLOps", "AI Ethics", "Data Engineering (ETL)"],
    careerOutcomes: ["AI Systems Architect", "Senior ML Engineer", "Lead Data Scientist"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Advanced Mathematics", outcome: "Optimization Algorithms" },
          { module: "Advanced Programming", outcome: "OOP & API Dev" },
          { module: "Data Engineering", outcome: "ETL Pipelines" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Advanced Machine Learning", outcome: "Advanced ML Models" },
          { module: "Deep Learning", outcome: "CNN/RNN Architectures" },
          { module: "Advanced NLP", outcome: "LLM Applications" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "AI Systems Design", outcome: "Scalable Architecture" },
          { module: "MLOps", outcome: "CI/CD & Model Monitoring" },
          { module: "AI Ethics & Governance", outcome: "Regulatory Compliance" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Master's Thesis", outcome: "Comprehensive Master's Thesis" },
          { module: "Professional Portfolio", outcome: "Professional GitHub" },
          { module: "Professional Certification", outcome: "Industry Completion" }
        ]
      }
    ]
  },

  // ==========================================
  // COMMERCE STREAM
  // ==========================================
  {
    id: "commerce-class-11",
    title: "Class 11 (Commerce)",
    stream: "commerce",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Introduce automation and analytics into the commerce curriculum.",
    overview: "Learn business automation, prompt engineering, and basic Excel for finance. This gives young commerce students an unrivaled digital advantage in logic flows.",
    targetAudience: ["Class 11 Commerce Students"],
    skillsGained: ["Excel for Finance", "Data Cleaning", "Prompt Engineering"],
    careerOutcomes: ["Future Financial Analyst", "Automated Bookkeeper", "Junior Business Analyst"],
    curriculum: [
      {
        phase: "Class 11 Term 1",
        topics: [
          { module: "What is AI", outcome: "Basic AI & Data Literacy" },
          { module: "History of Business Automation", outcome: "Contextual Knowledge" },
          { module: "MS Excel for Finance", outcome: "Digital Literacy" }
        ]
      },
      {
        phase: "Class 11 Term 2",
        topics: [
          { module: "Prompt Engineering (ChatGPT/Claude)", outcome: "AI-Assisted Learning" },
          { module: "AI Research Tools", outcome: "Enhanced Querying" },
          { module: "Data Cleaning in Google Sheets", outcome: "Validation Skills" }
        ]
      }
    ]
  },
  {
    id: "commerce-class-12",
    title: "Class 12 (Commerce)",
    stream: "commerce",
    level: "School",
    duration: "1 Year",
    terms: 2,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Move seamlessly to real-world financial analytics and invoicing.",
    overview: "Class 12 students dive deeper into smart invoicing, automated bookkeeping, and creating basic sales forecasting dashboards.",
    targetAudience: ["Class 12 Commerce Students"],
    skillsGained: ["Sales Forecasting", "Bookkeeping automation", "Basic Dashboards"],
    careerOutcomes: ["Future Financial Analyst", "Automated Bookkeeper", "Junior Business Analyst"],
    curriculum: [
      {
        phase: "Class 12 Term 1",
        topics: [
          { module: "Automated Bookkeeping concepts", outcome: "Modern Accounting Vision" },
          { module: "Intro to Financial Analytics", outcome: "Data Confidence" },
          { module: "Smart Invoicing", outcome: "Efficiency Generation" }
        ]
      },
      {
        phase: "Class 12 Term 2",
        topics: [
          { module: "Forecasting Sales", outcome: "Strategic Thinking" },
          { module: "Basic Dashboards", outcome: "Visual Management" },
          { module: "AI for Small Business & Startups", outcome: "Entrepreneurial Awareness" }
        ]
      }
    ]
  },
  {
    id: "bcom-commerce",
    title: "B.Com (Bachelor of Commerce)",
    stream: "commerce",
    level: "UG",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Data-driven commerce and accounting precision.",
    overview: "A program focused solely on modern accounting. Learn AI in automated ledger management, Tally+AI integration, PowerBI for finance, and Ratio analysis using AI.",
    targetAudience: ["Undergraduate Commerce Students", "Accounting Majors"],
    skillsGained: ["Tally + AI", "Financial Data Analysis", "PowerBI Basics", "Automated Ledgers"],
    careerOutcomes: ["Financial Analyst", "Modern Accountant", "Risk Modeling Analyst"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Evolution of Business AI", outcome: "Core Commerce AI Base" },
          { module: "Digital Financial Literacy", outcome: "Financial Awareness" },
          { module: "Advanced Excel", outcome: "Data Capability" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Ratio Analysis using AI", outcome: "Financial Data Analysis" },
          { module: "Automated Ledger Management", outcome: "Ledger Organization" },
          { module: "Data Cleaning", outcome: "Data Accuracy" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "AI in Customer Segmentation", outcome: "Marketing & CRM Skills" },
          { module: "Social Media ROI", outcome: "Digital Insight" },
          { module: "CRM Automation Tools", outcome: "Customer Retention Strategy" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Tally + AI Integration", outcome: "Accounting Automation" },
          { module: "Tax Automation Concepts", outcome: "Compliance" },
          { module: "Real-time Reporting", outcome: "Live Analytics" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "PowerBI / Tableau Basics", outcome: "Business Intelligence" },
          { module: "Financial Forecasting", outcome: "Future Estimations" },
          { module: "Risk Modeling", outcome: "Predictive Analytics" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "Real-world Business Case Study", outcome: "Professional Job Readiness" },
          { module: "Internship Prep", outcome: "Interview Guidance" },
          { module: "AI Professional Certification", outcome: "Job Ready Output" }
        ]
      }
    ]
  },
  {
    id: "bba-commerce",
    title: "BBA (Bachelor of Business Administration)",
    stream: "commerce",
    level: "UG",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Unify business leadership strategy with cutting-edge data intelligence.",
    overview: "Blend Business Administration modeling and entrepreneurship with AI. Learn AI in customer segmentation, KPI Tracking, CRM Analytics, and Business Plan Pitch Decks.",
    targetAudience: ["Undergraduate BBA Students", "Aspiring Business Leaders"],
    skillsGained: ["Digital Marketing", "CRM Analytics", "KPI Generation", "Business Strategy"],
    careerOutcomes: ["Marketing Strategist", "Business Strategy Consultant", "Entrepreneur"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Introduction to Business AI", outcome: "Use-Case Analysis & Ethics Base" },
          { module: "Core Business Fundamentals", outcome: "Market Structure & Modeling" },
          { module: "Excel for Business", outcome: "Data Dashboards" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Digital Marketing Basics", outcome: "SEO, SEM & Ad Strategy" },
          { module: "Financial Literacy", outcome: "Budgeting & Cash Flow" },
          { module: "Data Handling & Processing", outcome: "Data Cleaning" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "CRM & Customer Analytics", outcome: "Segmentation Modeling" },
          { module: "Business Analytics Foundations", outcome: "KPI Tracking" },
          { module: "Operations Management", outcome: "Process Optimization" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "AI Applications in Marketing", outcome: "Recommendation Systems" },
          { module: "Financial Analysis", outcome: "Forecasting & Risk" },
          { module: "Business Strategy", outcome: "Competitive Analysis" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "AI-Driven Business Strategy", outcome: "Data-Based Planning" },
          { module: "Entrepreneurship & Startups", outcome: "Pitch Deck Creation" },
          { module: "Advanced Business Analytics", outcome: "Predictive Analytics Dashboards" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "Capstone Project", outcome: "Real-World Solution Building" },
          { module: "Internship Preparation", outcome: "Resume Building & Interviews" },
          { module: "Professional AI Certification", outcome: "Job Readiness" }
        ]
      }
    ]
  },
  {
    id: "mba-commerce",
    title: "MBA (Master of Business Administration)",
    stream: "commerce",
    level: "PG",
    duration: "2 Years",
    terms: 4,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Executive AI skills for top-tier management and corporate consulting.",
    overview: "For master's students pursuing Business Admin. You will specialize in Strategic Financial Modeling, Predictive Customer LTV, Big Data Strategy, and Automation in Operations.",
    targetAudience: ["Postgraduate Business Students", "Future Executives", "Consultants"],
    skillsGained: ["Big Data Strategy", "Predictive Customer LTV", "Fraud Detection AI"],
    careerOutcomes: ["Executive Consultant", "C-Level Manager", "AI Business Leader"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Big Data Strategy", outcome: "Decision-Making Power" },
          { module: "AI in Leadership", outcome: "Change Management" },
          { module: "Strategic Financial Modeling", outcome: "Market Scaling" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Predictive Customer LTV", outcome: "Efficiency Specialist" },
          { module: "Market Expansion Models", outcome: "Growth Hacking" },
          { module: "Automation in Operations", outcome: "Efficiency Design" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "AI in Investment Banking", outcome: "Financial Leader" },
          { module: "Credit Scoring Models", outcome: "Credit Knowledge" },
          { module: "Fraud Detection AI", outcome: "Risk Deterrence" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Live Industry Consulting", outcome: "AI Business Leader" },
          { module: "Executive Portfolio", outcome: "Job-Ready Setup" },
          { module: "AI Management Certification", outcome: "Industry Completion" }
        ]
      }
    ]
  },
  {
    id: "mcom-commerce",
    title: "M.Com (Master of Commerce)",
    stream: "commerce",
    level: "PG",
    duration: "2 Years",
    terms: 4,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Master-tier corporate finance, analytics and compliance modeling.",
    overview: "Advanced Accounting with AI, Audit & Compliance, Investment & Portfolio Analysis, and advanced scenario modeling.",
    targetAudience: ["Postgraduate Commerce Students", "Future Investment Analysts", "Lead Auditors"],
    skillsGained: ["Advanced Accounting Automation", "Taxation AI", "Corporate Finance", "Compliance AI"],
    careerOutcomes: ["Lead Auditor", "Investment Banker", "Head of Finance"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Advanced Accounting with AI", outcome: "Automated Financial Reporting" },
          { module: "Financial Analytics", outcome: "Ratio Analysis & Forecasting Models" },
          { module: "Research Methodology", outcome: "Data Collection & Research Paper Writing" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Taxation with AI", outcome: "GST Automation & Compliance" },
          { module: "Corporate Finance", outcome: "Investment Analysis & Valuation Models" },
          { module: "Audit & Compliance", outcome: "Fraud Detection & Automated Auditing" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Investment & Portfolio Analysis", outcome: "AI in Trading & Risk-Return Analysis" },
          { module: "Advanced Financial Modeling", outcome: "Scenario Analysis & Forecasting Models" },
          { module: "AI in Banking & Finance", outcome: "Credit Modeling & Fraud Detection" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Master's Dissertation", outcome: "Comprehensive Thesis & Data Insights" },
          { module: "Professional Portfolio Dev.", outcome: "Job-Ready Portfolio & LinkedIn Profile" },
          { module: "Professional Certification", outcome: "Industry Certification Completion" }
        ]
      }
    ]
  },

  // ==========================================
  // TECHNOLOGY STREAM (BCA/MCA/POLY)
  // ==========================================
  {
    id: "polytechnic-diploma",
    title: "Polytechnic Diploma",
    stream: "technology",
    level: "Diploma",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Core technical AI and Python skillset for Diploma scholars.",
    overview: "The Polytechnic Diploma builds fundamental programming and logic. Modules focus on Python, Data Handling, Statistics Basics, Data Visualization, and foundational Machine Learning models.",
    targetAudience: ["High School Graduates", "Diploma Students"],
    skillsGained: ["Python", "Data Visualization", "Machine Learning Basics", "NLP Concepts"],
    careerOutcomes: ["Junior Python Developer", "Data Reporting Executive", "Technical Support"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Computer Fundamentals", outcome: "Digital Literacy & OS Basics" },
          { module: "Python Basics", outcome: "Foundational Python" },
          { module: "Basic Mathematics", outcome: "Applied Arithmetic & Algebra" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Python Practice", outcome: "File Handling" },
          { module: "Excel Basics", outcome: "Basic Data Analysis" },
          { module: "Introduction to AI", outcome: "Fundamental Awareness" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Data Handling", outcome: "Data Cleaning & Preprocessing" },
          { module: "Statistics Basics", outcome: "Statistical Analysis" },
          { module: "Data Visualization", outcome: "Dashboards & Storytelling" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Machine Learning Intro", outcome: "Workflow & Concepts" },
          { module: "Regression Basics", outcome: "Linear Modeling" },
          { module: "Classification Basics", outcome: "Classification Modeling" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "Machine Learning Practice", outcome: "Model Comparison" },
          { module: "Basic NLP", outcome: "Text Processing" },
          { module: "AI Applications", outcome: "Real-World Analysis" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "Final Project", outcome: "End-to-End ML Execution" },
          { module: "Revision Module", outcome: "Concept Reinforcement" },
          { module: "Applied Learning", outcome: "Documentation" }
        ]
      }
    ]
  },
  {
    id: "bca-technology",
    title: "B.C.A.",
    stream: "technology",
    level: "UG",
    duration: "3 Years",
    terms: 6,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Software and systems engineering empowered with AI & Machine Learning.",
    overview: "This track combines traditional Computer Applications with Machine Learning. Students master Neural Networks, Pandas, Flask APIs, Cloud Computing, and Model Deployment.",
    targetAudience: ["Undergraduate Tech Students", "Future Developers"],
    skillsGained: ["Software Engineering", "Pandas & Python", "Flask APIs", "AWS Deployment", "Git/Version Control"],
    careerOutcomes: ["Software Engineer", "AI Developer", "Cloud Solutions Architect"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Python Fundamentals", outcome: "Programming & Logic Control" },
          { module: "Logic Building", outcome: "Algorithm Basics" },
          { module: "Mathematics for ML", outcome: "Applied Algebra" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "SQL Databases", outcome: "Database Management" },
          { module: "Pandas & NumPy", outcome: "Data Manipulation" },
          { module: "Data Cleaning & Feature Eng.", outcome: "Data Preparation" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "Regression & Evaluation", outcome: "Supervised Learning" },
          { module: "Decision Trees & Ensemble", outcome: "Advanced Classification" },
          { module: "Data Visualization", outcome: "Dashboards Insights" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Neural Networks", outcome: "Deep Learning Foundations" },
          { module: "Natural Language Processing", outcome: "Sentiment Analysis" },
          { module: "Computer Vision", outcome: "CNN Basics" }
        ]
      },
      {
        phase: "Year 3 - Sem 5",
        topics: [
          { module: "Model Optimization & Deployment", outcome: "Hyperparameter & API" },
          { module: "Cloud Computing Basics", outcome: "AWS Deployment" },
          { module: "Version Control", outcome: "GitHub Collaboration" }
        ]
      },
      {
        phase: "Year 3 - Sem 6",
        topics: [
          { module: "Final Project", outcome: "End-to-End ML Deployment" },
          { module: "Advanced Practice", outcome: "Multi-Model Execution" },
          { module: "Applied AI", outcome: "Business Use Cases" }
        ]
      }
    ]
  },
  {
    id: "mca-technology",
    title: "M.C.A.",
    stream: "technology",
    level: "PG",
    duration: "2 Years",
    terms: 4,
    fee: "₹150 (Registration)",
    registrationFee: "₹150",
    monthlyFee: "₹500 / Month",
    tagline: "Expert-level architecture, LLMs, and enterprise AI system design.",
    overview: "A master's tier curriculum aimed at transforming developers into advanced AI Architects. You'll master Advanced Data Structures, LLMs, CI/CD pipelines, Docker, and AI System scalability.",
    targetAudience: ["Postgraduate Developers", "System Architects"],
    skillsGained: ["System Design", "MLOps", "LLMs & Transformers", "Docker & CI/CD"],
    careerOutcomes: ["AI Architect", "Lead Software Engineer", "MLOps Engineer"],
    curriculum: [
      {
        phase: "Year 1 - Sem 1",
        topics: [
          { module: "Advanced Python", outcome: "OOP & APIs" },
          { module: "Advanced Data Structures", outcome: "Algorithmic Efficiency" },
          { module: "Mathematics for AI", outcome: "Linear Algebra & Optimization" }
        ]
      },
      {
        phase: "Year 1 - Sem 2",
        topics: [
          { module: "Advanced Machine Learning", outcome: "Clustering & Evaluation" },
          { module: "Deep Learning", outcome: "Advanced CNN & RNN" },
          { module: "Advanced NLP", outcome: "Transformers & LLMs" }
        ]
      },
      {
        phase: "Year 2 - Sem 3",
        topics: [
          { module: "System Design", outcome: "AI Architecture & Scalability" },
          { module: "MLOps", outcome: "CI/CD & Docker" },
          { module: "AI Ethics", outcome: "Governance & Regulations" }
        ]
      },
      {
        phase: "Year 2 - Sem 4",
        topics: [
          { module: "Master's Thesis", outcome: "Research Implementation" },
          { module: "Advanced Projects", outcome: "System Integration" },
          { module: "Applied AI", outcome: "Industry Delivery" }
        ]
      }
    ]
  }
];
