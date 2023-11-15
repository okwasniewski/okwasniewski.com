import MainTemplate from "src/templates/MainTemplate";
import { getPosts } from "src/lib/getAllPosts";
import Blog from "src/components/Blog";

export default function IndexPage({ posts }) {
  return (
    <MainTemplate title="Blog" description="My latest posts">
      <div className="mt-10">
        <Blog posts={posts} />
      </div>
    </MainTemplate>
  );
}

export async function getStaticProps() {
  const posts = await getPosts({ directory: "blog", limit: -1 });

  return {
    props: {
      posts,
    },
  };
}
