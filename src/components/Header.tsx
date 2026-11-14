import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggle: () => void
}

const NAV_ITEMS = [
  { label: 'À propos', href: '/about' },
  { label: 'Articles', href: '/writing' },
  { label: 'Projets', href: '/projects' },
  { label: 'Outils', href: '/uses' },
]

export function Header({ theme, toggle }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgAlpha = theme === 'dark' ? 'rgba(15,16,18,0.88)' : 'rgba(247,247,245,0.88)'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: bgAlpha,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-wide)',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: 'var(--header-h)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Accueil"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            flexShrink: 0,
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            obah4567
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'var(--accent)',
              letterSpacing: '0',
              lineHeight: 1,
            }}
          >
            .dev
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav
          aria-label="Navigation principale"
          className="header-desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            marginLeft: 'auto',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-sm)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                padding: '5px 11px',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.12s ease',
              })}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: '11px',
                        right: '11px',
                        height: '1px',
                        background: 'var(--accent)',
                        display: 'block',
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <div
            style={{
              marginLeft: '0.75rem',
              paddingLeft: '0.75rem',
              borderLeft: '1px solid var(--border)',
            }}
          >
            <ThemeToggle theme={theme} toggle={toggle} />
          </div>
        </nav>

        {/* Mobile controls */}
        <div
          className="header-mobile-controls"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-secondary)',
              padding: '5px 7px',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 0,
              transition: 'color 0.12s ease, border-color 0.12s ease',
            }}
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Navigation mobile"
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: bgAlpha,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div style={{ padding: '0.5rem 1.5rem 1rem' }}>
            {NAV_ITEMS.map((item, i) => (
              <NavLink
                key={item.href}
                to={item.href}
                style={({ isActive }) => ({
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-base)',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  padding: '0.625rem 0',
                  textDecoration: 'none',
                  borderBottom: i < NAV_ITEMS.length - 1 ? '1px solid var(--border)' : 'none',
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}

      <style>{`
        @media (min-width: 600px) {
          .header-desktop-nav { display: flex !important; }
          .header-mobile-controls { display: none !important; }
        }
        @media (max-width: 599px) {
          .header-desktop-nav { display: none !important; }
          .header-mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
