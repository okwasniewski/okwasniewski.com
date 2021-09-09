import { motion, Variants } from 'framer-motion';
import { IconType } from 'react-icons';

interface IconProps {
  Element: IconType;
  text: string;
  variants?: Variants
}
const Icon = ({ Element, text, variants }: IconProps) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      variants={variants}
      className='flex flex-col items-center justify-center mt-6 text-white cursor-move'
    >
      <Element className='w-16 h-16 mb-4' />
      <p>{text}</p>
    </motion.div>
  );
};

export default Icon;
