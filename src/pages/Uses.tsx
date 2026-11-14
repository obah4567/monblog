interface UseItem {
  name: string
  description: string
  link?: string
}

interface UseCategory {
  title: string
  items: UseItem[]
}

const categories: UseCategory[] = [
  {
    title: 'Éditeur',
    items: [
      {
        name: 'VS Code + Visual Studio 2022',
        description: 'Pour la programmation au quotidien et les longues sessions — thème sombre, extensions performantes, police monospace.',
        link: 'https://code.visualstudio.com',
      },
    ],
  },
  {
    title: 'Développement',
    items: [
      {
        name: 'Node.js + TypeScript + React + Angular + C# / .Net8',
        description: 'Mon stack principal pour le développement web et backend.',
      },
      {
        name: 'Vite',
        description: "Outillage de build ultra-rapide. Rien ne s'en approche pour l'expérience développeur frontend.",
        link: 'https://vite.dev',
      },
      {
        name: 'Docker',
        description: 'Pour la conteneurisation des applications et les environnements reproductibles.',
      },
    ],
  },
  {
    title: 'IA Générative',
    items: [
      {
        name: 'KiloCode, Gemini, Claude Code',
        description: 'Outils IA pour l\'aide au développement et l\'apprentissage continu.',
      },
    ],
  },
]

function UseEntry({ item }: { item: UseItem }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        gap: '0 1.5rem',
        paddingBlock: '0.875rem',
        borderBottom: '1px solid var(--border)',
        alignItems: 'baseline',
      }}
      className="use-entry"
    >
      <div>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'color 0.12s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
          >
            {item.name} ↗
          </a>
        ) : (
          <span
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              color: 'var(--text-primary)',
            }}
          >
            {item.name}
          </span>
        )}
      </div>
      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
        }}
      >
        {item.description}
      </p>
      <style>{`
        @media (max-width: 540px) {
          .use-entry {
            grid-template-columns: 1fr !important;
            gap: 0.25rem 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

export function Uses() {
  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
        <span className="eyebrow">Outils</span>
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
          Outils & configuration
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
          Les outils que j'utilise pour développer, écrire et réfléchir.
        </p>
      </div>

      {categories.map((cat) => (
        <section key={cat.title} style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {cat.title}
          </h2>
          {cat.items.map((item) => (
            <UseEntry key={item.name} item={item} />
          ))}
        </section>
      ))}
    </div>
  )
}
