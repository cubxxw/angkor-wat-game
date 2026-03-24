import React, { useCallback } from 'react';
import { Temple } from '../types';

interface TempleNodeProps {
  temple: Temple;
  isSelected: boolean;
  isConnected: boolean;
  isCorrect: boolean | null;
  onSelect: (temple: Temple) => void;
  scale?: number;
}

const TempleNode: React.FC<TempleNodeProps> = ({
  temple,
  isSelected,
  isConnected,
  isCorrect,
  onSelect,
  scale = 1
}) => {
  const handleClick = useCallback(() => {
    onSelect(temple);
  }, [temple, onSelect]);

  const getBorderColor = () => {
    if (isCorrect === true) return '#5A7B5E';
    if (isCorrect === false) return '#A0522D';
    if (isConnected) return '#D4AF37';
    if (isSelected) return '#8B6F47';
    return '#8B6F47';
  };

  const getBackgroundColor = () => {
    if (isSelected) return '#E8D5A7';
    if (isConnected) return '#F4E4C1';
    return '#F4E4C1';
  };

  return (
    <g
      transform={`translate(${temple.location.x * 10}, ${temple.location.y * 10}) scale(${scale})`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      className="temple-node"
    >
      {/* Outer glow for selected/connected */}
      {(isSelected || isConnected) && (
        <circle
          r="18"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          opacity="0.6"
          className="animate-pulse"
        />
      )}
      
      {/* Main circle */}
      <circle
        r="14"
        fill={getBackgroundColor()}
        stroke={getBorderColor()}
        strokeWidth="3"
        className="transition-all duration-200"
      />
      
      {/* Temple icon (simplified stupa shape) */}
      <path
        d="M -8 8 L -8 -2 L -4 -8 L 0 -12 L 4 -8 L 8 -2 L 8 8 Z"
        fill="#8B6F47"
        opacity="0.8"
      />
      
      {/* Temple name label */}
      <text
        y="28"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="10"
        fontWeight="600"
        fill="#3C2F2F"
        style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
      >
        {temple.name}
      </text>
      
      {/* Khmer name (smaller) */}
      <text
        y="38"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fill="#5A4A42"
      >
        {temple.khmerName}
      </text>
    </g>
  );
};

export default TempleNode;
