"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react"

import { projects, type Project } from "../data/projects"

interface ProjectsSectionProps {
  autoplay?: boolean
  autoplayDelay?: number
}

export default function ProjectsSection({
  autoplay = true,
  autoplayDelay = 5000,
}: ProjectsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [isHovered, setIsHovered] = useState(false)

  const touchStartX = useRef(0)

  const categories = [
    "ALL",
    "MACHINE LEARNING",
    "APPLICATION DEVELOPMENT",
    "WEB DEVELOPMENT",
  ]

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toUpperCase() === selectedCategory
        )

  const total = filteredProjects.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (total === 0) return 0
      return (prev + 1) % total
    })
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (total === 0) return 0
      return (prev - 1 + total) % total
    })
  }, [total])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  /*
   * Reset carousel when category changes
   */
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory])

  /*
   * Autoplay
   */
  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [autoplay, autoplayDelay, isHovered, nextSlide, total])

  /*
   * Keyboard navigation
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      }

      if (event.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  /*
   * Touch support
   */
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    const difference =
      event.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(difference) > 45) {
      if (difference < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  if (total === 0) {
    return null
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0C] px-4 py-24 text-white sm:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,226,234,0.05),transparent_55%)]" />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#D7E2EA]/50">
            Selected Work
          </p>

          <h2
            className="font-black uppercase leading-none text-[#D7E2EA]"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
            }}
          >
            PROJECTS
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#D7E2EA]/60 sm:text-base">
            A collection of my machine learning, application development,
            and software projects.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-14 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  rounded-full border px-5 py-2.5
                  text-[11px] font-bold uppercase tracking-wider
                  transition-all duration-300
                  ${
                    active
                      ? "border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]"
                      : "border-[#D7E2EA]/20 bg-[#141414] text-[#D7E2EA]/60 hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA]"
                  }
                `}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Coverflow */}
        <div
          className="relative flex h-[650px] items-center justify-center"
          style={{
            perspective: "1400px",
          }}
        >
          {filteredProjects.map((project, index) => {
            const offset =
              (index - currentIndex + total) % total

            let transform =
              "translateX(0px) scale(0.45) rotateY(0deg)"

            let opacity = 0
            let zIndex = 0
            let brightness = "brightness(0.4)"

            const isCenter = offset === 0

            /*
             * Center
             */
            if (offset === 0) {
              transform =
                "translateX(0px) scale(1) rotateY(0deg)"

              opacity = 1
              zIndex = 30
              brightness = "brightness(1)"
            }

            /*
             * Right card
             */
            else if (offset === 1) {
              transform =
                "translateX(300px) scale(0.84) rotateY(-25deg)"

              opacity = 0.65
              zIndex = 20
              brightness = "brightness(0.65)"
            }

            /*
             * Far right card
             */
            else if (offset === 2) {
              transform =
                "translateX(530px) scale(0.68) rotateY(-38deg)"

              opacity = 0.35
              zIndex = 10
              brightness = "brightness(0.45)"
            }

            /*
             * Left card
             */
            else if (offset === total - 1) {
              transform =
                "translateX(-300px) scale(0.84) rotateY(25deg)"

              opacity = 0.65
              zIndex = 20
              brightness = "brightness(0.65)"
            }

            /*
             * Far left card
             */
            else if (offset === total - 2) {
              transform =
                "translateX(-530px) scale(0.68) rotateY(38deg)"

              opacity = 0.35
              zIndex = 10
              brightness = "brightness(0.45)"
            }

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isCenter) {
                    goToSlide(index)
                  }
                }}
                className="absolute h-[540px] w-[340px] overflow-hidden rounded-[28px] border border-[#D7E2EA]/15 bg-[#111] shadow-2xl"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  filter: brightness,
                  transformOrigin: "center center",
                  transition:
                    "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                {/* Project screenshot */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/95" />

                {/* Project content */}
                <div
                  className={`
                    relative z-10 flex h-full flex-col justify-between
                    p-6 text-center
                    transition-all duration-500
                    ${
                      isCenter
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-5 opacity-0"
                    }
                  `}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.tag}
                    </span>

                    <span className="text-5xl font-black text-white/20">
                      {project.number}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-black uppercase leading-tight tracking-wide text-white">
                      {project.name}
                    </h3>

                    <div className="my-4 h-[2px] w-10 bg-[#D7E2EA]" />

                    <p className="mb-5 max-w-[280px] text-xs leading-5 text-white/75">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 flex max-h-[70px] flex-wrap justify-center gap-1.5 overflow-hidden">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wide text-white/70 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        className="flex items-center gap-2 rounded-full bg-[#D7E2EA] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#0C0C0C] transition-all hover:scale-105"
                      >
                        View
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute left-1 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white hover:text-black sm:left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-1 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white hover:text-black sm:right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination */}
        <div className="mt-2 flex justify-center gap-2">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-[#D7E2EA]"
                    : "w-2 bg-[#D7E2EA]/25 hover:bg-[#D7E2EA]/50"
                }
              `}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/40">
          <span>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-[#D7E2EA]/20" />

          <span>
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom note */}
        <div className="mt-14 flex items-center justify-center gap-2 text-center text-xs text-[#D7E2EA]/30">
          <ExternalLink className="h-3.5 w-3.5" />
          <span>
            Click a project to explore it on GitHub
          </span>
        </div>
      </div>
    </section>
  )
}