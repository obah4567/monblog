import { formatDate } from '@/lib/blog'

const LAST_UPDATED = '2024-11-11'

export function Now() {
  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: 'var(--max-content)' }}>
        <span className="eyebrow">Maintenant</span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
          }}
        >
          Ce que je fais en ce moment
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.03em',
            marginBottom: '2.75rem',
          }}
        >
          Mis à jour le {formatDate(LAST_UPDATED)}
        </p>

        <div className="prose">
          <h2>Travail</h2>
          <p>
            En tant que chef de projet et développeur logiciel, je travaille sur des projets full-stack
            utilisant React, TypeScript et Node.js. Je suis aussi impliqué dans des initiatives d'architecture
            logicielle et de modernisation de codebase existantes. Les méthodologies Agile et Scrum
            sont au cœur de mon approche.
          </p>

          <h2>Apprentissage</h2>
          <p>
            En ce moment, je me concentre sur l'approfondissement de ma compréhension de l'architecture
            logicielle et les patterns avancés. Je suis aussi curieux par rapport à l'IA générative et
            comment l'intégrer efficacement dans les workflows de développement.
          </p>

          <h2>Écriture</h2>
          <p>
            J'écris régulièrement sur mon blog, couvrant des sujets variés en génie logiciel, performance,
            et patterns TypeScript. En ce moment, je travaille sur plusieurs articles en relation avec
            l'architecture et les bonnes pratiques de développement.
          </p>

          <h2>Loisirs</h2>
          <p>
            Passionné par le sport, je pratique le running régulièrement (3 fois par semaine) et j'ai
            participé deux fois au semi-marathon de Bordeaux. Je découvre aussi la natation. Passionné
            aussi par les voyages — j'ai parcouru l'Europe et découvert l'est américain.
          </p>
        </div>
      </div>
    </div>
  )
}
