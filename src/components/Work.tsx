import Link from "next/link";
import { Post } from "@/lib/getAllPosts";
import { FiArrowRight } from "react-icons/fi";

interface WorkProps {
  posts: Post[];
  showAllLink?: boolean;
}

const Work = ({ posts, showAllLink = false }: WorkProps) => (
  <section className="mb-16">
    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
      Projects
    </h2>
    <div>
      {posts.map(({ slug, meta }) => (
        <Link key={slug} href={`/portfolio/${slug}`} className="block group">
          <article className="py-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {meta.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {meta.subtitle}
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
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
