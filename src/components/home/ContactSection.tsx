import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EMAIL, SOCIALS } from './data';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.ln > span', {
          yPercent: 105,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '#ct-h', start: 'top 85%' },
          // Release the overflow mask once the slide-in finishes so
          // descenders can hang over the rules below.
          onComplete: () => {
            rootRef.current
              ?.querySelectorAll('.ln')
              .forEach((el) => el.classList.add('ln-open'));
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="contact"
      aria-labelledby="ct-h"
      className="pt-[clamp(120px,12vw,200px)]"
    >
      <div className="border-t border-ink pt-3 text-[13px] text-sub">
        <span>(04) Contact</span>
      </div>
      <h2
        id="ct-h"
        className="pt-[clamp(24px,3vw,40px)] text-[clamp(60px,13.5vw,220px)] font-medium leading-[0.84] tracking-[-0.07em]"
      >
        <span className="ln">
          <span>Let's make</span>
        </span>
        <span className="ln pl-[22%]">
          <span>something</span>
        </span>
        <span className="ln pl-[8%]">
          <span>cool.</span>
        </span>
      </h2>
      <div className="big pt-[clamp(32px,4vw,56px)] text-[clamp(26px,4.4vw,72px)] font-medium leading-none tracking-[-0.05em]">
        <a href={EMAIL.href}>{EMAIL.display}</a>
      </div>
      <nav
        aria-label="Social"
        className="mt-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-x-4 border-t border-rule"
      >
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} className="lk flex justify-between border-b border-rule py-3.5">
            <span>{s.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default ContactSection;
