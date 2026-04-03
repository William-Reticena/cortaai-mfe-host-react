import type { LabelProps } from './LabelProps';

export function Label({ children, className = '', htmlFor, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  );
}
