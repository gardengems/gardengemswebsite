interface SectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({ children, className = '', muted = false }: SectionProps) {
  return (
    <section className={`py-24 ${muted ? 'bg-muted/20' : ''} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
} 