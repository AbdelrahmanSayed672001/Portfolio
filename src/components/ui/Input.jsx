import { cn } from '../../lib/cn.js';

export function Input({ className, label, error, id, ...props }) {
  const inputId = id || props.name;
  return (
    <label className={cn('flex flex-col gap-1.5 text-sm', className)}>
      {label ? (
        <span className="text-content-muted font-medium">{label}</span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          'rounded-xl border border-white/10 bg-surface-secondary/80 px-4 py-2.5 text-content placeholder:text-content-muted/60 outline-none transition-shadow focus:border-accent/50 focus:ring-2 focus:ring-accent/20',
          error && 'border-error/60 focus:ring-error/20',
        )}
        {...props}
      />
      {error ? <span className="text-xs text-error">{error}</span> : null}
    </label>
  );
}
