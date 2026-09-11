import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    num: '01',
    name: 'Flutter Mobile App',
    category: 'Academic & Personal',
    col1img1: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    col2img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80',
  },
  {
    num: '02',
    name: 'Web Development Project',
    category: 'Academic & Personal',
    col1img1: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    col2img: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
  },
];

const totalCards = projects.length;

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const borderRadius = 'clamp(40px, 5vw, 60px)';

  return (
    <div ref={containerRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{
          scale,
          borderRadius,
          border: '2px solid #D7E2EA',
          background: '#0C0C0C',
          height: '100%',
          transformOrigin: 'top center',
          willChange: 'transform',
        }}
        className="p-4 sm:p-6 md:p-8 overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)', color: '#D7E2EA' }}
            >
              {project.num}
            </span>
            <div>
              <p
                className="font-light uppercase tracking-widest"
                style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.65rem, 1vw, 0.9rem)' }}
              >
                {project.category}
              </p>
              <p
                className="font-medium uppercase"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
              >
                {project.name}
              </p>
            </div>
          </div>
          <button
            className="rounded-full px-6 py-2 sm:px-8 sm:py-3 font-medium uppercase tracking-widest text-sm sm:text-base transition-colors hover:bg-[#D7E2EA]/10"
            style={{
              border: '2px solid #D7E2EA',
              color: '#D7E2EA',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'Kanit, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            Live Project
          </button>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4" style={{ height: 'calc(100% - 5rem)' }}>
          {/* Left column 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1img1}
              alt=""
              className="object-cover w-full"
              style={{
                borderRadius,
                height: 'clamp(130px, 16vw, 230px)',
                flex: '0 0 auto',
              }}
            />
            <img
              src={project.col1img2}
              alt=""
              className="object-cover w-full flex-1"
              style={{
                borderRadius,
                minHeight: 'clamp(160px, 22vw, 340px)',
              }}
            />
          </div>

          {/* Right column 60% */}
          <div style={{ width: '60%' }}>
            <img
              src={project.col2img}
              alt=""
              className="object-cover w-full h-full"
              style={{ borderRadius }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-0">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
