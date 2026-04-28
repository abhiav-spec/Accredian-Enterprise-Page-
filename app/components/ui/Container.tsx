interface ContainerProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function Container({ children, ...props }: ContainerProps) {
  return <div {...props}>{children}</div>;
}
