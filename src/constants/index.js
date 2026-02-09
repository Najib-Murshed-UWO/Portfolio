const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: null, suffix: "", label: "Full-Stack Software Developer" },
  { value: null, suffix: "", label: "Salesforce Certified" },
  { value: null, suffix: "", label: "Robotics Development Experience" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackPlaceholderImg = "/images/logos/react.png";

const techStackSections = [
  {
    heading: "Frontend Development",
    items: [
      { name: "React", imgPath: "/images/logos/react.png" },
      { name: "LWC", imgPath: "/images/LWC-Logo.png" },
      { name: "Motion", imgPath: "/images/Motion-Logo.png" },
      { name: "Tailwind", imgPath: "/images/Tailwind-Logo.png" },
      { name: "TypeScript", imgPath: "/images/TS-Logo.png" },
    ],
  },
  {
    heading: "Backend Development",
    items: [
      { name: "Salesforce", imgPath: "/images/Salesforce-Logo.png" },
      { name: "Spring", imgPath: "/images/Spring-Logo.png" },
      { name: "Python", imgPath: "/images/logos/python.svg" },
      { name: ".NET", imgPath: "/images/Microsoft_.NET-Logo.png" },
      { name: "SQL", imgPath: "/images/SQL-Logo.png" },
    ],
  },
  {
    heading: "Infrastructure",
    items: [
      { name: "Git", imgPath: "/images/logos/git.svg" },
      { name: "AWS", imgPath: "/images/AWS-Logo.png" },
      { name: "Docker", imgPath: "/images/Docker-Logo.png" },
      { name: "PostgreSQL", imgPath: "/images/Postgresql-Logo.jpg" },
      { name: "MongoDB", imgPath: "/images/MongoDB-Logo.png" },
    ],
  },
  {
    heading: "Robotics",
    items: [
      { name: "ROS", imgPath: "/images/ROS-Logo.png" },
      { name: "Path-Planning", imgPath: "/images/Path-Planning.png" },
      { name: "MoveIt", imgPath: "/images/MoveIt-Logo.png" },
      { name: "YOLO", imgPath: "/images/Yolo-Logo.svg" },
      { name: "UWB", imgPath: "/images/UWB-Logo.png" },
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "At Datavvy, I built and maintained cloud-based analytics solutions using AWS services such as S3, EC2, and Lambda to support scalable data processing and reporting. I automated recurring reports, optimized queries, and improved dashboard performance, reducing manual analysis time by ~35% and speeding up insights by ~30%, while enhancing reliability through structured backups and monitoring.",
    imgPath: "/images/resizeplus_Datavvy.png",
    logoPath: "/images/AWS-Logo.png",
    title: "Full-Stack Software Engineer",
    date: "March 2025 - Present",
    responsibilities: [
      "Design, develop, and maintain end-to-end web applications, covering frontend, backend services, and databases.",
      "Build and integrate RESTful APIs and cloud-native services using AWS (e.g., EC2, S3, RDS, Lambda) for scalability and reliability.",
      "Design and maintain ETL pipelines to ingest, transform, and load data from multiple sources into analytics or operational databases.",
      "Collaborate with cross-functional teams to translate business requirements into secure, performant solutions, while ensuring testing, monitoring, and optimization."
    ],
  },
  {
    review: "At Western University, I worked as a Graduate Teaching Assistant supporting 100+ students per term through labs, mentoring, and technical guidance while simultaneously leading the development of an autonomous indoor robotics system. I developed the software of a prototype robot for indoor plant watering using ROS, LiDAR-based SLAM, UWB localization, and YOLO vision on Jetson Nano, building Python/ROS modules for mapping, path planning, and sensor fusion. The solution proved to be very efficient, effective, and robust, and was validated through real-world deployments as part of my MSc research.",
    imgPath: "/images/Western.svg",
    logoPath: "/images/ROS-Logo.png",
    title: "Graduate Research and Teaching Assistant",
    date: "September 2022 - February 2025",
    responsibilities: [
      "Developed an autonomous plant-watering robot using ROS, LiDAR-based SLAM, UWB localization, and YOLOv8 for real-time navigation and precision automation.",
      "Implemented sensor fusion, real-time control pipelines, and custom APIs to enable autonomous decision-making and dynamic environment handling.",
      "Conducted research on robot localization, mapping, and perception, integrating hardware and software components for reliable deployment.",
      "Supported undergraduate courses through lab instruction, grading, tutorials, and student mentoring, ensuring clear understanding of core computer science concepts.",
    ],
  },
  {
    review: "At Relisource Technologies, I developed scalable solutions within the Salesforce ecosystem using Apex, Lightning Web Components (LWC), and React/Angular frontends for a high-traffic financial platform. I built custom business logic, REST integrations, approval workflows, and automation (Flows/Process Builder) that reduced manual processing by ~40%. By optimizing SOQL queries and backend performance, I improved response times by ~25% while supporting stable, reliable releases through structured testing and collaboration.",
    imgPath: "/images/Relisource.png",
    logoPath: "/images/Salesforce-Logo.png",
    title: "Salesforce Developer",
    date: "July 2020 - December 2023",
    responsibilities: [
      "Developed and maintained a Salesforce-hosted financial application supporting a U.S.-based lending platform, ensuring reliability and compliance for core banking workflows.",
      "Built custom Apex logic, Lightning Web Components (LWC), and React/Angular interfaces to streamline loan processing and improve user experience.",
      "Optimized SOQL queries, backend logic, and data flows to improve performance, processing accuracy, and system scalability.",
      "Designed and integrated automated workflows and real-time dashboards, reducing manual effort and enhancing operational visibility for stakeholders.",
    ],
  },
  {
    review: "At Enosis Solutions, I developed full-stack internal enterprise applications using .NET, React, PostgreSQL, and Material UI, contributing to an HRMS for employee operations and MedBank, a medicine donation and dispatch platform. For HRMS, I built secure REST APIs and workflow modules for employee records, leave, payroll inputs, and notifications, reducing HR processing time by ~45% and cutting manual paperwork by ~50%. I also optimized queries and UI performance across both systems, improving reliability and supporting 300+ internal users with stable, low-defect releases.",
    imgPath: "/images/Enosis.jpg",
    logoPath: "/images/Microsoft_.NET-Logo.png",
    title: "Full-Stack Software Engineer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Developed an employee management system to update employee positions, track work duration, manage leave records, conduct salary assessments, and send automated notifications to relevant development managers.",
      "Built MedBank, a user-facing mobile application for medicine donation, enabling users to submit location details and medicine photos for pickup and redistribution.",
      "Implemented backend APIs using ASP.NET Core and frontend interfaces using React and React Native, supporting both web and mobile platforms.",
      "Actively participated in client communication, requirement gathering, and analysis, translating business needs into scalable technical solutions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about him. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with him was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with him was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, he is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "He was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "His expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "He was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const myProjects = [
  {
    id: 1,
    title: "FinEdge — Enterprise Banking & Loan Management Platform",
    description: "FinEdge is a full-stack banking and loan management platform built with Java Spring Boot and React, enabling secure digital banking with real-time transactions, loan processing, and financial analytics for customers, bankers, and admins.",
    subDescription: ["Implements stateless JWT authentication with RBAC, Bucket4j rate limiting for abuse protection, and double-entry accounting with ledgers and reconciliation to guarantee transaction integrity. Ensures concurrency safety using optimistic/pessimistic locking to prevent balance conflicts, and includes modules for accounts, transfers, loans (EMI tracking), bill payments, notifications, and dashboards, backed by automated testing (JUnit/Mockito, Vitest) and CI pipelines for reliability."],
    image: "/images/FinEdge-Landing.jpg",
    preview: "/images/FinEdge-Landing.jpg",
    images: [
      "/images/FinEdge-Landing.jpg",
      "/images/FinEdge-Banker.png",
      "/images/FinEdge-Dashboard.png",
      "/images/FinEdge-Accounts.png",
      "/images/FinEdge-Transactions.png",
      "/images/FinEdge-Loan.png",
      "/images/FinEdge-LoanApplication.png",
      "/images/FinEdge-Personal.png",
      "/images/FinEdge-Billers.png",
      "/images/FinEdge-Cards.png",
    ],
    link: "https://example.com",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Java Spring Boot",
        path: "/assets/logos/JavaSpring.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Postgres",
        path: "/assets/logos/Postgres.svg",
      },
    ],
    href: "https://example.com",
  },
  {
    id: 2,
    title: "Smart Plant Care Robot — SLAM-Based Indoor Autonomous Irrigation",
    description: "Smart Plant Care Robot is a SLAM-based autonomous indoor irrigation system that navigates indoor spaces, detects plants, and delivers precise, automated watering without human intervention, enabling efficient and intelligent plant care in homes, offices, and greenhouses.",
    subDescription: ["Built on ROS (GMapping SLAM) with LiDAR and UWB localization, the robot performs real-time mapping, obstacle avoidance, and path planning to reach each plant accurately. It integrates YOLO-based plant detection, QR-coded plant metadata, soil-moisture monitoring, and Jetson Nano edge computing to make watering decisions dynamically, creating a fully autonomous, energy-efficient, and scalable precision irrigation workflow."],
    image: "/images/resizeplus_Robot-4.jpg",
    preview: "/images/resizeplus_Robot-4.jpg",
    images: [
      "/images/resize-Robot-Video.mov",
      "/images/resizeplus_Robot-1.jpeg",
      "/images/resizeplus_Robot-2.jpeg",
      "/images/resizeplus_Robot-4.jpg",
      "/images/resizeplus_Robot-5.png",
    ],
    link: "https://example.com",
    tags: [
      {
        id: 1,
        name: "ROS",
        path: "/assets/logos/ros.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "YOLO Object Detection",
        path: "",
      },
      {
        id: 3,
        name: "UWB Localization",
        path: "",
      },
      {
        id: 4,
        name: "Mapping",
        path: "",
      },
      {
        id: 5,
        name: "Path Planning",
        path: "",
      },
    ],
    href: "https://example.com",
  },
  {
    id: 3,
    title: "RiskIntellect — Real-Time Risk Scoring & Anomaly Detection System",
    description: "RiskIntellect is an end-to-end risk analytics system that transforms unstructured reports, logs, and datasets into actionable intelligence. It automatically ingests files or text, extracts risk entities, classifies threats, scores severity, builds knowledge graphs, forecasts trends, and generates executive-ready PDF reports — all through a unified FastAPI backend and interactive dashboard.",
    subDescription: ["Built with FastAPI, Sci-Kit-Learn, Prophet/ARIMA, SHAP, OPEN_AI_API, and Plotly, the platform combines rule-based analytics with extensible ML-ready scoring to deliver real-time risk insights. It features automated entity extraction, configurable severity scoring, graph-based relationship modeling, time-series forecasting, and one-click report generation. A single workflow orchestrates the pipeline — upload → analyze → score → visualize → forecast → PDF — enabling fast, explainable risk assessment for cybersecurity, financial, and operational domains."],
    image: "/images/Risk-1.png",
    preview: "/images/Risk-1.png",
    images: [
      "/images/Risk-1.png",
      "/images/Risk-2.png",
      "/images/Risk-3.png",
      "/images/Risk-4.png",
      "/images/Risk-5.png",
    ],
    link: "https://example.com",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Machine Learning",
        path: "/assets/logos/ai.svg",
      },
    ],
    href: "https://example.com",
  },
  {
    id: 4,
    title: "Immersive Developer Portfolio — Interactive UI, Motion Design & 3D Scenes",
    description: "A modern, responsive single-page developer portfolio built with React 19 and Vite, designed to showcase experience, projects, technical skills, and contact information through smooth navigation, animated interactions, and a themeable UI. The application emphasizes performance, accessibility, and maintainable architecture while presenting projects with rich media previews, timelines, and interactive components.",
    subDescription: ["Features interactive project modals with media carousels, animated stats, timeline experience, tech stack grouping, EmailJS contact integration, and GSAP/Framer Motion transitions. Designed with Tailwind CSS, reusable components, and accessibility best practices for performance and maintainability."],
    image: "/images/Portfolio-1.png",
    preview: "/images/Portfolio-1.png",
    previewLight: "/images/Portfolio-1.png",
    previewDark: "/images/Portfolio-2.png",
    images: [
      "/images/Portfolio-1.png",
      "/images/Portfolio-2.png",
    ],
    link: "https://example.com",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "GSAP",
        path: "",
      },
    ],
    href: "https://example.com",
  },
];

const certifications = [
  {
    review: "Salesforce Platform Developer II certification demonstrates advanced proficiency in building custom applications on the Salesforce platform, including complex business logic, integrations, and advanced Apex development. It also covers testing strategies, deployment best practices, and designing scalable, maintainable solutions.",
    imgPath: "/images/PD2-Cert.png",
    title: "Salesforce Platform Developer II",
    issuer: "Salesforce",
  },
  {
    review: "JavaScript certification validates expertise in modern JavaScript development, including ES6+ features, asynchronous programming, closures, and best practices for building interactive web applications. It also covers DOM manipulation, event handling, performance optimization, and working with modern frameworks and tooling.",
    imgPath: "/images/JS-Cert.png",
    title: "JavaScript Certification",
    issuer: "Salesforce",
  },
  {
    review: "Salesforce Platform Developer I certification validates foundational knowledge in Salesforce development, including Apex programming, Lightning components, and declarative development capabilities. It also covers data model design, Process Builder and Flows, and debugging and testing basics.",
    imgPath: "/images/PD1-Cert.png",
    title: "Salesforce Platform Developer I",
    issuer: "Salesforce",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  techStackSections,
  navLinks,
  myProjects,
  certifications,
};
