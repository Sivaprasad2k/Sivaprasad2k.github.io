export interface SkillItem {
  name: string;
  roleInSystems: string;
  featuredProject: string;
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
    domainName: "Core Stack",
    iconName: "Server",
    description: "Primary backend specialization for production software systems, API design, and domain security.",
    skills: [
      { name: "Java", roleInSystems: "Primary language for backend services and object-oriented domain models.", featuredProject: "Real Estate Hub" },
      { name: "Spring Boot", roleInSystems: "Framework for building modular REST APIs and backend microservices.", featuredProject: "Krishi" },
      { name: "Spring Security", roleInSystems: "Stateless JWT authentication, password hashing, and granular RBAC authorization.", featuredProject: "CareerPath" },
      { name: "JPA / Hibernate", roleInSystems: "Object-Relational Mapping, criteria specifications, and transactional boundary management.", featuredProject: "CareerPath" }
    ]
  },
  {
    id: "working",
    domainName: "Working Knowledge",
    iconName: "Cpu",
    description: "Databases, frontend frameworks, version control, and containerized deployment tooling.",
    skills: [
      { name: "PostgreSQL", roleInSystems: "ACID-compliant relational datastore for core application entity states.", featuredProject: "Krishi" },
      { name: "MongoDB", roleInSystems: "NoSQL document store for flexible schema structures.", featuredProject: "System Datastores" },
      { name: "React", roleInSystems: "Component-driven user interface architecture for web applications.", featuredProject: "CareerPath" },
      { name: "TypeScript", roleInSystems: "Compile-time type safety across application interfaces and API contracts.", featuredProject: "Sivaprasad2k.github.io" },
      { name: "Tailwind CSS", roleInSystems: "Utility-first design system styling and responsive editorial layouts.", featuredProject: "Sivaprasad2k.github.io" },
      { name: "Docker", roleInSystems: "Containerizing services into isolated multi-container runtime environments.", featuredProject: "Real Estate Hub" },
      { name: "Git", roleInSystems: "Distributed version control and feature branch management.", featuredProject: "All Repositories" },
      { name: "GitHub Actions", roleInSystems: "CI/CD pipelines for automated builds and GitHub Pages deployment.", featuredProject: "Sivaprasad2k.github.io" },
      { name: "Linux", roleInSystems: "Server environment configuration, shell scripting, and process execution.", featuredProject: "Deployment Infra" }
    ]
  },
  {
    id: "exploring",
    domainName: "Exploring",
    iconName: "Sparkles",
    description: "Active areas of engineering study, architectural research, and skill expansion.",
    skills: [
      { name: "System Design Concepts", roleInSystems: "Studying fault tolerance, caching mechanisms, message queues, and distributed architecture patterns.", featuredProject: "Architecture Research" },
      { name: "AI Engineering", roleInSystems: "Exploring ML inference integration patterns and asynchronous task worker pipelines.", featuredProject: "Avis & Krishi" }
    ]
  }
];
