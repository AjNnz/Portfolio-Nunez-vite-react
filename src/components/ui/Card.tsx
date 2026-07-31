import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__description">{description}</p>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};
