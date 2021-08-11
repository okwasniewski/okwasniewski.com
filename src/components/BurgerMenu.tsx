import MenuItem from 'src/components/MenuItem';

const BurgerMenu = () => {
  return (
    <div
      id='burger_menu'
      className='fixed top-0 left-0 z-10 flex flex-col items-center justify-center hidden w-screen h-screen bg-white md:hidden'
    >
      <MenuItem href='/#about' text='O mnie' />
      <MenuItem href='/portfolio' text='Portfolio' />
      <MenuItem href='/contact' text='Kontakt' />
    </div>
  );
};
export default BurgerMenu;
