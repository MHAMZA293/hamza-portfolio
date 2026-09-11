"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

// ---- Icon cloud config ----

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

function renderCustomIcon(icon: SimpleIcon, theme: string) {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

// Simple Icons slugs matching your tech stack
const ICON_SLUGS = [
  "python", "numpy", "pandas", "scikitlearn", "jupyter", "tensorflow",
  "pytorch", "cplusplus", "dart", "flutter", "firebase", "react",
  "javascript", "typescript", "tailwindcss", "html5", "css3",
  "mongodb", "mysql", "nodedotjs", "flask", "supabase", "git",
  "github", "amazonaws", "visualstudiocode",
]

function IconCloud({ iconSlugs }: { iconSlugs: string[] }) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark"),
    )
  }, [data, theme])

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}

// ---- Section ----

export default function MarqueeSection() {
  return (
    <section
      id="technologies"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-4 py-16 sm:px-8"
    >
      <div className="z-10 mb-4 flex flex-col items-center gap-2 text-center">
        <h2
          className="font-black uppercase tracking-tight text-[#D7E2EA]"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          Technologies & Tools
        </h2>
        <p className="font-medium text-xs uppercase tracking-widest text-[#D7E2EA]/50">
          Drag to explore
        </p>
      </div>

      <div className="relative flex size-full max-w-2xl items-center justify-center">
        <IconCloud iconSlugs={ICON_SLUGS} />
      </div>
    </section>
  )
}