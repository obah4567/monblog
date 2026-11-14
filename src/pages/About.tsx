export function About() {
  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: 'var(--max-content)' }}>
        <span className="eyebrow">À propos</span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '2.75rem',
          }}
        >
          [VOTRE ACCROCHE —<br />
          une ligne, honnête, précise.]
        </h1>

        <div className="prose">
          <h2>Ce sur quoi je travaille</h2>

          <p>
            En tant que chef de projet et développeur logiciel, je travaille sur des projets full-stack
            utilisant React, AngularJs et C# .Net 8, ou encore de l'IA générative. Je suis aussi
            impliqué dans des initiatives d'architecture logicielle et de modernisation de codebases
            existantes. Les méthodologies Agile et Scrum sont au cœur de mon approche.
          </p>

          <h2>Apprentissage</h2>

          <p>
            En ce moment, je me concentre sur l'approfondissement de ma compréhension de l'architecture
            logicielle et les patterns avancés. Je suis aussi curieux par rapport à l'IA générative et
            comment l'intégrer efficacement dans les workflows de développement.
          </p>

          <h2>En dehors du travail</h2>

          <p>
            Passionné par le sport, je pratique le running régulièrement (4 fois par semaine) et j'ai
            participé deux fois au semi-marathon de Bordeaux. Je découvre aussi la natation, mais un
            peu loin du niveau de Léon Marchand 😄. Et pour finir j'adore les voyages et les nouvelles
            découvertes — j'ai parcouru l'Europe et découvert l'est américain.
          </p>

          <h2>Écriture</h2>

          <p>
            J'écris régulièrement sur mon blog, couvrant des sujets variés en conception, sur les LLMs,
            ou encore la performance. En ce moment, je travaille sur plusieurs articles en relation
            avec l'architecture et les bonnes pratiques de développement.
          </p>

          <h2>Contact</h2>

          <p>
            L'email est le meilleur moyen de me joindre :{' '}
            <a href="mailto:your@email.com">your@email.com</a>.{' '}
            Je suis aussi occasionnellement sur{' '}
            <a href="https://github.com/obah4567" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
