import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github,
  Award,
  Globe
} from 'lucide-react';
import showlabImg from './assets/Showlab.png';

export const portfolioData = {
  personalInfo: {
    name: "Mahim Vyas",
    title: "Full Stack Developer & UI/UX Enthusiast",
    email: "mahimvyas205@gmail.com",
    phone: "+91 7073423234", // Placeholder
    location: "Pune, Maharashtra, India", // Placeholder
    linkedin: "https://linkedin.com/in/MahimVyas",
    github: "https://github.com/MahimVyas",
    website: "https://your-portfolio.com", // Placeholder
  },
  summary: "Results-driven Full Stack Developer with experience in building scalable web applications. Passionate about creating intuitive user interfaces and robust backend systems. Adept at collaborating with cross-functional teams to deliver high-quality digital solutions. Constantly learning new technologies to stay ahead in the fast-paced tech industry.",
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Docker", "AWS", "VS Code", "Figma", "Jira"]
    }
  ],
  experience: [],
  achievements: [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "Secured 1st position in university-level coding hackathon for building a sustainable energy tracker.",
      date: "2023",
      category: "Competition"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Merged 5+ PRs in popular React libraries including documentation fixes and bug patches.",
      date: "2023 - Present",
      category: "Community"
    },
    {
      id: 3,
      title: "Coding Competitive Platform",
      description: "Solved 300+ problems on LeetCode/CodeChef with a focus on Data Structures and Algorithms.",
      date: "2022 - Present",
      category: "Self Development"
    }
  ],
  interests: [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Deeply interested in LLMs, Neural Networks, and their application in modern web apps."
    },
    {
      id: 2,
      title: "System Design",
      description: "Studying scalable architecture patterns, microservices, and distributed systems."
    },
    {
      id: 3,
      title: "Tech Community",
      description: "Active participant in tech twitter, following engineering blogs of Uber, Netflix, and Airbnb."
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science Engineering",
      institution: "D.Y Patil International University",
      location: "Pune, Maharashtra, India",
      date: "2023 - 2027",
      description: "Graduated with Computer Science Engineering and Artificial Intelligence."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Livora",
      link: "https://mahimvyas.github.io/Livora/",
      github: "https://github.com/MahimVyas/Livora",
      image: "https://private-user-images.githubusercontent.com/152497367/426549561-34f90a74-531c-49d1-87d5-7e5c0b8d7df5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE0MjI2NzUsIm5iZiI6MTc3MTQyMjM3NSwicGF0aCI6Ii8xNTI0OTczNjcvNDI2NTQ5NTYxLTM0ZjkwYTc0LTUzMWMtNDlkMS04N2Q1LTdlNWMwYjhkN2RmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxOFQxMzQ2MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZWNiODAxNzczZmM1NDBlMDQ2OTZkYTJiOTQ0YmI2NzYwMTc5M2RlNzcwOWYwYjBhZWZiNDlkNjEyOWZiZmI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9._E5C6OZJKS6gONqdvb2Sk2iLFUpvsDN7mHFUF1bm6Uc",
      tech: ["Firebase", "JavaScript", "CSS", "HTML"],
      description: "A comprehensive platform connecting students with hostel owners. Features include user authentication, real-time booking, and an admin dashboard for property management."
    },
    {
      id: 2,
      title: "ShowLab",
      link: "https://mahimvyas.github.io/ShowLab/",
      github: "https://github.com/MahimVyas/ShowLab",
      image: showlabImg,
      tech: ["Next.js", "TypeScript", "Prisma"],
      description: "A modern portfolio and tools hub built with React. Showcase your skills and use handy tools for images, videos, and PDFs—all in one place."
    },
    {
      id: 3,
      title: "Task Management App",
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      description: "A collaborative task management tool with drag-and-drop functionality, real-time updates using WebSockets, and team collaboration features."
    }
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      id: 2,
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera",
      date: "2022"
    }
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/MahimVyas",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/MahimVyas",
      icon: Github
    },
    {
      name: "Email",
      url: "mailto:mahimvyas205@gmail.com",
      icon: Mail
    }
  ]
};
