import { motion } from 'framer-motion';

interface HeadingProps {
  heading: string;
  subHeading: string;
  white?: boolean;
}

const Heading = ({ heading, subHeading, white = false }: HeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={`mb-4 ${white ? 'text-white' : 'text-gray-900'}`}
    >
      <h2 className='text-2xl font-bold'>{heading}</h2>
      <p>{subHeading}</p>
    </motion.div>
  );
};

export default Heading;
