import { useState, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  children: string
  className?: string
  language?: string
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const lang = language ?? className?.replace('language-', '') ?? 'text'

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }, [children])

  return (
    <div
      style={{
        position: 'relative',
        margin: '1.5rem 0',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        background: 'var(--surface)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 12px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            textTransform: 'lowercase',
            letterSpacing: '0.03em',
          }}
        >
          {lang}
        </span>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Copié !' : 'Copier le code'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: copied ? 'var(--accent)' : 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            padding: '2px 0',
            transition: 'color 0.15s ease',
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <div
        style={{
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <pre
          style={{
            margin: 0,
            padding: '1rem 1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.84375rem',
            lineHeight: 1.65,
            color: 'var(--text-primary)',
            whiteSpace: 'pre',
          }}
        >
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}
