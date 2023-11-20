import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { useWindowScroll } from 'react-use';
import MenuItem from './MenuItem';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const { y } = useWindowScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`w-full px-4 py-5 fixed top-0 z-50  ${
          y > 100
            ? 'bg-white/30 dark:bg-black/20 supports-backdrop-blur:bg-white/60 backdrop-blur shadow-sm dark:shadow-none'
            : ''
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <p className="z-50 text-xl font-bold text-gray-800 cursor-pointer dark:text-gray-200">
              okwasniewski
            </p>
          </Link>
          <nav className="hidden md:block">
            <MenuItem href="/#about" text="About me" />
            <MenuItem href="/portfolio" text="Portfolio" />
            <MenuItem href="/blog" text="Blog" />
            <MenuItem href="/contact" text="Contact" />
          </nav>
          <FaBars
            onClick={() => setIsOpen((prev) => !prev)}
            className="z-50 w-8 h-8 text-blue-300 cursor-pointer dark:text-blue-800 md:hidden"
          />
        </div>
      </header>
      <BurgerMenu isOpen={isOpen} />
      <div className="h-10 mb-8" />
    </>
  );
};

export default Header;
