export type Grade = 10 | 11 | 12;

export type Genre =
  | 'Truyện ngắn'
  | 'Thơ'
  | 'Tùy bút / Ký'
  | 'Kịch'
  | 'Văn chính luận'
  | 'Truyện thơ Nôm';

export type AnalysisLevel = 'basic' | 'detailed' | 'advanced';

export interface Author {
  id: string;
  name: string;
  slug: string;
  birthDeath: string;
  era: string;
  birthplace: string;
  portraitUrl?: string;
  literaryStyle: string;
  aestheticView: string;
  careerMilestones: string[];
  majorWorks: string[];
  contributions: string;
  quote: string;
}

export interface StanzaAnalysis {
  id: string;
  stanzaNumber: number;
  title: string;
  excerpt: string;
  contentSummary: string;
  poeticImages: { image: string; meaning: string }[];
  keyWords: { word: string; nuance: string }[];
  rhetoricalDevices: { device: string; effect: string }[];
  roleInWork: string;
  interactiveHotspots?: { phrase: string; note: string; technique: string }[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  appearance: string;
  situation: string;
  speechAndActions: string;
  innerPsychology: string;
  fateAndDestiny?: string;
  symbolicMeaning: string;
  quote?: string;
}

export interface DramaScene {
  id: string;
  act: string;
  conflict: string;
  charactersInvolved: string[];
  analysis: string;
  philosophicalDepth: string;
}

export interface ArgumentativePoint {
  pointNumber: number;
  claim: string;
  reasoning: string;
  evidence: string;
  rhetoricalArt: string;
}

export interface ArtisticDetail {
  id: string;
  detailName: string;
  excerptOrContext: string;
  directMeaning: string;
  symbolicMeaning: string;
  thematicConnection: string;
}

export interface Work {
  slug: string;
  title: string;
  authorId: string;
  authorName: string;
  grade: Grade;
  genre: Genre;
  textbook: string;
  year: string;
  origin: string;
  topic: string;
  centralTheme: string;
  keywords: string[];
  hookIntro: string;
  coverImage: string;
  bannerImage?: string;
  historicContext: {
    timeframe: string;
    historicalBackground: string;
    personalCircumstance: string;
    impactOnWork: string;
  };
  structureAndSummary: {
    layout: { part: string; content: string }[];
    shortSummary: string;
    detailedSummary?: string;
    mainEvents?: string[];
    emotionalArc?: string;
    centralConflict?: string;
    thesis?: string;
  };
  mainContentPoints: string[];
  analysisLevels: {
    basic: string;
    detailed: string;
    advanced: string;
  };
  poetryAnalysis?: StanzaAnalysis[];
  characters?: Character[];
  characterRelationships?: { from: string; to: string; relation: string }[];
  dramaScenes?: DramaScene[];
  argumentativePoints?: ArgumentativePoint[];
  artisticFeatures: {
    prominentCraft: string;
    language: string;
    tone: string;
    structureOrPointOfView: string;
    imageryOrRhetoric: string;
    distinctiveDevices: { name: string; description: string }[];
  };
  keyArtisticDetails: ArtisticDetail[];
  literaryValues: {
    realisticValue?: string;
    humanitarianValue?: string;
    ideologicalValue?: string;
    artisticValue: string;
    message: string;
    modernRelevance: string;
  };
  quick60s: {
    author: string;
    genre: string;
    context: string;
    theme: string;
    coreFigureOrCharacter: string;
    mainIdea: string;
    keyArt: string;
    goldenKeywords: string[];
    takeaway: string;
  };
}
