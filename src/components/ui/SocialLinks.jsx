import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconWhatsapp,
} from './Icons.jsx';
import { SOCIAL_LINKS } from '../../data/portfolio.js';
import { cn } from '../../lib/cn.js';

const iconMap = {
  github: IconGithub,
  whatsapp: IconWhatsapp,
  phone: IconPhone,
  linkedin: IconLinkedin,
  email: IconMail,
};

export function SocialLinks({ className, iconClassName }) {
  return (
    <>
      {SOCIAL_LINKS.map(({ id, label, href }) => {
        const Icon = iconMap[id];
        return (
          <a
            key={id}
            href={href}
            target={id === 'phone' || id === 'email' ? undefined : '_blank'}
            rel={id === 'phone' || id === 'email' ? undefined : 'noreferrer'}
            aria-label={label}
            className={cn(
              'rounded-xl border border-white/[0.1] bg-surface-card/70 p-3 text-content-muted shadow-sm transition hover:border-accent/35 hover:text-accent hover:shadow-glow',
              className,
            )}
          >
            <Icon className={cn('h-5 w-5', iconClassName)} />
          </a>
        );
      })}
    </>
  );
}
