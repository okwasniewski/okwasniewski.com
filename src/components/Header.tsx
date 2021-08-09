import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import MenuItem from './MenuItem';
import { FaBars } from 'react-icons/fa';
const Header = () => {
  const HandleAddClass = () => {
    document.querySelector('#burger_menu').classList.toggle('hidden');
  };
  return (
    <>
      <header className='w-full px-4 py-8 bg-white shadow-sm'>
        <div className='container flex items-center justify-between mx-auto'>
          <Link href='/'>
            <p className='z-50 text-xl font-bold cursor-pointer'>
              okwasniewski
            </p>
          </Link>
          <div className='hidden md:block'>
            <MenuItem href='/#about' text='O mnie' />
            <MenuItem href='/portfolio' text='Portfolio' />
            <MenuItem href='/#contact' text='Kontakt' />
          </div>
          <FaBars
            onClick={HandleAddClass}
            className='z-50 w-8 h-8 cursor-pointer md:hidden'
          />
        </div>
      </header>
      <BurgerMenu />
    </>
  );
};

export default Header;
