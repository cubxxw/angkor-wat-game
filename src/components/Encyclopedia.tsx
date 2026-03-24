import React, { useState, useMemo } from 'react';
import { Temple, Deity, ArchitecturalStyle } from '../types';
import '../styles/ancient-map-theme.css';

interface EncyclopediaProps {
  temples: Temple[];
  onBack: () => void;
}

const Encyclopedia: React.FC<EncyclopediaProps> = ({
  temples,
  onBack
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeity, setSelectedDeity] = useState<Deity | 'All'>('All');
  const [selectedStyle, setSelectedStyle] = useState<ArchitecturalStyle | 'All'>('All');
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);

  // Filter temples
  const filteredTemples = useMemo(() => {
    return temples.filter(temple => {
      const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           temple.khmerName.includes(searchTerm) ||
                           temple.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDeity = selectedDeity === 'All' || temple.deity === selectedDeity;
      const matchesStyle = selectedStyle === 'All' || temple.architecturalStyle === selectedStyle;
      
      return matchesSearch && matchesDeity && matchesStyle;
    });
  }, [temples, searchTerm, selectedDeity, selectedStyle]);

  // Get unique deities and styles
  const deities = useMemo(() => {
    return ['All', ...Array.from(new Set(temples.map(t => t.deity)))];
  }, [temples]);

  const styles = useMemo(() => {
    return ['All', ...Array.from(new Set(temples.map(t => t.architecturalStyle)))];
  }, [temples]);

  // Check if temple appeared in completed puzzles
  const templeSeenInPuzzles = () => {
    // This would need puzzle data to check properly
    // For now, just return false
    return false;
  };

  return (
    <div className="encyclopedia" style={{ padding: '2rem', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Temple Encyclopedia
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#5A4A42' }}>
            Learn about {temples.length} temples of the Angkor complex
          </p>
        </div>
        <button className="btn" onClick={onBack}>
          ← Back to Levels
        </button>
      </header>

      {/* Filters */}
      <div className="panel" style={{ marginBottom: '2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {/* Search */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search temples..."
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #8B6F47',
                borderRadius: '4px',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>

          {/* Deity Filter */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Deity
            </label>
            <select
              value={selectedDeity}
              onChange={(e) => setSelectedDeity(e.target.value as Deity | 'All')}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #8B6F47',
                borderRadius: '4px',
                fontFamily: 'inherit',
                fontSize: '1rem',
                backgroundColor: 'var(--color-parchment)'
              }}
            >
              {deities.map(deity => (
                <option key={deity} value={deity}>{deity}</option>
              ))}
            </select>
          </div>

          {/* Architectural Style Filter */}
          <div>
            <label style={{ 
              display: 'block', 
              fontSize: '0.875rem', 
              fontWeight: '600',
              marginBottom: '0.25rem'
            }}>
              Architectural Style
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as ArchitecturalStyle | 'All')}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid #8B6F47',
                borderRadius: '4px',
                fontFamily: 'inherit',
                fontSize: '1rem',
                backgroundColor: 'var(--color-parchment)'
              }}
            >
              {styles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div style={{ 
          marginTop: '1rem', 
          fontSize: '0.875rem', 
          color: '#5A4A42' 
        }}>
          Showing {filteredTemples.length} of {temples.length} temples
        </div>
      </div>

      {/* Temple Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredTemples.map(temple => (
          <div
            key={temple.id}
            className="card"
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onClick={() => setSelectedTemple(temple)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(60, 47, 47, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="card-header">
              {temple.name}
            </div>
            
            <div style={{ fontSize: '0.875rem', color: '#5A4A42', marginBottom: '0.5rem' }}>
              {temple.khmerName}
            </div>
            
            <p style={{ fontSize: '0.95rem', marginBottom: '1rem', height: '3rem', overflow: 'hidden' }}>
              {temple.description}
            </p>
            
            <div style={{ fontSize: '0.875rem', color: '#5A4A42' }}>
              <div><strong>Period:</strong> {temple.period}</div>
              <div><strong>Century:</strong> {temple.century}th</div>
              <div><strong>Deity:</strong> {temple.deity}</div>
            </div>

            {templeSeenInPuzzles() && (
              <div style={{
                marginTop: '0.75rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: 'rgba(90, 123, 94, 0.2)',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#5A7B5E'
              }}>
                ✓ Seen in puzzles
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Temple Detail Modal */}
      {selectedTemple && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(60, 47, 47, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setSelectedTemple(null)}
        >
          <div
            className="card"
            style={{
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTemple(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#5A4A42'
              }}
            >
              ×
            </button>

            <h2 style={{ marginTop: 0 }}>{selectedTemple.name}</h2>
            <div style={{ fontSize: '1.125rem', color: '#5A4A42', marginBottom: '1rem' }}>
              {selectedTemple.khmerName}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p><strong>Period:</strong> {selectedTemple.period}</p>
              <p><strong>Century:</strong> {selectedTemple.century}th</p>
              <p><strong>Deity:</strong> {selectedTemple.deity}</p>
              <p><strong>Style:</strong> {selectedTemple.architecturalStyle}</p>
              <p><strong>Location:</strong> {selectedTemple.location.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3>Description</h3>
              <p>{selectedTemple.description}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3>Historical Significance</h3>
              <p>{selectedTemple.historicalSignificance}</p>
            </div>

            <div>
              <h3>Best Time to Visit</h3>
              <p style={{ color: '#6B7B5E', fontWeight: '600' }}>
                {selectedTemple.bestTimeToVisit}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Encyclopedia;
