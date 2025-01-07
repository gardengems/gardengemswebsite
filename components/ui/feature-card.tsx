import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className = '' }: FeatureCardProps) {
  return (
    <div className={`flex flex-col items-center text-center space-y-4 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-8 h-8 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
} 