import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { IconDownload, IconMail, IconMessageSquare } from '../../components/ui/Icons.jsx';
import { GlassPanel } from '../../components/ui/GlassPanel.jsx';
import { Button } from '../../components/ui/Button.jsx';
import { Input } from '../../components/ui/Input.jsx';
import { Textarea } from '../../components/ui/Textarea.jsx';
import { Typewriter } from '../../components/ui/Typewriter.jsx';
import { SocialLinks } from '../../components/ui/SocialLinks.jsx';
import { ProjectsShowcase } from '../../components/projects/ProjectsShowcase.jsx';
import { sendContactEmail } from '../../lib/sendContactEmail.js';
import {
  SITE,
  about,
  cvPdf,
  education,
  experience,
  profileImage,
  projects,
  skills,
} from '../../data/portfolio.js';

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.35 },
};

function HomeContactForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const subject = String(fd.get('subject') ?? '').trim() || 'Portfolio message';
    const body = String(fd.get('body') ?? '').trim();

    setPending(true);
    try {
      await sendContactEmail({ name, email, subject, body });
      toast.success('Message sent!');
      e.target.reset();
      setSent(true);
    } catch (err) {
      toast.error(err.message || 'Failed to send message');
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-success/20 bg-success/[0.06] p-8 text-center backdrop-blur-sm">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success/15">
          <IconMessageSquare className="h-6 w-6 text-success" />
        </div>
        <h3 className="font-display text-lg font-semibold text-content">Message sent!</h3>
        <p className="mt-1.5 text-xs text-content-muted sm:text-sm">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button variant="secondary" size="sm" className="mt-4" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-secondary/40 backdrop-blur-xl">
      <div className="border-b border-white/[0.06] bg-surface-secondary/30 px-5 py-3 sm:px-6 sm:py-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-content">
          <IconMessageSquare className="h-4 w-4 text-accent" />
          Quick message
        </h3>
      </div>
      <form className="space-y-3 p-5 sm:space-y-4 sm:p-6" onSubmit={onSubmit}>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <Input name="name" label="Name" required autoComplete="name" placeholder="Your name" />
          <Input name="email" type="email" label="Email" required autoComplete="email" placeholder="you@example.com" />
        </div>
        <Input name="subject" label="Subject" placeholder="What's this about?" />
        <Textarea name="body" label="Message" required rows={4} placeholder="Your message..." />
        <Button type="submit" disabled={pending} className="w-full gap-2 sm:w-auto">
          {pending ? 'Sending…' : 'Send'}
          {!pending && <IconMail className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}

function ExperienceBlock({ job }) {
  return (
    <div className="space-y-2">
      <div>
        <p className="text-sm font-large text-content">
          {job.role}  <span className='text-sm font-samll text-content-muted'> @ </span> 
          <span className='text-sm font-samll text-content'>
            {job.company}
          </span>
        </p>
        <p className="text-xs text-accent">
          {job.period}
        </p>
      </div>
      <ul className="list-inside list-disc space-y-1 text-xs text-content-muted sm:text-sm">
        {job.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {job.achievements?.length ? (
        <div className="pt-1">
          <p className="text-xs font-semibold text-content">Achievements:</p>
          <ul className="mt-1 list-inside list-disc space-y-1 text-xs text-content-muted sm:text-sm">
            {job.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:space-y-20 sm:py-16 lg:px-8 lg:py-24">
      <motion.section
        id="home"
        className="grid gap-8 scroll-mt-24 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <GlassPanel className="flex flex-col p-6 sm:p-8 lg:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
            {SITE.name}
          </p>
          <h1 className="font-display mt-4 min-h-[2.75rem] text-2xl font-bold tracking-tight text-content sm:mt-5 sm:min-h-[3.25rem] sm:text-display lg:min-h-[3.5rem] lg:text-display-lg">
            <Typewriter phrases={SITE.typewriterPhrases} />
          </h1>
          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            <SocialLinks />
          </div>
          <div className="mt-6 sm:mt-8">
            <a href={cvPdf} download="AbdelrahmanSayed_SoftwareEngineer_CV.pdf">
              <Button type="button" size="sm" className="gap-2 sm:text-sm">
                Download CV
                <IconDownload className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </GlassPanel>
        <GlassPanel className="relative flex justify-center">
          <motion.div
            className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-cyan-400/10 to-transparent blur-3xl sm:inset-6"
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <img
            src={profileImage}
            alt={SITE.name}
            className="h-[280px] w-full object-cover object-top sm:h-[360px] lg:h-[420px]"
          />
        </GlassPanel>
      </motion.section>

      <motion.section id="about" {...fade} className="scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-content md:text-3xl">
          About
        </h2>
        <GlassPanel className="mt-5 p-5 sm:mt-6 sm:p-8">
          <div className="space-y-4 text-sm leading-relaxed text-content-muted sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.text.slice(0, 40)}
                className={paragraph.highlight ? 'text-content' : ''}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold text-accent sm:text-sm">Experience</h3>
              <div className="mt-3 space-y-6">
                {experience.map((job) => (
                  <ExperienceBlock key={job.company + job.period} job={job} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-accent sm:text-sm">Education</h3>
              <div className="mt-3 space-y-1 text-xs text-content-muted sm:text-sm">
                <p className="font-medium text-content">{education.degree}</p>
                <p className="text-accent">
                  {education.period}
                </p>
                <p>{education.school}</p>
                <p>{education.gpa}</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.section>

      <motion.section id="skills" {...fade} className="scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-content md:text-3xl">
          Technical Skills
        </h2>
        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
          {skills.map((block) => (
            <GlassPanel key={block.category} className="p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold text-content sm:text-lg">
                {block.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-surface/40 px-2.5 py-1 text-[11px] font-medium text-content-muted transition hover:border-accent/25 hover:text-accent sm:text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </motion.section>

      <section id="projects" className="relative -mx-4 scroll-mt-24 overflow-x-hidden pb-4 sm:-mx-4 lg:-mx-8">
        <ProjectsShowcase
          projects={projects}
          mode="all"
          eyebrow=""
          title="Projects"
        />
      </section>

      <motion.section id="contact" {...fade} className="scroll-mt-24 space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <GlassPanel className="relative overflow-hidden p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.08] blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 sm:h-14 sm:w-14">
                  <IconMail className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
                </div>
                <h2 className="font-display text-xl font-semibold tracking-tight text-content sm:text-2xl md:text-3xl">
                  Connect
                </h2>
                <p className="mt-2 text-xs text-content-muted sm:text-sm">
                  Open to new opportunities, collaborations, and technical discussions. Feel free to get in touch to discuss how we can work together.                </p>
                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                  <SocialLinks />
                </div>
              </div>
            </GlassPanel>
          </div>

          <HomeContactForm />
        </div>
      </motion.section>
    </div>
  );
}
