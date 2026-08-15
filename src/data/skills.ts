export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'working' | 'exploring';
  whyIUseIt: string;
  whereIUsedIt: string[];
  relatedProjects: string[];
  engineeringRole: string;
  iconName?: string;
}

export interface SkillDomain {
  id: string;
  domainName: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export const SKILLS_DATA: SkillDomain[] = [
  {
    id: "core",
    domainName: "Core Technologies",
    iconName: "Server",
    description: "Primary backend specialization for production software systems, API design, domain modeling, and security.",
    skills: [
      {
        id: "java",
        name: "Java",
        category: "core",
        whyIUseIt: "Provides strong static typing, memory safety, rich ecosystem libraries, and mature object-oriented primitives for complex business domain modeling.",
        whereIUsedIt: ["Krishi", "CareerPath", "Real Estate Hub"],
        relatedProjects: ["Krishi", "CareerPath", "Real Estate Hub"],
        engineeringRole: "Primary language for backend REST services, domain aggregates, entity mappings, and transactional business logic."
      },
      {
        id: "spring-boot",
        name: "Spring Boot",
        category: "core",
        whyIUseIt: "Offers an enterprise-grade application container with inversion of control, dependency injection, and modular starter configurations.",
        whereIUsedIt: ["Krishi", "CareerPath", "Real Estate Hub"],
        relatedProjects: ["Krishi", "CareerPath", "Real Estate Hub"],
        engineeringRole: "Framework for structuring RESTful Web MVC APIs, background scheduled workers, transaction management, and microservices."
      },
      {
        id: "spring-security",
        name: "Spring Security",
        category: "core",
        whyIUseIt: "Enables declarative filter-chain security, stateless JWT token authentication, and method-level access control (@PreAuthorize).",
        whereIUsedIt: ["CareerPath", "Real Estate Hub"],
        relatedProjects: ["CareerPath", "Real Estate Hub"],
        engineeringRole: "Stateless JWT authentication, bcrypt password hashing, and granular Role-Based Access Control (RBAC)."
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        category: "core",
        whyIUseIt: "Delivers ACID compliance, robust indexing capabilities (B-tree, GIN), rich JSONB support, and strong relational integrity.",
        whereIUsedIt: ["Krishi", "CareerPath", "Real Estate Hub"],
        relatedProjects: ["Krishi", "CareerPath", "Real Estate Hub"],
        engineeringRole: "Primary relational datastore for application state, transactional records, spatial indexing, and audit logging."
      },
      {
        id: "jpa-hibernate",
        name: "JPA / Hibernate",
        category: "core",
        whyIUseIt: "Maps Java domain objects to relational SQL schemas cleanly while providing criteria specification builders and lazy/eager loading control.",
        whereIUsedIt: ["Krishi", "CareerPath", "Real Estate Hub"],
        relatedProjects: ["Krishi", "CareerPath", "Real Estate Hub"],
        engineeringRole: "Object-Relational Mapping (ORM), custom interface projections, criteria search specifications, and transactional boundary control."
      }
    ]
  },
  {
    id: "working",
    domainName: "Working Stack",
    iconName: "Cpu",
    description: "Databases, frontend frameworks, containerization, CI/CD pipelines, and script automation tooling.",
    skills: [
      {
        id: "react",
        name: "React",
        category: "working",
        whyIUseIt: "Component-driven architecture for building responsive, stateful user interfaces and single-page applications.",
        whereIUsedIt: ["Portfolio V2", "CareerPath", "Real Estate Hub"],
        relatedProjects: ["Portfolio V2", "CareerPath", "Real Estate Hub"],
        engineeringRole: "Frontend user interface components, interactive state machines, and system observability visualizers."
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "working",
        whyIUseIt: "Adds compile-time type safety across frontend application logic and API response contracts.",
        whereIUsedIt: ["Portfolio V2", "CareerPath"],
        relatedProjects: ["Portfolio V2", "CareerPath"],
        engineeringRole: "Type definitions, props contract enforcement, and client-side domain state management."
      },
      {
        id: "docker",
        name: "Docker",
        category: "working",
        whyIUseIt: "Containerizes applications into isolated runtime environments, guaranteeing identical operational behavior between dev and production.",
        whereIUsedIt: ["Real Estate Hub", "Krishi", "Avis"],
        relatedProjects: ["Real Estate Hub", "Krishi", "Avis"],
        engineeringRole: "Multi-stage Dockerfiles, Docker Compose orchestrations, and runtime container isolation."
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        category: "working",
        whyIUseIt: "Automates continuous integration build checks, static code checks, and automated deployments upon code pushes.",
        whereIUsedIt: ["Sivaprasad2k.github.io"],
        relatedProjects: ["Sivaprasad2k.github.io"],
        engineeringRole: "Automated CI/CD workflow pipelines and GitHub Pages artifact deployment."
      },
      {
        id: "fastapi",
        name: "FastAPI",
        category: "working",
        whyIUseIt: "High-performance Python web framework with asynchronous non-blocking support and automatic Pydantic schema validation.",
        whereIUsedIt: ["Krishi", "Avis"],
        relatedProjects: ["Krishi", "Avis"],
        engineeringRole: "Asynchronous microservice endpoints for ML advisory model serving and AI pipeline task scheduling."
      },
      {
        id: "python",
        name: "Python",
        category: "working",
        whyIUseIt: "Versatile language for data preprocessing, machine learning model training, and rapid async backend prototyping.",
        whereIUsedIt: ["Krishi", "Avis", "Rural Infrastructure Classification"],
        relatedProjects: ["Krishi", "Avis", "Rural Infrastructure Classification"],
        engineeringRole: "Machine learning model inference, async task workers, and data transformation scripts."
      }
    ]
  },
  {
    id: "exploring",
    domainName: "Exploring & Research",
    iconName: "Sparkles",
    description: "Active areas of engineering study, architectural research, and system scaling paradigms.",
    skills: [
      {
        id: "ai-engineering",
        name: "AI Engineering",
        category: "exploring",
        whyIUseIt: "Integrating Large Language Models and ML inference routines into production software safely via asynchronous task pipelines.",
        whereIUsedIt: ["Avis", "Krishi"],
        relatedProjects: ["Avis", "Krishi"],
        engineeringRole: "Context window framing, prompt schema validation with Pydantic, and non-blocking model dispatch."
      },
      {
        id: "system-design",
        name: "System Design & Architecture",
        category: "exploring",
        whyIUseIt: "Studying trade-offs in distributed caching, message queues, rate limiting, and fault-tolerant system boundaries.",
        whereIUsedIt: ["Architecture Research", "System Map"],
        relatedProjects: ["Krishi", "CareerPath"],
        engineeringRole: "Evaluating event-driven patterns, idempotency guarantees, and cache invalidation strategies."
      },
      {
        id: "infrastructure-k8s",
        name: "Infrastructure & Kubernetes",
        category: "exploring",
        whyIUseIt: "Understanding container orchestration, ingress routing, secret management, and cloud infrastructure deployment.",
        whereIUsedIt: ["DevOps Study"],
        relatedProjects: ["Docker Deployments"],
        engineeringRole: "Studying pod lifecycle management, horizontal autoscaling, and service discovery."
      },
      {
        id: "ml-inference",
        name: "ML Inference Systems",
        category: "exploring",
        whyIUseIt: "Optimizing neural network model latency, ONNX runtime export, and low-latency feature processing pipelines.",
        whereIUsedIt: ["Rural Infrastructure Classification", "Krishi"],
        relatedProjects: ["Rural Infrastructure Classification", "Krishi"],
        engineeringRole: "Feature vector scaling, tensor array serialization, and evaluation metrics tracking."
      }
    ]
  }
];
