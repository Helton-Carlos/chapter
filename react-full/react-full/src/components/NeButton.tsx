import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  iconLeft,
  iconRight,
  className = '',
  ...props
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-200',
    secondary: 'bg-primary-50 text-primary-800 hover:bg-primary-100 border border-primary-200 focus:ring-primary-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-100'
  };

  return (
    <button
      className={
        `${baseStyles} ${variants[variant]} ${className}`
      }
      {...props}
    >
      {iconLeft &&
        <span className="flex items-center justify-center w-4 h-4 shrink-0">
          {iconLeft}
        </span>
      }

      {children}

      {iconRight &&
        <span className="flex items-center justify-center w-4 h-4 shrink-0">
          {iconRight}
        </span>
      }
    </button>
  );
}