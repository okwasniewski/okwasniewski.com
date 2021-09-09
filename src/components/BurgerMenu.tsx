import { motion } from 'framer-motion';
import MenuItem from 'src/components/MenuItem';

const BurgerMenu = ({ isOpen }) => {
  const variants = {
    open: { x: 0, transition: { type: 'linear' } },
    closed: { x: '100%', transition: { type: 'linear' } },
  };
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      id='burger_menu'
      className='fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-screen h-screen bg-white md:hidden'
    >
      <MenuItem href='/#about' text='O mnie' />
      <MenuItem href='/portfolio' text='Portfolio' />
      <MenuItem href='/contact' text='Kontakt' />
    </motion.div>
  );
};
export default BurgerMenu;
