import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  type = 'button'
}) => {
  const variantClass = `button--${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};
