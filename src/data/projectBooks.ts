import { PROJECTS_DATA } from './projects';
import type { Project } from './projects';

export type PageType =
  | 'cover'
  | 'problem'
  | 'system'
  | 'architecture'
  | 'workflow'
  | 'datamodel'
  | 'decisions'
  | 'tradeoffs'
  | 'implementation'
  | 'repository';

export interface ProjectPage {
  id: string;
  pageNumber: number;
  type: PageType;
  title: string;
  subtitle?: string;
  content: string[];
  bulletPoints?: string[];
  codeSnippet?: string;
  artifactId?: 'architecture' | 'workflow' | 'datamodel' | 'tradeoffs' | 'repository';
}

export interface ProjectBookDefinition {
  projectId: string;
  title: string;
  categoryLabel: string;
  tagline: string;
  year: string;
  status: string;
  statusColor: string;
  tier: 'featured' | 'additional';
  pages: ProjectPage[];
  projectRef: Project;
}

const getProject = (id: string): Project => PROJECTS_DATA.find(p => p.id === id)!;

export const PROJECT_BOOKS_DATA: ProjectBookDefinition[] = [
  // 1. KRISHI BOOK (10 Pages - Highest Depth)
  {
    projectId: 'krishi',
    title: 'Krishi Engine',
    categoryLabel: 'FEATURED CASE STUDY',
    tagline: 'Workflow-Driven Agricultural Operations & Event Backend',
    year: '2024',
    status: 'BUILDING',
    statusColor: 'emerald',
    tier: 'featured',
    projectRef: getProject('krishi'),
    pages: [
      {
        id: 'cover',
        pageNumber: 0,
        type: 'cover',
        title: 'KRISHI ENGINE',
        subtitle: 'Agricultural Operations & Event-Driven Backend',
        content: [
          'A comprehensive case study detailing the architectural design, workflow state transitions, and event-driven automation of the Krishi agricultural platform.'
        ]
      },
      {
        id: 'problem',
        pageNumber: 1,
        type: 'problem',
        title: '01. THE PROBLEM',
        subtitle: 'Telemetry Fragments & Unpredictable Supply Chain Latency',
        content: [
          'Agricultural operational management requires processing fragmented sensor telemetry, unpredictable supply chain workflows, and field recommendation queries in near real-time.',
          'Traditional synchronous REST architectures suffer thread starvation when long-running agronomic telemetry aggregates or machine learning advisory inferences block incoming HTTP connection pools.'
        ],
        bulletPoints: [
          'High-frequency IoT sensor telemetry ingestion without database lock contention',
          'Strict business invariants required for crop cycle growth stages',
          'Zero-downtime microservice decoupling for machine learning advisory models'
        ]
      },
      {
        id: 'system',
        pageNumber: 2,
        type: 'system',
        title: '02. SYSTEM BOUNDARIES',
        subtitle: 'Event-Driven Worker Isolation & Decoupled Inference',
        content: [
          'Designed an event-driven backend architecture where high-throughput field data ingested via REST APIs is processed asynchronously by background worker routines.',
          'Core transactional records persist in PostgreSQL via Spring Data JPA, while crop recommendation inference queries route to a dedicated Python FastAPI service running TensorFlow models.'
        ],
        bulletPoints: [
          'Spring Boot 3.x REST Ingestion Gateway with rate limiting & payload validation',
          'Spring @Async / ExecutorPool worker queues for telemetry batch calculations',
          'FastAPI microservice exposing ML advisory predictions over HTTP/JSON',
          'PostgreSQL relational datastore with spatial & temporal composite indexes'
        ]
      },
      {
        id: 'architecture',
        pageNumber: 3,
        type: 'architecture',
        title: '03. ARCHITECTURE DIAGRAM',
        subtitle: 'Interactive Component Layers & Data Flow',
        content: [
          'Inspect the architectural layers below. Click any node to review component responsibilities, underlying technologies, and implementation details.'
        ],
        artifactId: 'architecture'
      },
      {
        id: 'workflow',
        pageNumber: 4,
        type: 'workflow',
        title: '04. CROP CYCLE WORKFLOW',
        subtitle: 'Invariant-Driven Finite State Machine',
        content: [
          'Crop cycle management is modeled as a deterministic finite state machine. Transitions are enforced at the service boundary before state persistence.',
          'Click any crop state below to inspect allowed transitions, business invariants, and technical JPA implementation logic.'
        ],
        artifactId: 'workflow'
      },
      {
        id: 'decisions',
        pageNumber: 5,
        type: 'decisions',
        title: '05. ENGINEERING DECISIONS',
        subtitle: 'Worker Isolation & Microservice Decoupling',
        content: [
          '1. Event-Driven Worker Isolation: Separated synchronous agronomic query endpoints from long-running telemetry aggregate computation to eliminate thread starvation during sensor bursts.',
          '2. Decoupled ML Advisory Microservice: Exposed TensorFlow crop advisory models through a dedicated Python FastAPI service, allowing independent scaling without redeploying Spring Boot core services.'
        ],
        bulletPoints: [
          'Composite Indexing Strategy: Created spatial and timestamp indexes in PostgreSQL for high-speed historical telemetry scans',
          'Spring Application Events: Internal event bus triggers automated irrigation schedule updates when new planting events occur'
        ]
      },
      {
        id: 'tradeoffs',
        pageNumber: 6,
        type: 'tradeoffs',
        title: '06. ENGINEERING TRADE-OFFS',
        subtitle: 'Modular Monolith vs Microservice Mesh',
        content: [
          'Evaluating architecture trade-offs for early-stage agricultural operations system design:'
        ],
        artifactId: 'tradeoffs'
      },
      {
        id: 'implementation',
        pageNumber: 7,
        type: 'implementation',
        title: '07. IMPLEMENTATION PROOF',
        subtitle: 'State Transition Boundary & JPA Projections',
        content: [
          'Demonstrating strict state machine boundary validation and custom Spring Data JPA interface projections to minimize database heap footprint during bulk queries.'
        ],
        codeSnippet: `@Service
@Transactional
public class CropWorkflowService {
    private final CropRepository cropRepo;
    private final ApplicationEventPublisher eventPublisher;

    public CropState transitionCropState(Long cropId, CropState nextState) {
        CropEntity crop = cropRepo.findById(cropId)
            .orElseThrow(() -> new EntityNotFoundException("Crop not found: " + cropId));
            
        if (!crop.getCurrentState().canTransitionTo(nextState)) {
            throw new IllegalStateTransitionException(
                "Invalid transition: " + crop.getCurrentState() + " -> " + nextState
            );
        }
        
        crop.setCurrentState(nextState);
        eventPublisher.publishEvent(new CropStateChangedEvent(this, crop));
        return cropRepo.save(crop).getCurrentState();
    }
}`
      },
      {
        id: 'repository',
        pageNumber: 8,
        type: 'repository',
        title: '08. SOURCE CODE & REPOSITORY',
        subtitle: 'Verified GitHub Implementation',
        content: [
          'The complete Krishi backend codebase is open for technical review on GitHub. Includes full Spring Boot service modules, JPA entity mappings, and Docker Compose configurations.'
        ],
        artifactId: 'repository'
      }
    ]
  },

  // 2. CAREERPATH BOOK (8 Pages)
  {
    projectId: 'careerpath',
    title: 'CareerPath Engine',
    categoryLabel: 'FEATURED CASE STUDY',
    tagline: 'Relational Job Application & Milestone Tracking System',
    year: '2024',
    status: 'SHIPPED',
    statusColor: 'indigo',
    tier: 'featured',
    projectRef: getProject('careerpath'),
    pages: [
      {
        id: 'cover',
        pageNumber: 0,
        type: 'cover',
        title: 'CAREERPATH ENGINE',
        subtitle: 'Relational Application & Milestone Tracker',
        content: [
          'A case study on relational schema design, application state machines, and JWT security boundaries for career milestone management.'
        ]
      },
      {
        id: 'problem',
        pageNumber: 1,
        type: 'problem',
        title: '01. THE PROBLEM',
        subtitle: 'Concurrent Application Pipelines & State Drift',
        content: [
          'Job seekers manage multiple concurrent application pipelines with varying interview stages, feedback rounds, and offer deadlines.',
          'Unstructured tracking spreadsheets lead to state synchronization bugs, missed follow-ups, and a lack of audit history across application milestones.'
        ],
        bulletPoints: [
          'Deterministic status progression across interview stages',
          'Stateless user authentication with instant logout token revocation',
          'Optimized relational queries for dashboard analytics without Object Graph overhead'
        ]
      },
      {
        id: 'system',
        pageNumber: 2,
        type: 'system',
        title: '02. SYSTEM ARCHITECTURE',
        subtitle: 'Spring Security Filter Chain & Relational Storage',
        content: [
          'Built a Spring Boot REST backend utilizing Spring Security for JWT authentication and PostgreSQL for transactional listing state.',
          'Paired with a modern React SPA frontend delivering kanban milestone visualization and real-time application statistics.'
        ],
        artifactId: 'architecture'
      },
      {
        id: 'datamodel',
        pageNumber: 3,
        type: 'datamodel',
        title: '03. RELATIONAL DATA MODEL',
        subtitle: 'Normalized Entities & Foreign Key Audit Integrity',
        content: [
          'Click entity nodes below to inspect normalized table structures, primary/foreign key relationships, and state audit tracking.'
        ],
        artifactId: 'datamodel'
      },
      {
        id: 'workflow',
        pageNumber: 4,
        type: 'workflow',
        title: '04. STATE MACHINE AUTOMATA',
        subtitle: 'Valid vs Invalid Application Transitions',
        content: [
          'Enforced deterministic application state progression rules (APPLIED → SCREENING → INTERVIEW → OFFER → ACCEPTED / REJECTED) within service boundaries.',
          'Click states below to inspect persistence queries and security boundary constraints.'
        ],
        artifactId: 'workflow'
      },
      {
        id: 'decisions',
        pageNumber: 5,
        type: 'decisions',
        title: '05. ENGINEERING DECISIONS',
        subtitle: 'FSM Patterns & JWT Revocation Strategy',
        content: [
          '1. Deterministic Finite State Automata: Enforced transition invariants at domain entity level to prevent invalid state changes across concurrent browser sessions.',
          '2. Stateless JWT Validation & Token Revocation: Configured custom Spring Security filter chain with refresh token rotation.'
        ],
        bulletPoints: [
          'Interface Projections: Used custom Spring Data JPA interface projections for dashboard metrics to avoid loading full entity graphs',
          'Audit Log Automation: Created automated trigger logs tracking timestamps of every interview round change'
        ]
      },
      {
        id: 'implementation',
        pageNumber: 6,
        type: 'implementation',
        title: '06. CODE PROOF',
        subtitle: 'Transactional State Invariant Enforcer',
        content: [
          'Implementation proof showing transactional state validation in Spring Boot:'
        ],
        codeSnippet: `@RestController
@RequestMapping("/api/v1/applications")
public class ApplicationStateController {
    private final ApplicationService appService;

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<ApplicationDto> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody StatusUpdateRequest request) {
        ApplicationDto updated = appService.transitionStatus(id, request.getNewStatus());
        return ResponseEntity.ok(updated);
    }
}`
      },
      {
        id: 'repository',
        pageNumber: 7,
        type: 'repository',
        title: '07. SOURCE REPOSITORY',
        subtitle: 'Verified GitHub Implementation',
        content: [
          'Inspect the complete CareerPath backend repository on GitHub including database migrations and security filter configurations.'
        ],
        artifactId: 'repository'
      }
    ]
  },

  // 3. REAL ESTATE HUB BOOK (8 Pages)
  {
    projectId: 'realestatehub',
    title: 'Real Estate Hub',
    categoryLabel: 'FEATURED CASE STUDY',
    tagline: 'Full-Stack Property Marketplace with RBAC & REST APIs',
    year: '2024',
    status: 'SHIPPED',
    statusColor: 'indigo',
    tier: 'featured',
    projectRef: getProject('realestatehub'),
    pages: [
      {
        id: 'cover',
        pageNumber: 0,
        type: 'cover',
        title: 'REAL ESTATE HUB',
        subtitle: 'Property Marketplace & RBAC Architecture',
        content: [
          'A full-stack architecture case study focusing on fine-grained Role-Based Access Control (RBAC), multi-criteria search APIs, and containerized deployment.'
        ]
      },
      {
        id: 'problem',
        pageNumber: 1,
        type: 'problem',
        title: '01. THE PROBLEM',
        subtitle: 'Multi-Tenant RBAC & Multi-Criteria Property Filtering',
        content: [
          'Real estate marketplaces serve diverse actor roles (Buyers, Agents, System Administrators) with distinct permissions over listing creation, pricing, and administrative moderation.',
          'Delivering multi-parameter search (price range, spatial location, property type, amenities) requires flexible criteria query generation without raw SQL vulnerability.'
        ],
        bulletPoints: [
          'Method-level role isolation (@PreAuthorize) preventing unauthorized endpoint access',
          'Dynamic JPA Criteria API query execution for multi-faceted searches',
          'Docker Compose multi-stage containerization for development & staging isolation'
        ]
      },
      {
        id: 'architecture',
        pageNumber: 2,
        type: 'architecture',
        title: '02. SYSTEM ARCHITECTURE',
        subtitle: 'Layered REST Service & RBAC Enforcement',
        content: [
          'Inspect the architecture below. Click nodes to inspect security filters, API controllers, and database access layers.'
        ],
        artifactId: 'architecture'
      },
      {
        id: 'workflow',
        pageNumber: 3,
        type: 'workflow',
        title: '03. RBAC ROLE PERMISSION MATRIX',
        subtitle: 'Fine-Grained Role Security Isolation',
        content: [
          'Click roles below to inspect allowed operations, API endpoint boundaries, and method-level security constraints.'
        ],
        artifactId: 'workflow'
      },
      {
        id: 'decisions',
        pageNumber: 4,
        type: 'decisions',
        title: '04. ENGINEERING DECISIONS',
        subtitle: 'Method-Level Security & Criteria API Filtering',
        content: [
          '1. Hierarchical Method-Level RBAC: Implemented Spring Security `@PreAuthorize` rules bound to granular role permissions to isolate admin functions.',
          '2. Dynamic JPA Specification Builder: Created Criteria API specifications for multi-parameter property search without string concatenation.'
        ],
        bulletPoints: [
          'Multi-Stage Docker Compose: Containerized Spring Boot runtime and PostgreSQL datastore into isolated environment layers',
          'Hypermedia DTO Mappings: Isolated database entities from REST JSON responses using explicit DTO transformations'
        ]
      },
      {
        id: 'tradeoffs',
        pageNumber: 5,
        type: 'tradeoffs',
        title: '05. ENGINEERING TRADE-OFFS',
        subtitle: 'Method Security vs Gateway Security',
        content: [
          'Evaluating security boundary choices for real estate marketplace endpoints:'
        ],
        artifactId: 'tradeoffs'
      },
      {
        id: 'implementation',
        pageNumber: 6,
        type: 'implementation',
        title: '06. CODE PROOF',
        subtitle: 'Method-Level @PreAuthorize & Criteria Specification',
        content: [
          'Spring Security role check & JPA Specification implementation snippet:'
        ],
        codeSnippet: `@Repository
public class PropertySpecifications {
    public static Specification<PropertyEntity> withFilters(PropertySearchCriteria criteria) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (criteria.getMinPrice() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("price"), criteria.getMinPrice()));
            }
            if (criteria.getPropertyType() != null) {
                predicates.add(cb.equal(root.get("propertyType"), criteria.getPropertyType()));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}`
      },
      {
        id: 'repository',
        pageNumber: 7,
        type: 'repository',
        title: '07. SOURCE REPOSITORY',
        subtitle: 'Verified GitHub Implementation',
        content: [
          'Inspect the Real Estate Hub repository on GitHub including full React frontend code, Spring Boot REST controllers, and Docker configurations.'
        ],
        artifactId: 'repository'
      }
    ]
  },

  // 4. AVIS BOOK (6 Pages)
  {
    projectId: 'avis',
    title: 'Avis AI Assistant',
    categoryLabel: 'SYSTEM EXPERIMENT',
    tagline: 'Asynchronous AI Personal Assistant & Task Pipeline',
    year: '2025',
    status: 'BUILDING',
    statusColor: 'sky',
    tier: 'additional',
    projectRef: getProject('avis'),
    pages: [
      {
        id: 'cover',
        pageNumber: 0,
        type: 'cover',
        title: 'AVIS AI ASSISTANT',
        subtitle: 'Asynchronous AI Pipeline & Task Orchestration',
        content: [
          'An experimental case study on asynchronous task pipelines, non-blocking HTTP worker queues, and structured Pydantic schema validation for AI integrations.'
        ]
      },
      {
        id: 'problem',
        pageNumber: 1,
        type: 'problem',
        title: '01. THE PROBLEM',
        subtitle: 'Upstream LLM Latency Spikes & Timeout Contention',
        content: [
          'Integrating natural language models into personal productivity software exposes systems to unpredictable upstream API latency spikes (800ms - 2500ms) and occasional HTTP 429 rate limit timeouts.',
          'Executing model generation synchronously inside main HTTP handler threads leads to connection pool exhaustion and sluggish user interface response times.'
        ],
        bulletPoints: [
          'Asynchronous queue-based request ingestion returning immediate 202 Accepted tokens',
          'Pydantic schema enforcement on LLM JSON output arrays to prevent generation errors',
          'Non-blocking Python asyncio background task scheduling'
        ]
      },
      {
        id: 'system',
        pageNumber: 2,
        type: 'system',
        title: '02. ASYNCHRONOUS PIPELINE STEPS',
        subtitle: 'Non-Blocking Request Lifecycle',
        content: [
          'Click pipeline stages below to inspect latency boundaries, execution models, failure isolation strategies, and API target endpoints.'
        ],
        artifactId: 'workflow'
      },
      {
        id: 'architecture',
        pageNumber: 3,
        type: 'architecture',
        title: '03. SYSTEM ARCHITECTURE',
        subtitle: 'Python FastAPI & Async Worker Queue',
        content: [
          'Inspect the asynchronous component architecture below:'
        ],
        artifactId: 'architecture'
      },
      {
        id: 'decisions',
        pageNumber: 4,
        type: 'decisions',
        title: '04. ENGINEERING DECISIONS',
        subtitle: 'Asyncio Non-Blocking Engine & Pydantic Schema Bounds',
        content: [
          '1. Asynchronous Non-Blocking Execution: Leveraged Python asyncio and httpx non-blocking clients to isolate LLM inference latency from client HTTP request threads.',
          '2. Structured Pydantic Output Synthesis: Enforced strict schema validation on generated model responses to eliminate downstream JSON parsing failures.'
        ]
      },
      {
        id: 'repository',
        pageNumber: 5,
        type: 'repository',
        title: '05. SOURCE REPOSITORY',
        subtitle: 'Verified GitHub Implementation',
        content: [
          'Inspect the Avis backend pipeline codebase on GitHub including FastAPI routers and asyncio task queue implementations.'
        ],
        artifactId: 'repository'
      }
    ]
  },

  // 5. RURAL INFRASTRUCTURE BOOK (6 Pages)
  {
    projectId: 'ruralinfra',
    title: 'Rural Infrastructure Classification',
    categoryLabel: 'DATA PROJECT',
    tagline: 'Machine Learning Dataset Preparation & Model Classification',
    year: '2024',
    status: 'COMPLETED',
    statusColor: 'indigo',
    tier: 'additional',
    projectRef: getProject('ruralinfra'),
    pages: [
      {
        id: 'cover',
        pageNumber: 0,
        type: 'cover',
        title: 'RURAL INFRASTRUCTURE',
        subtitle: 'ML Dataset Preprocessing & Model Classification',
        content: [
          'A data project case study focusing on remote sensing dataset normalization, feature scaling, neural network training in TensorFlow/Keras, and classification metrics.'
        ]
      },
      {
        id: 'problem',
        pageNumber: 1,
        type: 'problem',
        title: '01. THE PROBLEM',
        subtitle: 'Spatial Imagery Noise & Feature Scaling Inconsistencies',
        content: [
          'Classifying rural infrastructure (paved roads, unpaved tracks, water bodies, structures) from satellite imagery requires automated feature extraction and cleaning pipelines to handle spatial noise.',
          'Unscaled pixel matrices and heterogeneous tabular GIS features cause gradient descent instability during neural network training.'
        ],
        bulletPoints: [
          'Automated data cleaning & outlier removal across spatial imagery arrays',
          'MinMax & StandardScaler feature scaling to normalize input tensors to [0.0, 1.0]',
          'Keras Multi-Layer Perceptron / CNN multi-class probability classification'
        ]
      },
      {
        id: 'workflow',
        pageNumber: 2,
        type: 'workflow',
        title: '02. 6-STAGE ML PIPELINE',
        subtitle: 'Ingestion to Confusion Matrix Metrics',
        content: [
          'Click pipeline stages below to inspect input/output formats, technology tools, and data transformation rationale.'
        ],
        artifactId: 'workflow'
      },
      {
        id: 'decisions',
        pageNumber: 3,
        type: 'decisions',
        title: '03. ENGINEERING DECISIONS',
        subtitle: 'Normalization Pipelines & Regularization Strategy',
        content: [
          '1. Feature Normalization Pipeline: Standardized imagery tensor matrices and tabular GIS tags to stabilize neural network gradient updates.',
          '2. Dropout Regularization: Configured Dropout layers in Keras Sequential model to prevent overfitting on rural spatial features.'
        ]
      },
      {
        id: 'implementation',
        pageNumber: 4,
        type: 'implementation',
        title: '04. MODEL METRICS EVALUATION',
        subtitle: 'Precision, Recall & Classification Report',
        content: [
          'Evaluates unseen validation imagery against classified infrastructure categories: Paved Road, Unpaved Track, Water Body, Built-up Structure.'
        ],
        codeSnippet: `# Keras Sequential Model Architecture
model = Sequential([
    Dense(128, activation='relu', input_shape=(num_features,)),
    Dropout(0.3),
    Dense(64, activation='relu'),
    Dropout(0.2),
    Dense(4, activation='softmax') # 4 Multi-class categories
])
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`
      },
      {
        id: 'repository',
        pageNumber: 5,
        type: 'repository',
        title: '05. PROJECT SUMMARY',
        subtitle: 'Verified Project Artifacts',
        content: [
          'Complete dataset preparation notebooks, Keras model training scripts, and metric evaluation reports.'
        ],
        artifactId: 'repository'
      }
    ]
  }
];
