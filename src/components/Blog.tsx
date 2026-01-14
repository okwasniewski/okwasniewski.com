"use client";

import Heading from "@/components/Heading";
import Card from "@/components/Card";
import { itemVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { useIntersectionRef } from "@/lib/useIntersectionRef";
import { Post } from "@/lib/getAllPosts";

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <>
      <Heading heading="Blog" subHeading="My latest posts" />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? "show" : "hidden"}
        className="flex flex-col gap-5"
      >
        {posts.map(({ slug, meta }) => (
          <Card
            key={slug}
            src={meta.featuredImage}
            href={`/blog/${slug}`}
            badges={meta.badges}
            description={meta.subtitle}
            title={meta.title}
            variants={itemVariants}
            compact
          />
        ))}
      </motion.div>
    </>
  );
};

export default Blog;
