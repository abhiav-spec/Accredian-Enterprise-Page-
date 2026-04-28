import type { ButtonVariant } from '@/types';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  [key: string]: any;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
