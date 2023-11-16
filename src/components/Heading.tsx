import { motion } from "framer-motion";

interface HeadingProps {
  heading: string;
  subHeading: string;
  white?: boolean;
}

const Heading = ({ heading, subHeading }: HeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className={`mb-4 text-gray-900 dark:text-gray-200`}
    >
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className={`text-md text-gray-500 dark:text-gray-50/60`}>
        {subHeading}
      </p>
    </motion.div>
  );
};

export default Heading;
