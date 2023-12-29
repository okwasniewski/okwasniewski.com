import { motion } from 'framer-motion';
import MenuItem from 'src/components/MenuItem';

interface BurgerMenuProps {
  isOpen: boolean;
}

const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  const variants = {
    open: { x: 0, transition: { type: 'linear' } },
    closed: { x: '100%', transition: { type: 'linear' } },
  };
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={variants}
      id="burger_menu"
      className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-screen h-screen bg-white dark:bg-black md:hidden"
    >
      <MenuItem href="/#about" text="About me" />
      <MenuItem href="/portfolio" text="Portfolio" />
      <MenuItem href="/blog" text="Blog" />
      <MenuItem href="/rss.xml" text="RSS" />
      <MenuItem href="/contact" text="Contact" />
    </motion.div>
  );
};

export default BurgerMenu;
