import MainTemplate from "src/templates/MainTemplate";
import Skills from "src/components/Skills";
import Hero from "src/components/Hero";
import Work from "src/components/Work";
import About from "src/components/About";
import { getPosts } from "src/lib/getAllPosts";
import Contact from "src/components/Contact";

export default function Home({ posts }) {
  return (
    <MainTemplate title='Strona główna'>
      <Hero />
      <Work posts={posts} />
      <About />
      <Skills />
      <Contact />
    </MainTemplate>
  );
}
export async function getStaticProps() {
  const posts = getPosts(3);
  return {
    props: {
      posts,
    },
  };
}
