import { cn } from '../../lib/cn.js';

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-cyan-400 text-surface font-medium shadow-soft hover:from-accent-hover hover:to-cyan-300 hover:shadow-[0_8px_32px_rgba(56,189,248,0.25)] active:scale-[0.98] transition-all duration-200',
  secondary:
    'bg-surface-card/90 text-content border border-white/10 hover:border-accent/35 hover:bg-surface-card active:scale-[0.98] transition-all duration-200',
  ghost: 'text-content-muted hover:text-content hover:bg-white/[0.06] active:scale-[0.98] transition-all duration-200',
  danger: 'bg-error/90 text-white hover:bg-error active:scale-[0.98] transition-all duration-200',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2.5 text-sm rounded-xl',
  lg: 'px-5 py-3 text-base rounded-xl',
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
