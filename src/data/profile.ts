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
  bio: string;
  supportingMessage: string;
  philosophySteps: { step: string; label: string; desc: string }[];
  corePrinciples: { id: string; title: string; detail: string; codeSnippet: string }[];
}

export const PROFILE_DATA: Profile = {
  name: "Siva Prasad M L",
  handle: "Sivaprasad2k",
  role: "SYSTEMS-ORIENTED SOFTWARE ENGINEER",
  subRole: "Backend Engineering & Production Software",
  location: "India",
  status: "SYSTEM OPERATIONAL",
  availability: "Available for Systems & Backend Engineering Roles",
  email: "sivaprasadml2k5@gmail.com",
  github: "https://github.com/Sivaprasad2k",
  linkedin: "https://www.linkedin.com/in/sivaprasadml",
  bio: "Computer Science & Engineering student focused on backend engineering with Java and Spring Boot. I design across the stack when necessary, with particular emphasis on RESTful API design, relational data modeling, security, and backend reliability. Active learner exploring system design concepts and AI engineering integration.",
  supportingMessage: "I design and build production software with a focus on backend systems, transactional reliability, domain-driven architectures, and reliable software engineering.",
  
  philosophySteps: [
    { step: "01", label: "Problem", desc: "Understand the domain requirements and failure scenarios before picking tech." },
    { step: "02", label: "Domain", desc: "Model domain entities, boundaries, and invariants prior to building APIs." },
    { step: "03", label: "Data", desc: "Design relational schemas, indexes, and transactional boundaries carefully." },
    { step: "04", label: "Workflow", desc: "Orchestrate synchronous state transitions and asynchronous event queues." },
    { step: "05", label: "Architecture", desc: "Decouple services with clean contracts and strict boundary encapsulation." },
    { step: "06", label: "Implementation", desc: "Write clean, type-safe Java/Spring Boot code with modular test suites." },
    { step: "07", label: "Deployment", desc: "Containerize via Docker, automate CI/CD workflows, and monitor execution." },
    { step: "08", label: "Observation", desc: "Track system latency, error bounds, and database execution performance." },
  ],

  corePrinciples: [
    {
      id: "PR-01",
      title: "Model the Domain First",
      detail: "Avoid reducing everything to raw CRUD controllers. Rich domain models enforce invariants at the core, keeping business logic clear and predictable.",
      codeSnippet: "public class TransactionAggregate {\n  private final TransactionId id;\n  private AccountState state;\n  public void executeTransfer(Money amount) {\n    validateSufficientFunds(amount);\n    this.state = State.COMPLETED;\n  }\n}"
    },
    {
      id: "PR-02",
      title: "Data Schema Precedence",
      detail: "Database schemas outlive transient codeframes. Reliable backend engineering relies on intentional indexing, normalization, and ACID guarantees.",
      codeSnippet: "CREATE TABLE account_ledger (\n  id UUID PRIMARY KEY,\n  account_id UUID NOT NULL REFERENCES accounts(id),\n  amount NUMERIC(14, 2) NOT NULL,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);\nCREATE INDEX idx_ledger_account ON account_ledger(account_id, created_at DESC);"
    },
    {
      id: "PR-03",
      title: "Design for Failure & Recovery",
      detail: "Networks drop packets and services crash. Implement idempotent API endpoints, automatic retries with backoff strategies, and clean exception handling.",
      codeSnippet: "@Retryable(maxAttempts = 3, backoff = @Backoff(delay = 1000))\npublic Response callUpstreamService(Payload data) {\n  return restTemplate.postForObject(url, data, Response.class);\n}"
    },
    {
      id: "PR-04",
      title: "Exploratory System & AI Integration",
      detail: "Actively studying system design patterns and exploring ML inference integration, isolating experimental workflows behind clear interface boundaries.",
      codeSnippet: "@Async\npublic CompletableFuture<InferenceResult> dispatchAiPipeline(WorkItem item) {\n  InferenceResult res = fastApiClient.predict(item);\n  return CompletableFuture.completedFuture(res);\n}"
    }
  ]
};
