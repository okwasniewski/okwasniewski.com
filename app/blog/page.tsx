import type { Metadata } from "next";
import Blog from "@/components/Blog";
import { getPosts } from "@/lib/getAllPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "My latest posts about React Native, mobile development, and more.",
};

export default async function BlogPage() {
  const posts = await getPosts({ directory: "blog", limit: -1 });

  const sortedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.meta.date || 0)) - Number(new Date(a.meta.date || 0)),
  );

  return (
    <div className="mt-10">
      <Blog posts={sortedPosts} />
    </div>
  );
}
