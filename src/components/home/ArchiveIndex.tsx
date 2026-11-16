import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ARCHIVE_ITEMS, FILTERS, type ArchiveItem, type FilterKey } from './data';
import Grain from './Grain';

const countFor = (key: FilterKey) =>
  key === 'All' ? ARCHIVE_ITEMS.length : ARCHIVE_ITEMS.filter((x) => x.cat === key).length;

const ArchiveIndex = () => {
  const [filter, setFilter] = useState<FilterKey>('All');
  const [hovered, setHovered] = useState<ArchiveItem | null>(null);
  // Last hovered item: keeps the preview's artwork in place while it fades out.
  const [preview, setPreview] = useState<ArchiveItem | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const pvRef = useRef<HTMLDivElement>(null);
  const moveX = useRef<gsap.QuickToFunc | null>(null);
  const moveY = useRef<gsap.QuickToFunc | null>(null);

  useLayoutEffect(() => {
    const pv = pvRef.current;
    if (!pv) return;
    gsap.set(pv, { xPercent: -30, yPercent: -55, scale: 0.92 });
    moveX.current = gsap.quickTo(pv, 'x', { duration: 0.5, ease: 'power3' });
    moveY.current = gsap.quickTo(pv, 'y', { duration: 0.5, ease: 'power3' });
    return () => {
      moveX.current = null;
      moveY.current = null;
      gsap.killTweensOf(pv);
    };
  }, []);

  useEffect(() => {
    const pv = pvRef.current;
    if (!pv) return;
    gsap.to(pv, {
      autoAlpha: hovered ? 1 : 0,
      scale: hovered ? 1 : 0.92,
      rotation: hovered ? (parseInt(hovered.n, 10) % 2 ? -3 : 3) : 0,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, [hovered]);

  const shown = filter === 'All' ? ARCHIVE_ITEMS : ARCHIVE_ITEMS.filter((x) => x.cat === filter);

  const enter = (item: ArchiveItem) => {
    setHovered(item);
    setPreview(item);
  };
  const leave = () => setHovered(null);

  return (
    <section id="index" aria-labelledby="idx-h" className="pt-[clamp(40px,5vw,72px)]">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-2">
        <h2
          id="idx-h"
          data-reveal
          className="text-[clamp(40px,6.4vw,104px)] font-medium leading-[0.9] tracking-[-0.06em]"
        >
          Archive
          <br />
          Index <span className="align-top text-[0.3em] tracking-normal text-sub">({shown.length})</span>
        </h2>
        <div role="group" aria-label="Filter archive" className="flex flex-wrap gap-[18px]">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="fb"
              aria-pressed={filter === f.key}
              onClick={() => {
                setFilter(f.key);
                setHovered(null);
              }}
            >
              {f.label} ({countFor(f.key)})
            </button>
          ))}
        </div>
      </div>
      <div
        ref={listRef}
        className="relative pt-7"
        onMouseMove={(e) => {
          const rect = listRef.current?.getBoundingClientRect();
          if (!rect) return;
          moveX.current?.(e.clientX - rect.left);
          moveY.current?.(e.clientY - rect.top);
        }}
      >
        <div className="hd" aria-hidden="true">
          <span>Number:</span>
          <span>Entry:</span>
          <span className="c-tech">Detail:</span>
          <span className="c-cat">Category:</span>
          <span>Year:</span>
        </div>
        {shown.map((it) => (
          <a
            key={it.n}
            href={it.href}
            {...(it.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="row"
            onMouseEnter={() => enter(it)}
            onMouseLeave={leave}
            onFocus={() => enter(it)}
            onBlur={leave}
          >
            <span>{it.n}</span>
            <span>
              <span className="rt">
                {it.t} <span className="sub">/ {it.s}</span>
              </span>{' '}
              <span className="ar" aria-hidden="true">→</span>
            </span>
            <span className="c-tech sub">{it.tech}</span>
            <span className="c-cat">{it.cat}</span>
            <span>{it.yr}</span>
          </a>
        ))}
        <div ref={pvRef} className="pv" aria-hidden="true">
          <div className={`art ${preview?.art ?? 'art-d'}`} data-l={preview?.n ?? ''} />
          <Grain />
          <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between text-[11px] text-ground mix-blend-difference">
            <span>{preview?.n ?? ''}</span>
            <span>{preview?.cat ?? ''}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveIndex;
