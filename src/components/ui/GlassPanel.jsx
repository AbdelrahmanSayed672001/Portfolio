import { cn } from '../../lib/cn.js';

export function GlassPanel({ className, children }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/[0.1] bg-surface-secondary/55 p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:border-white/[0.14] hover:shadow-card-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
