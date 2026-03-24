export type Difficulty = 'easy' | 'medium' | 'hard';

export type ArchitecturalStyle = 
  | 'Angkor Wat'
  | 'Bayon'
  | 'Baphuon'
  | 'Khleang'
  | 'Pre Rup'
  | 'Koh Ker'
  | 'Banteay Srei'
  | 'Early Khmer';

export type Deity = 
  | 'Vishnu'
  | 'Shiva'
  | 'Buddha'
  | 'Harihara'
  | 'Devaraja'
  | 'Unknown';

export interface Temple {
  id: string;
  name: string;
  khmerName: string;
  period: string;
  century: number;
  deity: Deity;
  architecturalStyle: ArchitecturalStyle;
  location: {
    x: number; // Percentage position on map (0-100)
    y: number;
    description: string;
  };
  description: string;
  historicalSignificance: string;
  bestTimeToVisit: string;
  imageUrl?: string;
}

export interface Clue {
  id: string;
  text: string;
  difficulty: Difficulty;
  hint?: string;
}

export interface PuzzleConnection {
  from: string; // Temple ID
  to: string;   // Temple ID
  reason: string; // Why these temples are connected
}

export interface Puzzle {
  id: string;
  title: string;
  description: string;
  templeIds: string[];
  connections: PuzzleConnection[];
  clues: Clue[];
  theme: string;
  difficulty: Difficulty;
  baseScore: number;
}

export interface GameProgress {
  completedPuzzles: string[];
  puzzleScores: Record<string, number>;
  stars: Record<string, number>; // 1-3 stars per puzzle
  currentPuzzle?: string;
  lastPlayed: number;
}

export interface PlayerSave {
  progress: GameProgress;
  settings: {
    sound: boolean;
    music: boolean;
    language: 'en' | 'zh' | 'km';
  };
  savedAt: number;
}
