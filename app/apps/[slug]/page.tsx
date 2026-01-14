import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlug, type PostMeta } from "@/lib/getAllPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs({ directory: "apps" });
  return slugs.map((slug) => ({ slug: slug.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = await getPostBySlug("apps", slug);
    return {
      title: meta.title,
      description: meta.subtitle,
    };
  } catch {
    return { title: "Page Not Found" };
  }
}

export default async function AppsPage({ params }: Props) {
  const { slug } = await params;

  let Content: React.ComponentType;
  let meta: PostMeta;

  try {
    const post = await getPostBySlug("apps", slug);
    Content = post.default;
    meta = post.meta;
  } catch {
    notFound();
  }

  return (
    <div className="mt-10">
      <h1 className="mb-4 text-3xl font-semibold dark:text-gray-200">
        {meta.title}
      </h1>
      <div className="mx-auto prose dark:prose-invert lg:prose-lg font-sans">
        <Content />
      </div>
    </div>
  );
}
