import { MUSIC } from './data';
import Grain from './Grain';

const SoundArchive = () => (
  <section id="music" aria-labelledby="mu-h" className="pt-[clamp(96px,10vw,160px)]">
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink pb-3">
      <h2
        id="mu-h"
        data-reveal
        className="text-[clamp(40px,6.4vw,104px)] font-medium leading-[0.9] tracking-[-0.06em]"
      >
        <span className="align-top text-[0.3em] tracking-normal text-sub">(03)</span> Sound
        <br />
        Archive
      </h2>
      <p className="max-w-[300px] text-[13px] leading-[1.45] text-sub">
        Singles, mixes and unfinished things.
      </p>
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-[clamp(16px,2vw,28px)] pt-7">
      {MUSIC.map((m) => (
        <article key={m.n} className="flex flex-col gap-2.5">
          <div className="cv">
            <div className={`art ${m.art}`} data-l={m.n} />
            <Grain />
          </div>
          <div className="flex justify-between gap-3 border-t border-rule pt-2 text-[12px] text-sub">
            <span>
              {m.n} · {m.type}
            </span>
            <span>{m.len}</span>
          </div>
          <h3 className="text-[24px] font-medium leading-none tracking-[-0.04em]">{m.t}</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="lk">SoundCloud ↗</a>
            <a href="#" className="lk">Spotify ↗</a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SoundArchive;
