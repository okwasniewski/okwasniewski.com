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

  return (
    <div className="mt-10">
      <Blog posts={posts} />
    </div>
  );
}
