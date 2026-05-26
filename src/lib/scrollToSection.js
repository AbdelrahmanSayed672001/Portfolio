const HEADER_OFFSET_PX = 88;

/**
 * Scroll to an in-page section by id (works reliably on mobile; hash links alone often do not).
 */
export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  window.history.pushState(null, '', `#${sectionId}`);
  return true;
}
