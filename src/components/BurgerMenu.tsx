import { motion } from 'framer-motion';
import MenuItem from 'src/components/MenuItem';
import { MENU_ITEMS } from 'src/constants/MenuItems';

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
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.href} {...item} />
      ))}
    </motion.div>
  );
};

export default BurgerMenu;
