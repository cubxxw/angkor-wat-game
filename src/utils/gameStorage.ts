import { PlayerSave } from '../types';

const SAVE_KEY = 'angkor-wat-game-save';

export const loadGame = (): PlayerSave | null => {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      return JSON.parse(saved) as PlayerSave;
    }
  } catch (error) {
    console.error('Failed to load game save:', error);
  }
  return null;
};

export const saveGame = (progress: PlayerSave): void => {
  try {
    const saveWithTimestamp = {
      ...progress,
      savedAt: Date.now()
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveWithTimestamp));
  } catch (error) {
    console.error('Failed to save game:', error);
  }
};

export const createInitialSave = (): PlayerSave => ({
  progress: {
    completedPuzzles: [],
    puzzleScores: {},
    stars: {},
    currentPuzzle: undefined,
    lastPlayed: Date.now()
  },
  settings: {
    sound: true,
    music: true,
    language: 'en'
  },
  savedAt: Date.now()
});

export const calculateStars = (score: number, baseScore: number): number => {
  const percentage = score / baseScore;
  if (percentage >= 0.9) return 3;
  if (percentage >= 0.7) return 2;
  if (percentage >= 0.5) return 1;
  return 0;
};

export const exportSave = (save: PlayerSave): string => {
  return JSON.stringify(save, null, 2);
};

export const importSave = (saveData: string): PlayerSave | null => {
  try {
    const save = JSON.parse(saveData) as PlayerSave;
    // Basic validation
    if (save.progress && save.settings && save.savedAt) {
      return save;
    }
  } catch (error) {
    console.error('Failed to import save:', error);
  }
  return null;
};

export const resetProgress = (): void => {
  localStorage.removeItem(SAVE_KEY);
};
