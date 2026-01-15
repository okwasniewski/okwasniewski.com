import Link from "next/link";
import { PostMeta } from "@/lib/getAllPosts";

interface PostCardProps {
  meta: PostMeta;
  href: string;
  compact?: boolean;
}

export function PostCard({ meta, href, compact = false }: PostCardProps) {
  return (
    <Link href={href} className="block group">
      <article
        className={`${compact ? "py-3" : "py-4"} border-b border-gray-200 dark:border-gray-800 last:border-b-0`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {meta.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {meta.subtitle}
            </p>
          </div>
          {meta.date && (
            <span className="text-sm text-gray-400 dark:text-gray-500 shrink-0">
              {meta.date}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
