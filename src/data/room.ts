export type RoomObjectType = 
  | 'photo'
  | 'academic-book'
  | 'poster-krishi'
  | 'poster-careerpath'
  | 'poster-realestate'
  | 'laptop'
  | 'book-krishi'
  | 'book-careerpath'
  | 'book-realestate'
  | 'book-avis'
  | 'book-ruralinfra'
  | 'whiteboard'
  | 'poster-linkedin'
  | 'poster-instagram'
  | 'poster-contact'
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
    title: 'Identity Desk Photo',
    categoryLabel: 'PERSONAL',
    subtitle: 'Siva Prasad M L · Personal Workspace Photograph',
    layer: 3,
    position: { x: 18, y: 52, rotation: -5, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Framed photo inspected → Profile panel'
  },
  {
    id: 'academic-book',
    title: 'Academic Record',
    categoryLabel: 'ACADEMICS',
    subtitle: 'Bachelor of Technology · Computer Science Engineering',
    layer: 3,
    position: { x: 30, y: 56, rotation: -2, isStanding: false, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Academic record opens → Credentials & Coursework notebook'
  },
  {
    id: 'poster-krishi',
    title: 'Krishi Engine Poster',
    categoryLabel: 'PROJECT GALLERY',
    subtitle: 'Agricultural Operations Backend Architecture (2024)',
    layer: 1,
    position: { x: 5, y: 30, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Gallery poster focused → Krishi Engine notebook',
    projectId: 'krishi'
  },
  {
    id: 'poster-careerpath',
    title: 'CareerPath Engine Poster',
    categoryLabel: 'PROJECT GALLERY',
    subtitle: 'Relational Application & Milestone Tracker (2024)',
    layer: 1,
    position: { x: 5, y: 48, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Gallery poster focused → CareerPath Engine notebook',
    projectId: 'careerpath'
  },
  {
    id: 'poster-realestate',
    title: 'Real Estate Hub Poster',
    categoryLabel: 'PROJECT GALLERY',
    subtitle: 'Property Marketplace with Fine-Grained RBAC (2024)',
    layer: 1,
    position: { x: 5, y: 66, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Gallery poster focused → Real Estate Hub notebook',
    projectId: 'realestatehub'
  },
  {
    id: 'whiteboard',
    title: 'Engineering Philosophy Whiteboard',
    categoryLabel: 'HOW I THINK',
    subtitle: 'SIVA PRASAD M L · Systems Invariants & Architecture',
    layer: 1,
    position: { x: 48, y: 15, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Methodology whiteboard → Systems thinking panel'
  },
  {
    id: 'poster-linkedin',
    title: 'LinkedIn Plaque',
    categoryLabel: 'LINKEDIN',
    subtitle: 'Professional Profile & Network',
    layer: 1,
    position: { x: 78, y: 12, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Plaque illuminated → Professional profile link',
    externalUrl: 'https://www.linkedin.com/in/sivaprasadml'
  },
  {
    id: 'poster-instagram',
    title: 'Instagram Plaque',
    categoryLabel: 'INSTAGRAM',
    subtitle: 'Personal Space & Community Context',
    layer: 1,
    position: { x: 78, y: 28, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Plaque illuminated → Personal context link',
    externalUrl: 'https://instagram.com/sivaprasad2k'
  },
  {
    id: 'poster-contact',
    title: 'Direct Engineering Contact',
    categoryLabel: 'CONTACT',
    subtitle: 'Email, WhatsApp & Professional Inquiries',
    layer: 1,
    position: { x: 78, y: 44, rotation: 0, surfaceAnchor: 'wall' },
    interactive: true,
    metaphorResponse: 'Contact plaque illuminated → Direct inquiry panel'
  },
  {
    id: 'book-krishi',
    title: 'Krishi Engine',
    categoryLabel: 'BUILD',
    subtitle: 'Agricultural Operations & Event Backend (2024)',
    layer: 2,
    position: { x: 26, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Crop Cycle Workflow notebook',
    projectId: 'krishi'
  },
  {
    id: 'book-careerpath',
    title: 'CareerPath Engine',
    categoryLabel: 'BUILD',
    subtitle: 'Relational Application & Milestone Tracker (2024)',
    layer: 2,
    position: { x: 32, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Application State Machine notebook',
    projectId: 'careerpath'
  },
  {
    id: 'book-realestate',
    title: 'Real Estate Hub',
    categoryLabel: 'BUILD',
    subtitle: 'Property Marketplace with Fine-Grained RBAC (2024)',
    layer: 2,
    position: { x: 38, y: 38, rotation: 0, isStanding: true, surfaceAnchor: 'riser' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → RBAC Role Permission notebook',
    projectId: 'realestatehub'
  },
  {
    id: 'laptop',
    title: 'Workstation Laptop',
    categoryLabel: 'GITHUB',
    subtitle: 'SIVA / CODE Workstation',
    layer: 3,
    position: { x: 50, y: 48, rotation: 0, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Screen brightens → Workspace activation & repository codebases'
  },
  {
    id: 'book-avis',
    title: 'Avis AI Assistant',
    categoryLabel: 'SYSTEM EXPERIMENT',
    subtitle: 'Asynchronous Task Pipeline (2025)',
    layer: 3,
    position: { x: 68, y: 56, rotation: -2, isStanding: false, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → Async Request Pipeline notebook',
    projectId: 'avis'
  },
  {
    id: 'book-ruralinfra',
    title: 'Rural Infrastructure',
    categoryLabel: 'DATA PROJECT',
    subtitle: 'ML Dataset Preprocessing & Model (2024)',
    layer: 3,
    position: { x: 80, y: 56, rotation: 2, isStanding: false, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Book lifts & opens → ML Dataset Pipeline notebook',
    projectId: 'ruralinfra'
  },
  {
    id: 'phone',
    title: 'Desk Phone',
    categoryLabel: 'CONTACT',
    subtitle: 'Direct Engineering Inquiry',
    layer: 3,
    position: { x: 86, y: 48, rotation: 0, surfaceAnchor: 'desktop' },
    interactive: true,
    metaphorResponse: 'Screen illuminates → Direct email contact panel'
  },
  {
    id: 'server',
    title: 'Server Rack',
    categoryLabel: 'SYSTEMS',
    subtitle: 'Backend Technology Stack & Infrastructure',
    layer: 4,
    position: { x: 14, y: 68, rotation: 0, surfaceAnchor: 'floor' },
    interactive: true,
    metaphorResponse: 'LED indicators pulse → Systems & Stack panel'
  }
];

