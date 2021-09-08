import MainTemplate from 'src/templates/MainTemplate';
import { getPosts } from 'src/lib/getAllPosts';
import Work from 'src/components/Work';

export default function IndexPage({ posts }) {
  return (
    <MainTemplate title='Portfolio' description="Moje ostatnie realizacje dla klientów">
      <div className='mt-10'>
        <Work posts={posts} />
      </div>
    </MainTemplate>
  );
}

export async function getStaticProps() {
  const posts = getPosts(20);
  return {
    props: {
      posts,
    },
  };
}
