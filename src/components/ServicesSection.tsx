import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'Flutter Mobile Apps',
    desc: 'Developed mobile applications using Flutter and Dart, focusing on clean UI and responsive layouts. Integrated Firebase for authentication and data storage.',
  },
  {
    num: '02',
    name: 'Web Development',
    desc: 'Built responsive websites using HTML, CSS, and JavaScript. Used Git and GitHub for version control and collaborative development.',
  },
  {
    num: '03',
    name: 'Programming',
    desc: 'Proficient in C, C++, Python, and Dart. Strong debugging and problem-solving abilities with experience in data structures and algorithms.',
  },
  {
    num: '04',
    name: 'Databases & Backend',
    desc: 'Experienced with Firebase and MySQL for backend data management. Comfortable designing and querying relational databases.',
  },
  {
    num: '05',
    name: 'Tools & Productivity',
    desc: 'Skilled with Visual Studio Code, Git, GitHub, and Microsoft Office (Word, Excel, PowerPoint, Access). Focused on clean documentation and efficient workflows.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)', marginBottom: 'clamp(4rem, 7vw, 7rem)' }}
        >
          Services &amp; Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col justify-center pt-2">
                <p
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {s.name}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
