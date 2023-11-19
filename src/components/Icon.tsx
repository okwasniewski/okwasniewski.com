import { motion, Variants } from 'framer-motion';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { IconType } from 'react-icons';

interface IconProps {
  Element: IconType;
  text: string;
  variants?: Variants;
}
const Icon = ({ Element, text, variants }: IconProps) => {
  const [dragged, setDragged] = useState(false);

  const ToastComponent = useMemo(
    () => (
      <span className="flex items-center justify-center">
        <Element className="w-8 h-8 mr-4" /> {text}
      </span>
    ),
    [Element, text],
  );

  return (
    <motion.div
      drag
      onDragEnd={() => {
        if (!dragged) {
          toast(ToastComponent);
          setDragged(true);
        }
      }}
      dragConstraints={{
        top: -20,
        left: -20,
        right: 20,
        bottom: 20,
      }}
      variants={variants}
      style={{ width: 'fit-content' }}
      className="flex flex-col items-center justify-center mt-6 text-gray-800 dark:text-gray-200 cursor-move"
    >
      <Element className="w-16 h-16 mb-4" />
      <p>{text}</p>
    </motion.div>
  );
};

export default Icon;
