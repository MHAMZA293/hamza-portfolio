import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
];

// Duplicate for seamless infinite scroll
const row1 = [...skills, ...skills, ...skills];
const row2 = [...[...skills].reverse(), ...[...skills].reverse(), ...[...skills].reverse()];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.15;
      setOffset(newOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Section label */}
      <p
        className="text-center font-light uppercase tracking-[0.4em] mb-10 sm:mb-14"
        style={{ color: '#D7E2EA', opacity: 0.35, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
      >
        Skills &amp; Technologies
      </p>

      {/* Row 1 — scrolls right */}
      <div
        className="flex gap-5 mb-5"
        style={{
          willChange: 'transform',
          transform: `translateX(${offset - 100}px)`,
        }}
      >
        {row1.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 flex-shrink-0"
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              border: '1.5px solid rgba(215,226,234,0.12)',
              background: 'rgba(215,226,234,0.04)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: 48, height: 48, objectFit: 'contain' }}
            />
            <span
              className="font-medium uppercase tracking-wider"
              style={{ color: '#D7E2EA', fontSize: '0.6rem', opacity: 0.7 }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 — scrolls left */}
      <div
        className="flex gap-5"
        style={{
          willChange: 'transform',
          transform: `translateX(${-(offset - 100)}px)`,
        }}
      >
        {row2.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 flex-shrink-0"
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              border: '1.5px solid rgba(215,226,234,0.12)',
              background: 'rgba(215,226,234,0.04)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: 48, height: 48, objectFit: 'contain' }}
            />
            <span
              className="font-medium uppercase tracking-wider"
              style={{ color: '#D7E2EA', fontSize: '0.6rem', opacity: 0.7 }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
