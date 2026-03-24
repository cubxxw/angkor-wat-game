import React, { useState } from 'react';
import { Clue } from '../types';
import '../styles/ancient-map-theme.css';

interface CluePanelProps {
  clues: Clue[];
  revealedCount: number;
  onRevealClue: () => void;
  canReveal: boolean;
  hintPenalty: number;
}

const CluePanel: React.FC<CluePanelProps> = ({
  clues,
  revealedCount,
  onRevealClue,
  canReveal,
  hintPenalty
}) => {
  const [showHint, setShowHint] = useState<number | null>(null);

  const getDifficultyBadge = (difficulty: string) => {
    const className = `badge badge-${difficulty}`;
    return (
      <span className={className}>
        {difficulty}
      </span>
    );
  };

  return (
    <div className="panel clue-panel">
      <div className="panel-title">
        <h3>Clues</h3>
      </div>
      
      <div className="clues-list">
        {clues.map((clue, index) => (
          <div
            key={clue.id}
            className={`clue-item ${index < revealedCount ? 'revealed' : 'hidden'}`}
            style={{
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: index < revealedCount ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
              borderRadius: '4px',
              opacity: index < revealedCount ? 1 : 0.5
            }}
          >
            <div className="clue-header flex justify-between items-center gap-2">
              <span className="clue-number" style={{ fontWeight: '600', marginRight: '0.5rem' }}>
                Clue {index + 1}
              </span>
              {getDifficultyBadge(clue.difficulty)}
            </div>
            
            {index < revealedCount ? (
              <div className="clue-text mt-1" style={{ fontSize: '0.95rem' }}>
                {clue.text}
              </div>
            ) : (
              <div className="clue-hidden" style={{ fontStyle: 'italic', fontSize: '0.875rem' }}>
                ??? (Click "Reveal Clue" to discover)
              </div>
            )}
            
            {index < revealedCount && clue.hint && showHint === index && (
              <div
                className="clue-hint mt-1"
                style={{
                  fontSize: '0.875rem',
                  color: '#6B7B5E',
                  fontStyle: 'italic',
                  paddingLeft: '0.75rem',
                  borderLeft: '2px solid #6B7B5E'
                }}
              >
                <strong>Hint:</strong> {clue.hint}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="clue-actions mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <button
          className="btn btn-primary"
          onClick={onRevealClue}
          disabled={!canReveal}
          style={{ width: '100%' }}
        >
          {revealedCount < clues.length ? 'Reveal Clue' : 'All Clues Revealed'}
        </button>
        
        {revealedCount > 0 && (
          <button
            className="btn btn-secondary"
            onClick={() => setShowHint(showHint === null ? revealedCount - 1 : null)}
            style={{ width: '100%', fontSize: '0.875rem' }}
          >
            💡 Show Hint (-{hintPenalty} pts)
          </button>
        )}
      </div>
      
      <div className="clue-progress mt-2" style={{ fontSize: '0.875rem', color: '#5A4A42' }}>
        {revealedCount} / {clues.length} clues revealed
      </div>
    </div>
  );
};

export default CluePanel;
