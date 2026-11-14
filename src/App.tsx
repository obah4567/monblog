import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { BlogLayout } from './layouts/BlogLayout'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Writing = lazy(() => import('./pages/Writing').then((m) => ({ default: m.Writing })))
const Article = lazy(() => import('./pages/Article').then((m) => ({ default: m.Article })))
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })))
const Project = lazy(() => import('./pages/Project').then((m) => ({ default: m.Project })))
const Uses = lazy(() => import('./pages/Uses').then((m) => ({ default: m.Uses })))
const Now = lazy(() => import('./pages/Now').then((m) => ({ default: m.Now })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function PageFallback() {
  return (
    <div
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
      }}
    >
      Loading...
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="writing" element={<Writing />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="uses" element={<Uses />} />
            <Route path="now" element={<Now />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<BlogLayout />}>
            <Route path="writing/:slug" element={<Article />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
