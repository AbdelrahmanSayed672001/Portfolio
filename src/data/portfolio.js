import profileImage from '../assets/img/Personal-removebg - Copy.png';
import pmImg from '../assets/img/PM.png';
import monToolImg from '../assets/img/MonTool.png';
import cfImg from '../assets/img/CF.png';
import lmsImg from '../assets/img/LMS.jpg';
import freelanceImg from '../assets/img/Freelance.png';
import gpImg from '../assets/img/GP.png';
import pharmacyImg from '../assets/img/Pharmacy.jpg';
import studentEvalImg from '../assets/img/student evaluation.jpg';
import libraryImg from '../assets/img/Library.jpeg';
import cvPdf from '../assets/CV/AbdelrahmanSayed_SoftwareEngineer_CV.pdf';

export const SITE = {
  name: 'Abdelrahman Sayed Fathy',
  typewriterPhrases: ['Software Engineer', 'Full Stack .NET Developer'],
  email: 'abdelrahmansayed865@gmail.com',
};

export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/AbdelrahmanSayed672001' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'http://wa.me/+201119279001' },
  { id: 'phone', label: 'Call', href: 'tel:+201119279001' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelrahman-sayed-672b731b7' },
  { id: 'email', label: 'Email', href: 'mailto:abdelrahmansayed865@gmail.com' },
];

export { profileImage, cvPdf };

export const about = {
  paragraphs: [
    {
      text: 'Software Engineer and Full Stack .NET Developer with expertise in building scalable applications, designing system architectures and databases, and modernizing legacy solutions. Strong experience in deployment automation, Dockerization, production troubleshooting, and performance optimization.',
    },
    {
      text: 'Proven ability to lead junior developers, contribute to architectural decisions, and collaborate directly with enterprise customers to deliver high-quality software solutions. I design and deliver scalable web applications and REST APIs, own system architecture and database modeling, and lead legacy modernization to improve scalability, maintainability, and reliability. I manage deployments with Docker and IIS, integrate enterprise solutions with Cisco systems, and provide production support to keep systems stable and reliable.',
    },
    {
      text: 'Feel free to explore my portfolio to see my projects in detail, and do not hesitate to reach out for potential opportunities or questions!',
      highlight: true,
    },
  ],
};

export const experience = [
  {
    role: 'Software Engineer | Full Stack .NET Developer',
    period: 'Dec 2024 - Present',
    company: 'Expertflow Egypt',
    bullets: [
      'Designed and delivered scalable web applications and REST APIs used by enterprise customers.',
      'Owned system architecture design and database schema modeling for high-performance, maintainable solutions.',
      'Led modernization of legacy systems and mentored junior developers through code reviews and technical guidance.',
      'Collaborated directly with customers, resolved production issues, and managed deployments using Docker and IIS.',
      'Integrated enterprise solutions with Cisco systems (CUIC, Finesse, ICM, VVB).',
    ],
    achievements: [
      'Delivered 6+ production-grade enterprise applications',
      'Supported 6 enterprise customers',
      'Mentored 3 junior developers',
      'Improved system reliability through proactive troubleshooting and legacy refactoring',
    ],
  },
  {
    role: 'Junior .NET Developer',
    period: 'Dec 2023 - Dec 2024',
    company: 'Ministry of Communications and Information Technology',
    bullets: [
      'Developed and maintained 5+ web applications using .NET Framework up to 6, C#, ASP.NET Core MVC, SQL Server, HTML5/CSS3, JavaScript, jQuery, and Ajax.',
      'Migrated web applications from MS SQL Server on Windows to MySQL on Ubuntu with Nginx deployment, improving performance and scalability.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Computer Science',
  period: 'Sep 2019 - May 2023',
  school: 'Faculty of Computers and Artificial Intelligence, Helwan University',
  gpa: 'GPA: 3.04/4.00 (Very Good)',
};

export const skills = [
  {
    category: 'Backend & Programming',
    items: [
      'C# (Primary)',
      '.NET Core / ASP.NET Core MVC / Web API',
      '.NET 6–8',
      'Entity Framework Core, Dapper',
      'LINQ',
      'JWT Authentication',
      'MediatR (CQRS)',
      'Hangfire, Quartz.NET',
    ],
  },
  {
    category: 'Front-End & Databases',
    items: [
      'HTML5, CSS3, Bootstrap 5',
      'JavaScript, jQuery, AJAX',
      'React.js (Familiar)',
      'Angular (Familiar)',
      'SQL Server',
      'MySQL',
      'Redis (Caching)',
    ],
  },
  {
    category: 'Architecture & DevOps',
    items: [
      'System Design',
      'Database Design',
      'SOLID Principles',
      'Design Patterns',
      'Docker',
      'IIS Deployment',
      'Azure DevOps (CI/CD)',
      'Git & GitHub',
    ],
  },
  {
    category: 'Integration & Practices',
    items: [
      'RabbitMQ',
      'Cisco Integration (CUIC, Finesse, ICM, VVB)',
      'Agile Methodology',
      'Jira',
      'Code Reviews',
      'Production Support & Troubleshooting',
    ],
  },
];

export const projects = [
  {
    id: 'prompt-management',
    slug: 'prompt-management',
    title: 'Prompt Management',
    summary:
      'An on-premises solution designed to simplify and govern the management of IVR announcement prompts in Cisco UCCE environments. It provides a secure, role-based interface that allows supervisors to publish dynamic audio announcements — such as holiday messages, service outage alerts, or informational notices — directly into the IVR call flow.',
    image: { url: pmImg },
    tags: ['Cisco UCCE', 'IVR', 'Enterprise'],
  },
  {
    id: 'montool',
    slug: 'montool',
    title: 'MonTool',
    summary:
      'A centralized, web-based platform designed to provide operational visibility and proactive issue detection for contact center environments. It works by aggregating data across Cisco systems, network devices, and Eleveo recording servers.',
    image: { url: monToolImg },
    tags: ['Monitoring', 'Cisco', 'Contact Center'],
  },
  {
    id: 'customer-first',
    slug: 'customer-first',
    title: 'Customer First',
    summary:
      'A powerful feedback tool that enables customers to share insights about their contact center experiences, helping centers recognize areas for improvement and elevate the customer experience. Feedback can be collected via phone call, website link, email or SMS link, or an IVR menu option. The application gathers satisfaction levels, contact reasons, and comments — enabling trend analysis and data-driven decisions to improve service quality, customer satisfaction, and loyalty.',
    image: { url: cfImg },
    tags: ['Feedback', 'Analytics', 'Contact Center'],
  },
  {
    id: 'lms',
    slug: 'lms',
    title: 'LMS',
    summary:
      'A web application developed by .NET 8 and MS SQL Server that contains free several courses. Studens can Register into the system to enrol courses. Admin can manage instructors, courses and students',
    image: { url: lmsImg },
    tags: ['.NET 8', 'SQL Server', 'Education'],
  },
  {
    id: 'freelancing',
    slug: 'freelancing',
    title: 'Freelancing initiative',
    summary:
      'Web application that allows registered trainees to create account in the system and download their certificates if they completed a course. Admins have a dashboard that contains a set of statistics that make the administrator manage the system easily.',
    image: { url: freelanceImg },
    tags: ['Web App', 'Certificates', 'Training'],
  },
  {
    id: 'book-summarization',
    slug: 'book-summarization',
    title: 'Multi languages book summarization',
    summary:
      'A web application developed by .NET 6, MS SQL Server and FastAPI that summarize large Arabic and English books using NLP models',
    image: { url: gpImg },
    tags: ['NLP', 'FastAPI', '.NET 6'],
  },
  {
    id: 'e-pharmacy',
    slug: 'e-pharmacy',
    title: 'E-Pharmacy',
    summary:
      'Web application for ordering medicines by user. Admin can manage orders. This project used ASP.NET 6 web API, JWT and web Application.',
    image: { url: pharmacyImg },
    tags: ['ASP.NET 6', 'JWT', 'Healthcare'],
  },
  {
    id: 'student-evaluation',
    slug: 'student-evaluation',
    title: 'Student Evaluation',
    summary:
      'Developed a Rest web API using ASP.NET 6. Students can evaluate their teachers and teachers can display their feedback',
    image: { url: studentEvalImg },
    tags: ['ASP.NET 6', 'REST API', 'Education'],
  },
  {
    id: 'library',
    slug: 'library',
    title: 'Library',
    summary:
      'An API project as an example for Repository design pattern uning Unit of Work',
    image: { url: libraryImg },
    tags: ['API', 'Repository Pattern', 'Unit of Work'],
  },
];
