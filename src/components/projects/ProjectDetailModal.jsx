import { Modal } from '../ui/Modal.jsx';

export function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  const imageUrl = project.image?.url;
  const tags = project.tags ?? [];

  return (
    <Modal open={Boolean(project)} onClose={onClose} title={project.title} size="xl">
      <div className="space-y-5">
        {imageUrl ? (
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b1220]">
            <img
              src={imageUrl}
              alt={project.title}
              className="max-h-[min(50vh,420px)] w-full object-contain"
            />
          </div>
        ) : null}
        <p className="text-sm leading-relaxed text-content-muted sm:text-base">{project.summary}</p>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-content-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
