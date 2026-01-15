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
          <Link href={`/blog/${slug}`} className="group block overflow-hidden">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-gray-900 dark:text-gray-100 underline underline-offset-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors truncate">
                {meta.title}
              </span>
              {meta.date && (
                <span className="text-gray-400 dark:text-gray-500 text-sm shrink-0">
                  {meta.date}
                </span>
              )}
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1 truncate">
              {meta.subtitle}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Blog;
