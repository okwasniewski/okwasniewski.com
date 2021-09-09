import Heading from 'src/components/Heading';
import Card from 'src/components/Card';
import { motion } from 'framer-motion';

const Work = ({ posts }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5 } },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Heading heading='Portfolio' subHeading='Moje ostatnie prace' />
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid gap-10 mb-20 gtc-auto'
      >
        {posts.map(({ slug, meta }) => (
          <Card
            key={slug}
            src={meta.featuredImage}
            href={`/portfolio/${slug}`}
            badge={meta.badge}
            description={meta.subtitle}
            title={meta.title}
            variants={item}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Work;
