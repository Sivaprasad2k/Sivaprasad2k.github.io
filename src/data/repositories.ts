import { PROJECTS_DATA } from './projects';
import type { Project } from './projects';

export interface RepositoryDefinition {
  id: string;
  projectId: string;
  name: string;
  category: 'FEATURED' | 'ADDITIONAL';
  tagline: string;
  description: string;
  technologies: string[];
  architecturePattern: string;
  primaryLanguage: string;
  repositoryUrl?: string;
  keySpecs: { label: string; value: string }[];
  projectRef: Project;
}

const getProject = (id: string): Project => PROJECTS_DATA.find(p => p.id === id)!;

export const REPOSITORIES_DATA: RepositoryDefinition[] = [
  {
    id: 'repo-krishi',
    projectId: 'krishi',
    name: 'KRISHI',
    category: 'FEATURED',
    tagline: 'Workflow-Driven Agricultural Operations & Event Backend',
    description: 'Event-driven backend service architecture processing high-throughput IoT sensor telemetry, decoupling machine learning inference behind FastAPI endpoints.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'FastAPI', 'Python', 'Docker', 'React'],
    architecturePattern: 'Event-Driven & Async Microservices',
    primaryLanguage: 'Java / Spring Boot',
    repositoryUrl: 'https://github.com/Sivaprasad2k/Krishi',
    keySpecs: [
      { label: 'Backend Core', value: 'Spring Boot 3.x' },
      { label: 'AI Inference', value: 'FastAPI Microservice' },
      { label: 'Relational Store', value: 'PostgreSQL' },
      { label: 'Execution', value: 'Async Worker Pools' }
    ],
    projectRef: getProject('krishi')
  },
  {
    id: 'repo-careerpath',
    projectId: 'careerpath',
    name: 'CAREERPATH',
    category: 'FEATURED',
    tagline: 'Relational Job Application & Milestone Tracking System',
    description: 'Relational database schema mapping candidate entities to application state transitions, enforcing deterministic progression rules through Spring Boot service boundaries.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JPA / Hibernate', 'React', 'TypeScript', 'Tailwind CSS'],
    architecturePattern: 'Layered Relational & State Machine',
    primaryLanguage: 'Java / Spring Boot',
    repositoryUrl: 'https://github.com/Sivaprasad2k/CareerPath',
    keySpecs: [
      { label: 'Data Integrity', value: 'ACID Compliant JPA' },
      { label: 'Authentication', value: 'Stateless JWT Auth' },
      { label: 'Frontend UI', value: 'React + TypeScript' },
      { label: 'State Model', value: 'Finite State Automata' }
    ],
    projectRef: getProject('careerpath')
  },
  {
    id: 'repo-realestatehub',
    projectId: 'realestatehub',
    name: 'REAL ESTATE HUB',
    category: 'FEATURED',
    tagline: 'Full-Stack Property Marketplace with RBAC & REST APIs',
    description: 'Production-ready REST API backend with fine-grained role-based access control (USER, AGENT, ADMIN) and dynamic JPA Specification criteria query filters.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JPA / Hibernate', 'Docker', 'React', 'Vite'],
    architecturePattern: 'Layered REST API & RBAC Security',
    primaryLanguage: 'Java / Spring Boot',
    repositoryUrl: 'https://github.com/Sivaprasad2k/Real-Estate-Hub',
    keySpecs: [
      { label: 'Access Control', value: 'Method-Level RBAC' },
      { label: 'Search Engine', value: 'JPA Criteria API' },
      { label: 'Containerization', value: 'Docker Compose' },
      { label: 'Architecture', value: 'Layered REST Service' }
    ],
    projectRef: getProject('realestatehub')
  },
  {
    id: 'repo-avis',
    projectId: 'avis',
    name: 'AVIS',
    category: 'ADDITIONAL',
    tagline: 'Asynchronous AI Personal Assistant & Task Pipeline',
    description: 'Asynchronous task execution pipeline utilizing Python FastAPI and queue execution abstractions, isolating external LLM provider requests from main HTTP handler threads.',
    technologies: ['Python', 'FastAPI', 'AI APIs', 'Asyncio', 'Docker', 'Git'],
    architecturePattern: 'Asynchronous Task Queue Pipeline',
    primaryLanguage: 'Python / FastAPI',
    repositoryUrl: 'https://github.com/Sivaprasad2k/Avis',
    keySpecs: [
      { label: 'Framework', value: 'Python FastAPI' },
      { label: 'Execution Model', value: 'Non-Blocking Asyncio' },
      { label: 'Validation', value: 'Pydantic Schemas' },
      { label: 'Status', value: 'Active Development' }
    ],
    projectRef: getProject('avis')
  },
  {
    id: 'repo-ruralinfra',
    projectId: 'ruralinfra',
    name: 'RURAL INFRASTRUCTURE',
    category: 'ADDITIONAL',
    tagline: 'Machine Learning Dataset Preparation & Model Classification',
    description: 'Machine learning dataset normalization, feature scaling, and neural network classification project analyzing remote sensing imagery and spatial infrastructure tag arrays.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Data Preprocessing'],
    architecturePattern: 'ML Pipeline & Feature Extraction',
    primaryLanguage: 'Python / TensorFlow',
    keySpecs: [
      { label: 'Stack', value: 'Python / TensorFlow' },
      { label: 'Model Type', value: 'Keras Neural Network' },
      { label: 'Task', value: 'Infrastructure Classification' }
    ],
    projectRef: getProject('ruralinfra')
  }
];
