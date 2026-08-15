export type RoomObjectType = 
  | 'photo'
  | 'laptop'
  | 'book-krishi'
  | 'book-careerpath'
  | 'book-realestate'
  | 'book-avis'
  | 'book-ruralinfra'
  | 'whiteboard'
  | 'poster-linkedin'
  | 'poster-instagram'
  | 'server'
  | 'phone';

export interface SpatialPosition {
  x: number; // Percentage X relative to room (0-100)
  y: number; // Percentage Y relative to room (0-100)
  zOffset?: number; // Layer depth offset
  rotation?: number; // Subtle tilt angle (-15 to 15 deg)
}

export interface RoomObjectDefinition {
  id: RoomObjectType;
  title: string;
  categoryLabel: string;
  subtitle: string;
  layer: number; // 0-5
  position: SpatialPosition;
  interactive: boolean;
  metaphorResponse: string;
  projectId?: string;
  externalUrl?: string;
}

export const ROOM_OBJECTS_DATA: RoomObjectDefinition[] = [
  {
    id: 'photo',
    title: 'Identity Portrait',
    categoryLabel: 'IDENTITY',
    subtitle: 'Siva Prasad M L · Backend Engineer',
    layer: 2,
    position: { x: 15, y: 22, rotation: -2 },
    interactive: true,
    metaphorResponse: 'Frame moves closer → Candidate profile panel'
  },
  {
    id: 'whiteboard',
    title: 'Whiteboard',
    categoryLabel: 'HOW I THINK',
    subtitle: 'Engineering Methodology & Domain Invariants',
    layer: 2,
    position: { x: 45, y: 18, rotation: 0 },
    interactive: true,
    metaphorResponse: 'Marker annotations illuminate → Systems thinking panel'
  },
  {
    id: 'poster-linkedin',
    title: 'LinkedIn Poster',
    categoryLabel: 'LINKEDIN',
    subtitle: 'Professional Profile & Network',
    layer: 2,
    position: { x: 76, y: 20, rotation: 2 },
    interactive: true,
    metaphorResponse: 'Poster border glows cyan → Professional profile link',
    externalUrl: 'https://www.linkedin.com/in/sivaprasadml'
  },
  {
    id: 'poster-instagram',
    title: 'Instagram Poster',
    categoryLabel: 'INSTAGRAM',
    subtitle: 'Personal Space & Community Context',
    layer: 2,
    position: { x: 87, y: 26, rotation: -3 },
    interactive: true,
    metaphorResponse: 'Poster border glows rose → Personal layer link',
    externalUrl: 'https://instagram.com/sivaprasad2k'
  },
  {
    id: 'laptop',
    title: 'Workstation Laptop',
    categoryLabel: 'GITHUB',
    subtitle: 'SIVA / CODE Workstation',
    layer: 4,
    position: { x: 46, y: 54, rotation: 0 },
    interactive: true,
    metaphorResponse: 'Screen brightens → Workspace activation & repo directory'
  },
  {
    id: 'book-krishi',
    title: 'Krishi Engine',
    categoryLabel: 'FEATURED BUILD',
    subtitle: 'Agricultural Operations & Event Backend (2024)',
    layer: 4,
    position: { x: 16, y: 64, rotation: -6 },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Crop Cycle Workflow preview',
    projectId: 'krishi'
  },
  {
    id: 'book-careerpath',
    title: 'CareerPath Engine',
    categoryLabel: 'FEATURED BUILD',
    subtitle: 'Relational Application & Milestone Tracker (2024)',
    layer: 4,
    position: { x: 24, y: 62, rotation: -2 },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Application State Machine preview',
    projectId: 'careerpath'
  },
  {
    id: 'book-realestate',
    title: 'Real Estate Hub',
    categoryLabel: 'FEATURED BUILD',
    subtitle: 'Property Marketplace with Fine-Grained RBAC (2024)',
    layer: 4,
    position: { x: 32, y: 66, rotation: 4 },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → RBAC Role Permission preview',
    projectId: 'realestatehub'
  },
  {
    id: 'book-avis',
    title: 'Avis AI Assistant',
    categoryLabel: 'SYSTEM EXPERIMENT',
    subtitle: 'Asynchronous Task Pipeline (2025)',
    layer: 4,
    position: { x: 64, y: 64, rotation: 5 },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Async Request Pipeline preview',
    projectId: 'avis'
  },
  {
    id: 'book-ruralinfra',
    title: 'Rural Infrastructure',
    categoryLabel: 'DATA PROJECT',
    subtitle: 'ML Dataset Preprocessing & Model (2024)',
    layer: 4,
    position: { x: 72, y: 68, rotation: -4 },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → ML Dataset Pipeline preview',
    projectId: 'ruralinfra'
  },
  {
    id: 'phone',
    title: 'Desk Phone',
    categoryLabel: 'CONTACT',
    subtitle: 'Direct Engineering Inquiry',
    layer: 4,
    position: { x: 80, y: 58, rotation: 8 },
    interactive: true,
    metaphorResponse: 'Screen illuminates → Direct email contact panel'
  },
  {
    id: 'server',
    title: 'Server Rack',
    categoryLabel: 'SYSTEMS',
    subtitle: 'Backend Technology Stack & Infrastructure',
    layer: 5,
    position: { x: 89, y: 58, rotation: 0 },
    interactive: true,
    metaphorResponse: 'LED indicators pulse → Systems & Stack panel'
  }
];
