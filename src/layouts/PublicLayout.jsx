import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu, IconX } from '../components/ui/Icons.jsx';
import { SocialLinks } from '../components/ui/SocialLinks.jsx';
import { AmbientBackground } from '../components/layout/AmbientBackground.jsx';
import { SITE } from '../data/portfolio.js';
import { scrollToSection } from '../lib/scrollToSection.js';

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileLinkClass =
    'block rounded-xl px-4 py-3 text-base font-medium text-content-muted transition-all duration-200 hover:bg-white/[0.06] hover:text-content';

  function handleNavClick(e, href) {
    e.preventDefault();
    const sectionId = href.replace(/^#/, '');
    const wasMenuOpen = mobileOpen;
    setMobileOpen(false);
    const scroll = () => scrollToSection(sectionId);
    if (wasMenuOpen) {
      window.setTimeout(scroll, 200);
    } else {
      window.requestAnimationFrame(scroll);
    }
  }

  function handleHomeClick(e) {
    handleNavClick(e, '#home');
  }

  return (
    <div className="relative min-h-svh bg-surface text-content">
      <AmbientBackground />

      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-surface-secondary/40 shadow-soft backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4 lg:px-8">
          <a
            href="#home"
            onClick={handleHomeClick}
            className="font-display text-lg font-semibold tracking-tight text-content transition hover:text-accent"
          >
            {SITE.name}
          </a>

          <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-content-muted transition-all duration-200 hover:bg-white/[0.06] hover:text-content"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-lg p-2 text-content-muted transition hover:bg-white/[0.06] hover:text-content sm:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/[0.06] sm:hidden"
            >
              <div className="space-y-1 px-4 py-3">
                {nav.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={mobileLinkClass}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>

      <footer className="relative mt-24 border-t border-white/[0.08] bg-surface-secondary/30 py-10 backdrop-blur-md sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-content-muted lg:flex-row lg:px-8">
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Abdelrahman-Sayed
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <SocialLinks
              className="rounded-lg p-2.5"
              iconClassName="h-4 w-4"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
