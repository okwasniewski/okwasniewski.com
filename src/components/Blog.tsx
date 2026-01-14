import Link from "next/link";
import { Post } from "@/lib/getAllPosts";

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => (
  <>
    <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
      Blog
    </h1>
    <ul className="space-y-3">
      {posts.map(({ slug, meta }) => (
        <li key={slug}>
          <Link
            href={`/blog/${slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
          >
            <span className="text-gray-900 dark:text-gray-100 underline underline-offset-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              {meta.title}
            </span>
            <span className="text-gray-500 dark:text-gray-500 text-sm">
              {meta.subtitle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Blog;
