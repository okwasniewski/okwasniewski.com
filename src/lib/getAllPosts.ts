import fs from 'fs';
import { join } from 'path';

export interface Badge {
  text: string;
  color: 'blue' | 'green';
}
export interface PostMeta {
  title?: string;
  subtitle?: string;
  featuredImage?: string;
  date?: string;
  badges?: Badge[];
  primaryAction?: {
    text: string;
    href: string;
  };
}

export interface Post {
  slug: string;
  meta: PostMeta;
}

type Directories = 'blog' | 'portfolio';

interface Options {
  directory: Directories;
  limit?: number;
}

const getDirectory = (dir: string) => join(process.cwd(), `src/pages/${dir}`);

export function getPostSlugs(options: Options): string[] {
  return fs
    .readdirSync(getDirectory(options.directory))
    .filter((item) => item.endsWith('.mdx'))
    .slice(0, options.limit === -1 ? undefined : options.limit);
}

export async function getPosts(options: Options): Promise<Post[]> {
  const slugs = getPostSlugs(options);
  const posts = await Promise.all(
    slugs.map(async (slug: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, import/no-dynamic-require, global-require
      const { meta } = (await require(
        `../pages/${options.directory}/${slug}`,
      )) as { meta: PostMeta };
      return { slug: slug.replace('.mdx', ''), meta };
    }),
  );

  return posts;
}
