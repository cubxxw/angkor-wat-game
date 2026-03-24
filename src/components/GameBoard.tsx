import React, { useState, useCallback, useMemo } from 'react';
import { Temple, Puzzle } from '../types';
import TempleNode from './TempleNode';
import ConnectionLine from './ConnectionLine';
import CluePanel from './CluePanel';
import '../styles/ancient-map-theme.css';

interface GameBoardProps {
  puzzle: Puzzle;
  temples: Temple[];
  onComplete: (score: number, correct: number, total: number) => void;
  onBack: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  puzzle,
  temples,
  onComplete,
  onBack
}) => {
  const [selectedTemple, setSelectedTemple] = useState<string | null>(null);
  const [connections, setConnections] = useState<Array<{ from: string; to: string }>>([]);
  const [revealedClues, setRevealedClues] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Filter temples for current puzzle
  const puzzleTemples = useMemo(() => {
    return temples.filter(t => puzzle.templeIds.includes(t.id));
  }, [temples, puzzle.templeIds]);

  // Check if a connection exists
  const hasConnection = useCallback((temple1: string, temple2: string) => {
    return connections.some(
      c => (c.from === temple1 && c.to === temple2) || (c.from === temple2 && c.to === temple1)
    );
  }, [connections]);

  // Get connection status
  const getConnectionStatus = useCallback((temple1: string, temple2: string): boolean | null => {
    if (!submitted) return null;
    
    const isCorrect = puzzle.connections.some(
      c => (c.from === temple1 && c.to === temple2) || (c.from === temple2 && c.to === temple1)
    );
    
    return isCorrect;
  }, [submitted, puzzle.connections]);

  // Handle temple selection
  const handleTempleSelect = useCallback((temple: Temple) => {
    if (submitted) return;

    if (selectedTemple === temple.id) {
      setSelectedTemple(null);
      return;
    }

    if (selectedTemple) {
      // Create connection
      if (!hasConnection(selectedTemple, temple.id)) {
        setConnections(prev => [...prev, { from: selectedTemple, to: temple.id }]);
      }
      setSelectedTemple(null);
    } else {
      setSelectedTemple(temple.id);
    }
  }, [selectedTemple, hasConnection, submitted]);

  // Remove connection
  const removeConnection = useCallback((from: string, to: string) => {
    if (submitted) return;
    setConnections(prev => prev.filter(c => !(c.from === from && c.to === to)));
  }, [submitted]);

  // Reveal next clue
  const handleRevealClue = useCallback(() => {
    if (revealedClues < puzzle.clues.length) {
      setRevealedClues(prev => prev + 1);
    }
  }, [revealedClues, puzzle.clues.length]);

  // Submit puzzle
  const handleSubmit = useCallback(() => {
    setSubmitted(true);
    
    let correctCount = 0;
    connections.forEach(conn => {
      const isCorrect = puzzle.connections.some(
        c => (c.from === conn.from && c.to === conn.to) || (c.from === conn.to && c.to === conn.from)
      );
      if (isCorrect) correctCount++;
    });

    const baseScore = puzzle.baseScore;
    const unrevealedPenalty = (puzzle.clues.length - revealedClues) * 5;
    const calculatedScore = Math.max(0, baseScore - unrevealedPenalty);
    
    setScore(calculatedScore);
    
    setTimeout(() => {
      onComplete(calculatedScore, correctCount, puzzle.connections.length);
    }, 2000);
  }, [connections, puzzle, revealedClues, onComplete]);

  // Calculate scale to fit temples
  const scale = useMemo(() => {
    const maxX = Math.max(...puzzleTemples.map(t => t.location.x));
    const maxY = Math.max(...puzzleTemples.map(t => t.location.y));
    return Math.min(60 / maxX, 50 / maxY, 1);
  }, [puzzleTemples]);

  return (
    <div className="game-board" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      padding: '1rem'
    }}>
      {/* Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(244, 228, 193, 0.9)',
        borderRadius: '4px',
        border: '2px solid #8B6F47'
      }}>
        <div>
          <h2 style={{ marginBottom: '0.25rem' }}>{puzzle.title}</h2>
          <p style={{ fontSize: '0.875rem', color: '#5A4A42' }}>{puzzle.description}</p>
        </div>
        <button className="btn" onClick={onBack}>
          ← Back to Levels
        </button>
      </header>

      {/* Main Content */}
      <div style={{ 
        display: 'flex', 
        flex: 1, 
        gap: '1rem',
        overflow: 'hidden'
      }}>
        {/* Game Map */}
        <div style={{ 
          flex: 1, 
          position: 'relative',
          backgroundColor: 'rgba(244, 228, 193, 0.5)',
          borderRadius: '4px',
          border: '2px solid #8B6F47',
          overflow: 'auto'
        }}>
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${65 * scale * 10} ${60 * scale * 10}`}
            style={{ minHeight: '500px' }}
          >
            {/* Connection lines */}
            {connections.map((conn, index) => {
              const fromTemple = puzzleTemples.find(t => t.id === conn.from);
              const toTemple = puzzleTemples.find(t => t.id === conn.to);
              if (!fromTemple || !toTemple) return null;

              return (
                <ConnectionLine
                  key={index}
                  from={fromTemple.location}
                  to={toTemple.location}
                  isCorrect={getConnectionStatus(conn.from, conn.to)}
                  isPending={!submitted}
                  scale={scale}
                />
              );
            })}

            {/* Temple nodes */}
            {puzzleTemples.map(temple => (
              <TempleNode
                key={temple.id}
                temple={temple}
                isSelected={selectedTemple === temple.id}
                isConnected={connections.some(c => c.from === temple.id || c.to === temple.id)}
                isCorrect={getConnectionStatus(
                  connections.find(c => c.from === temple.id || c.to === temple.id)?.from === temple.id
                    ? connections.find(c => c.from === temple.id || c.to === temple.id)?.from!
                    : temple.id,
                  connections.find(c => c.from === temple.id || c.to === temple.id)?.from === temple.id
                    ? connections.find(c => c.from === temple.id || c.to === temple.id)?.to!
                    : connections.find(c => c.from === temple.id || c.to === temple.id)?.from! || temple.id
                )}
                onSelect={handleTempleSelect}
                scale={scale}
              />
            ))}
          </svg>

          {/* Instructions overlay */}
          {!submitted && connections.length === 0 && (
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              padding: '0.75rem',
              backgroundColor: 'rgba(244, 228, 193, 0.95)',
              borderRadius: '4px',
              fontSize: '0.875rem',
              border: '1px solid #8B6F47'
            }}>
              <strong>How to play:</strong> Click on two temples to connect them based on the clues. 
              Click an existing connection to remove it. When done, click "Submit Answer".
            </div>
          )}
        </div>

        {/* Side Panel */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Clues */}
          <CluePanel
            clues={puzzle.clues}
            revealedCount={revealedClues}
            onRevealClue={handleRevealClue}
            canReveal={revealedClues < puzzle.clues.length && !submitted}
            hintPenalty={10}
          />

          {/* Current Connections */}
          <div className="panel">
            <div className="panel-title">
              <h3>Connections ({connections.length})</h3>
            </div>
            {connections.length === 0 ? (
              <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#5A4A42' }}>
                No connections yet. Click two temples to connect them.
              </p>
            ) : (
              <ul style={{ fontSize: '0.875rem', listStyle: 'none' }}>
                {connections.map((conn, index) => {
                  const fromTemple = puzzleTemples.find(t => t.id === conn.from);
                  const toTemple = puzzleTemples.find(t => t.id === conn.to);
                  return (
                    <li
                      key={index}
                      style={{
                        padding: '0.25rem 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{fromTemple?.name} ↔ {toTemple?.name}</span>
                      {!submitted && (
                        <button
                          onClick={() => removeConnection(conn.from, conn.to)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#A0522D',
                            fontSize: '1.25rem',
                            padding: '0 0.25rem'
                          }}
                        >
                          ×
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {!submitted ? (
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={connections.length === 0}
                style={{ width: '100%' }}
              >
                Submit Answer
              </button>
            ) : (
              <div className="panel" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>
                  {score > 0 ? '✓ Correct!' : '✗ Keep Learning!'}
                </h3>
                <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                  Score: {score} / {puzzle.baseScore}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
