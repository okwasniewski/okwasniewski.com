import fs from "fs"
import { join } from "path"

interface PostMeta {
  title: string,
  subtitle: string,
  featuredImage: string,
  order: number,
  badge: {
    badgeText: string,
    badgeColor: 'blue' | 'green',
  }
}

interface Posts {
  slug: string,
  meta: PostMeta
}

const postsDirectory = join(process.cwd(), "src/pages/portfolio")

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((item) => item.endsWith('.mdx')).map((item) => item.replace(/\.mdx$/, ''))
}

export function getPosts(numberOfPosts: number): Posts[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug: string) => {
    const realSlug = slug.replace(/\.md$/, '')
    const { meta } = require(`../pages/portfolio/${realSlug}.mdx`)
    return { slug, meta };
  }).sort((post1, post2) => (post1.meta.order > post2.meta.order) ? 1 : -1).slice(0, numberOfPosts)
  
  return posts;
}