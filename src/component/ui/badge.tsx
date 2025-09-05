import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'green' | 'blue' | 'gray';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'green' }) => {
  const colorClass =
    color === 'green'
      ? 'bg-green-100 text-green-800'
      : color === 'blue'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-gray-100 text-gray-800';

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${colorClass}`}>
      {text}
    </span>
  );
};

export default Badge;
