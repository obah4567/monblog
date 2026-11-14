import { useState } from 'react'
import { ArticleCard } from '@/components/ArticleCard'
import { blogPosts } from '@/content/blog/index'
import { sortByDate, getPublishedPosts, getAllTags } from '@/lib/blog'

const publishedPosts = sortByDate(getPublishedPosts(blogPosts))
const allTags = getAllTags(publishedPosts)

export function Writing() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? publishedPosts.filter((p) => p.tags.includes(activeTag))
    : publishedPosts

  return (
    <div
      style={{
        maxWidth: 'var(--max-wide)',
        margin: '0 auto',
        padding: '3.5rem 1.5rem 5rem',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
        <span className="eyebrow">Articles</span>
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
          Articles et notes
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
          Écrits sur le génie logiciel, l'architecture, TypeScript, les outils
          développeur, et l'art de construire des logiciels qui durent.
        </p>
      </div>

      {/* Tag filter */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          marginBottom: '2.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <button
          onClick={() => setActiveTag(null)}
          className={`filter-btn${activeTag === null ? ' filter-btn--active' : ''}`}
        >
          Tous
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`filter-btn${activeTag === tag ? ' filter-btn--active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div style={{ maxWidth: 'var(--max-content)' }}>
        {filtered.length === 0 ? (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.02em',
            }}
          >
            Aucun article pour ce tag.
          </p>
        ) : (
          filtered.map((post) => <ArticleCard key={post.slug} post={post} />)
        )}
      </div>

      <style>{`
        .filter-btn {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          padding: 3px 10px;
          border-radius: 2px;
          border: 1px solid var(--border);
          cursor: pointer;
          background: transparent;
          color: var(--text-tertiary);
          letter-spacing: 0.03em;
          transition: color 0.12s ease, border-color 0.12s ease, background 0.12s ease;
        }
        .filter-btn:hover {
          color: var(--text-secondary);
          border-color: var(--border-strong);
        }
        .filter-btn--active {
          background: var(--text-primary);
          color: var(--bg);
          border-color: var(--text-primary);
        }
        .filter-btn--active:hover {
          color: var(--bg);
          opacity: 0.85;
        }
      `}</style>
    </div>
  )
}
