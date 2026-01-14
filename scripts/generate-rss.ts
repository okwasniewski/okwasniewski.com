import fs from "fs";
import { join } from "path";
import RSS from "rss";

interface PostMeta {
  title?: string;
  subtitle?: string;
  date?: string;
}

interface Post {
  slug: string;
  meta: PostMeta;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oskarkwasniewski.dev";

function extractMeta(content: string): PostMeta {
  const meta: PostMeta = {};

  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) meta.title = titleMatch[1];

  const subtitleMatch = content.match(/subtitle:\s*['"]([^'"]+)['"]/);
  if (subtitleMatch) meta.subtitle = subtitleMatch[1];

  const dateMatch = content.match(/date:\s*['"]([^'"]+)['"]/);
  if (dateMatch) meta.date = dateMatch[1];

  return meta;
}

function getPosts(): Post[] {
  const dir = join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const content = fs.readFileSync(join(dir, file), "utf-8");
    const meta = extractMeta(content);
    return { slug: file.replace(".mdx", ""), meta };
  });

  return posts.sort(
    (a, b) =>
      Number(new Date(b.meta.date || 0)) - Number(new Date(a.meta.date || 0)),
  );
}

function generateRssFeed() {
  const posts = getPosts();

  const feedOptions: RSS.FeedOptions = {
    title: "Blog oskarkwasniewski.dev",
    description: "Welcome to this blog about Mobile development and more",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/preview_image.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  posts.forEach((post) => {
    feed.item({
      title: post.meta.title || "",
      description: post.meta.subtitle || "",
      url: `${SITE_URL}/blog/${post.slug}`,
      date: post.meta.date || new Date().toISOString(),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
  console.log("✓ RSS feed generated at public/rss.xml");
}

generateRssFeed();
