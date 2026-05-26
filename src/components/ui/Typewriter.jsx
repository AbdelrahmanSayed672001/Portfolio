import { useEffect, useState, useSyncExternalStore } from 'react';

function subscribeReducedMotion(cb) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}

function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Typewriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className,
}) {
  const prefersReduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (prefersReduced) return undefined;

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const phrase = phrases[phraseIdx] ?? '';

      if (!deleting) {
        charIdx += 1;
        setDisplayed(phrase.slice(0, charIdx));
        if (charIdx >= phrase.length) {
          deleting = true;
          timeoutId = window.setTimeout(tick, pauseDuration);
          return;
        }
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }

      charIdx -= 1;
      setDisplayed(phrase.slice(0, charIdx));
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        timeoutId = window.setTimeout(tick, typeSpeed);
        return;
      }
      timeoutId = window.setTimeout(tick, deleteSpeed);
    };

    timeoutId = window.setTimeout(tick, typeSpeed);
    return () => window.clearTimeout(timeoutId);
  }, [phrases, typeSpeed, deleteSpeed, pauseDuration, prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return undefined;
    const blink = window.setInterval(() => setShowCursor((v) => !v), 530);
    return () => window.clearInterval(blink);
  }, [prefersReduced]);

  return (
    <span className={className}>
      {prefersReduced ? (phrases[0] ?? '') : displayed}
      <span
        className={`ml-0.5 inline-block h-[1em] w-0.5 bg-accent align-middle transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden
      />
    </span>
  );
}
