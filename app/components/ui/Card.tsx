interface CardProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function Card({ children, ...props }: CardProps) {
  return <div {...props}>{children}</div>;
}
