import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import '../../styles/tailwind.css';
import './home.css';
import Header from './Header';
import Hero from './Hero';
import ArchiveIndex from './ArchiveIndex';
import WorkSection from './WorkSection';
import SoundArchive from './SoundArchive';
import ContactSection from './ContactSection';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({ anchors: true });
      lenis.on('scroll', ScrollTrigger.update);
      raf = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return (
    <div ref={rootRef} id="top" className="mp min-h-screen bg-ground">
      {/* Shared turbulence filter for every .grain overlay */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <filter id="gr">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="mx-auto max-w-[1600px] px-[clamp(16px,2.2vw,32px)]">
        <Header />
        <Hero />
        <ArchiveIndex />
        <WorkSection />
        <SoundArchive />
        <ContactSection />
        <footer className="nav flex flex-wrap justify-between gap-3 pb-6 pt-14 text-[12px] text-sub">
          <span>© 2026 Milo Park</span>
          <span>Set in Inter Tight</span>
          <a href="#top" className="lk text-ink">Back to top ↑</a>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
