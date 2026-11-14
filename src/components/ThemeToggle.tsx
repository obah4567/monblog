import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggle: () => void
}

export function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  return (
    <>
      <button
        onClick={toggle}
        className="theme-toggle"
        aria-label={theme === 'light' ? 'Passer en thème sombre' : 'Passer en thème clair'}
      >
        {theme === 'light' ? <Moon size={14} strokeWidth={1.75} /> : <Sun size={14} strokeWidth={1.75} />}
      </button>
      <style>{`
        .theme-toggle {
          background: none;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          color: var(--text-secondary);
          padding: 5px 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          transition: color 0.12s ease, border-color 0.12s ease;
        }
        .theme-toggle:hover {
          color: var(--text-primary);
          border-color: var(--border-strong);
        }
      `}</style>
    </>
  )
}
