import Link from "next/link";
import { Post } from "@/lib/getAllPosts";
import { PostCard } from "./post-card";

interface WritingProps {
  posts: Post[];
}

const Writing = ({ posts }: WritingProps) => (
  <section className="mb-16">
    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
      Writing
    </h2>
    <div>
      {posts.map(({ slug, meta }) => (
        <PostCard key={slug} meta={meta} href={`/blog/${slug}`} compact />
      ))}
    </div>
    <Link
      href="/blog"
      className="inline-block mt-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm"
    >
      All posts →
    </Link>
  </section>
);

export default Writing;
