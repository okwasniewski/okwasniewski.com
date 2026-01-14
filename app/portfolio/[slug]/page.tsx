import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/BlogHeader";
import { getPostSlugs, getPostBySlug, type PostMeta } from "@/lib/getAllPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs({ directory: "portfolio" });
  return slugs.map((slug) => ({ slug: slug.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = await getPostBySlug("portfolio", slug);
    return {
      title: meta.title,
      description: meta.subtitle,
      openGraph: {
        title: meta.title,
        description: meta.subtitle,
      },
    };
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function PortfolioPostPage({ params }: Props) {
  const { slug } = await params;

  let Content: React.ComponentType;
  let meta: PostMeta;

  try {
    const post = await getPostBySlug("portfolio", slug);
    Content = post.default;
    meta = post.meta;
  } catch {
    notFound();
  }

  return (
    <>
      <BlogHeader
        title={meta.title || ""}
        subtitle={meta.subtitle || ""}
        badges={meta.badges || []}
        date={meta.date}
        primaryAction={meta.primaryAction}
      />
      <div className="mx-auto prose dark:prose-invert lg:prose-lg font-sans">
        <Content />
      </div>
    </>
  );
}
