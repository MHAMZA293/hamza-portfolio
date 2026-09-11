import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { skills } from '../data/skills'

// If your skills data doesn't have an `image` field yet, add one:
//   { number: '01', name: 'Web Design', description: '...', image: '/images/skills/web-design.jpg' }
// Until then this falls back to a seeded placeholder per skill number.

const AUTOPLAY_MS = 3000

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = skills.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total)
  }, [total])

  const handleNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const handlePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, total, activeIndex])

  const activeSkill = skills[activeIndex] as (typeof skills)[number] & { image?: string }
  const imageSrc =
    activeSkill.image ?? `https://picsum.photos/seed/skill-${activeSkill.number}/900/700`

  return (
    <section
      id="skills"
      className="relative rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <style>
        {`
          @keyframes skillProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: tab list */}
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
          <h2
            className="mb-12 font-black uppercase text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 150px)' }}
          >
            Skills
          </h2>

          <div className="flex flex-col">
            {skills.map((skill, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={skill.number}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                  className={`group relative flex items-start gap-4 border-t border-[#0C0C0C]/10 py-6 text-left transition-colors duration-300 first:border-0 md:py-8 ${
                    isActive ? 'text-[#0C0C0C]' : 'text-[#0C0C0C]/40 hover:text-[#0C0C0C]/70'
                  }`}
                >
                  {/* Progress rail */}
                  <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-[#0C0C0C]/10 md:-left-6">
                    {isActive && (
                      <div
                        key={`${activeIndex}-${isPaused}`}
                        className="absolute left-0 top-0 w-full bg-[#0C0C0C]"
                        style={{
                          height: isPaused ? undefined : '100%',
                          animation: isPaused
                            ? 'none'
                            : `skillProgress ${AUTOPLAY_MS / 1000}s linear forwards`,
                          // animate height via transform for a vertical rail
                          transform: 'scaleY(1)',
                          transformOrigin: 'top',
                          width: '100%',
                        }}
                      />
                    )}
                  </div>

                  <span className="mt-1 font-black text-[#0C0C0C]/30" style={{ fontSize: '0.75rem' }}>
                    /{skill.number}
                  </span>

                  <div className="flex flex-1 flex-col gap-2">
                    <span
                      className="font-black uppercase tracking-tight transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
                    >
                      {skill.name}
                    </span>

                    <div
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{
                        maxHeight: isActive ? '200px' : '0px',
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="max-w-sm pb-2 font-light leading-relaxed text-[#0C0C0C]/60">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: photo */}
        <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
          <div
            className="group relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-[#0C0C0C]/10 bg-[#0C0C0C]/5 md:rounded-[2.5rem]">
              <img
                key={activeSkill.number}
                src={imageSrc}
                alt={activeSkill.name}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

              <div className="absolute bottom-5 right-5 flex gap-2 md:bottom-8 md:right-8">
                <button
                  onClick={handlePrev}
                  aria-label="Previous skill"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:h-12 md:w-12"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next skill"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:h-12 md:w-12"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}