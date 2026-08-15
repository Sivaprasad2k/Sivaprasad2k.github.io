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
  rotation?: number; // Tilt angle in degrees
  isStanding?: boolean; // Upright book on shelf vs resting flat on desk
  surfaceAnchor?: 'wall' | 'desktop' | 'riser' | 'floor'; // Semantic surface anchor
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
    position: { x: 14, y: 12, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Overhead picture lamp illuminates → Profile panel'
  },
  {
    id: 'whiteboard',
    title: 'Whiteboard',
    categoryLabel: 'HOW I THINK',
    subtitle: 'Engineering Methodology & Systems Invariants',
    layer: 2,
    position: { x: 48, y: 10, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Methodology whiteboard → Systems thinking panel'
  },
  {
    id: 'poster-linkedin',
    title: 'LinkedIn Plaque',
    categoryLabel: 'LINKEDIN',
    subtitle: 'Professional Profile & Network',
    layer: 2,
    position: { x: 74, y: 10, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Plaque illuminated → Professional profile link',
    externalUrl: 'https://www.linkedin.com/in/sivaprasadml'
  },
  {
    id: 'poster-instagram',
    title: 'Instagram Plaque',
    categoryLabel: 'INSTAGRAM',
    subtitle: 'Personal Space & Community Context',
    layer: 2,
    position: { x: 74, y: 32, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Plaque illuminated → Personal context link',
    externalUrl: 'https://instagram.com/sivaprasad2k'
  },
  {
    id: 'book-krishi',
    title: 'Krishi Engine',
    categoryLabel: 'BUILD',
    subtitle: 'Agricultural Operations & Event Backend (2024)',
    layer: 4,
    position: { x: 18, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Crop Cycle Workflow notebook',
    projectId: 'krishi'
  },
  {
    id: 'book-careerpath',
    title: 'CareerPath Engine',
    categoryLabel: 'BUILD',
    subtitle: 'Relational Application & Milestone Tracker (2024)',
    layer: 4,
    position: { x: 24, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Application State Machine notebook',
    projectId: 'careerpath'
  },
  {
    id: 'book-realestate',
    title: 'Real Estate Hub',
    categoryLabel: 'BUILD',
    subtitle: 'Property Marketplace with Fine-Grained RBAC (2024)',
    layer: 4,
    position: { x: 30, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → RBAC Role Permission notebook',
    projectId: 'realestatehub'
  },
  {
    id: 'laptop',
    title: 'Workstation Laptop',
    categoryLabel: 'GITHUB',
    subtitle: 'SIVA / CODE Workstation',
    layer: 4,
    position: { x: 48, y: 44, rotation: 0, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Screen brightens → Workspace activation & repository codebases'
  },
  {
    id: 'book-avis',
    title: 'Avis AI Assistant',
    categoryLabel: 'SYSTEM EXPERIMENT',
    subtitle: 'Asynchronous Task Pipeline (2025)',
    layer: 4,
    position: { x: 22, y: 56, rotation: -3, isStanding: false, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Async Request Pipeline notebook',
    projectId: 'avis'
  },
  {
    id: 'book-ruralinfra',
    title: 'Rural Infrastructure',
    categoryLabel: 'DATA PROJECT',
    subtitle: 'ML Dataset Preprocessing & Model (2024)',
    layer: 4,
    position: { x: 64, y: 56, rotation: 3, isStanding: false, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → ML Dataset Pipeline notebook',
    projectId: 'ruralinfra'
  },
  {
    id: 'phone',
    title: 'Desk Phone',
    categoryLabel: 'CONTACT',
    subtitle: 'Direct Engineering Inquiry',
    layer: 4,
    position: { x: 82, y: 48, rotation: 0, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Screen illuminates → Direct email contact panel'
  },
  {
    id: 'server',
    title: 'Server Rack',
    categoryLabel: 'SYSTEMS',
    subtitle: 'Backend Technology Stack & Infrastructure',
    layer: 5,
    position: { x: 12, y: 68, rotation: 0, surfaceAnchor: 'floor' },
    interactive: true,
    metaphorResponse: 'LED indicators pulse → Systems & Stack panel'
  }
];
