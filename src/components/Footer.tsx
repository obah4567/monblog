import { Code2, Globe, Link, Mail } from 'lucide-react'

const SOCIAL = [
  { icon: Code2,  label: 'GitHub',   href: 'https://github.com/obah4567' },
  { icon: Globe,  label: 'Twitter',  href: 'https://twitter.com/obah4567' },
  { icon: Link,   label: 'LinkedIn', href: 'https://linkedin.com/in/obah4567' },
  { icon: Mail,   label: 'Email',    href: 'mailto:your@email.com' },
]

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-wide)',
          margin: '0 auto',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.02em',
          }}
        >
          © {new Date().getFullYear()} obah4567
        </span>

        <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="footer-social"
            >
              <Icon size={14} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer-social {
          color: var(--text-tertiary);
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: color 0.12s ease;
        }
        .footer-social:hover { color: var(--text-primary); }
      `}</style>
    </footer>
  )
}
