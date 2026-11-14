import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div
      style={{
        maxWidth: 'var(--max-content)',
        margin: '0 auto',
        padding: '6rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '4rem',
          fontWeight: 700,
          color: 'var(--border)',
          display: 'block',
          marginBottom: '1rem',
          lineHeight: 1,
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.75rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}
      >
        Page introuvable
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
        }}
      >
        <ArrowLeft size={14} /> Retour à l'accueil
      </Link>
    </div>
  )
}
