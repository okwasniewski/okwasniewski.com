import Link from "next/link";
import { Post } from "@/lib/getAllPosts";

interface WorkProps {
  posts: Post[];
  showAllLink?: boolean;
}

const Work = ({ posts, showAllLink = false }: WorkProps) => (
  <section className="mb-16">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
      Projects
    </h2>
    <ul className="space-y-3">
      {posts.map(({ slug, meta }) => (
        <li key={slug}>
          <Link href={`/portfolio/${slug}`} className="group block">
            <span className="text-gray-900 dark:text-gray-100 underline underline-offset-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              {meta.title}
            </span>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
              {meta.subtitle}
            </p>
          </Link>
        </li>
      ))}
    </ul>
    {showAllLink && (
      <Link
        href="/portfolio"
        className="inline-block mt-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm"
      >
        All projects →
      </Link>
    )}
  </section>
);

export default Work;
