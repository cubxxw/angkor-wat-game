import React from 'react';
import { Puzzle } from '../types';
import '../styles/ancient-map-theme.css';

interface LevelSelectProps {
  puzzles: Puzzle[];
  completedLevels: string[];
  stars: Record<string, number>;
  onSelectLevel: (puzzle: Puzzle) => void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({
  puzzles,
  completedLevels,
  stars,
  onSelectLevel
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#5A7B5E';
      case 'medium': return '#D4AF37';
      case 'hard': return '#A0522D';
      default: return '#8B6F47';
    }
  };

  const renderStars = (count: number) => {
    return (
      <span style={{ color: '#D4AF37' }}>
        {'★'.repeat(count)}{'☆'.repeat(3 - count)}
      </span>
    );
  };

  return (
    <div className="level-select" style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Angkor Wat Temple Connection Puzzle
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#5A4A42' }}>
          Connect temples based on historical clues and learn about Khmer culture
        </p>
      </header>

      <div className="levels-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {puzzles.map((puzzle, index) => {
          const isCompleted = completedLevels.includes(puzzle.id);
          const levelStars = stars[puzzle.id] || 0;
          const isLocked = index > 0 && !completedLevels.includes(puzzles[index - 1].id);

          return (
            <div
              key={puzzle.id}
              className={`card level-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
              style={{
                cursor: isLocked ? 'not-allowed' : 'pointer',
                opacity: isLocked ? 0.6 : 1,
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onClick={() => !isLocked && onSelectLevel(puzzle)}
              onMouseEnter={(e) => {
                if (!isLocked) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(60, 47, 47, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Level Number Badge */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '1rem',
                backgroundColor: getDifficultyColor(puzzle.difficulty),
                color: '#F4E4C1',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {puzzle.difficulty}
              </div>

              {/* Completion Badge */}
              {isCompleted && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '1rem',
                  backgroundColor: '#5A7B5E',
                  color: '#F4E4C1',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  ✓ Complete
                </div>
              )}

              {/* Lock Icon */}
              {isLocked && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '3rem',
                  opacity: 0.3
                }}>
                  🔒
                </div>
              )}

              <div className="card-header" style={{ marginTop: '1rem' }}>
                Level {index + 1}: {puzzle.title}
              </div>

              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                {puzzle.description}
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.875rem', color: '#5A4A42', marginBottom: '0.25rem' }}>
                  <strong>Theme:</strong> {puzzle.theme}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#5A4A42', marginBottom: '0.25rem' }}>
                  <strong>Temples:</strong> {puzzle.templeIds.length}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#5A4A42' }}>
                  <strong>Base Score:</strong> {puzzle.baseScore}
                </div>
              </div>

              {isCompleted && (
                <div style={{ 
                  paddingTop: '0.75rem', 
                  borderTop: '1px solid rgba(139, 111, 71, 0.3)' 
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#5A4A42', marginBottom: '0.25rem' }}>
                    Your Stars:
                  </div>
                  {renderStars(levelStars)}
                </div>
              )}

              {!isLocked && !isCompleted && (
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Start Level
                </button>
              )}

              {isCompleted && (
                <button
                  className="btn"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Replay Level
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        textAlign: 'center',
        padding: '1rem',
        borderTop: '2px solid #8B6F47'
      }}>
        <p style={{ fontSize: '0.875rem', color: '#5A4A42' }}>
          Explore the temples of Angkor and learn about Khmer history • 
          {completedLevels.length} / {puzzles.length} levels completed
        </p>
      </footer>
    </div>
  );
};

export default LevelSelect;
