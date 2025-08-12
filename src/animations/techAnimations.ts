// techAnimations.ts
import { gsap } from "gsap";

console.log("techAnimations loaded v7");

type Config = {
  color: string;
  bgOpacity: number;
  pulseDuration: number;
  circuitInterval: number;
  circuitDuration: number;
  metricInterval: number;
  metricDuration: number;
};

const CFG: Config = {
  color: "#D4E58B",
  bgOpacity: 0.08,
  pulseDuration: 1.5,
  circuitInterval: 12000,
  circuitDuration: 4000,
  metricInterval: 8000,
  metricDuration: 1200
};

const state = {
  created: false,
  svg: null as SVGSVGElement | null,
  observer: null as MutationObserver | null,
  calls: [] as any[],
  mediaReduced: window.matchMedia?.("(prefers-reduced-motion: reduce)") ?? null
};

function sanitizePathD(d: string, unitScale = 10): string {
  return String(d)
    .replace(/(-?\d*\.?\d+)%/g, (_, n) => (parseFloat(n) * unitScale).toFixed(2))
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function addCall(dc: any) {
  state.calls.push(dc);
  return dc;
}
function clearCalls() {
  state.calls.forEach(c => c.kill());
  state.calls = [];
}

// small pulse for a status dot if present
export function initSystemOnlineDot() {
  const dot = document.querySelector(".system-online-dot");
  if (!dot) return;
  if (state.mediaReduced?.matches) return;

  gsap.to(dot, {
    opacity: 0.35,
    scale: 1.05,
    duration: CFG.pulseDuration / 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
}

// create fixed SVG behind content
export function initCircuitBackground() {
  if (state.created) return;
  state.created = true;

  // stacking context so background can sit at z index 0

  // container
  const container = document.createElement("div");
  container.className = "circuit-background";
  container.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: visible;
  `;

  // size and overscan
  const w = Math.max(document.documentElement.clientWidth, 960);
  const h = Math.max(document.documentElement.clientHeight, 640);
  const overscan = 80;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", `${-overscan} ${-overscan} ${w + overscan * 2} ${h + overscan * 2}`);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.opacity = "0.5"; // Temporarily increased for debugging
  container.appendChild(svg);

  document.body.prepend(container);
  state.svg = svg;

  // build several faint traces
  const paths = generateCircuitPaths();
  const unitScale = Math.max(w, h) / 100; // percent to units
  
  paths.forEach(raw => {
    const p = document.createElementNS(svg.namespaceURI, "path");
    p.setAttribute("d", sanitizePathD(raw, unitScale));
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", CFG.color);
    p.setAttribute("stroke-width", "1.5");
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("stroke-linejoin", "round");
    p.setAttribute("opacity", "0.45");
    svg.appendChild(p);
  });

  if (!state.mediaReduced?.matches) scheduleCircuitFlow();

  // resize handler
  let t: number | undefined;
  const onResize = () => {
    window.clearTimeout(t);
    t = window.setTimeout(() => {
      destroyCircuitOnly();
      state.created = false;
      initCircuitBackground();
    }, 200);
  };
  window.addEventListener("resize", onResize, { passive: true });

  // pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) gsap.globalTimeline.pause();
    else gsap.globalTimeline.resume();
  });
}

function scheduleCircuitFlow() {
  const run = () => {
    if (!state.svg) return;
    const bg = Array.from(state.svg.querySelectorAll("path"));
    if (!bg.length) return;

    const sample = bg[Math.floor(Math.random() * bg.length)];
    const d = sample.getAttribute("d") || "";

    const flow = document.createElementNS(state.svg.namespaceURI, "path");
    flow.setAttribute("d", d);
    flow.setAttribute("fill", "none");
    flow.setAttribute("stroke", CFG.color);
    flow.setAttribute("stroke-width", "2");
    flow.setAttribute("opacity", "0");
    (flow as SVGPathElement).style.filter = "drop-shadow(0 0 4px #D4E58B)";
    state.svg.appendChild(flow);

    const len = (flow as SVGPathElement).getTotalLength();
    gsap.set(flow, { strokeDasharray: `${len} ${len}`, strokeDashoffset: len });

    gsap.timeline({ onComplete: () => flow.remove() })
      .to(flow, { opacity: 0.9, duration: 0.4, ease: "sine.out" })
      .to(flow, { strokeDashoffset: 0, duration: CFG.circuitDuration / 1000, ease: "none" }, 0)
      .to(flow, { opacity: 0, duration: 0.5, ease: "sine.in" }, `>`);
  };

  run();
  const loop = () => addCall(gsap.delayedCall(CFG.circuitInterval / 1000, () => { run(); loop(); }));
  loop();
}

function generateCircuitPaths(): string[] {
  // author as percents, sanitize will convert to units
  const p = (x: number, y: number, c1x: number, c1y: number, c2x: number, c2y: number, ex: number, ey: number) =>
    `M ${x}% ${y}% C ${c1x}% ${c1y}% ${c2x}% ${c2y}% ${ex}% ${ey}%`;

  return [
    p(12, 28, 24, 10, 42, 34, 55, 44),
    p(8, 74, 24, 62, 42, 46, 58, 30),
    p(78, 20, 64, 34, 44, 54, 26, 74),
    p(32, 10, 46, 28, 64, 48, 82, 62),
    p(70, 86, 54, 70, 38, 54, 20, 36),
    p(40, 80, 58, 64, 74, 46, 86, 26),
    p(18, 60, 34, 46, 50, 30, 66, 40),
    p(62, 12, 48, 30, 34, 48, 42, 66)
  ];
}

export function initMetricSweep() {
  if (state.mediaReduced?.matches) return;

  const cards = document.querySelectorAll<HTMLElement>(".metric-card");
  if (!cards.length) return;

  let i = 0;
  const run = () => {
    const card = cards[i];
    i = (i + 1) % cards.length;
    if (!card) return;

    const overlay = document.createElement("div");
    overlay.className = "metric-sweep-overlay";
    overlay.style.cssText = `
      position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;
      background:linear-gradient(90deg, transparent 0%, ${CFG.color}26 25%, ${CFG.color}4D 50%, ${CFG.color}26 75%, transparent 100%)
    `;
    card.style.position = "relative";
    card.appendChild(overlay);

    gsap.timeline({ onComplete: () => overlay.remove() })
      .to(overlay, { opacity: 1, duration: CFG.metricDuration / 1000 / 2, ease: "sine.inOut" })
      .to(overlay, { opacity: 0, duration: CFG.metricDuration / 1000 / 2, ease: "sine.inOut" });
  };

  const loop = () => addCall(gsap.delayedCall(CFG.metricInterval / 1000, () => { run(); loop(); }));
  addCall(gsap.delayedCall(4, () => { run(); loop(); }));
}

export function initAllAnimations() {
  initSystemOnlineDot();
  addCall(gsap.delayedCall(1, () => initCircuitBackground()));
  addCall(gsap.delayedCall(3, () => initMetricSweep()));
}

export function destroyAllAnimations() {
  clearCalls();
  if (state.observer) {
    state.observer.disconnect();
    state.observer = null;
  }
  destroyCircuitOnly();
}

function destroyCircuitOnly() {
  const el = document.querySelector(".circuit-background");
  if (el) el.remove();
  state.svg = null;
  state.created = false;
}
