import Heading from "src/components/Heading";
import Card from "src/components/Card";
import { itemVariants, containerVariants } from "src/lib/animations";
import { motion } from "framer-motion";
import { useIntersectionRef } from "src/lib/useIntersectionRef";

const Blog = ({ posts }) => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <>
      <Heading heading="Blog" subHeading="My latest posts" />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? "show" : "hidden"}
        className="grid gap-10 mb-20 gtc-auto"
      >
        {posts.map(({ slug, meta }) => (
          <Card
            key={slug}
            src={meta.featuredImage}
            href={`/blog/${slug}`}
            badge={meta.badge}
            description={meta.subtitle}
            title={meta.title}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Blog;
