import { AnimatePresence, motion } from 'framer-motion';
import { IconX } from './Icons.jsx';
import { cn } from '../../lib/cn.js';

export function Modal({ open, onClose, title, children, footer, size = 'md' }) {
  const maxW =
    size === 'xl'
      ? 'max-w-4xl'
      : size === 'lg'
        ? 'max-w-3xl'
        : size === 'sm'
          ? 'max-w-md'
          : 'max-w-lg';

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-surface/80 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className={cn(
              'relative z-[101] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-secondary shadow-glass',
              maxW,
            )}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3 className="text-base font-semibold text-content">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-content-muted transition hover:bg-white/5 hover:text-content"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[min(70vh,640px)] overflow-y-auto px-5 py-4">
              {children}
            </div>
            {footer ? (
              <div className="flex justify-end gap-2 border-t border-white/10 bg-surface/40 px-5 py-4">
                {footer}
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
