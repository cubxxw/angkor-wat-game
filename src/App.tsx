import React, { useState, useEffect } from 'react';
import { Puzzle, PlayerSave } from './types';
import { temples } from './data/temples';
import { puzzles } from './data/puzzles';
import { loadGame, saveGame, createInitialSave, calculateStars } from './utils/gameStorage';
import LevelSelect from './components/LevelSelect';
import GameBoard from './components/GameBoard';
import Encyclopedia from './components/Encyclopedia';
import './styles/ancient-map-theme.css';

type ViewState = 'level-select' | 'game' | 'encyclopedia';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('level-select');
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [saveData, setSaveData] = useState<PlayerSave>(createInitialSave());

  // Load saved game on mount
  useEffect(() => {
    const loaded = loadGame();
    if (loaded) {
      setSaveData(loaded);
    }
  }, []);

  // Save game when progress changes
  useEffect(() => {
    saveGame(saveData);
  }, [saveData]);

  const handleSelectLevel = (puzzle: Puzzle) => {
    setCurrentPuzzle(puzzle);
    setView('game');
  };

  const handleGameComplete = (score: number) => {
    if (currentPuzzle) {
      const stars = calculateStars(score, currentPuzzle.baseScore);
      
      setSaveData(prev => ({
        ...prev,
        progress: {
          ...prev.progress,
          completedPuzzles: prev.progress.completedPuzzles.includes(currentPuzzle.id)
            ? prev.progress.completedPuzzles
            : [...prev.progress.completedPuzzles, currentPuzzle.id],
          puzzleScores: {
            ...prev.progress.puzzleScores,
            [currentPuzzle.id]: Math.max(
              prev.progress.puzzleScores[currentPuzzle.id] || 0,
              score
            )
          },
          stars: {
            ...prev.progress.stars,
            [currentPuzzle.id]: Math.max(
              prev.progress.stars[currentPuzzle.id] || 0,
              stars
            )
          },
          lastPlayed: Date.now()
        }
      }));

      // Show completion modal or navigate back after delay
      setTimeout(() => {
        setView('level-select');
        setCurrentPuzzle(null);
      }, 3000);
    }
  };

  const handleBackToLevels = () => {
    setView('level-select');
    setCurrentPuzzle(null);
  };

  return (
    <div className="app">
      {view === 'level-select' && (
        <>
          <LevelSelect
            puzzles={puzzles}
            completedLevels={saveData.progress.completedPuzzles}
            stars={saveData.progress.stars}
            onSelectLevel={handleSelectLevel}
          />
          
          {/* Navigation to Encyclopedia */}
          <div style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 100
          }}>
            <button
              className="btn btn-secondary"
              onClick={() => setView('encyclopedia')}
            >
              📖 Encyclopedia
            </button>
          </div>
        </>
      )}

      {view === 'game' && currentPuzzle && (
        <GameBoard
          puzzle={currentPuzzle}
          temples={temples}
          onComplete={handleGameComplete}
          onBack={handleBackToLevels}
        />
      )}

      {view === 'encyclopedia' && (
        <Encyclopedia
          temples={temples}
          onBack={handleBackToLevels}
        />
      )}
    </div>
  );
};

export default App;
