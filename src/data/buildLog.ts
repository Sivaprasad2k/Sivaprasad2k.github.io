export interface BuildLogEntry {
  id: string;
  date: string;
  project: string;
  built: string;
  failed: string;
  learned: string;
  nextStep: string;
  tag: string;
  commitUrl?: string;
}

export const BUILD_LOG: BuildLogEntry[] = [
  {
    id: 'bl1',
    date: 'August 2026',
    project: 'Portfolio — CS Engineering Lab',
    built: 'Complete portfolio redesign from 3D room concept to The CS Engineering Lab. Replaced Three.js scene with a scroll-based layout built around real project data.',
    failed: 'Initial X-Ray modal had too many tabs visible at once on mobile — tabs overflowed and the close button was unreachable.',
    learned: 'Horizontal tab overflow needs explicit scroll on mobile. Modal layout should be designed mobile-first, then expanded for desktop.',
    nextStep: 'Add /experiment/:id deep-link routes so each project has a shareable URL.',
    tag: 'Portfolio',
    commitUrl: 'https://github.com/Sivaprasad2k/Sivaprasad2k.github.io'
  },
  {
    id: 'bl2',
    date: 'July 2026',
    project: 'Avis',
    built: 'Async task pipeline with FastAPI BackgroundTasks, Pydantic schema validation on LLM output, and task status polling endpoint.',
    failed: 'Pydantic parsing failed silently when the LLM returned markdown-wrapped JSON (```json ... ```). The validator received a string, not a dict.',
    learned: 'LLM output is non-deterministic in format. Always strip markdown fences before Pydantic parsing, and log the raw response before attempting schema validation.',
    nextStep: 'Add a streaming SSE endpoint so users see partial output instead of polling.',
    tag: 'Backend / AI',
    commitUrl: 'https://github.com/Sivaprasad2k/Avis'
  },
  {
    id: 'bl3',
    date: 'June 2026',
    project: 'Krishi',
    built: 'Crop cycle aggregate state machine with event-driven telemetry ingestion, background @Async workers, and FastAPI ML advisory microservice integration.',
    failed: 'The ML advisory microservice returned recommendations for crops that were in HARVEST state (terminal). Business logic was missing a guard at the advisory dispatch layer.',
    learned: 'State must be checked at every service boundary, not just at the UI. The backend should reject advisory requests for terminal-state crops regardless of who sends them.',
    nextStep: 'Add composite index on (field_id, recorded_at DESC) to optimize the rolling 72-hour telemetry window query.',
    tag: 'Backend',
    commitUrl: 'https://github.com/Sivaprasad2k/Krishi'
  },
  {
    id: 'bl4',
    date: 'May 2026',
    project: 'Real Estate Hub',
    built: 'JPA Specification Builder for multi-criteria search (price range, city, property type, amenities). Docker Compose multi-service setup with Spring Boot and PostgreSQL.',
    failed: 'The amenities filter was using IN clause on a denormalized CSV column. Searches for "pool, parking" returned properties with only "pool" because the SQL LIKE matched substrings.',
    learned: 'Many-to-many relationships need a join table, not a denormalized string column. Quick schema choices create correctness bugs that feel like edge cases but are actually design problems.',
    nextStep: 'Migrate amenities to a property_amenities join table. Add GIN index on the amenity_name column for full-text search.',
    tag: 'Backend / Database',
    commitUrl: 'https://github.com/Sivaprasad2k/Real-Estate-Hub'
  },
  {
    id: 'bl5',
    date: 'April 2026',
    project: 'CareerPath',
    built: 'JWT authentication filter chain with refresh token rotation, state machine for application lifecycle, and audit log table for all state transitions.',
    failed: 'Refresh tokens were being stored in localStorage on the frontend. Read about XSS risks — this is insecure. Any injected script could steal the token.',
    learned: 'Refresh tokens belong in HttpOnly cookies, not localStorage. XSS cannot read HttpOnly cookies. This is a widely documented and frequently ignored security pattern.',
    nextStep: 'Migrate to HttpOnly cookie storage for refresh token. Add SameSite=Strict to prevent CSRF on the refresh endpoint.',
    tag: 'Security',
    commitUrl: 'https://github.com/Sivaprasad2k/CareerPath'
  },
  {
    id: 'bl6',
    date: 'February 2026',
    project: 'Rural Infrastructure Classification',
    built: 'TensorFlow / Keras classification pipeline for rural infrastructure imagery. Data preprocessing, MinMax scaling, multi-class CNN training, and metrics evaluation.',
    failed: 'Validation accuracy plateaued at 68% despite increasing model depth. Assumed more layers would improve accuracy, but the dataset had only ~800 samples.',
    learned: 'Model complexity without sufficient data leads to overfitting, not better accuracy. The fix was data augmentation (rotation, flip, brightness jitter), not a deeper network.',
    nextStep: 'Experiment with transfer learning using a pre-trained MobileNetV2 backbone fine-tuned on the infrastructure dataset.',
    tag: 'ML / Research'
  }
];
