import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Terminal } from '@/components/Terminal'
import { ArticleCard } from '@/components/ArticleCard'
import { ProjectCard } from '@/components/ProjectCard'
import { blogPosts } from '@/content/blog/index'
import { getFeaturedProjects } from '@/lib/projects'
import { sortByDate, getPublishedPosts } from '@/lib/blog'

const recentPosts = sortByDate(getPublishedPosts(blogPosts)).slice(0, 3)
const featuredProjects = getFeaturedProjects()

export function Home() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-wide)',
          margin: '0 auto',
          padding: '5rem 1.5rem 5.5rem',
        }}
      >
        <div className="hero-layout">
          {/* Left — text */}
          <div className="hero-text">
            <span className="eyebrow">Project Manager et développeur Logiciel · France</span>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              J'écris pour partager ma passion
              <br />
              <span style={{ color: 'var(--accent)' }}>mais surtout pour apprendre</span>
            </h1>

            <p
              style={{
                fontSize: 'var(--text-md)',
                color: 'var(--text-secondary)',
                lineHeight: 1.72,
                maxWidth: '460px',
                marginBottom: '2.5rem',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Chef de projet et développeur Logiciel basé en France. Passionné par
              le code, le design et l'apprentissage continu. Je crois que le meilleur
              logiciel se construit avec intention, clarté et humilité.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
              <Link to="/projects" className="cta-primary">
                Mes projets
              </Link>
              <Link to="/writing" className="cta-secondary">
                Lire le blog
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                { label: 'Agile', accent: true },
                { label: 'Scrum Master', accent: true },
                { label: 'IA Générative', accent: true },
                { label: 'Full-stack', accent: true },
                { label: 'SaaS', accent: true },
                { label: 'Admin Réseau/Sec', accent: true },
              ].map((tag) => (
                <span
                  key={tag.label}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: tag.accent ? 'var(--bg)' : 'var(--text-secondary)',
                    background: tag.accent ? 'var(--accent)' : 'transparent',
                    border: tag.accent ? 'none' : '1px solid var(--border)',
                    borderRadius: '2px',
                    padding: '3px 8px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — terminal */}
          <div className="hero-terminal">
            <Terminal />
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <hr
        className="section-divider"
        style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}
      />

      {/* ── Selected work ────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-wide)',
          margin: '0 auto',
          padding: '4.5rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
          }}
        >
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Projets</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              Projets sélectionnés
            </h2>
          </div>
          <Link to="/projects" className="link-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Tous les projets <ArrowRight size={12} />
          </Link>
        </div>

        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <hr
        className="section-divider"
        style={{ maxWidth: 'var(--max-wide)', margin: '0 auto' }}
      />

      {/* ── Writing ──────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-wide)',
          margin: '0 auto',
          padding: '4.5rem 1.5rem 5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
          }}
        >
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Articles</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              Articles récents
            </h2>
          </div>
          <Link to="/writing" className="link-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Tous les articles <ArrowRight size={12} />
          </Link>
        </div>

        <div style={{ maxWidth: 'var(--max-content)' }}>
          {recentPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-text { order: 1; }
        .hero-terminal { order: 2; display: flex; justify-content: flex-start; }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--text-primary);
          color: var(--bg);
          padding: 9px 18px;
          border-radius: var(--radius-sm);
          font-size: var(--text-sm);
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: opacity 0.12s ease;
        }
        .cta-primary:hover { opacity: 0.8; color: var(--bg); }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-sm);
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          letter-spacing: -0.01em;
          gap: 0.3rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1px;
          transition: color 0.12s ease, border-color 0.12s ease;
        }
        .cta-secondary:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .link-muted {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.12s ease;
        }
        .link-muted:hover { color: var(--text-primary); }

        @media (min-width: 820px) {
          .hero-layout {
            grid-template-columns: 1.1fr 1fr;
            gap: 4rem;
          }
          .hero-terminal { justify-content: flex-end; }
        }

        @media (max-width: 819px) {
          .hero-terminal { order: -1; }
        }
      `}</style>
    </div>
  )
}
