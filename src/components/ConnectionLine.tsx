import React from 'react';

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isCorrect: boolean | null;
  isPending: boolean;
  scale?: number;
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({
  from,
  to,
  isCorrect,
  isPending,
  scale = 1
}) => {
  const x1 = from.x * 10 * scale;
  const y1 = from.y * 10 * scale;
  const x2 = to.x * 10 * scale;
  const y2 = to.y * 10 * scale;

  const getStrokeColor = () => {
    if (isCorrect === true) return '#5A7B5E';
    if (isCorrect === false) return '#A0522D';
    if (isPending) return '#D4AF37';
    return '#8B6F47';
  };

  const getStrokeDasharray = () => {
    if (isPending) return '5,5';
    return '0';
  };

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={getStrokeColor()}
      strokeWidth="3"
      strokeDasharray={getStrokeDasharray()}
      opacity={isPending ? 0.7 : 1}
      className="transition-all duration-300"
    />
  );
};

export default ConnectionLine;
