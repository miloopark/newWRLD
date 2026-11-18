// Content from design/homepage-v1 handoff. Everything in [brackets] is a
// placeholder until Milo supplies real content — Loopy is the only real entry.

export type Category = 'Project' | 'Work' | 'Music';
export type FilterKey = 'All' | Category;
export type ArtVariant = 'art-a' | 'art-b' | 'art-c' | 'art-d';

export interface ArchiveItem {
  n: string;
  t: string;
  s: string;
  tech: string;
  cat: Category;
  yr: string;
  art: ArtVariant;
  href: string;
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { n: '01', t: 'Loopy', s: 'Social party games for iOS', tech: 'Swift · SwiftUI · Firebase', cat: 'Project', yr: '2026', art: 'art-d', href: '#work' },
  { n: '02', t: 'Boston Medical Center', s: 'Software Engineer Intern', tech: 'TypeScript · Python · SQL', cat: 'Work', yr: '2024', art: 'art-c', href: '#work' },
  { n: '03', t: '[Untitled 03]', s: 'Single', tech: '3:41 · Ableton', cat: 'Music', yr: '2026', art: 'art-a', href: '#music' },
  { n: '04', t: 'ALEA', s: 'Esports betting on Polkadot NFTs', tech: 'React · Node · MongoDB', cat: 'Project', yr: '[2024]', art: 'art-c', href: 'https://github.com/miloopark/ALEA' },
  { n: '05', t: 'Spark! Fellowship', s: 'Technical Project Manager', tech: 'React · Three.js · AWS', cat: 'Work', yr: '2024', art: 'art-b', href: '#work' },
  { n: '06', t: '[Night Mix 01]', s: '60-minute mix', tech: '58:12', cat: 'Music', yr: '2025', art: 'art-b', href: '#music' },
  { n: '07', t: 'Linear Regression Simulation', s: 'Regression behavior via simulation', tech: 'Python · NumPy · Jupyter', cat: 'Project', yr: '[2025]', art: 'art-d', href: 'https://github.com/miloopark/linear-regression-sim' },
  { n: '08', t: 'K-Means Visualizer', s: 'Interactive clustering demo', tech: 'TypeScript · React · D3', cat: 'Project', yr: '[2025]', art: 'art-b', href: 'https://github.com/miloopark/kmeans-algo' },
  { n: '09', t: 'CIDAR Lab', s: 'Software Engineer Intern', tech: 'React · Jest · Graph algorithms', cat: 'Work', yr: '2023', art: 'art-d', href: '#work' },
  { n: '10', t: '[EP Title]', s: 'Four-track EP', tech: '14:20', cat: 'Music', yr: '2025', art: 'art-a', href: '#music' },
  { n: '11', t: 'Neural Networks From Scratch', s: 'Feedforward net, visualized gradients', tech: 'Python · NumPy · Flask', cat: 'Project', yr: '[2025]', art: 'art-c', href: 'https://github.com/miloopark/Neural-Networks' },
  { n: '12', t: 'Logistic Regression Cluster Shifts', s: 'Coefficients under cluster separation', tech: 'Python · scikit-learn · Flask', cat: 'Project', yr: '[2025]', art: 'art-b', href: 'https://github.com/miloopark/Logistic-Regression-Cluster-Shifts-Analysis' },
  { n: '13', t: 'Cuepoint', s: 'DJ mix analyzer — transitions, BPM, keys, energy', tech: 'Python · TypeScript · Audio fingerprinting', cat: 'Project', yr: '2026', art: 'art-a', href: 'https://github.com/miloopark/cuepoint' },
];

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'Project', label: 'Projects' },
  { key: 'Work', label: 'Work' },
  { key: 'Music', label: 'Music' },
];

export interface MusicItem {
  n: string;
  t: string;
  type: string;
  len: string;
  art: ArtVariant;
}

export const MUSIC: MusicItem[] = [
  { n: 'M01', t: '[Untitled 03]', type: 'Single', len: '3:41', art: 'art-a' },
  { n: 'M02', t: '[Night Mix 01]', type: 'Mix', len: '58:12', art: 'art-b' },
  { n: 'M03', t: '[EP Title]', type: 'EP', len: '4 tracks', art: 'art-d' },
  { n: 'M04', t: '[Untitled 12]', type: 'Single', len: '2:58', art: 'art-c' },
];

export interface WorkEntry {
  dates: string;
  company: string;
  role: string;
  stack: string;
  summary: string;
  link?: { label: string; href: string };
}

export const WORK_ENTRIES: WorkEntry[] = [
  {
    dates: 'Aug 2025 – Present',
    company: 'Loopy',
    role: 'Founding Software Engineer',
    stack: 'Swift · SwiftUI · Firebase',
    summary: 'Designed, built and shipped Loopy solo: a consumer iOS social app with party games, conversation decks and a photo booth. Client-side AES-256-GCM encryption, ~85% smaller uploads via HEIC compression, App Check hardening, and the full App Store release pipeline.',
    link: { label: 'View project →', href: '#index' },
  },
  {
    dates: 'Jun – Jul 2024',
    company: 'Boston Medical Center',
    role: 'Software Engineer Intern',
    stack: 'TypeScript · Python · SQL',
    summary: 'Shipped an interactive analytics dashboard for opioid-simulation research and built preprocessing pipelines handling 10k+ epidemiological records a month. Calibrated a Bayesian model (Pyro NUTS) that cut forecast error ~20%.',
    link: { label: 'bmc.org ↗', href: 'https://www.bmc.org' },
  },
  {
    dates: 'Jan – May 2024',
    company: 'Spark! Fellowship',
    role: 'Technical Project Manager',
    stack: 'React · Three.js · AWS Lambda',
    summary: 'Built an AI conversational voice product end-to-end, wiring LLMs to speech-to-text and text-to-speech for low-latency spoken conversation with a 3D avatar, and ran the team as Scrum Master to an on-time MVP.',
    link: { label: 'bu.edu/spark ↗', href: 'https://www.bu.edu/spark/' },
  },
  {
    dates: 'May – Aug 2023',
    company: 'CIDAR Lab',
    role: 'Software Engineer Intern',
    stack: 'React · Jest · Graph algorithms',
    summary: 'Built a bioinformatics tool using DFS and BFS for community and pattern analysis, with a React dashboard that let non-technical researchers explore large biological datasets interactively.',
    link: { label: 'cidarlab.org ↗', href: 'http://www.cidarlab.org' },
  },
];

export const SOCIALS: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/miloopark' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/milopark/' },
  { label: 'SoundCloud', href: '#' },
  { label: 'Instagram', href: '#' },
];

export const EMAIL = { display: 'milopark3@gmail.com', href: 'mailto:milopark3@gmail.com' };
