import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-a-design-system',
    title: 'Construire un Design System de Zéro',
    date: '2024-11-05',
    description:
      'Un guide pratique pour créer un design system évolutif avec TypeScript et des tokens de design — des premiers principes à la production.',
    tags: ['design-systems', 'typescript', 'css', 'architecture'],
    category: 'Ingénierie',
    draft: false,
    readingTime: '7 min de lecture',
  },
  {
    slug: 'typescript-performance-patterns',
    title: 'Patterns de Performance TypeScript que j\'Utilise Chaque Jour',
    date: '2024-10-18',
    description:
      'Des patterns pratiques pour écrire du TypeScript à la fois type-safe et performant à l\'exécution — en se concentrant sur ce qui compte vraiment en production.',
    tags: ['typescript', 'performance', 'patterns', 'javascript'],
    category: 'TypeScript',
    draft: false,
    readingTime: '6 min de lecture',
  },
]
