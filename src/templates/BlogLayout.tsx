import type { PostMeta } from 'src/lib/getAllPosts';
import BlogHeader from 'src/components/BlogHeader';
import Head from 'next/head';
import { useMemo } from 'react';
import MainTemplate from './MainTemplate';

interface BlogLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

const BlogLayout = ({
  meta: { title, subtitle, badges, date, primaryAction },
  children,
}: BlogLayoutProps) => {
  const ogImageURL = useMemo(() => {
    const metaImageParams = new URLSearchParams({
      title,
      date: date || '',
    }).toString();
    return `https://oskarkwasniewski.dev/api/og?${metaImageParams}`;
  }, [date, title]);

  return (
    <MainTemplate title={title} description={subtitle}>
      <Head>
        <meta property="og:image" content={ogImageURL} key="ogimage" />
        <meta name="twitter:image" content={ogImageURL} />
      </Head>
      <BlogHeader
        title={title}
        subtitle={subtitle}
        badges={badges}
        date={date}
        primaryAction={primaryAction}
      />
      <div className="mx-auto prose dark:prose-invert lg:prose-lg font-sans">
        {children}
      </div>
    </MainTemplate>
  );
};

export default BlogLayout;
