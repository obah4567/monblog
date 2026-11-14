export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  category: string
  draft?: boolean
  readingTime?: string
  related?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  featured: boolean
  thumbnail?: string
  year: number
}

export interface NavItem {
  label: string
  href: string
}

export interface Theme {
  mode: 'light' | 'dark'
  toggle: () => void
}
