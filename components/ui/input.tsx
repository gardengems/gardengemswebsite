import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      <input
        className={`
          w-full px-4 py-2 rounded-md border bg-background
          focus:outline-none focus:ring-2 focus:ring-primary/20
          ${error ? 'border-destructive' : 'border-border'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

export function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      <textarea
        className={`
          w-full px-4 py-2 rounded-md border bg-background
          focus:outline-none focus:ring-2 focus:ring-primary/20
          ${error ? 'border-destructive' : 'border-border'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
} 