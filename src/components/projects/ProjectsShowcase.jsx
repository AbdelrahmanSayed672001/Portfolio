import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { Spinner } from '../ui/Spinner.jsx';
import { ProjectDetailModal } from './ProjectDetailModal.jsx';
import { cn } from '../../lib/cn.js';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fn = () => setReduced(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}

function pickProjects(projects, mode) {
  const list = Array.isArray(projects) ? projects : [];
  if (mode === 'featured') {
    const f = list.filter((p) => p.featured);
    return f.length > 0 ? f : list.slice(0, 6);
  }
  if (mode === 'all') return list;
  return list;
}

/**
 * Wide preview inside the card: hover pans a tall capture vertically (no phone frame).
 */
function ProjectCardPanPreview({ src, reduced, className, urlLine = 'preview' }) {
  const viewportRef = useRef(null);
  const stripRef = useRef(null);
  const y = useMotionValue(0);
  const animRef = useRef(null);
  const maxScrollRef = useRef(0);

  const measure = useCallback(() => {
    const v = viewportRef.current;
    const s = stripRef.current;
    if (!v || !s) return;
    maxScrollRef.current = Math.max(0, s.offsetHeight - v.offsetHeight);
    const max = maxScrollRef.current;
    if (max === 0) y.set(0);
    else if (Math.abs(y.get()) > max) y.set(-max);
  }, [y]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (stripRef.current) ro.observe(stripRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [src, measure]);

  const runToBottom = () => {
    measure();
    if (reduced) return;
    requestAnimationFrame(() => {
      const max = maxScrollRef.current;
      if (max <= 0) return;
      animRef.current?.stop();
      const duration = Math.min(14, Math.max(4, max / 48));
      animRef.current = animate(y, -max, { duration, ease: 'linear' });
    });
  };

  const runToTop = () => {
    animRef.current?.stop();
    animRef.current = animate(y, 0, {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    });
  };

  return (
    <div
      ref={viewportRef}
      className={cn(
        'relative aspect-[16/10] w-full cursor-ns-resize overflow-hidden rounded-t-xl bg-[#0b1220]',
        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]',
        className,
      )}
      onPointerEnter={runToBottom}
      onPointerLeave={runToTop}
    >
      <motion.div
        ref={stripRef}
        style={{ y }}
        className="absolute left-0 right-0 top-0 w-full will-change-transform"
      >
        <img
          src={src}
          alt=""
          draggable={false}
          loading="lazy"
          onLoad={measure}
          className="pointer-events-none w-full"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-2 border-b border-white/10 bg-gradient-to-b from-surface/95 to-surface/40 px-3 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
        </div>
        <div className="min-w-0 flex-1 truncate rounded bg-black/25 px-2 py-0.5 text-center font-mono text-[9px] text-content-muted/90">
          {urlLine}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-surface/80 to-transparent" />
    </div>
  );
}

function ProjectShowcaseCard({ project, reduced, onSelect }) {
  const tags = project.tags ?? [];
  const previewUrl = project.image?.url;
  if (!previewUrl) return null;

  const barLabel = project.title;

  return (
    <motion.article
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-secondary/50 shadow-card backdrop-blur-xl transition duration-300 hover:border-accent/25 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/18" />

      <ProjectCardPanPreview
        src={previewUrl}
        reduced={reduced}
        className="w-full flex-shrink-0"
        urlLine={barLabel}
      />

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h3 className="font-display text-lg font-semibold tracking-tight text-content sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-content-muted">{project.summary}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {(tags.length ? tags.slice(0, 4) : ['Web', 'Product']).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-content-muted sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-3 text-[10px] leading-snug text-content-muted/80 sm:text-[11px]">
          Click for details · hover preview to pan
        </p>
      </div>
    </motion.article>
  );
}

/**
 * Projects showcase: responsive card grid with full-width landscape previews (hover pan).
 * All content from API.
 *
 * @param {number} [limit] — max projects to show (e.g. `3` on the home page).
 */
export function ProjectsShowcase({
  projects,
  isLoading = false,
  mode = 'featured',
  limit,
  eyebrow = 'Selected work',
  title = 'Products & interfaces',
  subtitle = '',
  className,
}) {
  const reduced = usePrefersReducedMotion();
  const [selectedProject, setSelectedProject] = useState(null);
  const list = useMemo(() => {
    const picked = pickProjects(projects, mode);
    if (typeof limit === 'number' && limit > 0) {
      return picked.slice(0, limit);
    }
    return picked;
  }, [projects, mode, limit]);

  if (isLoading) {
    return (
      <div className={cn('flex min-h-[40vh] items-center justify-center', className)}>
        <Spinner className="h-10 w-10 text-accent" />
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div
        className={cn(
          'rounded-2xl border border-dashed border-white/15 bg-surface-secondary/40 px-6 py-16 text-center text-sm text-content-muted backdrop-blur-sm',
          className,
        )}
      >
        No projects to showcase yet.
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      <header className="mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-12 md:mb-16 md:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs">{eyebrow}</p>
        <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-content sm:mt-3 sm:text-3xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-content-muted sm:mt-4 sm:text-sm md:text-base">{subtitle}</p>
        )}
      </header>

      <div
        className={cn(
          'mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 pb-8 sm:gap-7 sm:px-6 sm:pb-12 md:px-8',
          limit === 3
            ? 'sm:grid-cols-2 md:grid-cols-3'
            : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {list.map((p) => (
          <ProjectShowcaseCard
            key={p.id ?? p.slug}
            project={p}
            reduced={reduced}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
