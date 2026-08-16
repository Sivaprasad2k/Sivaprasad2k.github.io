export interface Profile {
  name: string;
  handle: string;
  role: string;
  subRole: string;
  location: string;
  status: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  heroQuote: string;
  bio: string;
  supportingMessage: string;
  corePrinciples: {
    id: string;
    number: string;
    title: string;
    summary: string;
    detail: string;
    technicalExample: string;
    codeSnippet: string;
    impact: string;
  }[];
}

export const PROFILE_DATA: Profile = {
  name: "Siva Prasad M L",
  handle: "Sivaprasad2k",
  role: "Backend / Software Engineer",
  subRole: "Java · Spring Boot · PostgreSQL · Python/FastAPI",
  location: "India",
  status: "SYSTEM OPERATIONAL",
  availability: "Available for Backend & Software Engineering Roles",
  email: "sivaprasadml2k5@gmail.com",
  github: "https://github.com/Sivaprasad2k",
  linkedin: "https://www.linkedin.com/in/sivaprasadml",
  resumePdf: "/resume.pdf",
  heroQuote: "I build backend systems and software products with Java, Spring Boot, PostgreSQL and Python.",
  bio: "Software engineer focused on backend systems, relational database architecture, security boundaries, and async task processing. Building software where domain rules, data models, and failure behavior matter.",
  supportingMessage: "Focused on backend systems engineering, transactional reliability, and software craftsmanship.",
  
  corePrinciples: [
    {
      id: "PR-01",
      number: "01",
      title: "DOMAIN BEFORE CODE",
      summary: "Understand domain requirements and state invariants before writing code.",
      detail: "Avoid reducing everything to raw CRUD controllers. Rich domain models enforce business invariants at the core, keeping application state predictable and decoupling business rules from transport infrastructure.",
      technicalExample: "Krishi Crop Management Aggregate",
      codeSnippet: `public class CropCycleAggregate {
  private final CropCycleId id;
  private CropStatus status;
  
  public void recordIncident(HealthIncident incident) {
    if (this.status != CropStatus.GROWING) {
      throw new InvalidStateTransitionException("Incidents only valid during GROWING phase");
    }
    this.status = CropStatus.HEALTH_ISSUE;
  }
}`,
      impact: "Eliminates illegal state transitions and dirty data mutations at domain boundaries."
    },
    {
      id: "PR-02",
      number: "02",
      title: "DATA IS ARCHITECTURE",
      summary: "Database schemas and transactional boundaries outlive transient frameworks.",
      detail: "Reliable backend engineering relies on intentional database normalization, composite indexing strategies, and strict relational constraints. Code can be rewritten, but data models endure.",
      technicalExample: "Indexed Ledger & Temporal State Persistence",
      codeSnippet: `CREATE TABLE application_state_audit (
  id UUID PRIMARY KEY,
  application_id UUID NOT NULL REFERENCES job_applications(id),
  from_state VARCHAR(32) NOT NULL,
  to_state VARCHAR(32) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_state_audit_app_time ON application_state_audit(application_id, created_at DESC);`,
      impact: "Guarantees ACID transactional compliance and instant audit trail retrieval."
    },
    {
      id: "PR-03",
      number: "03",
      title: "FAILURE IS A DESIGN INPUT",
      summary: "Design for partial failures, network drops, and upstream service downtime.",
      detail: "Networks drop packets, external APIs crash, and databases time out. Reliable systems treat failure as an expected execution path by using idempotent endpoints, exponential backoff retries, and strict circuit boundaries.",
      technicalExample: "Spring Retryable Upstream Dispatcher",
      codeSnippet: `@Retryable(
  retryFor = { RemoteServiceException.class },
  maxAttempts = 3,
  backoff = @Backoff(delay = 1000, multiplier = 2.0)
)
public AdvisoryResponse dispatchToInference(TelemetryPayload payload) {
  return restTemplate.postForObject(fastApiUrl, payload, AdvisoryResponse.class);
}`,
      impact: "Prevents cascading failures and keeps primary application services available."
    },
    {
      id: "PR-04",
      number: "04",
      title: "ASYNC WHEN LATENCY DEMANDS IT",
      summary: "Decouple synchronous HTTP request threads from background telemetry and ML processing.",
      detail: "Synchronous REST endpoints should respond instantly. Heavy operations, sensor batch aggregations, and LLM inference calls belong in non-blocking asynchronous task queues.",
      technicalExample: "FastAPI / Python Async Task Queue",
      codeSnippet: `@app.post("/api/v1/synthesis")
async def request_task_synthesis(request: TaskRequest, background_tasks: BackgroundTasks):
    task_id = str(uuid.uuid4())
    background_tasks.add_task(process_async_pipeline, task_id, request)
    return {"task_id": task_id, "status": "QUEUED"}`,
      impact: "Maintains sub-100ms API response latency while handling multi-second AI inference pipelines."
    },
    {
      id: "PR-05",
      number: "05",
      title: "OBSERVABILITY IS PART OF THE SYSTEM",
      summary: "Telemetry, audit history, and latency boundaries must be designed from day one.",
      detail: "Systems without observability are impossible to debug in production. Comprehensive logging, metric tracking, and audit trails provide full visibility into operational state.",
      technicalExample: "Structured Audit Log & State Observability",
      codeSnippet: `@Aspect
@Component
public className SystemObservabilityAspect {
  @Around("@annotation(MonitoredOperation)")
  public Object logMetrics(ProceedingJoinPoint pjp) throws Throwable {
    long start = System.currentTimeMillis();
    Object result = pjp.proceed();
    log.info("op={} latency={}ms status=SUCCESS", pjp.getSignature().getName(), System.currentTimeMillis() - start);
    return result;
  }
}`,
      impact: "Delivers operational metrics for latency tracking and root-cause failure analysis."
    }
  ]
};
