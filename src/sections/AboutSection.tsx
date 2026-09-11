import { Code2, TerminalSquare, GitBranch, Database } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const ABOUT_TEXT =
  "Motivated Computer Science student with a strong academic record and hands-on skills in programming, web and app development, and problem solving, seeking internships or entry level roles to apply technical abilities in real world projects and continue learning modern technologies."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] w-[120px] text-[#D7E2EA]/25 sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <Code2 className="h-full w-full" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] w-[100px] text-[#D7E2EA]/25 sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <Database className="h-full w-full" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] w-[120px] text-[#D7E2EA]/25 sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <TerminalSquare className="h-full w-full" strokeWidth={1} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] w-[130px] text-[#D7E2EA]/25 sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <GitBranch className="h-full w-full" strokeWidth={1} />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
