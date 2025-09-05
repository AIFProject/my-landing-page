import React, { type ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white shadow rounded p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;
