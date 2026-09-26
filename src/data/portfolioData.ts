import { Technology, Project, ExperienceItem, CurriculumTopic, EducationYear } from '../types/index.ts';

export const PERSONAL_INFO = {
  name: 'Hong Eng Vathana',
  brand: 'HEV',
  role: 'Software Engineer',
  education: 'Year 4 Computer Science Student',
  experienceDuration: '1 Year Professional Experience (Remote)',
  trainingDuration: '2 Years Remote Training (Continuing with Distributed Projects)',
  training: '2 Years Software Development Training at Simpaz Training Center (Remote, Continuing with Distributed Projects)',
  location: 'Cambodia (Remote)',
  workplaceType: '100% Remote',
  email: 'engvathanahong@gmail.com',
  github: 'https://github.com/HongEngVathana',
  linkedin: 'https://www.linkedin.com/in/hong-engvathana-154796321/',
  simpazUrl: 'https://training.simpaz.com/',
  philosophy: '“Better Than Yesterday. Always Learning.”',
  supportingPhilosophy:
    'Knowledge is my priority. I believe continuous learning is the foundation of growth.',
  philosophyCycle: ['Learn', 'Practice', 'Build', 'Improve', 'Become Better'],
  heroHeading: 'SOFTWARE ENGINEER',
  heroSubheading: 'Building Scalable Digital Products.',
  heroDescription:
    'Software Engineer and Year 4 Computer Science student with 2 years of practical software development training from Simpaz Training Center (currently continuing with distributed projects) and 1 year of professional software engineering experience building web, mobile, and backend applications — 100% remotely.',
};

export const SIMPAZ_CURRICULUM: { [key: string]: CurriculumTopic } = {
  entry: {
    title: 'Entry Level',
    items: [
      'Programming Fundamentals',
      'HTML',
      'CSS',
      'Wireframing',
      'Soft Skills',
      'Git / Source Control',
      'Documentation',
      'Requirement Gathering',
      'Jasmine / Karma',
      'Basic Hosting',
      'Bootstrap',
      'JavaScript Basics',
      'Agile / Scrum',
    ],
  },
  junior: {
    title: 'Junior Level',
    items: [
      'Advanced JavaScript',
      'jQuery',
      'TypeScript',
      'Angular',
      'Node.js',
      'Mocking',
      'Testing',
      'REST API',
      'Load Testing',
      'MVC',
      'C# Basics',
      'Git',
      'Postman',
      'TDD Basics',
      'Team Collaboration',
    ],
  },
  middle: {
    title: 'Middle Level',
    items: [
      'MVC / MVVM',
      'Design Patterns',
      'Domain-Driven Design',
      'Advanced TDD',
      'Web API',
      'Docker',
      'UML',
      'Logging / Auditing',
      'UX / UI',
      'ORM',
      'Web Security',
      'Authentication / Authorization',
      'Advanced OOP',
      'Hosting',
    ],
  },
  seniorTopics: {
    title: 'Senior-Level Topics',
    items: [
      'Advanced Design Patterns',
      'Microservices',
      'Database Design',
      'ETL',
      'NoSQL / Document Databases',
      'Automated Testing',
      'Resilience',
      'AWS Cloud',
      'SSO',
      'Software Engineering',
      'Agile / Scrum',
      'Team Leadership',
      'DevOps / CI/CD',
      'Deployment',
    ],
  },
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    organization: 'Enterprise & Client Solutions',
    period: '1 Year Professional Experience',
    locationType: 'Remote',
    type: 'Professional Experience',
    description:
      'Engineered and delivered web, mobile, and backend applications in a 100% remote setting with focus on maintainability, structured clean architecture, and reliable APIs in a distributed team.',
    responsibilities: [
      'Built reactive frontend web interfaces utilizing Angular and TypeScript in a remote workflow.',
      'Developed cross-platform mobile application modules using Flutter and Dart.',
      'Designed and integrated robust RESTful backend endpoints with C# and ASP.NET Core.',
      'Modeled relational database schemas and performed query optimization in PostgreSQL.',
      'Integrated Firebase services including Firestore and real-time cloud data pipelines.',
      'Actively participated in remote Agile/Scrum ceremonies, sprint planning, and backlog refinement.',
      'Conducted peer code reviews, enforced architectural standards, and assisted requirement analysis.',
      'Collaborated seamlessly across distributed timezones using Git/GitHub and asynchronous communication.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Flutter',
      'C# / .NET',
      'REST APIs',
      'PostgreSQL',
      'Firebase',
      'Git / GitHub',
      'Agile / Scrum',
      'Remote Collaboration',
    ],
  },
  {
    role: 'Software Development Student / Trainee',
    organization: 'Simpaz Training Center',
    period: '2 Years Training (Continuing with Distributed Projects)',
    locationType: 'Remote',
    type: 'Education & Training',
    description:
      '2 years of practical software development training completed 100% remotely, focused on programming fundamentals, software engineering practices, real-world development workflows, testing, architecture, Agile/Scrum, and modern software technologies. Currently continuing advanced training focused on distributed projects and systems engineering.',
    responsibilities: [
      'Completed 2-year comprehensive hands-on curriculum remotely covering programming from fundamentals to advanced patterns.',
      'Actively continuing advanced training with distributed projects, service communication, and microservices.',
      'Practiced Test-Driven Development (TDD) with Jasmine, Karma, and automated testing frameworks.',
      'Implemented MVC, MVVM, Service Layer, and Repository patterns across web and backend projects.',
      'Gained deep practical insight into Docker containerization, ORM integration, and web API security.',
      'Simulated production sprint cycles, remote team coordination, UML modeling, and code auditing.',
    ],
    technologies: [
      'Distributed Systems',
      'Angular',
      'TypeScript',
      'C#',
      '.NET',
      'Docker',
      'TDD',
      'REST API',
      'Clean Architecture',
      'Agile / Scrum',
      'Remote Learning',
    ],
  },
];

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: 'Angular', category: 'Frontend', slug: 'angular', color: '#DD0031' },
  { name: 'TypeScript', category: 'Frontend', slug: 'typescript', color: '#3178C6' },
  { name: 'JavaScript', category: 'Frontend', slug: 'javascript', color: '#F7DF1E' },
  { name: 'HTML5', category: 'Frontend', slug: 'html5', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', slug: 'css3', color: '#1572B6' },
  { name: 'Bootstrap', category: 'Frontend', slug: 'bootstrap', color: '#7952B3' },
  { name: 'RxJS', category: 'Frontend', slug: 'reactivex', color: '#B7178C' },

  // Backend
  { name: 'C#', category: 'Backend', slug: 'csharp', color: '#239120' },
  { name: '.NET', category: 'Backend', slug: 'dotnet', color: '#512BD4' },
  { name: 'ASP.NET Core', category: 'Backend', slug: 'dotnet', color: '#512BD4' },
  { name: 'REST API', category: 'Backend', slug: 'fastapi', color: '#009688' },
  { name: 'Entity Framework', category: 'Backend', slug: 'dotnet', color: '#512BD4' },
  { name: 'PHP', category: 'Backend', slug: 'php', color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', slug: 'laravel', color: '#FF2D20' },
  { name: 'Node.js', category: 'Backend', slug: 'nodedotjs', color: '#5FA04E' },

  // Mobile
  { name: 'Flutter', category: 'Mobile', slug: 'flutter', color: '#02569B' },
  { name: 'Dart', category: 'Mobile', slug: 'dart', color: '#0175C2' },
  { name: 'Firebase', category: 'Mobile', slug: 'firebase', color: '#FFCA28' },
  { name: 'SQLite', category: 'Mobile', slug: 'sqlite', color: '#003B57' },
  { name: 'Android Java', category: 'Mobile', slug: 'android', color: '#3DDC84' },
  { name: 'Swift', category: 'Mobile', slug: 'swift', color: '#F05138' },

  // Database
  { name: 'PostgreSQL', category: 'Database', slug: 'postgresql', color: '#4169E1' },
  { name: 'SQL Server', category: 'Database', slug: 'microsoftsqlserver', color: '#CC292B' },
  { name: 'Firestore', category: 'Database', slug: 'firebase', color: '#FFA000' },

  // Architecture
  { name: 'Clean Architecture', category: 'Architecture', slug: 'blueprint', color: '#2563EB' },
  { name: 'SOLID Principles', category: 'Architecture', slug: 'target', color: '#0F766E' },
  { name: 'Repository Pattern', category: 'Architecture', slug: 'git', color: '#4F46E5' },
  { name: 'Dependency Injection', category: 'Architecture', slug: 'dependabot', color: '#0284C7' },
  { name: 'MVVM & MVC', category: 'Architecture', slug: 'airplayvideo', color: '#6366F1' },

  // Testing
  { name: 'xUnit', category: 'Testing', slug: 'checkmarx', color: '#16A34A' },
  { name: 'NUnit', category: 'Testing', slug: 'nuget', color: '#004880' },
  { name: 'Jasmine', category: 'Testing', slug: 'jasmine', color: '#8A4182' },
  { name: 'Playwright', category: 'Testing', slug: 'playwright', color: '#2EAD33' },
  { name: 'Selenium', category: 'Testing', slug: 'selenium', color: '#43B02A' },
  { name: 'TDD', category: 'Testing', slug: 'speedtest', color: '#D97706' },

  // Tools & DevOps
  { name: 'Git', category: 'Tools', slug: 'git', color: '#F05032' },
  { name: 'GitHub', category: 'Tools', slug: 'github', color: '#181717' },
  { name: 'Docker', category: 'Tools', slug: 'docker', color: '#2496ED' },
  { name: 'Postman', category: 'Tools', slug: 'postman', color: '#FF6C37' },
  { name: 'Visual Studio', category: 'Tools', slug: 'visualstudio', color: '#5C2D91' },
  { name: 'VS Code', category: 'Tools', slug: 'visualstudiocode', color: '#007ACC' },
  { name: 'Android Studio', category: 'Tools', slug: 'androidstudio', color: '#3DDC84' },

  // UI / UX
  { name: 'Figma', category: 'UI/UX', slug: 'figma', color: '#F24E1E' },
  { name: 'Miro', category: 'UI/UX', slug: 'miro', color: '#050038' },
];

export const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'RxJS', 'Responsive Web Design'],
    icon: 'ri-window-line',
  },
  {
    category: 'Backend Development',
    skills: ['C#', '.NET', 'ASP.NET Core', 'REST API', 'Entity Framework', 'PHP', 'Laravel', 'Node.js'],
    icon: 'ri-server-line',
  },
  {
    category: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Android Java', 'Swift'],
    icon: 'ri-smartphone-line',
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'SQL Server', 'SQLite', 'Firestore'],
    icon: 'ri-database-2-line',
  },
  {
    category: 'Architecture',
    skills: [
      'Clean Architecture',
      'SOLID',
      'Repository Pattern',
      'Service Layer',
      'Dependency Injection',
      'MVVM',
      'MVC',
      'OOP',
      'Design Patterns',
    ],
    icon: 'ri-node-tree',
  },
  {
    category: 'Testing',
    skills: ['xUnit', 'NUnit', 'Jasmine', 'Selenium', 'Playwright', 'Integration Testing', 'UI / E2E Testing', 'TDD'],
    icon: 'ri-shield-check-line',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Visual Studio', 'VS Code', 'Android Studio', 'SSMS'],
    icon: 'ri-tools-line',
  },
  {
    category: 'UI / UX',
    skills: ['Figma', 'Miro', 'Wireframing', 'User Flow', 'Prototyping', 'UI Design', 'UX Design'],
    icon: 'ri-layout-masonry-line',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-workflow',
    title: 'Enterprise Workflow & Resource Management Portal',
    category: 'Enterprise',
    technologies: ['Angular', 'TypeScript', 'C#', '.NET', 'PostgreSQL'],
    architecture: 'Clean Architecture',
    description:
      'A structured enterprise-grade portal managing internal project allocation, resource schedules, and approval workflows. Designed with strict domain-driven boundaries and relational integrity.',
    highlights: [
      'Decoupled domain, application, and infrastructure layers adhering to Clean Architecture.',
      'Reactive Angular client utilizing RxJS state management and typed data contracts.',
      'High-throughput PostgreSQL schema with ACID compliance and auditing capabilities.',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Multi-layer architecture separating Web API controllers, Application commands/queries, Core domain models, and Infrastructure persistence via Entity Framework Core.',
  },
  {
    id: 'fieldops-mobile',
    title: 'FieldOps — Offline-First Mobile Inspection App',
    category: 'Mobile',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'SQLite'],
    architecture: 'MVVM + Repository Pattern',
    description:
      'Field inspection mobile solution engineered for disconnected job sites. Collects structured logs and audit checklists offline, synchronizing automatically once connectivity is restored.',
    highlights: [
      'Local-first SQLite storage repository with deterministic conflict resolution.',
      'Background sync engine transmitting batched records to Firebase Firestore.',
      'MVVM presentation pattern isolating Flutter widgets from business state machines.',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Repository layer abstracts SQLite local caching from Cloud Firestore remote queries, providing seamless transparent offline operations.',
  },
  {
    id: 'distributed-rest-api',
    title: 'Distributed RESTful API & Service Layer Engine',
    category: 'Backend',
    technologies: ['C#', 'ASP.NET Core', 'REST API', 'PostgreSQL'],
    architecture: 'Layered Architecture + Service Layer',
    description:
      'A high-performance RESTful API backend engineered in ASP.NET Core. Provides centralized authentication, business logic validation, structured exception handling, and robust database transactions.',
    highlights: [
      'Dependency injection driven service layer with granular repository abstractions.',
      'Standardized HTTP response envelopes and RFC 7807 problem details error handling.',
      'Unit and integration tests validated with xUnit and mock database contexts.',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Encapsulates business operations inside dedicated domain services, preventing data leakages across API boundary controllers.',
  },
  {
    id: 'cloudmetrics-dashboard',
    title: 'CloudMetrics — Enterprise Analytics Dashboard',
    category: 'Web',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'REST API'],
    architecture: 'Feature-Based Angular Architecture',
    description:
      'An enterprise operational dashboard providing visual metrics, system activity logs, and real-time data inspection. Built for high data density and modular feature separation.',
    highlights: [
      'Feature-sliced modular directory architecture with lazy-loaded route modules.',
      'RxJS stream pipelines for smooth handling of asynchronous telemetry data.',
      'Strict TypeScript typing preventing runtime null references in telemetry views.',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Smart / dumb component paradigm with smart container components orchestrating data streams and pure presentational UI components.',
  },
  {
    id: 'warehouselogix-desktop',
    title: 'WarehouseLogix — Industrial Desktop Controller',
    category: 'Desktop',
    technologies: ['C#', '.NET', 'Windows Forms', 'SQL Server'],
    architecture: 'MVC',
    description:
      'An industrial inventory and packing terminal controller designed for workstation hardware, high-volume barcode scanning, and direct SQL Server transactional synchronization.',
    highlights: [
      'Deterministic memory management and low-latency local hardware communications.',
      'Direct relational transactions against SQL Server with concurrency locks.',
      'Strict MVC structure decoupling the hardware input handler from domain calculations.',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Model-View-Controller design pattern tailored for desktop client stations with local caching and batch SQL updates.',
  },
  {
    id: 'omniui-design-system',
    title: 'OmniUI — Enterprise Design System',
    category: 'UI/UX',
    technologies: ['Figma', 'Miro', 'Wireframing', 'Prototyping'],
    architecture: 'Atomic Design / Design System',
    description:
      'A comprehensive UI/UX component library, design token specification, and design system crafted in Figma for enterprise multi-platform applications.',
    highlights: [
      'Atomic hierarchy spanning Design Tokens, Atoms, Molecules, Organisms, and Page Templates.',
      'Interactive prototyping validating developer handoff specifications and user journey flows in Miro.',
      'Accessibility-first color contrast ratios (WCAG 2.1 AA) and modular component variants.',
    ],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
    architectureDetails:
      'Design token hierarchy mapped 1:1 with frontend CSS variables and component props for seamless engineering implementation.',
  },
];

export const EDUCATION_YEARS: EducationYear[] = [
  {
    year: 'Year 1',
    title: 'Foundation & Core Programming',
    status: 'Completed',
    gpa: '3.78 / 4.00',
    details: 'Algorithms, Object-Oriented Programming, Discrete Mathematics, and Computer Science fundamentals.',
  },
  {
    year: 'Year 2',
    title: 'Systems & Data Structures',
    status: 'Completed',
    gpa: '3.67 / 4.00',
    details: 'Database Systems, Data Structures & Algorithms, Operating Systems, and Computer Networking.',
  },
  {
    year: 'Year 3',
    title: 'Software Engineering & Architecture',
    status: 'Completed',
    gpa: '3.55 / 4.00',
    details: 'Software Engineering, System Analysis & Design, Software Testing, and Distributed Computing.',
  },
  {
    year: 'Year 4',
    title: 'Advanced Systems & Capstone',
    status: 'In Progress',
    // IMPORTANT: DO NOT display a GPA for Year 4.
    details: 'Cloud Computing, Software Architecture, Enterprise Systems, and Advanced Engineering Practicum.',
  },
];

export const ACADEMIC_AREAS = [
  'Algorithms',
  'Object-Oriented Programming',
  'Database Systems',
  'Web Development',
  'Discrete Mathematics',
  'Software Engineering',
  'Operating Systems',
  'Computer Networking',
  'System Analysis',
  'Software Architecture',
  'Software Testing',
  'Distributed Systems',
  'Cloud Computing',
  'Security',
];

export const LEARNING_JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Computer Science Foundation',
    category: 'University Academic',
    description: 'Algorithms, Discrete Mathematics, Data Structures, OOP, and theoretical principles at university.',
    icon: 'ri-graduation-cap-line',
  },
  {
    number: '02',
    title: 'Simpaz Software Development Training (2 Years & Continuing)',
    category: 'Professional Training (Remote)',
    description:
      '2 years of intensive remote software development training at Simpaz Training Center, currently continuing with advanced distributed projects and systems engineering.',
    icon: 'ri-book-open-line',
  },
  {
    number: '03',
    title: 'Web Development',
    category: 'Engineering Domain',
    description: 'Building standards-compliant, responsive, and accessible web user interfaces using modern web standards.',
    icon: 'ri-global-line',
  },
  {
    number: '04',
    title: 'Flutter Mobile Development',
    category: 'Cross-Platform',
    description: 'Cross-platform mobile applications with offline-first local persistence and state management.',
    icon: 'ri-smartphone-line',
  },
  {
    number: '05',
    title: 'Angular Development',
    category: 'Frontend Engineering',
    description: 'Enterprise single-page web applications with TypeScript, RxJS reactive patterns, and modular architecture.',
    icon: 'ri-layout-3-line',
  },
  {
    number: '06',
    title: 'C# / .NET Backend Development',
    category: 'Backend Architecture',
    description: 'Scalable RESTful APIs, Clean Architecture, Entity Framework, and reliable transactional backends.',
    icon: 'ri-server-line',
  },
  {
    number: '07',
    title: 'Professional Software Engineer',
    category: 'Industry Practice',
    description: '1 year of professional software engineering experience delivering production solutions and collaborating in Agile teams.',
    icon: 'ri-award-line',
  },
];

export const DEV_PROCESS_STEPS = [
  { step: '01', title: 'Research', desc: 'Understanding domain context, user needs, and feasibility.' },
  { step: '02', title: 'Requirement Analysis', desc: 'Scoping functional requirements and edge cases.' },
  { step: '03', title: 'User Flow', desc: 'Mapping user journeys and navigational decision paths.' },
  { step: '04', title: 'Wireframe', desc: 'Structuring layout hierarchy and information density.' },
  { step: '05', title: 'UI Design', desc: 'Applying design tokens, accessible typography, and components.' },
  { step: '06', title: 'Prototype', desc: 'Validating interactions and flows before coding.' },
  { step: '07', title: 'Development', desc: 'Writing clean, typed, modular code with automated tests.' },
  { step: '08', title: 'Testing', desc: 'Unit, integration, and UI verification under realistic states.' },
  { step: '09', title: 'Deployment', desc: 'Automated release, environment configuration, and monitoring.' },
];

export const AGILE_CEREMONIES = [
  {
    title: 'Sprint Planning',
    desc: 'Collaboratively estimating story points, identifying technical dependencies, and defining clear sprint goals.',
  },
  {
    title: 'Daily Stand-up',
    desc: 'Synchronizing daily progress, clarifying blockers, and maintaining steady momentum toward deliverables.',
  },
  {
    title: 'Sprint Review',
    desc: 'Demonstrating completed functional increments to stakeholders and gathering direct feedback.',
  },
  {
    title: 'Retrospective',
    desc: 'Reflecting on team processes, celebrating milestones, and enacting continuous incremental improvements.',
  },
  {
    title: 'Backlog Refinement',
    desc: 'Clarifying acceptance criteria, decomposing complex user stories, and prioritizing technical debts.',
  },
  {
    title: 'Blocker Identification',
    desc: 'Proactively surfacing integration bottlenecks early to ensure predictable release cycles.',
  },
  {
    title: 'Team Coordination',
    desc: 'Maintaining cross-functional alignment between frontend, backend, QA, and product roles.',
  },
];

export const TEAMWORK_FACETS = [
  {
    icon: 'ri-git-pull-request-line',
    title: 'Code Reviews',
    desc: 'Providing constructive peer reviews focused on clean code, architecture compliance, security, and test coverage.',
  },
  {
    icon: 'ri-chat-voice-line',
    title: 'Technical Discussions',
    desc: 'Engaging in architectural debates with an open mindset, weighing trade-offs objectively based on system needs.',
  },
  {
    icon: 'ri-user-shared-line',
    title: 'Mentoring & Knowledge Sharing',
    desc: 'Documenting engineering decisions and helping teammates navigate technical patterns.',
  },
  {
    icon: 'ri-task-line',
    title: 'Task Coordination',
    desc: 'Managing tickets responsibly, keeping task boards transparent, and respecting sprint commitments.',
  },
];
