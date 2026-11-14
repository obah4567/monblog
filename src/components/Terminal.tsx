import { useEffect, useState, useRef } from 'react'

interface TerminalLine {
  text: string
  type: 'command' | 'status' | 'value' | 'prompt' | 'text' | 'blank'
  delay: number
}

const LINES: TerminalLine[] = [
  { text: '', type: 'blank', delay: 200 },
  { text: '$ system.boot()', type: 'command', delay: 100 },
  { text: 'initialisation des modules...', type: 'text', delay: 400 },
  { text: '[████████████████████] 100%', type: 'status', delay: 800 },
  { text: '', type: 'blank', delay: 200 },
  { text: 'identité: Développeur Logiciel', type: 'value', delay: 300 },
  { text: 'localisation: France', type: 'value', delay: 200 },
  { text: 'domaines: [web, architecture, ia]', type: 'value', delay: 200 },
  { text: 'compilateur_ts: en ligne', type: 'value', delay: 200 },
  { text: '', type: 'blank', delay: 300 },
  { text: 'établissement de la connexion...', type: 'text', delay: 400 },
  { text: 'connexion établie ✓', type: 'status', delay: 500 },
  { text: '', type: 'blank', delay: 200 },
]

function getColor(type: TerminalLine['type']): string {
  switch (type) {
    case 'command': return '#8FA9E8'
    case 'status': return '#7AC894'
    case 'value': return '#E8C97A'
    case 'prompt': return '#E87A7A'
    case 'text': return '#C0C4CC'
    case 'blank': return 'transparent'
    default: return '#C0C4CC'
  }
}

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCursor, setShowCursor] = useState(true)
  const hasAnimated = useRef(false)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    if (prefersReducedMotion.current) {
      setVisibleLines(LINES.length)
      return
    }

    let total = 0
    LINES.forEach((line, index) => {
      total += line.delay
      const t = setTimeout(() => {
        setVisibleLines(index + 1)
      }, total)
      return t
    })
  }, [])

  useEffect(() => {
    if (prefersReducedMotion.current) return
    const id = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(id)
  }, [])

  const displayed = prefersReducedMotion.current ? LINES : LINES.slice(0, visibleLines)

  return (
    <div
      role="presentation"
      aria-hidden="true"
      style={{
        background: '#17191D',
        border: '1px solid #2A2C35',
        borderRadius: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        lineHeight: 1.6,
        overflow: 'hidden',
        maxWidth: '480px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          background: '#1E2024',
          borderBottom: '1px solid #2A2C35',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: '#5A5D65',
          }}
        >
          bash — portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: '1.25rem 1.25rem 1.5rem',
          minHeight: '240px',
        }}
      >
        {displayed.map((line, i) => (
          <div key={i} style={{ color: getColor(line.type), minHeight: '1.6em' }}>
            {line.text}
          </div>
        ))}

        {/* Prompt with cursor */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginTop: '0.25rem' }}>
          <span style={{ color: '#E87A7A' }}>root</span>
          <span style={{ color: '#5A5D65' }}>@</span>
          <span style={{ color: '#7AC894' }}>yourname-dev</span>
          <span style={{ color: '#5A5D65' }}>:~# </span>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '15px',
              background: '#8FA9E8',
              opacity: showCursor ? 1 : 0,
              transition: prefersReducedMotion.current ? 'none' : 'opacity 0.1s ease',
              marginLeft: '1px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
