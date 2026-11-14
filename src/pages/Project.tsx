import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react'
import { getProjectById } from '@/lib/projects'

export function Project() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const paragraphs = project.longDescription
    .trim()
    .split(/\n\n+/)
    .filter(Boolean)

  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      {/* Back */}
      <Link
        to="/projects"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-tertiary)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          marginBottom: '2.5rem',
          transition: 'color 0.12s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-tertiary)' }}
      >
        <ArrowLeft size={12} strokeWidth={1.75} /> Projets
      </Link>

      {/* Header */}
      <header style={{ maxWidth: 'var(--max-content)', marginBottom: '2.5rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.04em',
            display: 'block',
            marginBottom: '0.625rem',
          }}
        >
          {project.year}
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
          }}
        >
          {project.name}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-md)',
            lineHeight: 1.65,
            fontWeight: 300,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '1.75rem',
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
                padding: '2px 8px',
                letterSpacing: '0.03em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--text-primary)',
              color: 'var(--bg)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.12s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
             <Code2 size={13} strokeWidth={1.5} /> Code source
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'border-color 0.12s ease, color 0.12s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              <ExternalLink size={13} strokeWidth={1.5} /> Démo en ligne
            </a>
          )}
        </div>
      </header>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.75rem', maxWidth: 'var(--max-content)' }} />

      {/* Body */}
      <div className="prose">
        {paragraphs.map((block, i) => {
          if (block.startsWith('## ')) {
            return (
              <h2
                key={i}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginTop: '2.75rem',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {block.slice(3)}
              </h2>
            )
          }
          return (
            <p
              key={i}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                marginBottom: '1.4rem',
                fontWeight: 300,
                letterSpacing: '-0.003em',
              }}
            >
              {block}
            </p>
          )
        })}
      </div>
    </div>
  )
}
