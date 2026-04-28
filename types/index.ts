// Type definitions
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}
