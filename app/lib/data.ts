import { Certificate } from "crypto";

export const projects = [
  {
    title: "TaskMate (FYP)",
    description:
      "TaskMate is mobile application connects clients with skilled Service Providers like plumbers, electricians, and mechanics.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SplashScreen-Vj4qGuiVsCohOyhxOKy1nyv8pcfhz8.png",
    ],
    link: "https://github.com/huzaifalidev",
    tags: ["React Native", "Node.js", "MongoDB", "Figma", "SRS"],
    showModal: true,
    isMobileApp: true,
  },
  {
    title: "CGPA Calculator",
    description:
      "A mobile app for calculating university CGPA with dynamic course addition, grade selection, and real-time GPA calculation.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splash-icon-0rhhsBtGLGVL19umbEg0etFCsIPjZy.png",
    ],
    link: "https://github.com/huzaifalidev",
    tags: ["React Native", "JavaScript", "Mobile UI/UX"],
    showModal: true,
    isMobileApp: true,
  },
  {
    title: "QuizMaster : SaaS-Based Quiz Platform",
    description:
      "QuizMaster is an AI-powered SaaS quiz platform for education, training, and assessments. It lets organizations create, manage, and deliver smart quizzes with AI-generated questions, strict anti-cheating (tab switch detection, proctoring), and detailed performance reports.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-27%20140922-2auuDp2XZk0lYE6b8Zl23TcRqi9H4q.png",
    ],
    link: "https://github.com/huzaifalidev",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Oracle Cloud",
      "Nginx",
      "Docker",
      "CI/CD",
    ],
    showModal: true,
    isMobileApp: false,
  },
  {
    title: "Multi-tier HA & Scalable AWS Infrastructure",
    description:
      "Deployed a highly available and scalable web application on AWS EC2 instances with Elastic Load Balancer, utilizing multiple availability zones for high reliability and fault tolerance.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%203in1%20Final%20project%20%28V1.0%29_page-0001.jpg-l7NdZtjVJBbe9zVHaBzVLd5Zl8x8R5.jpeg",
    ],
    link: "https://github.com/huzaifalidev",
    tags: ["AWS", "EC2", "RDS", "VPC", "Load Balancer", "Auto Scaling", "High Availability"],
    showModal: true,
    isMobileApp: false,
  },
  {
    title: "Decentralized NFT Auction",
    description:
      "A decentralized auction platform for NFTs, allowing users to create, bid, and manage NFT auctions securely on the blockchain.",
    images: [
      "/assets/decentralized-auction/1.png",
      "/assets/decentralized-auction/2.png",
      "/assets/decentralized-auction/3.png",
    ],
    link: "https://github.com/huzaifalidev",
    tags: ["Solidity", "Meta Mask", "Hardhat", "IPFS", "React Js", "Nest Js", "MongoDB", "Shadcn UI"],
    showModal: true,
    isMobileApp: false,
  },
]


export const educationItems = [
  {
    title: "Bachelor of Computer Science",
    institution: "SZABIST University",
    period: "01/2021 - 01/2025",
  },
  {
    title: "Modern Web Application",
    institution: "SMIT Karachi",
    period: "09/2024 - Present",
  },
  {
    title: "AWS Cloud",
    institution: "SHERDIL IT Karachi",
    period: "05/2024 - 09/2024",
  },
];

export const experienceItems = [
  {
    title: "Software Engineer",
    company: "SAYLANI TECH LIMITED",
    location: "Karachi, Pakistan",
    period: "10/2024 - Present",
    responsibilities: [
      "Led Development Team: Managed frontend and backend development, ensuring smooth project execution.",
      "Project & Task Management: Organized meetings, assigned tasks, and tracked progress.",
      "GitHub Management: Handled version control, code reviews, and collaboration.",
      "UI/UX Improvements: Enhanced design for a better user experience.",
      "Backend Development: Built secure and scalable APIs using Node.",
      "Presentations & Reports: Provided updates to stakeholders and team members.",
      "Deployment & Maintenance: Managed deployment, performance tuning, and system optimization.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "AFROZE TEXTILE",
    location: "Karachi, Pakistan",
    period: "06/2024 - 08/2024",
    responsibilities: [
      "Supported the IT team by troubleshooting network issues, setting up hardware, and ensuring smooth IT operations.",
      "Learned key concepts like resource management, troubleshooting, and optimizing performance in an on-premises environment.",
      "Gained hands-on experience in managing physical servers, networks, and systems.",
    ],
  },
];
export const certifications = [
  {
    title: "JavaScript Essentials 1",
    description:
      "Verified JavaScript Essentials 1 certification from Cisco Networking Academy, demonstrating proficiency in JavaScript fundamentals.",
    image: "assets/certifications/javascript-essentials-1.png",
    link: "https://www.credly.com/badges/db14a578-1497-4b58-9b97-07ac28ef1268",
    alt: "Cisco JavaScript Essentials 1 Certification",
    imageSize: { width: 250, height: 250 },
  },
  {
    title: "JavaScript Essentials 2",
    description:
      "Verified JavaScript Essentials 2 certification from Cisco Networking Academy, demonstrating proficiency in advanced JavaScript concepts.",
    image: "assets/certifications/javascript-essentials-2.png",
    link: "https://www.credly.com/badges/4f996bcd-e7b1-404e-adbe-13d2502d21d2",
    alt: "Cisco JavaScript Essentials 2 Certification",
    imageSize: { width: 250, height: 250 },
  },
  {
    title: "AWS Solutions Architect/SysOps Admin/Developer Associate",
    description:
      "Certified AWS Solutions Architect, SysOps Administrator, and Developer Associate, experienced in building secure, scalable, and efficient cloud solutions on AWS.",
    image: "assets/certifications/aws_certificate.png",
    link: "assets/certifications/aws_certificate.pdf",
    alt: "AWS Solutions Architect/SysOps Admin/Developer Associate Certification",
    imageSize: { width: 350, height: 350 },
  },
  {
    title: "Saylani Bootcamp",
    description:
      "Successfully completed the Saylani Bootcamp, gaining hands-on experience in Web & App development.",
    image: "assets/certifications/saylani_bootcamp_certificate.png",
    link: "assets/certifications/saylani_bootcamp_certificate.pdf",
    alt: "Saylani Bootcamp Certificate",
    imageSize: { width: 350, height: 350 },
  }

];