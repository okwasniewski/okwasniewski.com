import fs from "fs";
import { join } from "path";

export interface Badge {
  text: string;
  color: "blue" | "green" | "orange";
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

type Directories = "blog" | "portfolio" | "apps";

interface Options {
  directory: Directories;
  limit?: number;
}

const getDirectory = (dir: string) => join(process.cwd(), `content/${dir}`);

export function getPostSlugs(options: Options): string[] {
  const dir = getDirectory(options.directory);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((item) => item.endsWith(".mdx"))
    .slice(0, options.limit === -1 ? undefined : options.limit);
}

function extractMeta(content: string): PostMeta {
  // Match the meta object - look for closing };
  const metaMatch = content.match(/export const meta = (\{[\s\S]*?\n\});/);
  if (!metaMatch) return {};

  try {
    const metaString = metaMatch[1]
      .replace(/'/g, '"')
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]")
      .replace(/(\w+):/g, '"$1":');

    return JSON.parse(metaString);
  } catch {
    const meta: PostMeta = {};

    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    if (titleMatch) meta.title = titleMatch[1];

    const subtitleMatch = content.match(/subtitle:\s*['"]([^'"]+)['"]/);
    if (subtitleMatch) meta.subtitle = subtitleMatch[1];

    const dateMatch = content.match(/date:\s*['"]([^'"]+)['"]/);
    if (dateMatch) meta.date = dateMatch[1];

    const imageMatch = content.match(/featuredImage:\s*['"]([^'"]+)['"]/);
    if (imageMatch) meta.featuredImage = imageMatch[1];

    return meta;
  }
}

export async function getPosts(options: Options): Promise<Post[]> {
  const slugs = getPostSlugs(options);
  const posts = slugs.map((slug) => {
    const filePath = join(getDirectory(options.directory), slug);
    const content = fs.readFileSync(filePath, "utf-8");
    const meta = extractMeta(content);
    return { slug: slug.replace(".mdx", ""), meta };
  });

  return posts;
}

export async function getPostBySlug(
  directory: Directories,
  slug: string,
): Promise<{ meta: PostMeta; default: React.ComponentType }> {
  const filePath = join(getDirectory(directory), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const meta = extractMeta(content);

  const { default: Content } = await import(
    `../../content/${directory}/${slug}.mdx`
  );

  return { meta, default: Content };
}
