import { WORK_ENTRIES } from './data';

const WorkSection = () => (
  <section id="work" aria-labelledby="wk-h" className="pt-[clamp(96px,10vw,160px)]">
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink pb-3">
      <h2
        id="wk-h"
        data-reveal
        className="text-[clamp(40px,6.4vw,104px)] font-medium leading-[0.9] tracking-[-0.06em]"
      >
        <span className="align-top text-[0.3em] tracking-normal text-sub">(01)</span> Work
        <br />
        Experience
      </h2>
      <p className="max-w-[300px] text-[13px] leading-[1.45] text-sub">
        Roles, in reverse order. Open a row for the detail.
      </p>
    </div>
    {WORK_ENTRIES.map((w) => (
      <details key={`${w.company}-${w.dates}`} className="wk">
        <summary>
          <span className="dt text-[13px] text-sub">{w.dates}</span>
          <span className="text-[clamp(22px,2.4vw,36px)] font-medium tracking-[-0.04em]">
            <span className="co">{w.company}</span>
          </span>
          <span className="rl text-[14px]">{w.role}</span>
          <span className="pl" aria-hidden="true">+</span>
        </summary>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6 pb-7 text-[14px] leading-[1.5]">
          <p className="text-sub">{w.stack}</p>
          <p>{w.summary}</p>
          {w.link ? (
            <a href={w.link.href} className="lk">{w.link.label}</a>
          ) : (
            <span />
          )}
        </div>
      </details>
    ))}
  </section>
);

export default WorkSection;
