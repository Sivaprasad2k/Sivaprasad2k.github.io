export interface JourneyNode {
  id: string;
  year: '2024' | '2025' | '2026' | 'CURRENT';
  title: string;
  category: 'PROJECT' | 'LEARNING' | 'EXPERIMENT' | 'CURRENT FOCUS';
  organization: string;
  summary: string;
  architecturalHighlights: string[];
  technologies: string[];
  keyTakeaway: string;
}

export const JOURNEY_DATA: JourneyNode[] = [
  {
    id: "j-2024-1",
    year: "2024",
    title: "Rural Infrastructure Classification",
    category: "PROJECT",
    organization: "Applied ML & Data Research",
    summary: "Executed dataset preparation, feature extraction, and neural network model training for rural infrastructure remote sensing imagery and spatial datasets.",
    architecturalHighlights: [
      "Built automated feature normalization and preprocessing routines using Python & OpenCV.",
      "Trained neural network classification models in TensorFlow/Keras.",
      "Evaluated model precision/recall metrics and established validation boundaries."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
    keyTakeaway: "Discovered that clean data pipelines and precise feature scaling matter more than model depth."
  },
  {
    id: "j-2024-2",
    year: "2024",
    title: "CareerPath Application Tracking Platform",
    category: "PROJECT",
    organization: "Relational Backend Systems",
    summary: "Designed and implemented a relational job application and interview milestone tracking system with strict finite state machine progression.",
    architecturalHighlights: [
      "Constructed a deterministic finite-state automata model enforcing valid application state transitions.",
      "Implemented stateless JWT token authentication with Spring Security and filter chain isolation.",
      "Optimized JPA database access using selective interface projections."
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React", "TypeScript"],
    keyTakeaway: "Enforcing domain state invariants in the backend prevents invalid data state propagation."
  },
  {
    id: "j-2024-3",
    year: "2024",
    title: "Real Estate Hub Marketplace",
    category: "PROJECT",
    organization: "Full-Stack Web Architecture",
    summary: "Built and deployed a property marketplace featuring method-level Role-Based Access Control (@PreAuthorize) and dynamic JPA Criteria search filtering.",
    architecturalHighlights: [
      "Configured Spring Security method-level authorization for ADMIN, AGENT, and USER roles.",
      "Engineered dynamic property search query filters using JPA Criteria Specification API.",
      "Containerized backend service and relational datastore using Docker Compose."
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "React", "Vite"],
    keyTakeaway: "Containerization guarantees consistent behavior across local development and staging environments."
  },
  {
    id: "j-2025-1",
    year: "2025",
    title: "Krishi Agricultural Operations Engine",
    category: "PROJECT",
    organization: "Event-Driven & IoT Backend",
    summary: "Building an event-driven agricultural operations platform decoupling sensor telemetry processing from machine learning crop advisory endpoints.",
    architecturalHighlights: [
      "Designed asynchronous task execution pipelines in Spring Boot to process telemetry payloads.",
      "Integrated Python FastAPI inference microservices to serve crop recommendations asynchronously.",
      "Structured PostgreSQL schemas with spatial and time-series composite indexes."
    ],
    technologies: ["Java", "Spring Boot", "FastAPI", "Python", "PostgreSQL", "Docker"],
    keyTakeaway: "Asynchronous worker isolation preserves API response time under high telemetry throughput."
  },
  {
    id: "j-2025-2",
    year: "2025",
    title: "Avis Asynchronous AI Assistant",
    category: "EXPERIMENT",
    organization: "AI System Architecture",
    summary: "Explored non-blocking task queue pipelines in Python FastAPI to route natural language prompts to LLM inference APIs safely.",
    architecturalHighlights: [
      "Implemented Python asyncio task queues for non-blocking external API dispatch.",
      "Enforced strict output JSON validation using Pydantic schemas.",
      "Handled rate-limiting and API timeout boundaries gracefully."
    ],
    technologies: ["Python", "FastAPI", "Asyncio", "Pydantic", "LLM APIs"],
    keyTakeaway: "Non-deterministic AI outputs require strict JSON schema validation before consumption."
  },
  {
    id: "j-2026-1",
    year: "2026",
    title: "System Design & Distributed Architecture",
    category: "LEARNING",
    organization: "Advanced Backend Engineering",
    summary: "Diving deep into distributed system design patterns, fault isolation, message queues, rate limiting algorithms, and database scaling.",
    architecturalHighlights: [
      "Studying transactional outbox patterns for event-driven message dispatch.",
      "Analyzing database partitioning, read replicas, and caching strategies.",
      "Evaluating circuit breakers and resilient service communication."
    ],
    technologies: ["System Design", "Distributed Systems", "Message Queues", "Caching"],
    keyTakeaway: "Every architectural choice is a trade-off between latency, consistency, availability, and complexity."
  },
  {
    id: "j-current",
    year: "CURRENT",
    title: "Production Backend & AI Integration Focus",
    category: "CURRENT FOCUS",
    organization: "Systems & Backend Engineering",
    summary: "Refining core Java/Spring Boot backend engineering skills while building production-grade software and integrating intelligent AI pipelines.",
    architecturalHighlights: [
      "Building resilient REST APIs with domain-driven boundaries.",
      "Exploring ML inference microservice integration patterns.",
      "Preparing for backend software engineering roles."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "FastAPI", "Docker", "System Architecture"],
    keyTakeaway: "Focused on delivering high-reliability production software with clear engineering rationale."
  }
];
