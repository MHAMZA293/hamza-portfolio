import FadeIn from './FadeIn';

const contactDetails = [
  { label: 'Email', value: 'itxhamzakhan45@gmail.com', href: 'mailto:itxhamzakhan45@gmail.com' },
  { label: 'Phone', value: '(+92) 3710966884', href: 'tel:+923710966884' },
  { label: 'LinkedIn', value: 'linkedin.com/in/hamza-khan-9b2841364', href: 'https://linkedin.com/in/hamza-khan-9b2841364' },
  { label: 'Location', value: 'Mardan, Khyber Pakhtunkhwa, Pakistan', href: null },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        {contactDetails.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.1} y={30}>
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-7 sm:py-9"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-light uppercase tracking-widest mb-1 sm:mb-0"
                style={{ color: '#0C0C0C', opacity: 0.45, fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-medium uppercase transition-opacity hover:opacity-60"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(0.95rem, 2vw, 1.6rem)', textDecoration: 'none' }}
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(0.95rem, 2vw, 1.6rem)' }}
                >
                  {item.value}
                </span>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Footer */}
      <FadeIn delay={0.5} y={20}>
        <p
          className="text-center mt-16 font-light uppercase tracking-widest"
          style={{ color: '#0C0C0C', opacity: 0.3, fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
        >
          © 2024 Muhammad Hamza · UET Mardan · CS Student
        </p>
      </FadeIn>
    </section>
  );
}
