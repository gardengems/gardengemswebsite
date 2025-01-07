interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`bg-muted/5 border border-border/40 rounded-lg p-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
} 