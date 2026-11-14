import { Link } from 'react-router-dom'
import { formatDate } from '@/lib/blog'
import type { BlogPost } from '@/types'

interface ArticleCardProps {
  post: BlogPost
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className="article-card__meta">
        <time
          dateTime={post.date}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-tertiary)',
            letterSpacing: '0.02em',
          }}
        >
          {formatDate(post.date)}
        </time>
        {post.readingTime && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-tertiary)',
            }}
          >
            {post.readingTime}
          </span>
        )}
        {post.category && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--accent)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {post.category}
          </span>
        )}
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--text-xl)',
          fontWeight: 600,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}
      >
        <Link
          to={`/writing/${post.slug}`}
          className="article-card__title-link"
        >
          {post.title}
        </Link>
      </h2>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: 'var(--text-base)',
          lineHeight: 1.65,
          marginBottom: '0.875rem',
          fontWeight: 300,
          letterSpacing: '-0.005em',
        }}
      >
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <style>{`
        .article-card {
          border-bottom: 1px solid var(--border);
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        .article-card:first-child { padding-top: 0; }
        .article-card__meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.625rem;
        }
        .article-card__meta > * + *::before {
          content: '·';
          margin-right: 0.75rem;
          color: var(--border-strong);
        }
        .article-card__title-link {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.12s ease;
        }
        .article-card__title-link:hover { color: var(--accent); }
        .tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-tertiary);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 1px 6px;
          letter-spacing: 0.03em;
        }
      `}</style>
    </article>
  )
}
