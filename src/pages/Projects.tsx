import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export function Projects() {
  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
        <span className="eyebrow">Projets</span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}
        >
          Projets sélectionnés
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-base)',
            lineHeight: 1.65,
            fontWeight: 300,
            letterSpacing: '-0.005em',
          }}
        >
          Une sélection de projets que j'ai construits ou auxquels j'ai contribué —
          des outils open-source aux systèmes de production.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="featured" />
        ))}
      </div>
    </div>
  )
}
