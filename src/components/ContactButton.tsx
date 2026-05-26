export default function ContactButton() {
  return (
    <a
      href="mailto:itxhamzakhan45@gmail.com"
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        fontFamily: 'Kanit, sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
      }}
      className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
    >
      Contact Me
    </a>
  );
}
