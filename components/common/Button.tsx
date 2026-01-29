import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
