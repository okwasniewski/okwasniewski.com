import fs from "fs";
import { join } from "path";

interface Badge {
  badgeText: string;
  badgeColor: "blue" | "green";
}
interface PostMeta {
  title: string;
  subtitle: string;
  featuredImage: string;
  order: number;
  badges: Badge[];
}

interface Posts {
  slug: string;
  meta: PostMeta;
}

type Directories = "blog" | "portfolio";

interface Options {
  directory: Directories;
  limit?: number;
}

const getDirectory = (dir: string) => join(process.cwd(), `src/pages/${dir}`);

export function getPostSlugs(options: Options): string[] {
  return fs
    .readdirSync(getDirectory(options.directory))
    .filter((item) => item.endsWith(".mdx"))
    .slice(0, options.limit == -1 ? undefined : options.limit)
    .map((item) => item.replace(/\.mdx$/, ""));
}

export async function getPosts(options: Options): Promise<Posts[]> {
  const slugs = getPostSlugs(options);
  const posts = await Promise.all(
    slugs.map(async (slug: string) => {
      const realSlug = slug.replace(/\.md$/, "");
      const { meta } =
        await require(`../pages/${options.directory}/${realSlug}.mdx`);
      return { slug, meta };
    })
  );

  return posts;
}
