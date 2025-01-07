import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        className={`
          w-4 h-4 rounded border-border
          checked:bg-primary checked:border-primary
          focus:ring-2 focus:ring-primary/20
          ${className}
        `}
        {...props}
      />
      <span className="select-none">{label}</span>
    </label>
  );
} 