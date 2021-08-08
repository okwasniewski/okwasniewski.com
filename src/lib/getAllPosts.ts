import fs from "fs"
import { join } from "path"

interface PostMeta {
  title: string,
  subtitle: string,
  featuredImage: string,
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

export function getPostSlugs(numberOfPosts = 20, offset = 1): string[] {
  return fs.readdirSync(postsDirectory).slice(offset, numberOfPosts).filter((item) => item.endsWith('.mdx')).map((item) => item.replace(/\.mdx$/, ''))
}

export function getPosts(numberOfPosts : number) : Posts[] {
  const slugs = getPostSlugs(numberOfPosts);
  const posts = slugs.map(( slug : string ) => {
    const realSlug = slug.replace(/\.md$/, '')
    const { meta } = require(`../pages/portfolio/${realSlug}.mdx`)
    return { slug, meta };
  })
  return posts;
}