import { lazy, Suspense } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/content/blog/index'
import { formatDate } from '@/lib/blog'

const mdxModules: Record<string, ReturnType<typeof lazy>> = {
  'building-a-design-system': lazy(() =>
    import('@/content/blog/building-a-design-system.mdx').then((m) => ({
      default: m.default,
    }))
  ),
  'typescript-performance-patterns': lazy(() =>
    import('@/content/blog/typescript-performance-patterns.mdx').then((m) => ({
      default: m.default,
    }))
  ),
}

export function Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!slug || !post) {
    return <Navigate to="/writing" replace />
  }

  const MDXContent = mdxModules[slug]

  if (!MDXContent) {
    return <Navigate to="/writing" replace />
  }

  return (
    <div>
      <Link
        to="/writing"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          marginBottom: '2rem',
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
      >
        <ArrowLeft size={13} /> Articles
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-secondary)',
            }}
          >
            {formatDate(post.date)}
          </span>
          {post.readingTime && (
            <>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {post.readingTime}
              </span>
            </>
          )}
          {post.category && (
            <>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {post.category}
              </span>
            </>
          )}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.0625rem',
            lineHeight: 1.65,
            maxWidth: '580px',
          }}
        >
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginTop: '1rem' }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  padding: '1px 6px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      <div className="prose">
        <Suspense
          fallback={
            <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
              Chargement de l'article...
            </div>
          }
        >
          <MDXContent />
        </Suspense>
      </div>
    </div>
  )
}
