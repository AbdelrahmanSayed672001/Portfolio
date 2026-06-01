import { Modal } from '../ui/Modal.jsx';

function renderProjectSummary(summary) {
  if (!summary) return null;

  const blocks = String(summary)
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block
      .split(/\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    const headingMatch = /^(Key Contributions|Core Capabilities|Technologies):$/i.exec(lines[0]);
    if (headingMatch) {
      const heading = headingMatch[1];
      const restLines = lines.slice(1);

      if (heading.toLowerCase() === 'technologies') {
        return (
          <div key={index} className="space-y-2">
            <p className="text-sm font-semibold text-content">{heading}:</p>
            <p className="text-sm leading-relaxed text-content-muted sm:text-base">
              {restLines.join(' ')}
            </p>
          </div>
        );
      }

      return (
        <div key={index} className="space-y-2">
          <p className="text-sm font-semibold text-content">{heading}:</p>
          <ul className="ml-4 list-disc space-y-2 text-sm leading-relaxed text-content-muted sm:text-base">
            {restLines.map((line) => (
              <li key={line}>{line.replace(/^•\s?/, '')}</li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <p key={index} className="text-sm leading-relaxed text-content-muted sm:text-base">
        {lines.join(' ')}
      </p>
    );
  });
}

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
        <div className="space-y-4">{renderProjectSummary(project.summary)}</div>
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
