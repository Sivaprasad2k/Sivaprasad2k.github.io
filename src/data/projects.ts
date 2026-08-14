export interface ArchitectureNode {
  layer: string;
  component: string;
  tech: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  tier: 'featured' | 'additional';
  status: 'SHIPPED' | 'BUILDING' | 'ACTIVE' | 'COMPLETED';
  statusColor: string;
  tagline: string;
  summary: string;
  problem: string;
  systemOverview: string;
  technologies: string[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  architectureLayers: ArchitectureNode[];
  dataFlow: { from: string; to: string; protocol: string; description: string }[];
  repoUrl?: string;
  liveUrl?: string;
  keySpecs: { label: string; value: string }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "krishi",
    title: "Krishi",
    tier: "featured",
    status: "BUILDING",
    statusColor: "emerald",
    tagline: "Workflow-Driven Agricultural Operations & Event Backend",
    summary: "Workflow-driven agricultural operations platform featuring an event-driven backend service architecture, IoT telemetry processing, and integrated machine learning inference.",
    problem: "Agricultural operational management requires processing fragmented sensor telemetry, unpredictable supply chain workflows, and field recommendation queries in near real-time without blocking transactional database locks.",
    systemOverview: "Designed an event-driven backend architecture where high-throughput field data ingested via REST APIs is processed asynchronously by background worker routines, persisting aggregated states in PostgreSQL and decoupling ML advisory models behind FastAPI endpoints.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "FastAPI", "Python", "Docker", "React"],
    engineeringDecisions: [
      {
        decision: "Event-Driven Worker Isolation",
        rationale: "Separated synchronous agronomic query endpoints from long-running telemetry aggregate computation.",
        impact: "Eliminated request thread starvation during peak sensor data processing cycles."
      },
      {
        decision: "Decoupled ML Advisory Micro-Service",
        rationale: "Exposed TensorFlow crop advisory models through a dedicated Python FastAPI service layer.",
        impact: "Allowed independent scaling and zero-downtime updates to machine learning models without redeploying core Spring Boot business services."
      },
      {
        decision: "Relational Indexing Strategy",
        rationale: "Created composite indexes on timestamp and location spatial tags in PostgreSQL.",
        impact: "Optimized historical telemetry query execution and index scan paths."
      }
    ],
    architectureLayers: [
      { layer: "Ingestion Layer", component: "Telemetry Gateway", tech: "Spring Boot REST Controller", details: "Ingests sensor signals with rate limiting and payload validation." },
      { layer: "Worker Layer", component: "Async Task Pipeline", tech: "Spring @Async / ExecutorPool", details: "Processes batch telemetry and calculates soil health trend metrics." },
      { layer: "Inference Layer", component: "Agricultural Advisor", tech: "FastAPI / TensorFlow", details: "Evaluates crop parameters against ML prediction models." },
      { layer: "Persistence Layer", component: "Operational Datastore", tech: "PostgreSQL / JPA Hibernate", details: "Stores transactional records, user profiles, and field metrics." }
    ],
    dataFlow: [
      { from: "Field Sensor / Mobile App", to: "Spring Boot API", protocol: "HTTPS / REST", description: "Sends raw telemetry and field metrics payload" },
      { from: "Spring Boot API", to: "FastAPI ML Model", protocol: "HTTP / JSON API", description: "Dispatches agricultural prediction query" },
      { from: "Spring Boot API", to: "PostgreSQL DB", protocol: "JDBC / JPA", description: "Persists aggregated operational state and audit logs" }
    ],
    repoUrl: "https://github.com/Sivaprasad2k/Krishi",
    keySpecs: [
      { label: "Backend Core", value: "Spring Boot 3.x" },
      { label: "AI Integration", value: "FastAPI Microservice" },
      { label: "Primary Storage", value: "PostgreSQL Relational" },
      { label: "Architecture", value: "Event-Driven & Async" }
    ]
  },
  {
    id: "careerpath",
    title: "CareerPath",
    tier: "featured",
    status: "SHIPPED",
    statusColor: "indigo",
    tagline: "Relational Job Application & Milestone Tracking System",
    summary: "Comprehensive job application and interview workflow tracking platform built on relational data models, status transition logic, and state audit history.",
    problem: "Job seekers manage multiple concurrent application pipelines with varying stages, interview rounds, and follow-up deadlines, often suffering from state synchronization issues and lack of structured analytics.",
    systemOverview: "Architected a relational database schema mapping candidate entities to application state transitions, enforcing deterministic state progression through Spring Boot service boundaries and relational foreign key constraints.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JPA / Hibernate", "React", "TypeScript", "Tailwind CSS"],
    engineeringDecisions: [
      {
        decision: "Deterministic State Machine Pattern",
        rationale: "Enforced strict application state transition rules (e.g. APPLIED → SCREENING → INTERVIEWING → OFFER) within domain entities.",
        impact: "Prevented invalid state changes and dirty writes across concurrent user sessions."
      },
      {
        decision: "JWT Token Revocation & Role Security",
        rationale: "Implemented Spring Security filter chain with stateless JWT validation and refresh token rotation.",
        impact: "Secured user resources with zero server session overhead while enabling instantaneous token invalidation on logout."
      },
      {
        decision: "Optimized Relational JPA Projections",
        rationale: "Utilized custom Spring Data JPA interface projections for dashboard views instead of loading full object graphs.",
        impact: "Decreased database memory footprint and payload size."
      }
    ],
    architectureLayers: [
      { layer: "Presentation Layer", component: "Kanban & Analytics Web App", tech: "React / TypeScript / Tailwind", details: "Renders responsive tracking boards and application metrics." },
      { layer: "Security Layer", component: "Auth & Authz Filter", tech: "Spring Security / JWT", details: "Authenticates requests and enforces role-based access control." },
      { layer: "Domain Layer", component: "Tracking Engine", tech: "Spring Boot Services", details: "Manages state transitions, interview schedules, and audit trails." },
      { layer: "Data Layer", component: "Relational Store", tech: "PostgreSQL / Spring Data JPA", details: "Stores normalized candidate, application, and timeline records." }
    ],
    dataFlow: [
      { from: "React SPA Frontend", to: "Spring Security Filter", protocol: "Bearer JWT / HTTPS", description: "Sends request with authorization header" },
      { from: "Spring Security Filter", to: "Domain Controller", protocol: "Internal Inversion of Control", description: "Dispatches validated request to business service" },
      { from: "Domain Service", to: "PostgreSQL DB", protocol: "JPA Hibernate SQL", description: "Executes state transition update within transactional boundary" }
    ],
    repoUrl: "https://github.com/Sivaprasad2k/CareerPath",
    keySpecs: [
      { label: "Data Integrity", value: "ACID Compliant JPA" },
      { label: "Security", value: "Stateless JWT Auth" },
      { label: "UI Layer", value: "React + TypeScript" },
      { label: "State Model", value: "Finite State Automata" }
    ]
  },
  {
    id: "realestatehub",
    title: "Real Estate Hub",
    tier: "featured",
    status: "SHIPPED",
    statusColor: "indigo",
    tagline: "Full-Stack Property Marketplace with RBAC & REST APIs",
    summary: "Full-stack property management and real estate marketplace platform featuring fine-grained role-based access control, search filtering, and property listing lifecycle management.",
    problem: "Real estate portals must handle multi-tenant roles (buyers, sellers, agents, admins) while delivering fast multi-faceted property searches over large datasets without exposing administrative management endpoints.",
    systemOverview: "Built a production-ready REST API backend with Spring Boot and Spring Security, backed by PostgreSQL for transactional listing management, paired with a modern React frontend for property exploration and admin controls.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JPA / Hibernate", "Docker", "React", "Vite"],
    engineeringDecisions: [
      {
        decision: "Hierarchical Role-Based Security",
        rationale: "Configured Spring Security method-level authorization `@PreAuthorize` rules bound to granular role permissions.",
        impact: "Guaranteed strict isolation between administrative listing management and public browsing endpoints."
      },
      {
        decision: "Dynamic JPA Specification Builder",
        rationale: "Implemented criteria API filters for multi-parameter search (price range, location, property type, amenities).",
        impact: "Allowed seamless parameter filtering without writing repetitive raw SQL queries."
      },
      {
        decision: "Docker Containerization Strategy",
        rationale: "Encapsulated Spring Boot runtime environment and PostgreSQL database into multi-stage Docker Compose setups.",
        impact: "Ensured identical operational behavior between local development, integration testing, and production hosting."
      }
    ],
    architectureLayers: [
      { layer: "UI / Web Layer", component: "Marketplace Client", tech: "React / Vite / Tailwind", details: "Responsive property search catalog, interactive maps, and forms." },
      { layer: "API Layer", component: "RESTful Endpoints", tech: "Spring Web MVC Controllers", details: "Exposes hypermedia-driven endpoints for property management." },
      { layer: "Security Layer", component: "RBAC Security Manager", tech: "Spring Security / Roles", details: "Verifies user roles (USER, AGENT, ADMIN) before endpoint execution." },
      { layer: "Data Layer", component: "Property Datastore", tech: "PostgreSQL / Hibernate", details: "Persists property listings, agent profiles, and user inquiries." }
    ],
    dataFlow: [
      { from: "Marketplace Client", to: "Spring REST API", protocol: "HTTP / JSON REST", description: "Submits multi-criteria search parameters" },
      { from: "Spring REST API", to: "Security Filter", protocol: "Spring Interceptor", description: "Evaluates role permissions against resource target" },
      { from: "Spring REST API", to: "PostgreSQL DB", protocol: "JDBC Connection Pool", description: "Executes indexed criteria queries and retrieves matching entities" }
    ],
    repoUrl: "https://github.com/Sivaprasad2k/Real-Estate-Hub",
    keySpecs: [
      { label: "Access Control", value: "Method-Level RBAC" },
      { label: "Search Engine", value: "JPA Dynamic Criteria API" },
      { label: "Deployment", value: "Docker Compose" },
      { label: "Architecture", value: "Layered REST Service" }
    ]
  },
  {
    id: "avis",
    title: "Avis",
    tier: "additional",
    status: "BUILDING",
    statusColor: "sky",
    tagline: "Asynchronous AI Personal Assistant & Task Pipeline",
    summary: "AI-powered personal assistant backend designed to execute asynchronous multi-step task workflows and model response synthesis.",
    problem: "Integrating natural language models into personal productivity software often suffers from long latency spikes and unhandled API timeouts when calling external LLM providers.",
    systemOverview: "Constructed an asynchronous task pipeline utilizing Python FastAPI and queue execution abstractions, isolating external LLM inference requests from the primary execution thread.",
    technologies: ["Python", "FastAPI", "AI APIs", "Asyncio", "Docker", "Git"],
    engineeringDecisions: [
      {
        decision: "Asynchronous Non-Blocking Execution",
        rationale: "Leveraged Python asyncio and non-blocking HTTP clients for external AI API calls.",
        impact: "Maintained system responsiveness even during high latency upstream inference windows."
      },
      {
        decision: "Structured Context Prompt Framing",
        rationale: "Enforced strict JSON schema validation on model outputs using Pydantic.",
        impact: "Eliminated downstream parsing errors caused by non-deterministic model generation."
      }
    ],
    architectureLayers: [
      { layer: "API Gateway", component: "Assistant Endpoint", tech: "FastAPI / Uvicorn", details: "Handles prompt requests and task status polling." },
      { layer: "Task Engine", component: "Async Workflow Router", tech: "Python Asyncio Queue", details: "Schedules and monitors model generation execution." },
      { layer: "Integration Layer", component: "Model API Client", tech: "Async HTTP Client", details: "Interacts with external AI inference APIs safely." }
    ],
    dataFlow: [
      { from: "User Prompt Client", to: "FastAPI Engine", protocol: "HTTP / Async JSON", description: "Submits natural language task instruction" },
      { from: "FastAPI Engine", to: "Inference API", protocol: "HTTPS / REST", description: "Dispatches async request with context frame" },
      { from: "FastAPI Engine", to: "User Prompt Client", protocol: "Server-Sent Events / JSON", description: "Streams completed task output" }
    ],
    repoUrl: "https://github.com/Sivaprasad2k/Avis",
    keySpecs: [
      { label: "Framework", value: "Python FastAPI" },
      { label: "Execution Model", value: "Non-Blocking Asyncio" },
      { label: "Validation", value: "Pydantic Schemas" },
      { label: "Status", value: "Active Development" }
    ]
  },
  {
    id: "ruralinfra",
    title: "Rural Infrastructure Classification",
    tier: "additional",
    status: "COMPLETED",
    statusColor: "indigo",
    tagline: "Machine Learning Dataset Preparation & Model Classification",
    summary: "Machine learning dataset preparation, feature extraction, and neural network classification project analyzing imagery and spatial infrastructure data.",
    problem: "Classifying rural infrastructure from remote sensing datasets requires structured feature extraction pipelines and model validation to handle spatial noise.",
    systemOverview: "Constructed a machine learning classification pipeline using Python, TensorFlow, and Keras for dataset normalization, model training, and performance metrics evaluation.",
    technologies: ["Python", "TensorFlow", "Keras", "Data Preprocessing"],
    engineeringDecisions: [
      {
        decision: "Feature Scaling & Normalization Pipeline",
        rationale: "Implemented automated preprocessing routines for imagery features and tabular spatial tags.",
        impact: "Improved model convergence stability during training cycles."
      }
    ],
    architectureLayers: [
      { layer: "Data Ingestion", component: "Preprocessing Pipeline", tech: "Python / Data Libraries", details: "Cleans, normalizes, and structures input feature arrays." },
      { layer: "Model Layer", component: "Classification Kernel", tech: "TensorFlow / Keras", details: "Evaluates neural network layers against infrastructure test sets." }
    ],
    dataFlow: [
      { from: "Raw Dataset", to: "Preprocessing Engine", protocol: "File I/O Pipeline", description: "Extracts normalized feature vectors" },
      { from: "Preprocessing Engine", to: "Keras Model", protocol: "In-Memory Tensor Array", description: "Executes training and classification inference" }
    ],
    keySpecs: [
      { label: "Stack", value: "Python / TensorFlow" },
      { label: "Model Type", value: "Keras Neural Network" },
      { label: "Task", value: "Infrastructure Classification" }
    ]
  }
];
