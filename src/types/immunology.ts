export interface SlideModule {
  id: string;
  title: string;
  titleArabic?: string;
  slideRange: string;
  description: string;
  keyConcepts: string[];
  clinicalPearls: string[];
  detailedContent: {
    sectionTitle: string;
    paragraphs: string[];
    bulletPoints?: string[];
    comparisonData?: {
      headers: string[];
      rows: string[][];
    };
    diagramKey?: string;
  }[];
  slideImages?: {
    pageNumber: number;
    caption: string;
  }[];
  bilingualTerms: {
    english: string;
    arabic: string;
    context: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  moduleId?: string;
  type: 'single' | 'clinical_vignette' | 'matching';
  difficulty: 'Foundation' | 'Intermediate' | 'Board-Level';
  category: string;
  categoryAr?: string;
  question: string;
  questionAr?: string;
  scenario?: string;
  scenarioAr?: string;
  options: {
    id: string;
    text: string;
    textAr?: string;
    explanation?: string;
  }[];
  correctAnswer: string;
  rationale: string;
  rationaleAr?: string;
  slideReference: string;
  highYieldTip: string;
  highYieldTipAr?: string;
}

export interface Flashcard {
  id: string;
  category: string;
  front: string;
  frontArabic?: string;
  back: string;
  backArabic?: string;
  subtext?: string;
  slideRef: string;
  tags: string[];
}

export interface CytokineData {
  name: string;
  cellularSource: string;
  principalAction: string;
  targetCells: string[];
  clinicalSignificance: string;
  slideRef: string;
}

export interface PathogenClassData {
  category: 'Phagolysosome' | 'Cytosol Escape' | 'Nonphagocytic';
  categoryName: string;
  examples: string[];
  hostCellType: string;
  immuneRecognitionPathway: string;
  effectorMechanism: string;
  clinicalManifestation: string;
}

export interface ComparisonMatrix {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  headers: string[];
  headersAr?: string[];
  mnemonicKeyEn?: string;
  mnemonicKeyAr?: string;
  rows: {
    feature: string;
    featureAr?: string;
    col1: string;
    col1Ar?: string;
    col2: string;
    col2Ar?: string;
    col3?: string;
    col3Ar?: string;
    highlight?: boolean;
    mnemonic?: string;
    mnemonicAr?: string;
  }[];
}
