import type { PostMeta } from 'src/lib/getAllPosts';
import BlogHeader from 'src/components/BlogHeader';
import MainTemplate from './MainTemplate';

interface BlogLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

const BlogLayout = ({
  meta: { title, subtitle, badges, date, primaryAction },
  children,
}: BlogLayoutProps) => (
  <MainTemplate title={title} description={subtitle}>
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

export default BlogLayout;
