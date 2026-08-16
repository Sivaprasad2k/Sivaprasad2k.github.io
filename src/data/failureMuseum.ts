export interface FailureEntry {
  id: string;
  title: string;
  project: string;
  what: string;
  why: string;
  fix: string;
  lesson: string;
  tag: string;
}

export const FAILURE_MUSEUM: FailureEntry[] = [
  {
    id: 'f1',
    title: 'The N+1 ORM Query That Grew With Every Record',
    project: 'Krishi',
    what: 'The telemetry dashboard loaded fine with 10 records. At 2,000 sensor entries, it took 18 seconds to respond. Each record triggered a separate SELECT to load related field metadata.',
    why: 'Hibernate\'s lazy loading was firing a query per entity in a loop. I hadn\'t checked what SQL was actually being issued — I assumed the ORM was handling it efficiently.',
    fix: 'Added @EntityGraph and JOIN FETCH to load field relations in a single query. Dropped response time from 18s to under 400ms on the same dataset.',
    lesson: 'Always log and inspect generated SQL before shipping a data-heavy endpoint. ORMs are convenient, not intelligent.',
    tag: 'Performance'
  },
  {
    id: 'f2',
    title: 'JWT Secret Not Loaded in Docker Production Build',
    project: 'CareerPath',
    what: 'The application deployed and passed health checks, but every authenticated request returned 403. The JWT signing key was silently empty.',
    why: 'The .env file was excluded from the Docker image (correctly, for security), but I forgot to inject the environment variable via the docker-compose.yml env_file directive during deployment.',
    fix: 'Added explicit env_file configuration in docker-compose.yml and verified with a startup log check that the secret was non-null before the application registered routes.',
    lesson: 'Test deployment config completely separately from application logic. A missing secret that fails silently is harder to debug than one that crashes loudly at startup.',
    tag: 'Deployment'
  },
  {
    id: 'f3',
    title: 'State Machine Allowed an Impossible Backward Jump',
    project: 'CareerPath',
    what: 'A job application could transition from INTERVIEW back to APPLIED through a direct API call. No frontend exposed this path, but the backend accepted it without error.',
    why: 'I enumerated valid forward transitions but never explicitly rejected invalid ones. The service assumed anything not in the "allowed" list was simply not possible to reach.',
    fix: 'Added an explicit rejectedTransitions check and threw an InvalidStateTransitionException with a descriptive message. Added a test case for every backward and skip-state path.',
    lesson: 'Enumerate invalid transitions explicitly — don\'t assume absence of a valid path equals enforcement of an invalid one.',
    tag: 'Domain Logic'
  },
  {
    id: 'f4',
    title: 'Recursive DFS Crashed on Deep Graphs',
    project: 'CS Playground (Portfolio)',
    what: 'The graph traversal visualizer worked on 20-node graphs. A visitor tried it with ~150 nodes arranged in a chain and the browser tab froze with a stack overflow.',
    why: 'My DFS implementation used function call recursion. Each recursive call consumed a stack frame, and deep paths exhausted the call stack.',
    fix: 'Replaced recursive DFS with an iterative version using an explicit JS array as the stack. Depth is now only limited by available memory, not call stack depth.',
    lesson: 'Test edge cases at scale: long chains, cycles, disconnected components. Recursion and deep graphs are a known collision.',
    tag: 'Algorithms'
  },
  {
    id: 'f5',
    title: 'Docker Build Cache Invalidated on Every CI Run',
    project: 'Real Estate Hub',
    what: 'Each GitHub Actions run re-downloaded all Maven dependencies from scratch. A 45-second build was taking 6 minutes.',
    why: 'My Dockerfile copied the entire src/ directory before running mvn dependency:go-offline. Any source file change invalidated the layer and re-fetched all dependencies.',
    fix: 'Reordered the Dockerfile: copy pom.xml first, run dependency resolution, then copy src/. This caches the dependency layer as long as pom.xml is unchanged.',
    lesson: 'Docker layers cache from top to bottom. Understand what invalidates each layer. Expensive operations belong below stable files.',
    tag: 'DevOps'
  },
  {
    id: 'f6',
    title: 'Python FastAPI Async Handler Blocked on Sync Library Call',
    project: 'Avis',
    what: 'The async endpoint that was supposed to return immediately blocked the event loop for 2 seconds, making the API unresponsive during inference.',
    why: 'A synchronous library function (requests.post) was called directly inside an async def handler. This blocked the event loop thread while waiting for the HTTP response.',
    fix: 'Replaced requests with httpx and called it with await. Moved the inference dispatch into a background task using FastAPI BackgroundTasks so the route returned 202 immediately.',
    lesson: 'In async Python, any blocking call poisons the event loop. Every external I/O call inside an async handler must be awaited.',
    tag: 'Async Systems'
  }
];
