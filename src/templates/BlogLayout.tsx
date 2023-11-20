import type { PostMeta } from 'src/lib/getAllPosts';
import BlogHeader from 'src/components/BlogHeader';
import Head from 'next/head';
import MainTemplate from './MainTemplate';

interface BlogLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

const BlogLayout = ({
  meta: { title, subtitle, badges, date, primaryAction },
  children,
}: BlogLayoutProps) => {
  const metaImageParams = new URLSearchParams({
    title,
    subtitle,
    date,
    author: 'Oskar Kwaśniewski',
  }).toString();

  return (
    <MainTemplate title={title} description={subtitle}>
      <Head>
        <meta
          property="og:image"
          content={`https://oskarkwasniewski.dev/api/og?${metaImageParams}`}
          key="ogimage"
        />
        <meta
          name="twitter:image"
          content={`https://oskarkwasniewski.dev/api/og?${metaImageParams}`}
        />
      </Head>
      <BlogHeader
        title={title}
        subtitle={subtitle}
        badges={badges}
        date={date}
        primaryAction={primaryAction}
      />
      <div className="mx-auto prose dark:prose-invert lg:prose-lg">
        {children}
      </div>
    </MainTemplate>
  );
};

export default BlogLayout;
