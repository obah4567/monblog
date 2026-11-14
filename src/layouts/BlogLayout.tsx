import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useTheme } from '@/hooks/useTheme'

export function BlogLayout() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} toggle={toggle} />
      <main
        id="main-content"
        style={{
          maxWidth: 'var(--max-content)',
          margin: '0 auto',
          padding: '3rem 1.5rem',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
