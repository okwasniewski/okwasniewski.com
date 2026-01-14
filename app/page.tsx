import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { getPosts } from "@/lib/getAllPosts";

export default async function HomePage() {
  const posts = await getPosts({ directory: "portfolio", limit: 4 });

  return (
    <>
      <Hero />
      <Work posts={posts} />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
