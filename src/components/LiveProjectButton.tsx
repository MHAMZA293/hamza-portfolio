interface LiveProjectButtonProps {
  href?: string
  label?: string
  className?: string
}

export default function LiveProjectButton({
  href = '#',
  label = 'GitHub Repo',
  className = '',
}: LiveProjectButtonProps) {
  const isDisabled = !href || href === '#'

  return (
    <a
      href={href}
      target={isDisabled ? undefined : '_blank'}
      rel={isDisabled ? undefined : 'noopener noreferrer'}
      onClick={(e) => {
        if (isDisabled) e.preventDefault()
      }}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] ${className}`}
    >
      {label}
    </a>
  )
}