export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: string;
  summary: string;
  architecturalHighlights: string[];
  technologies: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-krishi",
    period: "2024 — PRESENT",
    role: "Backend Software Engineer",
    organization: "Krishi (Agricultural Operations Platform)",
    type: "Backend Systems",
    summary: "Building an event-driven agricultural operations platform decoupling sensor telemetry processing from machine learning crop advisory endpoints.",
    architecturalHighlights: [
      "Designed asynchronous task execution pipelines in Spring Boot to process telemetry payloads.",
      "Integrated Python FastAPI inference microservices to serve crop recommendations without blocking REST APIs.",
      "Structured PostgreSQL schemas with spatial and time-series composite indexes for efficient query execution."
    ],
    technologies: ["Java", "Spring Boot", "FastAPI", "PostgreSQL", "Docker"]
  },
  {
    id: "exp-realestate",
    period: "2024",
    role: "Backend Software Engineer",
    organization: "Real Estate Hub",
    type: "Production Application",
    summary: "Built and deployed a property management marketplace with multi-tier role access controls and search capabilities.",
    architecturalHighlights: [
      "Implemented method-level `@PreAuthorize` security checks across REST controllers for ADMIN, AGENT, and USER roles.",
      "Engineered dynamic property search query filters using JPA Criteria Specification API.",
      "Containerized backend service and relational database using Docker Compose."
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React", "Docker"]
  },
  {
    id: "exp-careerpath",
    period: "2024",
    role: "Backend Software Engineer",
    organization: "CareerPath",
    type: "Production Application",
    summary: "Designed and implemented a relational job application and interview milestone tracking system with strict state machine progression.",
    architecturalHighlights: [
      "Constructed a deterministic finite-state automata model enforcing valid application state transition logic.",
      "Implemented stateless JWT token authentication with Spring Security.",
      "Optimized JPA database access using selective interface projections."
    ],
    technologies: ["Java", "Spring Boot", "JPA / Hibernate", "PostgreSQL", "React"]
  },
  {
    id: "exp-ruralinfra",
    period: "2023 — 2024",
    role: "Software & Data Project",
    organization: "Rural Infrastructure Classification",
    type: "Applied Data Project",
    summary: "Executed dataset preparation, feature extraction, and model training for rural infrastructure imagery and spatial data.",
    architecturalHighlights: [
      "Preprocessed high-resolution imagery and tabular datasets for model training.",
      "Trained and evaluated neural network architectures using TensorFlow/Keras.",
      "Documented classification evaluation bounds and data preprocessing routines."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Data Preprocessing"]
  }
];
