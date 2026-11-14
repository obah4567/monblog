import { ExternalLink, Code2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  variant?: 'featured' | 'list'
}

export function ProjectCard({ project, variant = 'list' }: ProjectCardProps) {
  if (variant === 'featured') {
    return (
      <article
        style={{
          borderBottom: '1px solid var(--border)',
          paddingBottom: '2rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ flex: 1, minWidth: '0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {project.year}
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
              }}
            >
              <Link
                to={`/projects/${project.id}`}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit' }}
              >
                {project.name}
              </Link>
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                marginBottom: '1rem',
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                marginBottom: '1rem',
              }}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7125rem',
                    color: 'var(--text-secondary)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    padding: '2px 8px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                <Code2 size={14} /> Code source
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                   <ExternalLink size={14} /> Démo
                </a>
              )}
              <Link
                to={`/projects/${project.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--accent)',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  marginLeft: 'auto',
                }}
              >
                Détails <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '1.5rem',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--text-secondary)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      >
        {project.year}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
        }}
      >
        <Link
          to={`/projects/${project.id}`}
          style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
        >
          {project.name}
        </Link>
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '1px 7px',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
