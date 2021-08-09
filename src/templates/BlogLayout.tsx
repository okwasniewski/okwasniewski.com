import MainTemplate from './MainTemplate';

interface BlogLayoutProps {
  meta: {
    title: string;
    subtitle: string;
    featuredImage: string;
  };
  children: React.ReactNode;
}

const BlogLayout = ({
  meta: { title, subtitle, featuredImage },
  children,
}: BlogLayoutProps) => {
  return (
    <MainTemplate title={title}>
      <div className='p-4 md:p-0 bg-gray-50 full-width'>
        <div className='container pb-10 mx-auto mb-8 pt-14'>
          <h1 className='mb-1 text-3xl font-semibold '>{title}</h1>
          <p className='mb-4'>{subtitle}</p>
        </div>
      </div>
      <div className='mx-auto prose'>{children}</div>
    </MainTemplate>
  );
};

export default BlogLayout;
