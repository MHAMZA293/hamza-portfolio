import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'itxhamzakhan45@gmail.com',
    href: 'mailto:itxhamzakhan45@gmail.com',
  },
  {
    icon: Phone,
    label: '+92 371 0966884',
    href: 'tel:+923710966884',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/hamza-khan-9b2841364',
    href: 'https://linkedin.com/in/hamza-khan-9b2841364',
  },
  {
    icon: Github,
    label: 'mhamza293.github.io/portfolio',
    href: 'https://mhamza293.github.io/portfolio',
  },
]

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[40px] border-2 border-[#D7E2EA]/30 px-6 py-14 text-center sm:rounded-[50px] sm:px-12 sm:py-16 md:rounded-[60px] md:py-20">
        <FadeIn delay={0}>
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D7E2EA] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#D7E2EA]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">
              Available for projects
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="w-full">
          <div
            className="group relative mx-auto flex w-fit cursor-pointer flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 sm:-left-14 sm:block">
              <div
                className="h-px bg-[#D7E2EA] transition-all duration-500"
                style={{
                  width: isHovered ? '3rem' : '2rem',
                  opacity: isHovered ? 1 : 0.4,
                }}
              />
            </div>
            <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 sm:-right-14 sm:block">
              <div
                className="h-px bg-[#D7E2EA] transition-all duration-500"
                style={{
                  width: isHovered ? '3rem' : '2rem',
                  opacity: isHovered ? 1 : 0.4,
                }}
              />
            </div>

            <h2
              className="hero-heading select-none font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: isHovered ? 'translateY(-6%)' : 'translateY(0)' }}
                >
                  Let&apos;s talk
                </span>
              </span>
            </h2>

            <div className="relative mt-5 flex size-14 items-center justify-center sm:size-16">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border border-[#D7E2EA]/30 transition-all duration-500"
                style={{
                  backgroundColor: isHovered ? '#D7E2EA' : 'transparent',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  borderColor: isHovered ? '#D7E2EA' : 'rgba(215, 226, 234, 0.3)',
                }}
              />
              <ArrowUpRight
                className="size-5 transition-all duration-500 sm:size-6"
                style={{
                  color: isHovered ? '#0C0C0C' : '#D7E2EA',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              />
            </div>
          </div>
        </FadeIn>

        <div
          className="grid w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            gridTemplateRows: isOpen ? '1fr' : '0fr',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <div className="flex w-full flex-col items-center gap-10 pt-4">
              <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-wide text-[#D7E2EA]/60">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Mardan, Pakistan
              </p>

              <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon
                  const isExternal = item.href.startsWith('http')
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="flex items-center gap-2 text-sm text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>

              <ContactButton />
            </div>
          </div>
        </div>
      </div>

      <p className="pt-10 text-center text-xs uppercase tracking-widest text-[#D7E2EA]/30">
        &copy; {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
      </p>
    </footer>
  )
}