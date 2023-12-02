import MainTemplate from 'src/templates/MainTemplate';
import { getPosts } from 'src/lib/getAllPosts';
import Blog from 'src/components/Blog';
import { InferGetStaticPropsType } from 'next';

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainTemplate title="Blog" description="My latest posts">
      <div className="mt-10">
        <Blog posts={posts} />
      </div>
    </MainTemplate>
  );
}

export async function getStaticProps() {
  const posts = await getPosts({ directory: 'blog', limit: -1 });

  return {
    props: {
      posts: posts.sort(
        (a, b) => Number(new Date(b.meta.date)) - Number(new Date(a.meta.date)),
      ),
    },
  };
}
