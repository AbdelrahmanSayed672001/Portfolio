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
      'Prompt Management Tool is an enterprise-grade platform designed to centralize the management of IVR audio prompts used by Cisco CVP call flows. The system enables administrators to upload, schedule, activate, and maintain audio announcements through a secure web interface, eliminating manual file management and reducing operational complexity.\n\nKey Contributions:\n• Designed and developed a multi-tier architecture consisting of a Web UI, REST APIs, and a centralized SQL Server database.\n• Implemented secure, web-based file maintenance workflows to upload and distribute WAV files to shared directories.\n• Built scheduled activation logic allowing business teams to dynamically control IVR prompts using precise date and time intervals.\n• Developed real-time status validation mechanisms via API integration with Cisco CVP XML Services.\n• Integrated Active Directory to enforce secure authentication and authorization across the platform.\n• Separated metadata management from physical file storage to optimize prompt retrieval and system security.\n\nCore Capabilities:\n• Centralized IVR prompt management\n• Web-based WAV file upload and maintenance\n• Scheduled activation and time-interval controls\n• Enable/Disable overrides for rapid operational changes\n• Real-time Cisco CVP status validation via APIs\n• Secure prompt metadata storage and retrieval\n• Shared directory management for prompt distribution\n\nTechnologies:\nASP.NET Core, C#, SQL Server, REST APIs, Active Directory, IIS, Cisco CVP, XML Services, HTML, CSS, JavaScript.',
    image: { url: pmImg },
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'REST APIs', 'Active Directory', 'IIS', 'Cisco CVP', 'XML Services', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'montool',
    slug: 'montool',
    title: 'MonTool',
    summary:
      'MonTool is an enterprise-grade monitoring and alerting platform designed for Cisco Contact Center environments. The system aggregates alerts, SNMP traps, network diagnostics, server health information, database thresholds, and recording-system events into a centralized real-time monitoring dashboard.\n\nKey Contributions:\n• Designed and implemented distributed background services responsible for collecting, processing, normalizing, and routing monitoring events.\n• Developed SNMP monitoring services supporting SNMP v1, v2, and v3 for Cisco CUIC, VVB, ICM, and external systems.\n• Built health-monitoring services for Cisco Finesse, Eleveo recording servers, private network connectivity, HDS database utilization, and call-recording integrity.\n• Implemented event-driven processing using RabbitMQ queues to support scalable trap ingestion and asynchronous processing.\n• Leveraged Redis caching and real-time dashboard updates to significantly improve monitoring responsiveness.\n• Containerized monitoring services using Docker to simplify infrastructure deployment and horizontal scalability.\n• Developed automated notification services supporting email and SMS alert delivery based on configurable rules.\n• Built scheduled reporting and export functionality for PDF and Excel generation.\n\nCore Capabilities:\n• Real-time monitoring pipeline and dashboard\n• Cisco Contact Center component health checks (CUIC, VVB, ICM, Finesse)\n• Eleveo recording infrastructure and verification\n• Private network and database capacity monitoring (HDS)\n• Event-driven asynchronous processing and SNMP trap normalization\n• Automated alerting (Email/SMS) and scheduled reporting\n\nTechnologies:\nASP.NET Core MVC, Web API, SQL Server, RabbitMQ, Redis, Docker, SNMP, SSH, Background Services, SMTP, SMS Gateway, PDF Reporting, Cisco Contact Center Enterprise (CCE).',
    image: { url: monToolImg },
    tags: ['ASP.NET Core MVC', 'Web API', 'SQL Server', 'RabbitMQ', 'Redis', 'Docker', 'SNMP', 'SSH', 'Background Services', 'SMTP', 'SMS Gateway', 'PDF Reporting', 'Cisco Contact Center Enterprise (CCE)'],
  },
  {
    id: 'customer-first',
    slug: 'customer-first',
    title: 'Customer First',
    summary:
      'Customer First is a multi-tenant enterprise feedback platform used by contact centers to collect, analyze, and act on customer satisfaction data across Voice, SMS, Email, and Web channels. The platform enables organizations to measure Customer Satisfaction (CSAT), Customer Effort Score (CES), and service quality through automated post-interaction surveys and real-time reporting.\n\nKey Contributions:\n• Designed and developed features across a multi-tenant architecture where each customer environment maintains isolated data, configuration, and licensing.\n• Built and enhanced RESTful APIs enabling integration with third-party systems and contact center platforms.\n• Implemented automated survey workflows triggered immediately after customer-agent interactions.\n• Developed real-time dashboards, reporting modules, and export functionality (PDF/Excel).\n• Integrated with Cisco Contact Center platforms (CCX/CCE) for agent synchronization and customer interaction workflows.\n• Developed notification services supporting email and SMS alerts based on configurable survey rules and thresholds.\n• Participated in database design, performance optimization, deployment, troubleshooting, and production support activities.\n\nCore Capabilities:\n• Multi-channel surveys (Voice, SMS, Email, Web)\n• Real-time dashboards and analytics\n• Campaign management and scheduling\n• Automated notifications and alerts\n• Multilingual support\n• Multi-tenancy and licensing\n• PDF and Excel reporting\n\nTechnologies:\nASP.NET Core MVC, Web API, SQL Server, JavaScript, jQuery, Windows Services, Cisco CCX/CCE Integration, SMTP, SMS Gateway, IIS.',
    image: { url: cfImg },
    tags: ['ASP.NET Core MVC', 'Web API', 'SQL Server', 'JavaScript', 'jQuery', 'Windows Services', 'Cisco CCX/CCE Integration', 'SMTP', 'SMS Gateway', 'IIS'],
  },
  {
    id: 'lms',
    slug: 'lms',
    title: 'LMS',
    summary:
      'The Learning Management System (LMS) is a web-based educational platform designed to provide students with easy access to online learning resources while enabling administrators and instructors to efficiently manage educational content. The system serves as a centralized hub for course enrollment, content delivery, student management, and learning progress tracking.\n\nKey Contributions:\n• Designed and developed a layered architecture following SOLID principles and clean separation of concerns.\n• Built RESTful APIs to handle core business operations, data access, and course enrollment workflows.\n• Developed student and instructor management modules alongside role-based access control for administrative functions.\n• Implemented progress tracking mechanisms to monitor student course consumption and completion status.\n• Structured database schemas to manage relational data including users, courses, lessons, and enrollments.\n\nCore Capabilities:\n• Student registration, authentication, and role-based access control\n• Course catalog with enrollment, search, and filtering functionality\n• Instructor management and course assignment\n• Course content organization into structural lessons and modules\n• Student progress tracking, completion monitoring, and management dashboards\n\nTechnologies:\nASP.NET Core (.NET 8), C#, SQL Server, Entity Framework Core, HTML, CSS, Bootstrap, JavaScript.',
    image: { url: lmsImg },
    tags: ['ASP.NET Core (.NET 8)', 'C#', 'SQL Server', 'Entity Framework Core', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],  },
  {
    id: 'freelancing',
    slug: 'freelancing',
    title: 'Freelancing initiative',
    summary:
      'The Freelancing Initiative Platform is a training and certification management system designed to support trainees participating in professional development and freelancing programs. The platform enables participants to register, manage their profiles, and download earned certificates, while providing administrators with operational insights through analytical dashboards.\n\nKey Contributions:\n• Developed a multi-layer architecture completely separating the presentation, business logic, and data layers.\n• Implemented an automated certificate validation and secure retrieval pipeline based on course completion rules.\n• Built an administrative dashboard powered by aggregated database statistics to provide real-time operational insights.\n• Optimized complex database queries to ensure rapid reporting, analytics generation, and seamless participant tracking.\n• Enforced secure user authentication and authorization across distinct user roles.\n\nCore Capabilities:\n• User registration, profile management, and role-based access control\n• Automated certificate generation and secure downloading\n• Course completion validation prior to certificate issuance\n• Administrative dashboards with real-time statistics and participation analytics\n• Search and filtering capabilities for efficient participant tracking\n\nTechnologies:\nASP.NET Core, C#, SQL Server, Entity Framework Core, HTML, CSS, Bootstrap, JavaScript.',
    image: { url: freelanceImg },
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    id: 'book-summarization',
    slug: 'book-summarization',
    title: 'Multi languages book summarization',
    summary:
      'The Multi-Language Book Summarization Platform is an AI-powered web application designed to generate concise summaries from large Arabic and English books. The platform combines Natural Language Processing (NLP), transformer-based language models, and custom ranking algorithms to extract and generate meaningful summaries from lengthy documents.\n\nKey Contributions:\n• Designed a hybrid microservice-style architecture combining an ASP.NET Core backend with Python-based FastAPI services.\n• Implemented a multi-stage Arabic summarization pipeline featuring text cleaning, LexRank sentence ranking, and AraBART transformer models.\n• Built an English summarization pipeline utilizing structure analysis, TextRank, and Long-T5 transformer models for high-capacity document processing.\n• Developed RESTful communication bridges between the .NET application and Python NLP engines to handle books spanning thousands of pages.\n• Configured GPU-compatible processing environments to optimize the execution performance of heavy transformer models.\n\nCore Capabilities:\n• Large PDF book parsing and processing\n• Multilingual support (Arabic and English) with custom text preprocessing\n• Automatic chapter and section extraction with intelligent content ranking\n• AI-generated abstractive and multi-pass summarization pipelines\n• Seamless REST API integration between web services and NLP engines\n\nTechnologies:\nASP.NET Core (.NET 6), FastAPI, Python, SQL Server, NLP, Hugging Face Transformers, AraBART, AraBERT, BERT, Long-T5, NLTK, PyTorch.',
    image: { url: gpImg },
    tags: ['ASP.NET Core (.NET 6)', 'FastAPI', 'Python', 'SQL Server', 'NLP', 'Hugging Face Transformers', 'AraBART', 'AraBERT', 'BERT', 'Long-T5', 'NLTK', 'PyTorch'],
  },
  {
    id: 'e-pharmacy',
    slug: 'e-pharmacy',
    title: 'E-Pharmacy',
    summary:
      'E-Pharmacy is an online healthcare platform that enables customers to browse, search, and order pharmaceutical products through a secure digital experience. The system provides order management capabilities for administrators while ensuring secure user authentication and efficient order processing.\n\nKey Contributions:\n• Developed a secure, layered RESTful API architecture utilizing ASP.NET Core Web API with a clear separation of concerns.\n• Implemented JWT-based authentication and authorization to safeguard sensitive customer data and transactional endpoints.\n• Built shopping cart modules and online order placement workflows targeting an optimized e-commerce user experience.\n• Designed and integrated relational SQL Server database tables to handle rapid transactional product and order data.\n• Developed backend order tracking and administration tools to manage inventory and update order statuses.\n\nCore Capabilities:\n• User registration, secure login, and protected API communication\n• Medicine catalog browsing, searching, categorization, and filtering\n• Interactive shopping cart and online order placement\n• Real-time order tracking and status updates for customers\n• Centralized administrative panel for order and inventory management\n\nTechnologies:\nASP.NET Core Web API (.NET 6), C#, SQL Server, JWT Authentication, Entity Framework Core.',
    image: { url: pharmacyImg },
    tags: ['ASP.NET Core (.NET 6)', 'C#', 'SQL Server', 'JWT Authentication', 'Entity Framework Core'],
  },
  {
    id: 'student-evaluation',
    slug: 'student-evaluation',
    title: 'Student Evaluation',
    summary:
      'The Student Evaluation System is a RESTful API platform that enables students to anonymously evaluate instructors and provide structured feedback regarding teaching quality, course delivery, and overall learning experience.\n\nKey Contributions:\n• Architected and developed an API-first platform using ASP.NET Core Web API tailored for handling high volumes of evaluations.\n• Implemented anonymous data collection mechanisms to protect student privacy while maintaining strict evaluation rules.\n• Built aggregation engines and database analytical logic to calculate, process, and summarize instructor performance scores.\n• Integrated secure authentication and role-based access mechanisms to separate student submissions from faculty reporting.\n• Developed historical tracking capabilities to monitor feedback trends across multiple academic terms.\n\nCore Capabilities:\n• Anonymous student evaluation and feedback submission\n• Instructor performance reporting, evaluation aggregation, and statistical analytics\n• Secure role-based access control and token-based protection\n• Historical feedback tracking and data trends\n• RESTful API endpoints ready for external institutional integration\n\nTechnologies:\nASP.NET Core Web API (.NET 6), C#, SQL Server, Entity Framework Core.',
    image: { url: studentEvalImg },
    tags: ['ASP.NET Core (.NET 6)', 'C#', 'SQL Server', 'Entity Framework Core'],
  },
  {
    id: 'library',
    slug: 'library',
    title: 'Library',
    summary:
      'The Library Management API is a backend application developed to demonstrate enterprise software architecture patterns and best practices. The project provides APIs for managing books, authors, borrowers, and lending operations while showcasing a clean architecture implementation.\n\nKey Contributions:\n• Built a highly maintainable enterprise codebase leveraging Clean Architecture principles and Dependency Injection.\n• Implemented a decoupled data access layer utilizing a generic Repository Pattern alongside the Unit of Work pattern.\n• Enforced strict transaction management to ensure absolute data consistency across complex borrowing and return workflows.\n• Developed flexible search, sorting, and filtering logic for library resources using Entity Framework Core.\n• Created a reusable generic architectural blueprint that serves as a foundation for scalable, data-driven systems.\n\nCore Capabilities:\n• Full CRUD management for books, authors, and borrowers\n• Transactional borrowing and return operations\n• Reusable generic data access layer with Repository and Unit of Work integration\n• Advanced query filtering and search functionality\n• Consistent database transaction processing\n\nTechnologies:\nASP.NET Core Web API, C#, SQL Server, Entity Framework Core, Repository Pattern, Unit of Work Pattern.',
    image: { url: libraryImg },
    tags: ['ASP.NET Core (.NET 6)', 'C#', 'SQL Server', 'Entity Framework Core', 'Repository Pattern', 'Unit of Work Pattern'],
  },
];
