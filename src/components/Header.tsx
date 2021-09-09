import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import MenuItem from './MenuItem';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='w-full px-4 py-8 bg-white shadow-sm'>
        <div className='container flex items-center justify-between mx-auto'>
          <Link href='/'>
            <p className='z-50 text-xl font-bold cursor-pointer'>
              okwasniewski
            </p>
          </Link>
          <nav className='hidden md:block'>
            <MenuItem href='/#about' text='O mnie' />
            <MenuItem href='/portfolio' text='Portfolio' />
            <MenuItem href='/contact' text='Kontakt' />
          </nav>
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className='z-50 w-8 h-8 cursor-pointer md:hidden'
          />
        </div>
      </header>
      <BurgerMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
