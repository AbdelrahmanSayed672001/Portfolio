import { cn } from '../../lib/cn.js';

export function Textarea({ className, label, error, id, ...props }) {
  const tid = id || props.name;
  return (
    <label className={cn('flex flex-col gap-1.5 text-sm', className)}>
      {label ? (
        <span className="text-content-muted font-medium">{label}</span>
      ) : null}
      <textarea
        id={tid}
        className={cn(
          'min-h-[120px] resize-y rounded-xl border border-white/10 bg-surface-secondary/80 px-4 py-2.5 text-content placeholder:text-content-muted/60 outline-none transition-shadow focus:border-accent/50 focus:ring-2 focus:ring-accent/20',
          error && 'border-error/60',
        )}
        {...props}
      />
      {error ? <span className="text-xs text-error">{error}</span> : null}
    </label>
  );
}
