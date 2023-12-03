import Heading from 'src/components/Heading';
import Card from 'src/components/Card';
import { itemVariants, containerVariants } from 'src/lib/animations';
import { motion } from 'framer-motion';
import { useIntersectionRef } from 'src/lib/useIntersectionRef';
import { Post } from 'src/lib/getAllPosts';

interface WorkProps {
  posts: Post[];
}

const Work = ({ posts }: WorkProps) => {
  const [sectionRef, intersection] = useIntersectionRef();
  return (
    <>
      <Heading heading="Portfolio" subHeading="My latest projects" />
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={intersection?.isIntersecting ? 'show' : 'hidden'}
        className="grid gap-10 mb-20 gtc-auto"
      >
        {posts.map(({ slug, meta }) => (
          <Card
            key={slug}
            src={meta.featuredImage}
            href={`/portfolio/${slug}`}
            badges={meta.badges}
            description={meta.subtitle}
            title={meta.title}
            loadImageWithPriority
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Work;
