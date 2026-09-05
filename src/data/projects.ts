export type ProjectCategory = "Projects" | "Research" | "Hackathons";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies?: string[];
  organization?: string;
  link?: string;
}

export const projects: Project[] = [
  {
  title: "LinkX – Serverless URL Shortener",
  description:
    "A serverless URL shortener supporting custom aliases, redirects, and click tracking, with REST APIs and a responsive React frontend.",
  image: "projects/project-1.jpg",
  category: "Projects",
  technologies: [
    "React",
    "TypeScript",
    "Hono",
    "PostgreSQL",
    "Prisma",
    "Zod",
    "Tailwind CSS",
  ],
  organization: "",
  link: "https://github.com/jyotiyy/Shortify",
},
  {
  title: "Laparoscopic Surgical Research",
  description:
    "Research focused on applying computer vision and deep learning to laparoscopic surgical analysis, exploring AI-driven approaches for understanding surgical imagery.",
  image: "projects/project-2.png",
  category: "Research",
  technologies: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
  organization:
    "Under the guidance of S. Geetha, SMIEEE & Dr. Elakiya Elamaran",
  link: "",
},
  {
  title: "BizERP – Full Stack Business ERP Application",
  description:
    "Built a full-stack ERP system for managing employees, customers, inventory, sales, and procurement with secure APIs, transactional workflows, and responsive business dashboards.",
  image: "projects/project-3.webp",
  category: "Projects",
  technologies: [
    "React",
    "Tailwind CSS",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "JWT",
  ],
  organization: "",
  link: "https://github.com/jyotiyy/BizERP",
},
  {
  title: "SatarkSetu – AI-Powered MSME Loan Risk Platform",
  description:
    "Developed an AI-powered early-warning and recovery platform for Indian Bank's MSME loan portfolio during a hackathon, using borrower behavior, peer benchmarking, and regional stress indicators to identify financial distress before default.",
  image: "projects/project-4.webp",
  category: "Hackathons",
  technologies: [
    "Python",
    "Streamlit",
    "FastAPI",
    "Pandas",
    "NumPy",
    "AI/ML",
  ],
  organization: "Indian Bank Hackathon",
  link: "https://github.com/ujjawal1314/satarksetu",
},
  {
  title: "Knowledge-Grounded Generation & Hallucination Reduction",
  description:
    "Research focused on knowledge-grounded generation to improve factual reliability of language models by grounding responses in relevant external knowledge and reducing hallucinated information.",
  image: "projects/project-5.png",
  category: "Research",
  technologies: [
    "Python",
    "NLP",
    "LLMs",
    "RAG",
    "Knowledge Graphs",
  ],
  organization: "",
  link: "",
},
  {
  title: "Data Structures & Algorithms Repository",
  description:
    "A continuously maintained repository of Data Structures and Algorithms implementations, problem-solving approaches, and algorithmic solutions developed through consistent practice and learning.",
  image: "projects/project-6.jpg",
  category: "Projects",
  technologies: ["C++", "Data Structures", "Algorithms"],
  organization: "",
  link: "https://github.com/jyotiyy/DSA",
},
];
