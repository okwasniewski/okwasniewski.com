import Link from "next/link";
import { Post } from "@/lib/getAllPosts";

interface WritingProps {
  posts: Post[];
}

const Writing = ({ posts }: WritingProps) => (
  <section className="mb-16">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
      Writing
    </h2>
    <ul className="space-y-3">
      {posts.map(({ slug, meta }) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`} className="group block">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-gray-900 dark:text-gray-100 underline underline-offset-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
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
    <Link
      href="/blog"
      className="inline-block mt-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm"
    >
      All posts →
    </Link>
  </section>
);

export default Writing;
