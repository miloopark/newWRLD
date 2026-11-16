import { useEffect, useState } from 'react';

const formatTime = () => {
  try {
    return (
      'EST ' +
      new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'America/New_York',
      })
    );
  } catch {
    return '';
  }
};

const Header = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime()), 20_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="nav grid grid-cols-[repeat(auto-fit,minmax(min(140px,100%),1fr))] gap-x-4 gap-y-2 py-4 text-[13px] leading-[1.3]">
      <div className="flex gap-1">
        <span>Milo Park,</span>
        <a href="#index" className="ul">Index</a>
      </div>
      <nav aria-label="Primary" className="flex flex-wrap gap-1.5">
        <a href="#work">Work</a>
        <span aria-hidden="true">/</span>
        <a href="#index">Projects</a>
        <span aria-hidden="true">/</span>
        <a href="#music">Music</a>
      </nav>
      <div className="text-sub">Portfolio Vol. 01 · 2026</div>
      <div className="flex justify-between gap-4">
        <span>{time}</span>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;
