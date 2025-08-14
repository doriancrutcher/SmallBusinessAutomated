type TypingOpts = {
  cps?: number;         // characters per second
  jitter?: number;      // randomness ratio 0..0.5
  caret?: boolean;
  onDone?: () => void;
};

export function typeText(el: HTMLElement, full: string, opts: TypingOpts = {}) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    el.textContent = full;
    opts.onDone?.();
    return () => {};
  }

  const cps = opts.cps ?? 28;
  const jitter = opts.jitter ?? 0.2;
  let i = 0;
  let raf = 0;

  const step = () => {
    // Use innerHTML to preserve line breaks and formatting
    el.innerHTML = full.slice(0, i);
    i++;
    if (i <= full.length) {
      const base = 1000 / cps;
      const rand = base * (1 + (Math.random() * 2 - 1) * jitter);
      setTimeout(() => {
        raf = requestAnimationFrame(step);
      }, rand);
    } else {
      opts.onDone?.();
    }
  };

  raf = requestAnimationFrame(step);
  return () => cancelAnimationFrame(raf);
} 