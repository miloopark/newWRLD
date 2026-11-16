import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Grain from './Grain';

type ArrowMode = 'side' | 'top';

interface ArrowLayout {
  mode: ArrowMode;
  left: number;
  top: number;
  width: number;
  height: number;
}

// Two hand-drawn templates; `tip` is the path's endpoint as a fraction of the
// viewBox. The SVG is positioned so that point lands exactly on the photo edge.
const TEMPLATES = {
  // Loops in from the left, tip pointing right at the photo's left edge.
  side: {
    viewBox: '0 0 400 300',
    aspect: 300 / 400,
    line: 'M 14 96 C 70 18, 196 14, 214 104 C 226 168, 146 194, 152 142 C 158 92, 262 116, 302 168 S 362 214, 390 213',
    head: 'M 375 202 L 391 213 L 374 225',
    tip: { x: 390 / 400, y: 213 / 300 },
  },
  // Sits above the photo, tail diving down so the tip points at its top edge.
  top: {
    viewBox: '0 0 400 260',
    aspect: 260 / 400,
    line: 'M 16 120 C 60 40, 170 28, 196 110 C 210 168, 140 190, 148 140 C 154 96, 250 92, 300 140 C 334 172, 348 200, 352 234',
    head: 'M 339 223 L 352 236 L 365 222',
    tip: { x: 352 / 400, y: 234 / 260 },
  },
} as const;

// Vertical room reserved above the photo when the arrow has to sit on top.
const TOP_MODE_MARGIN = 160;

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGPathElement>(null);
  const sayRef = useRef<SVGTextElement>(null);
  const animated = useRef(false);
  const [layout, setLayout] = useState<ArrowLayout | null>(null);

  const measure = () => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (!section || !photo) return;
    const s = section.getBoundingClientRect();
    const p = photo.getBoundingClientRect();
    const photoLeft = p.left - s.left;
    const photoTop = p.top - s.top;

    let next: ArrowLayout;
    if (photoLeft >= 220) {
      const t = TEMPLATES.side;
      const tipX = photoLeft + 4; // overlap the edge slightly so the head reads as touching
      const tipY = photoTop + p.height * 0.33;
      const width = Math.min(380, Math.max(200, (tipX - 8) / t.tip.x));
      const height = width * t.aspect;
      next = {
        mode: 'side',
        left: tipX - width * t.tip.x,
        top: tipY - height * t.tip.y,
        width,
        height,
      };
    } else {
      const t = TEMPLATES.top;
      const tipY = photoTop + 2;
      let width = Math.min(340, s.width * 0.8, (tipY - 4) / (t.tip.y * t.aspect));
      // Aim at ~60% across the photo's top edge, but never let the drawing's
      // tail run off the left of the screen — shrink it instead.
      let tipX = Math.min(photoLeft + p.width * 0.6, 4 + width * t.tip.x);
      tipX = Math.max(tipX, photoLeft + p.width * 0.25);
      if (tipX - width * t.tip.x < 4) {
        width = (tipX - 4) / t.tip.x;
      }
      const height = width * t.aspect;
      next = {
        mode: 'top',
        left: tipX - width * t.tip.x,
        top: tipY - height * t.tip.y,
        width,
        height,
      };
    }
    setLayout((prev) =>
      prev &&
      prev.mode === next.mode &&
      Math.abs(prev.left - next.left) < 0.5 &&
      Math.abs(prev.top - next.top) < 0.5 &&
      Math.abs(prev.width - next.width) < 0.5
        ? prev
        : next,
    );
  };

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (photoRef.current) ro.observe(photoRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Switching modes moves the photo (top margin), so re-aim once after it settles.
  useLayoutEffect(() => {
    measure();
  }, [layout?.mode]);

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!layout || !line) return;
    const length = line.getTotalLength();

    if (animated.current) {
      // Re-layouts after the intro: keep the arrow fully drawn.
      gsap.killTweensOf([line, headRef.current, sayRef.current]);
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: 0 });
      gsap.set([headRef.current, sayRef.current], { autoAlpha: 1 });
      return;
    }
    animated.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(line, { strokeDasharray: 'none' });
      return;
    }
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    const tl = gsap
      .timeline({ delay: 0.3 })
      .to(line, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut' })
      .from([headRef.current, sayRef.current], { autoAlpha: 0, duration: 0.6 }, 1.3);
    return () => {
      tl.kill();
    };
  }, [layout]);

  const template = layout ? TEMPLATES[layout.mode] : null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-h"
      className="relative flex min-h-[clamp(620px,58vw,880px)] flex-col items-center justify-center border-t border-rule pt-[clamp(32px,4vw,64px)] pb-[clamp(56px,5vw,80px)]"
    >
      <h1 id="hero-h" className="sr-only">
        Hi, I'm Milo Park: iOS developer, designer and music maker
      </h1>
      {layout && template && (
        <svg
          className="arw"
          viewBox={template.viewBox}
          style={{ left: layout.left, top: layout.top, width: layout.width, height: layout.height }}
          aria-hidden="true"
        >
          <path
            ref={lineRef}
            id="arwp"
            d={template.line}
            fill="none"
            stroke="#0c0c0c"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            ref={headRef}
            d={template.head}
            fill="none"
            stroke="#0c0c0c"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            ref={sayRef}
            className="font-tight font-medium"
            style={{ fontSize: 30, letterSpacing: '-1.4px', fill: '#0c0c0c' }}
          >
            <textPath href="#arwp" startOffset="3%">
              <tspan dy="-10">Hi, I'm Milo</tspan>
            </textPath>
          </text>
        </svg>
      )}
      <div
        className="hp relative w-[clamp(240px,28vw,420px)]"
        style={{ marginTop: layout?.mode === 'top' ? TOP_MODE_MARGIN : undefined }}
      >
        <div ref={photoRef} className="relative aspect-[4/5] overflow-hidden bg-ink">
          <img
            src="/assets/portrait.jpg"
            alt="Milo in a grey hoodie on a Brooklyn rooftop, drinking from a can and throwing a peace sign behind a DJ controller, with the Manhattan skyline behind"
            className="absolute inset-0 h-full w-full object-cover [object-position:50%_40%] [filter:grayscale(1)_contrast(1.12)_brightness(1.02)]"
          />
          <Grain />
        </div>
        <div className="flex justify-between gap-3 pt-2 text-[11px] text-sub">
          <span>Milo Park</span>
          <span>iOS · Design · Sound</span>
        </div>
      </div>
      <a
        href="#index"
        className="absolute bottom-[18px] left-1/2 -translate-x-1/2 text-[13px] no-underline"
      >
        (Scroll) ↓
      </a>
    </section>
  );
};

export default Hero;
