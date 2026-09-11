import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col justify-between overflow-hidden">
      {/* Navigation */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="relative z-30 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Avatar */}
      <FadeIn
        delay={0.6}
        y={30}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      >
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Portrait"
            className="w-[260px] select-none sm:w-[320px] md:w-[400px] lg:w-[500px]"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Main Heading */}
      <div className="relative z-20 overflow-visible">
        <FadeIn delay={0.15} y={40} as="div">
          <h1
            className="hero-heading mt-6 w-full px-4 text-center font-black uppercase leading-none tracking-tight"
            style={{
              fontSize: 'clamp(3rem, 13vw, 12rem)',
            }}
          >
            Hi, I&apos;m Hamza
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Content */}
      <div className="relative z-20 flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            A computer science student driven by building clean,
            purposeful software.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}