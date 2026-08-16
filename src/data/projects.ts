export interface ArchitectureNode {
  layer: string;
  component: string;
  tech: string;
  details: string;
}

export interface WorkflowState {
  id: string;
  name: string;
  allowedTransitions: string[];
  businessInvariant: string;
  responsibleModule: string;
  technicalImplementation: string;
}

export interface CareerPathState {
  id: string;
  name: string;
  allowedTransitions: string[];
  invalidTransitions: string[];
  persistenceModel: string;
  securityBoundary: string;
}

export interface RbacRole {
  role: 'USER' | 'AGENT' | 'ADMIN';
  title: string;
  permissions: string[];
  accessibleOperations: string[];
  apiBoundaries: string[];
  securityConstraints: string;
}

export interface AsyncPipelineStep {
  id: string;
  stepNumber: string;
  name: string;
  description: string;
  latencyBoundary: string;
  executionModel: string;
  failureIsolation: string;
  apiBoundary: string;
}

export interface MlPipelineStep {
  id: string;
  stepNumber: string;
  name: string;
  inputFormat: string;
  outputFormat: string;
  techStack: string;
  engineeringDetails: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tier: 'featured' | 'additional';
  status: 'SHIPPED' | 'BUILDING' | 'ACTIVE' | 'COMPLETED';
  statusColor: string;
  tagline: string;
  summary: string;

  // Editorial 4-Tier Stack Structure
  user: string;
  ux: string;
  domain: string[];
  system: string[];
  backend: string[];

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

  // Custom Interactive Data Models
  workflowStates?: WorkflowState[];
  stateMachineStates?: CareerPathState[];
  rbacRoles?: RbacRole[];
  asyncPipelineSteps?: AsyncPipelineStep[];
  mlPipelineSteps?: MlPipelineStep[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "krishi",
    title: "Krishi",
    category: "AGRICULTURAL OPERATIONS PLATFORM",
    tier: "featured",
    status: "BUILDING",
    statusColor: "emerald",
    tagline: "Workflow-Driven Agricultural Operations & Event Backend",
    user: "Farmers & Field Supervisors",
    ux: "Task-first operational workflow with offline-friendly telemetry ingestion",
    domain: ["CropCycleAggregate", "ParcelTelemetry", "DiseaseIncident", "RemedialAction"],
    system: ["Spring Boot 3.x", "PostgreSQL", "FastAPI Microservice", "Docker"],
    backend: ["REST Ingestion Gateway", "JWT Auth", "@Async Task Workers", "JPA EntityGraph", "Pydantic Schemas"],
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
    ],
    workflowStates: [
      {
        id: "PLANNED",
        name: "PLANNED",
        allowedTransitions: ["PLANTED"],
        businessInvariant: "Crop cycle target land parcel & seed specifications must be assigned and validated.",
        responsibleModule: "CropPlanningService",
        technicalImplementation: "JPA entity state created with @Enumerated(EnumType.STRING). Initial timestamp assigned."
      },
      {
        id: "PLANTED",
        name: "PLANTED",
        allowedTransitions: ["GROWING"],
        businessInvariant: "Sowing date and initial soil moisture baseline must be registered.",
        responsibleModule: "TelemetryIngestionModule",
        technicalImplementation: "Fires CropPlantedEvent to trigger asynchronous irrigation schedule generator."
      },
      {
        id: "GROWING",
        name: "GROWING",
        allowedTransitions: ["HEALTH ISSUE", "HARVEST"],
        businessInvariant: "Daily telemetry ingestion active; moisture & nutrient thresholds monitored continuously.",
        responsibleModule: "TelemetryWorkerEngine",
        technicalImplementation: "@Scheduled background workers batch-process incoming IoT telemetry packets."
      },
      {
        id: "HEALTH ISSUE",
        name: "HEALTH ISSUE",
        allowedTransitions: ["TREATMENT"],
        businessInvariant: "Anomaly flag set; crop advisory prediction query automatically dispatched to FastAPI ML service.",
        responsibleModule: "AgronomicAdvisorClient",
        technicalImplementation: "@Async HTTP client sends vision/telemetry payload to Python TensorFlow model endpoint."
      },
      {
        id: "TREATMENT",
        name: "TREATMENT",
        allowedTransitions: ["RECOVERY"],
        businessInvariant: "Remedial action plan logged; treatment dosage and supervisor confirmation persisted.",
        responsibleModule: "TreatmentExecutionService",
        technicalImplementation: "Transactional DB write updates treatment log table with foreign key linkage."
      },
      {
        id: "RECOVERY",
        name: "RECOVERY",
        allowedTransitions: ["GROWING", "HARVEST"],
        businessInvariant: "Telemetry parameters must return within normal baseline bounds for 72 consecutive hours.",
        responsibleModule: "BaselineValidationEngine",
        technicalImplementation: "Evaluates rolling window metrics in PostgreSQL before triggering state promotion."
      },
      {
        id: "HARVEST",
        name: "HARVEST",
        allowedTransitions: [],
        businessInvariant: "Terminal state; yield metrics recorded and historical cycle archived.",
        responsibleModule: "HarvestReportingService",
        technicalImplementation: "Marks record as completed and generates operational summary report aggregate."
      }
    ]
  },
  {
    id: "careerpath",
    title: "CareerPath",
    category: "JOB APPLICATION WORKFLOW PLATFORM",
    tier: "featured",
    status: "SHIPPED",
    statusColor: "indigo",
    tagline: "Relational Job Application & Milestone Tracking System",
    user: "Job Seekers & Candidates",
    ux: "Kanban milestone board with deterministic status progression",
    domain: ["ApplicationAggregate", "InterviewRound", "StateAuditLog", "OfferSalarySpec"],
    system: ["Spring Boot 3.x", "Spring Security", "PostgreSQL", "React"],
    backend: ["Finite State Machine", "@Transactional Boundary", "Stateless JWT Auth", "JPA Interface Projections"],
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
    ],
    stateMachineStates: [
      {
        id: "APPLIED",
        name: "APPLIED",
        allowedTransitions: ["SCREENING", "REJECTED"],
        invalidTransitions: ["OFFER", "ACCEPTED"],
        persistenceModel: "INSERT into job_applications (status='APPLIED', date_applied=NOW())",
        securityBoundary: "User authentication required; ownership verified via candidate_id claim."
      },
      {
        id: "SCREENING",
        name: "SCREENING",
        allowedTransitions: ["INTERVIEW", "REJECTED"],
        invalidTransitions: ["ACCEPTED"],
        persistenceModel: "UPDATE job_applications SET status='SCREENING'; INSERT into audit_log",
        securityBoundary: "Bearer JWT validation; domain service checks valid state machine transition path."
      },
      {
        id: "INTERVIEW",
        name: "INTERVIEW",
        allowedTransitions: ["OFFER", "REJECTED"],
        invalidTransitions: ["APPLIED", "ACCEPTED"],
        persistenceModel: "INSERT into interview_rounds (application_id, round_number, scheduled_at)",
        securityBoundary: "Transactional boundary @Transactional; rejects backward jumps without admin override."
      },
      {
        id: "OFFER",
        name: "OFFER",
        allowedTransitions: ["ACCEPTED", "REJECTED"],
        invalidTransitions: ["SCREENING", "APPLIED"],
        persistenceModel: "UPDATE job_applications SET status='OFFER', offer_salary=?;",
        securityBoundary: "Field-level validation; salary/perks payload validated against numeric bounds."
      },
      {
        id: "ACCEPTED",
        name: "ACCEPTED",
        allowedTransitions: [],
        invalidTransitions: ["APPLIED", "SCREENING", "INTERVIEW", "OFFER", "REJECTED"],
        persistenceModel: "UPDATE job_applications SET status='ACCEPTED', closed_at=NOW();",
        securityBoundary: "Terminal state. Record locked against standard modification."
      },
      {
        id: "REJECTED",
        name: "REJECTED",
        allowedTransitions: [],
        invalidTransitions: ["APPLIED", "SCREENING", "INTERVIEW", "OFFER", "ACCEPTED"],
        persistenceModel: "UPDATE job_applications SET status='REJECTED', rejection_reason=?;",
        securityBoundary: "Terminal state. Retains complete audit log of all previous interview stages."
      }
    ]
  },
  {
    id: "realestatehub",
    title: "Real Estate Hub",
    category: "PROPERTY MARKETPLACE PLATFORM",
    tier: "featured",
    status: "SHIPPED",
    statusColor: "indigo",
    tagline: "Full-Stack Property Marketplace with RBAC & REST APIs",
    user: "Buyers, Agents & Administrators",
    ux: "Role-tailored interfaces with multi-criteria dynamic property search",
    domain: ["PropertyListing", "AgentProfile", "BuyerInquiry", "PermissionRole"],
    system: ["Spring Boot 3.x", "PostgreSQL", "Docker Compose", "React / Vite"],
    backend: ["Method-Level @PreAuthorize", "JPA Specification Criteria", "Join Table Mapping", "REST Endpoints"],
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
    ],
    rbacRoles: [
      {
        role: "USER",
        title: "Standard Public User / Buyer",
        permissions: ["READ_LISTINGS", "CREATE_INQUIRY", "SAVE_FAVORITES"],
        accessibleOperations: ["GET /api/v1/properties", "GET /api/v1/properties/{id}", "POST /api/v1/inquiries"],
        apiBoundaries: ["Read-only access to published property catalog", "No mutation of listing details or prices"],
        securityConstraints: "PermitAll for GET endpoints; authenticated user token required for inquiry creation."
      },
      {
        role: "AGENT",
        title: "Verified Real Estate Agent / Seller",
        permissions: ["CREATE_LISTING", "UPDATE_OWN_LISTING", "DELETE_OWN_LISTING", "VIEW_INQUIRIES"],
        accessibleOperations: ["POST /api/v1/properties", "PUT /api/v1/properties/{id}", "GET /api/v1/agent/inquiries"],
        apiBoundaries: ["Can create and manage listings owned by their agent_id", "Cannot access other agents' drafts or system metrics"],
        securityConstraints: "@PreAuthorize(\"hasRole('AGENT') and #agentId == authentication.principal.id\")"
      },
      {
        role: "ADMIN",
        title: "System Administrator",
        permissions: ["MANAGE_USERS", "APPROVE_LISTING", "PURGE_LISTING", "VIEW_SYSTEM_AUDIT"],
        accessibleOperations: ["PATCH /api/v1/admin/properties/{id}/approve", "DELETE /api/v1/admin/users/{id}", "GET /api/v1/admin/metrics"],
        apiBoundaries: ["Full administrative CRUD over all domain entities and user profiles", "Unrestricted system endpoint access"],
        securityConstraints: "@PreAuthorize(\"hasRole('ADMIN')\") enforced at method & endpoint security filter levels."
      }
    ]
  },
  {
    id: "avis",
    title: "Avis",
    category: "ASYNC AI TASK PIPELINE",
    tier: "additional",
    status: "BUILDING",
    statusColor: "sky",
    tagline: "Asynchronous AI Personal Assistant & Task Pipeline",
    user: "Productivity Apps & Async API Clients",
    ux: "Non-blocking task dispatch with 202 Accepted status polling",
    domain: ["AssistantTask", "PromptContextFrame", "ModelProviderRouter", "SynthesisResult"],
    system: ["Python FastAPI", "Uvicorn", "Asyncio Task Queue", "Docker"],
    backend: ["Async BackgroundTasks", "httpx Async HTTP", "Pydantic Schema Validation", "Circuit Breaker Retry"],
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
    ],
    asyncPipelineSteps: [
      {
        id: "STEP-1",
        stepNumber: "01",
        name: "REQUEST INGESTION",
        description: "Client submits prompt payload to FastAPI endpoint. Immediate 202 Accepted response returned with task token.",
        latencyBoundary: "< 15ms",
        executionModel: "Synchronous HTTP Handler",
        failureIsolation: "Payload validation via Pydantic; rejects malformed prompts instantly.",
        apiBoundary: "POST /api/v1/assistant/tasks"
      },
      {
        id: "STEP-2",
        stepNumber: "02",
        name: "TASK QUEUE ENQUEUE",
        description: "Task object pushed onto asyncio non-blocking queue. Main thread remains free to accept incoming API requests.",
        latencyBoundary: "< 5ms",
        executionModel: "In-Memory Asyncio Queue",
        failureIsolation: "Queue buffer limit protection prevents memory exhaustion.",
        apiBoundary: "Internal Async Queue Router"
      },
      {
        id: "STEP-3",
        stepNumber: "03",
        name: "MODEL ROUTER DISPATCH",
        description: "Worker pulls task, formats prompt context frame, and selects appropriate LLM provider client.",
        latencyBoundary: "< 10ms",
        executionModel: "Background Task Worker",
        failureIsolation: "Context framing fallback defaults if sub-prompt exceeds token budget.",
        apiBoundary: "LLM Model Selection Strategy"
      },
      {
        id: "STEP-4",
        stepNumber: "04",
        name: "EXTERNAL LLM PROVIDER",
        description: "Asynchronous HTTP call issued to external AI API endpoint with timeout and exponential backoff retry.",
        latencyBoundary: "800ms - 2500ms",
        executionModel: "Async HTTP Client (httpx)",
        failureIsolation: "Circuit breaker pattern handles upstream timeout or rate-limit HTTP 429.",
        apiBoundary: "HTTPS / REST to Provider API"
      },
      {
        id: "STEP-5",
        stepNumber: "05",
        name: "RESPONSE SYNTHESIS",
        description: "Raw LLM output parsed against strict Pydantic JSON schema, structured, and saved to task result store.",
        latencyBoundary: "< 25ms",
        executionModel: "Pydantic Schema Validator",
        failureIsolation: "Schema parsing errors trigger retry prompt synthesis with error feedback loop.",
        apiBoundary: "GET /api/v1/assistant/tasks/{id}/result"
      }
    ]
  },
  {
    id: "ruralinfra",
    title: "Rural Infrastructure Classification",
    category: "ML DATASET & CLASSIFICATION PIPELINE",
    tier: "additional",
    status: "COMPLETED",
    statusColor: "indigo",
    tagline: "Machine Learning Dataset Preparation & Model Classification",
    user: "GIS Researchers & Remote Sensing Analysts",
    ux: "Classification confidence report with spatial tile boundaries",
    domain: ["SpatialTile", "InfrastructureTag", "NormalizedTensor", "ConfusionMatrix"],
    system: ["Python", "TensorFlow 2.x", "Keras API", "OpenCV / NumPy"],
    backend: ["MinMax Feature Scaling", "Data Augmentation Pipeline", "CNN Classification Model", "Scikit-Learn Metrics"],
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
    ],
    mlPipelineSteps: [
      {
        id: "ML-1",
        stepNumber: "01",
        name: "RAW DATASET INGESTION",
        inputFormat: "Raw Remote Imagery & Tabular GIS Data",
        outputFormat: "Structured Data Frames",
        techStack: "Python, Pandas, OpenCV",
        engineeringDetails: "Ingests spatial tile data and tabular road/building tags with validation checks."
      },
      {
        id: "ML-2",
        stepNumber: "02",
        name: "DATA PREPROCESSING & CLEANING",
        inputFormat: "Structured Data Frames",
        outputFormat: "Cleaned Feature Sets",
        techStack: "NumPy, Scikit-learn",
        engineeringDetails: "Removes spatial outliers, fills missing telemetry values, and standardizes image resolution dimensions."
      },
      {
        id: "ML-3",
        stepNumber: "03",
        name: "FEATURE EXTRACTION & SCALING",
        inputFormat: "Cleaned Feature Sets",
        outputFormat: "Normalized Tensor Arrays [0.0, 1.0]",
        techStack: "StandardScaler, MinMaxScaler",
        engineeringDetails: "Applies MinMax scaling to tabular features and normalizes RGB pixel values for optimal gradient descent."
      },
      {
        id: "ML-4",
        stepNumber: "04",
        name: "MODEL ARCHITECTURE & TRAINING",
        inputFormat: "Normalized Tensor Arrays",
        outputFormat: "Trained Weight Models (.h5)",
        techStack: "TensorFlow 2.x, Keras Sequential API",
        engineeringDetails: "Constructed Multi-Layer Perceptron / CNN architecture with Dropout regularization to prevent overfitting."
      },
      {
        id: "ML-5",
        stepNumber: "05",
        name: "CLASSIFICATION INFERENCE",
        inputFormat: "Unseen Validation Tiles",
        outputFormat: "Probability Multi-Class Vectors",
        techStack: "Keras model.predict()",
        engineeringDetails: "Evaluates test images against classified categories: Paved Road, Unpaved Track, Water Body, Built-up Structure."
      },
      {
        id: "ML-6",
        stepNumber: "06",
        name: "METRICS EVALUATION & BOUNDS",
        inputFormat: "Prediction Vectors vs Ground Truth",
        outputFormat: "Confusion Matrix, F1 Score Report",
        techStack: "Scikit-Learn Classification Report",
        engineeringDetails: "Generates precision, recall, and ROC curve metrics to establish operational prediction boundaries."
      }
    ]
  }
];
