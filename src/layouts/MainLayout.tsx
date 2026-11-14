import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useTheme } from '@/hooks/useTheme'

export function MainLayout() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header theme={theme} toggle={toggle} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
