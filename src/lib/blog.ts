import type { BlogPost } from '@/types'

const WORDS_PER_MINUTE = 200

export function estimateReadingTime(content: string): string {
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((p) => !p.draft)
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter((p) => p.tags.includes(tag))
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tagSet = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)))
  return Array.from(tagSet).sort()
}
